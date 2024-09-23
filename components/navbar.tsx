function Navbar() {
  return (
    <div className="flex flex-row w-screen justify-between	bg-orange-300">
      <a href="/" className="logo w-1/4 bg-pink-400">
        LOGO
      </a>
      <div className="flex flex-row items-center gap-3 bg-pink-200 ">
        <a href="/" className="font-semibold text-xs cursor-not-allowed m-2">
          CCBUILD
        </a>
        <a href="/" className="font-semibold text-xs cursor-not-allowed m-2">
          TJÄNSTER
        </a>
        <a href="/" className="font-semibold text-xs cursor-not-allowed m-2">
          MARKNADSPLATSEN
        </a>
        <a href="/" className="font-semibold text-xs cursor-not-allowed m-2">
          PRODUKTBANKEN
        </a>
        <a
          href="/login"
          className="font-semibold text-xs bg-white rounded-2xl p-2 m-2"
        >
          LOGGA IN
        </a>
        <a
          href="/"
          className="font-semibold text-xs cursor-not-allowed  bg-white rounded-2xl p-2 m-2"
        >
          SV
        </a>
      </div>
    </div>
  );
}

export { Navbar };
