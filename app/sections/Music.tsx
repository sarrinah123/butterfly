"use client";

import { useState } from "react";

export default function Music() {
  const [song, setSong] = useState("");

  return (
    <section
      id="music"
      className="min-h-screen bg-white px-6 py-20"
    >
      <h2 className="text-6xl text-center text-pink-600 mb-16">
        🎵 Songs That Remind Me Of You
      </h2>

      <div className="max-w-4xl mx-auto space-y-6">

        <button
          onClick={() => setSong("yellow")}
          className="w-full bg-pink-50 p-8 rounded-3xl shadow text-left"
        >
          Yellow — Coldplay
        </button>

        <button
          onClick={() => setSong("night")}
          className="w-full bg-pink-50 p-8 rounded-3xl shadow text-left"
        >
          The Night We Met — Lord Huron
        </button>

        <button
          onClick={() => setSong("until")}
          className="w-full bg-pink-50 p-8 rounded-3xl shadow text-left"
        >
          Until I Found You — Stephen Sanchez
        </button>

      </div>

      <div className="max-w-4xl mx-auto mt-12">

        {song === "yellow" && (
          <div className="bg-pink-50 p-10 rounded-3xl shadow">

            <h3 className="text-4xl mb-4">
              Yellow
            </h3>

            <p className="italic text-pink-600 text-xl">
              "Look at the stars, look how they shine for you."
            </p>

            <p className="mt-8">
              This reminds me of you because you have
              a way of making ordinary things feel
              brighter.
            </p>

            <a
              href="https://genius.com/Coldplay-yellow-lyrics"
              target="_blank"
              className="inline-block mt-6 text-pink-600"
            >
              Read Full Lyrics →
            </a>

          </div>
        )}

        {song === "night" && (
          <div className="bg-pink-50 p-10 rounded-3xl shadow">

            <h3 className="text-4xl mb-4">
              The Night We Met
            </h3>

            <p className="italic text-pink-600 text-xl">
              "I had all and then most of you..."
            </p>

            <p className="mt-8">
              Some people leave a mark on your life
              simply by existing in it.
            </p>

            <a
              href="https://genius.com/Lord-huron-the-night-we-met-lyrics"
              target="_blank"
              className="inline-block mt-6 text-pink-600"
            >
              Read Full Lyrics →
            </a>

          </div>
        )}

        {song === "until" && (
          <div className="bg-pink-50 p-10 rounded-3xl shadow">

            <h3 className="text-4xl mb-4">
              Until I Found You
            </h3>

            <p className="italic text-pink-600 text-xl">
              "I would never fall in love again..."
            </p>

            <p className="mt-8">
              Because some people change what
              love looks like.
            </p>

            <a
              href="https://genius.com/Stephen-sanchez-until-i-found-you-lyrics"
              target="_blank"
              className="inline-block mt-6 text-pink-600"
            >
              Read Full Lyrics →
            </a>

          </div>
        )}

      </div>

    </section>
  );
}