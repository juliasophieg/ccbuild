import NextAuth, { NextAuthOptions, Session } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/user";
import bcrypt from "bcryptjs";

interface CustomUser {
  id: string;
  name?: string | null;
  email?: string | null;
}
interface CustomSession extends Session {
  user: CustomUser;
}

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Invalid credentials");
        }
        const user = await User.findOne({ email: credentials.email });

        if (
          user &&
          (await bcrypt.compare(credentials.password, user.password))
        ) {
          return { id: user._id, name: user.name, email: user.email };
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/login",
    //signOut: "/logout",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token?.id) {
        session.user = {
          ...session.user,
          id: token.id,
        } as CustomUser;
      }
      return session as CustomSession;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
