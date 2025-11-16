const BrandHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20 px-4 md:px-8 lg:px-12 py-2 md:py-3">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="font-serif text-2xl md:text-3xl font-light text-amber-50" style={{ textShadow: '0 2px 6px rgba(0,0,0,0.4), 0 0 15px rgba(251,191,36,0.3), 0 0 30px rgba(251,191,36,0.15)' }}>
          Mirran
        </h2>
        <p className="font-serif text-xs md:text-sm font-normal text-white/60 tracking-widest uppercase">
          Digital Gallery
        </p>
      </div>
    </header>
  );
};

export default BrandHeader;
