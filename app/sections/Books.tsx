"use client";

import { useState } from "react";

export default function Books() {
  const [book, setBook] = useState("");

  return (
    <section
      id="books"
      className="min-h-screen bg-[#fdf8f2] px-6 py-20"
    >
      <h2 className="text-6xl text-center text-pink-600 mb-16">
        📚 Books & Stories
      </h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">

        <button
          onClick={() => setBook("Poem1")}
          className="bg-white p-8 rounded-3xl shadow"
        >
          📖 Poem One
        </button>

        <button
          onClick={() => setBook("Poem2")}
          className="bg-white p-8 rounded-3xl shadow"
        >
          🌷 Poem Two
        </button>

        <button
          onClick={() => setBook("Poem3")}
          className="bg-white p-8 rounded-3xl shadow"
        >
          🦋 Poem Three
        </button>

        <button
          onClick={() => setBook("Poem4")}
          className="bg-white p-8 rounded-3xl shadow"
        >
          🦋 Poem Four
        </button>

        <button
          onClick={() => setBook("Poem5")}
          className="bg-white p-8 rounded-3xl shadow"
        >
          🦋 Poem Five
        </button>

      </div>

      <div className="max-w-4xl mx-auto mt-12">

        {book === "Poem1" && (
          <div className="bg-white p-10 rounded-3xl shadow">
            <h3 className="text-4xl mb-6">
              "Sonnet 43" by Elizabeth Barrett Browning
            </h3>

            <p className="leading-8">
              "How do I love thee? Let me count the ways."
            </p>
          </div>
        )}

        {book === "Poem2" && (
          <div className="bg-white p-10 rounded-3xl shadow">
            <h3 className="text-4xl mb-6">
              "Twelth Night" by William Shakespeare
            </h3>

            <p className="leading-8">
              "Love sought is good, but given unsought is better."
            </p>
          </div>
        )}

        {book === "Poem3" && (
          <div className="bg-white p-10 rounded-3xl shadow">
            <h3 className="text-4xl mb-6">
              "Romeo and Juliet" by William Shakespeare
            </h3>

            <p className="leading-8">
              "My bounty is as boundless as the sea, My love as deep; the more I give to thee, The more I have, for both are infinite."
            </p>
          </div>
        )}

        {book === "Poem4" && (
          <div className="bg-white p-10 rounded-3xl shadow">
            <h3 className="text-4xl mb-6">
              "Persuasion" by Jane Austen
            </h3>

            <p className="leading-8">
              "I am half agony, half hope... I have loved none but you."
            </p>
          </div>
        )}

        {book === "Poem5" && (
          <div className="bg-white p-10 rounded-3xl shadow">
            <h3 className="text-4xl mb-6">
              "I wandered lonely as a cloud" by William Wordsworth
            </h3>

            <p className="leading-8">
              "I gazed—and gazed—but little thought What wealth the show to me had brought."
            </p>
          </div>
        )}

      </div>

    </section>
  );
}