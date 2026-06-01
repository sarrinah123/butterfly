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
          onClick={() => setBook("chapter1")}
          className="bg-white p-8 rounded-3xl shadow"
        >
          📖 Chapter One
        </button>

        <button
          onClick={() => setBook("chapter2")}
          className="bg-white p-8 rounded-3xl shadow"
        >
          🌷 Chapter Two
        </button>

        <button
          onClick={() => setBook("chapter3")}
          className="bg-white p-8 rounded-3xl shadow"
        >
          🦋 Chapter Three
        </button>

      </div>

      <div className="max-w-4xl mx-auto mt-12">

        {book === "chapter1" && (
          <div className="bg-white p-10 rounded-3xl shadow">
            <h3 className="text-4xl mb-6">
              The Little Things
            </h3>

            <p className="leading-8">
              I learned that sometimes the smallest
              details tell you the most about a person.
            </p>
          </div>
        )}

        {book === "chapter2" && (
          <div className="bg-white p-10 rounded-3xl shadow">
            <h3 className="text-4xl mb-6">
              Rainy Conversations
            </h3>

            <p className="leading-8">
              Some conversations stay with you longer
              than you expect.
            </p>
          </div>
        )}

        {book === "chapter3" && (
          <div className="bg-white p-10 rounded-3xl shadow">
            <h3 className="text-4xl mb-6">
              Butterfly Pages
            </h3>

            <p className="leading-8">
              Some people make ordinary memories feel
              like chapters worth rereading.
            </p>
          </div>
        )}

      </div>

    </section>
  );
}