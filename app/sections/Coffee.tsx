"use client";

export default function Coffee() {
  return (
    <section
      id="coffee"
      className="min-h-screen bg-[#fffaf5] px-6 py-20"
    >
      <h2 className="text-6xl text-center text-pink-600 mb-16">
        ☕ Coffee Break
      </h2>

      <div className="max-w-4xl mx-auto bg-white rounded-3xl p-12 shadow">

        <h3 className="text-4xl mb-6">
          A Tiny Thing I Remember
        </h3>

        <p className="text-lg leading-8">
          You once said:
        </p>

        <p className="italic text-pink-600 text-2xl mt-6">
<span
  onClick={() =>
    alert(
      "I remembered this because it made me smile."
    )
  }
  className="cursor-pointer"
>
  "The ice brings flavor."
</span>
        </p>

        <p className="mt-8 text-lg leading-8">
          Most people would forget something like that.
          <br />
          I didn't.
        </p>

      </div>
    </section>
  );
}