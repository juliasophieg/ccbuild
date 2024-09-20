function Navbar() {
  return (
    <div className="flex flex-row w-screen justify-between	bg-orange-300">
      <div className="logo w-1/4 bg-pink-400">LOGO</div>
      <div className="flex flex-row gap-8 bg-pink-200 ">
        <a href="/" className="font-semibold text-xs cursor-not-allowed">
          CCBUILD
        </a>
        <a href="/" className="font-semibold text-xs cursor-not-allowed">
          TJÄNSTER
        </a>
        <a href="/" className="font-semibold text-xs cursor-not-allowed">
          MARKNADSPLATSEN
        </a>
        <a href="/" className="font-semibold text-xs cursor-not-allowed">
          PRODUKTBANKEN
        </a>
        <a href="/login" className="font-semibold text-xs">
          LOGGA IN
        </a>
        <a href="/" className="font-semibold text-xs cursor-not-allowed">
          SV
        </a>
      </div>
    </div>
  );
}

export { Navbar };
