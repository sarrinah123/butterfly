import Image from "next/image";
export default function Tulips() {
  return (
    <section
      id="tulips"
      className="min-h-screen bg-gradient-to-b from-pink-50 to-white px-6 py-20"
    >
      <h2 className="text-6xl text-center text-pink-600 mb-16">
        🌷 A Field Of Tulips
      </h2>
      <Image
  src="/images/tulips.jpg"
  alt="Tulips"
  width={1200}
  height={800}
  className="
    rounded-3xl
    shadow-xl
    mb-12
    mx-auto
  "
/>

      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-12">

        <p className="text-xl leading-10">
          Roses are beautiful.
        </p>

        <p className="text-xl leading-10 mt-6">
          But every time flowers came up,
          tulips seemed to appear.
        </p>

        <p className="text-xl leading-10 mt-6">
          So if I had to leave flowers somewhere
          on this website...
        </p>

        <p className="text-3xl text-center mt-12">
          🌷 🌷 🌷 🌷 🌷
        </p>

        <p className="text-center mt-8 text-pink-500">
          they'd be tulips.
        </p>

      </div>
    </section>
  );
}