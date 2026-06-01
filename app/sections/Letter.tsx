"use client";

import { useState } from "react";

export default function Letter() {
  const [opened, setOpened] = useState(false);

  return (
    <section
      id="letter"
      className="min-h-screen bg-pink-50 flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-4xl w-full">

        {!opened ? (
          <div className="text-center">
<div className="text-8xl mb-8">
  💌
</div>
            <button
              onClick={() => setOpened(true)}
              className="
                mx-auto
                block
                bg-pink-500
                hover:bg-pink-600
                text-white
                px-12
                py-8
                rounded-3xl
                shadow-xl
                text-3xl
                transition
                hover:scale-105
              "
            >
              💌 Open Letter
            </button>

            <p className="mt-8 text-gray-500">
              There's something I wanted to tell you.
            </p>

          </div>
        ) : (

          <div
            className="
              bg-white
              p-12
              rounded-3xl
              shadow-xl
              animate-pulse
            "
          >

            <h2 className="text-5xl text-pink-600 mb-10">
              Dear Butterfly 🦋
            </h2>

            <p className="leading-10">
              This wasn't supposed to be a website.
            </p>

            <p className="leading-10 mt-6">
              It started as a collection of things
              I remembered.
            </p>

            <p className="leading-10 mt-6">
              Then it became a collection of reasons
              why seeing your name on my screen
              makes me smile.
            </p>

            <p className="leading-10 mt-6">
              Somewhere between the cats,
              the coffee,
              the rain,
              the music,
              and all the little things...
            </p>

            <p className="leading-10 mt-6">
              I realized that paying attention to you
              became one of my favorite things to do.
            </p>

            <p className="leading-10 mt-6">
              Thank you for being someone worth
              remembering.
            </p>

            <p className="leading-10 mt-10">
              — Me 🌷
            </p>

          </div>
        )}

      </div>
    </section>
  );
}