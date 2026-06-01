"use client";

import { useState } from "react";

export default function Question() {
  const [answer, setAnswer] = useState("");

  return (
    <section
      id="question"
      className="min-h-screen bg-gradient-to-b from-pink-50 to-white flex items-center justify-center px-6"
    >
      <div className="text-center max-w-4xl">

        <p className="text-xl text-gray-500 mb-6">
          Before I ask you anything...
        </p>

        <h2 className="text-6xl text-pink-600 mb-12">
          Will You Be My Girlfriend? 🌷
        </h2>

        <div className="flex justify-center gap-6">

          <button
            onClick={() => setAnswer("yes")}
            className="bg-pink-500 text-white px-8 py-4 rounded-full"
          >
            Yes 🩷
          </button>

          <button
            onClick={() => setAnswer("think")}
            className="bg-white px-8 py-4 rounded-full shadow"
          >
            Let Me Think 🌷
          </button>

        </div>

        {answer === "yes" && (
          <p className="mt-10 text-2xl text-pink-600">
            You just made me the happiest person alive. 🦋
          </p>
        )}

        {answer === "think" && (
          <p className="mt-10 text-2xl text-pink-600">
            That's okay. Good things are worth waiting for. 🌷
          </p>
        )}

      </div>
    </section>
  );
}