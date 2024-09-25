import Link from "next/link";

function Navbar() {
  return (
    <div className="flex flex-col items-center w-screen px-4 ">
      <div className="flex flex-row w-full max-w-[1280px] justify-between h-24 items-center">
        <Link href="/">
          <img
            src="logo.png"
            alt="Logo"
            className="h-auto w-[180px] align-middle mr-4"
          />
        </Link>
        <div className="flex flex-row items-center gap-8">
          <a href="/" className="font-semibold text-xs cursor-not-allowed ">
            CCBUILD
          </a>
          <a href="/" className="font-semibold text-xs cursor-not-allowed ">
            TJÄNSTER
          </a>
          <a href="/" className="font-semibold text-xs cursor-not-allowed ">
            MARKNADSPLATSEN ▾
          </a>
          <a href="/" className="font-semibold text-xs cursor-not-allowed ">
            PRODUKTBANKEN ▾
          </a>
          <div className="flex flex-row items-center gap-3">
            <a
              href="/login"
              className="font-semibold text-xs bg-gray-100 rounded-2xl py-2 px-4 "
            >
              LOGGA IN
            </a>
            <a
              href="/"
              className="font-semibold text-xs cursor-not-allowed  bg-gray-100 rounded-2xl py-2 px-4"
            >
              SV ▾
            </a>
          </div>
        </div>
      </div>
      <div className="bg-custom-blue w-screen h-14"></div>
    </div>
  );
}

export { Navbar };
