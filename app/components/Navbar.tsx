export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

        <h1 className="text-pink-600 font-bold text-xl">
          🦋 Butterfly
        </h1>

        <div className="hidden md:flex gap-6">
          <a href="#remembered">Memories</a>
          <a href="#cats">Cats</a>
          <a href="#music">Music</a>
          <a href="#coffee">Coffee</a>
          <a href="#rain">Rain</a>
          <a href="#books">Books</a>
          <a href="#question">🌷</a>
        </div>

      </div>
    </nav>
  );
}