import { useAuth } from "@/hooks/useAuth";
import Link from "next/link";
import React from "react";
import { Typography, IconButton, InputBase, Box } from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";

function Navbar() {
  const { session, isAuthenticated } = useAuth();

  if (!isAuthenticated || !session) {
    console.log("User not authenticated");
  } else {
    console.log("User authenticated:", session.user);
  }

  return (
    <div className="flex w-screen flex-col items-center overflow-clip bg-white">
      <div className="flex h-24 w-full max-w-[1280px] flex-row items-center justify-between px-4">
        <Link href="/">
          <img
            src="/logo.png"
            alt="Logo"
            className="mr-4 h-auto w-[180px] align-middle"
          />
        </Link>
        <div className="flex flex-row items-center gap-8">
          <a href="#" className="cursor-not-allowed text-xs font-semibold ">
            CCBUILD
          </a>
          <a href="#" className="cursor-not-allowed text-xs font-semibold ">
            TJÄNSTER
          </a>
          <a href="#" className="cursor-not-allowed text-xs font-semibold ">
            MARKNADSPLATSEN ▾
          </a>
          <a href="#" className="cursor-not-allowed text-xs font-semibold ">
            PRODUKTBANKEN ▾
          </a>
          <div className="flex flex-row items-center gap-3">
            {isAuthenticated ? (
              <a
                href="/"
                className="rounded-2xl bg-gray-100 px-4 py-2 text-xs font-semibold hover:bg-gray-200 "
              >
                {session?.user?.name}
              </a>
            ) : (
              <a
                href="/login"
                className="rounded-2xl bg-gray-100 px-4 py-2 text-xs font-semibold hover:bg-gray-200 "
              >
                LOGGA IN
              </a>
            )}

            <a
              href="#"
              className="cursor-not-allowed rounded-2xl bg-gray-100  px-4  py-2  text-xs font-semibold hover:bg-gray-200"
            >
              SV ▾
            </a>
          </div>
        </div>
      </div>
      <div className="bg-custom-blue h-14 w-[100vw] overflow-clip px-4">
        <div className="mx-auto flex h-full max-w-screen-xl flex-row items-center justify-between">
          <div className="flex flex-row items-center">
            {/* Navigation Links */}
            <Box sx={{ display: "flex", gap: 4 }}>
              <Typography
                variant="body1"
                color="inherit"
                style={{ cursor: "pointer", color: "#fff" }}
              >
                Översikt
              </Typography>
              <Typography
                variant="body1"
                color="inherit"
                style={{ cursor: "pointer", color: "#fff" }}
              >
                Projekt
              </Typography>
              <Typography
                variant="body1"
                color="inherit"
                style={{ cursor: "pointer", color: "#fff" }}
              >
                Produkter
              </Typography>
              <Typography
                variant="body1"
                color="inherit"
                style={{ cursor: "pointer", color: "#fff" }}
              >
                Efterlysningar
              </Typography>
              <Typography
                variant="body1"
                color="inherit"
                style={{ cursor: "pointer", color: "#fff" }}
              >
                Märkning
              </Typography>
              <Typography
                variant="body1"
                color="inherit"
                style={{ cursor: "pointer", color: "#fff" }}
              >
                Organisationsadmin
              </Typography>
              <Typography
                variant="body1"
                color="inherit"
                style={{ cursor: "pointer", color: "#fff" }}
              >
                Värdeanalys
              </Typography>
              <Typography
                variant="body1"
                color="inherit"
                style={{ cursor: "pointer", color: "#fff" }}
              >
                Hjälp
              </Typography>
            </Box>
          </div>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <InputBase
              placeholder="Label"
              inputProps={{ "aria-label": "search" }}
              style={{
                color: "#ffffff",
                padding: "6px 8px",
                border: "1px solid white",
                borderRadius: "4px",
                marginRight: "8px",
              }}
            />
            <IconButton aria-label="search" style={{ color: "#ffffff" }}>
              <SearchIcon />
            </IconButton>
          </Box>
        </div>
      </div>
    </div>
  );
}

export { Navbar };
