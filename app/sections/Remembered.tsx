const items = [
  "🐱 Cats",
  "☕ Iced Coffee",
  "🌧 Rain",
  "🎵 Music",
  "📚 Books",
  "✍️ Writing",
  "🌷 Tulips",
  "🦋 Butterflies",
];

export default function Remembered() {
  return (
    <section
      id="remembered"
      className="min-h-screen px-6 py-24 bg-white"
    >
      <h2 className="text-6xl text-center text-pink-500 mb-4">
        Things I Remembered
      </h2>

      <p className="text-center text-gray-500 mb-16">
        Little things that make you, you.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">

        {items.map((item) => (
  <a
href={
  item.includes("Cats")
    ? "#cats"
    : item.includes("Music")
    ? "#music"
    : item.includes("Coffee")
    ? "#coffee"  
    : item.includes("Rain")
    ? "#rain"
    : item.includes("Tulips")
    ? "#tulips"
    : item.includes("Books")
    ? "#books"
    : item.includes("Writing")
    ? "#writing"
    : item.includes("Letter")
    ? "#letter"
    : item.includes("Question")
    ? "#question"
    : "#"
}
    key={item}
    className="
      bg-pink-50
      rounded-3xl
      p-10
      text-center
      shadow-md
      hover:shadow-xl
      transition
      cursor-pointer
      block
    "
  >
    {item}
  </a>
))}
      </div>
    </section>
  );
}