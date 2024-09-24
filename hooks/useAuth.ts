import { useSession } from "next-auth/react";

export const useAuth = () => {
  const { data: session, status } = useSession();

  const loading = status === "loading";
  const isAuthenticated = !!session;

  return { session, loading, isAuthenticated };
};
