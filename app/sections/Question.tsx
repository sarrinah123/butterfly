"use client";

import { useState } from "react";

export default function Question() {
  const [step, setStep] = useState(1);
  const [answer, setAnswer] = useState("");

  return (
    <section
      id="question"
      className="min-h-screen bg-gradient-to-b from-pink-50 to-white flex items-center justify-center px-6"
    >
      <div className="text-center max-w-4xl">

        {step === 1 && (
          <>
            <p className="text-xl text-gray-500 mb-6">
              There's one last thing...
            </p>

            <h2 className="text-5xl text-pink-600 mb-10">
              Before I ask, let me tell you something.
            </h2>

            <button
              onClick={() => setStep(2)}
              className="bg-pink-500 text-white px-8 py-4 rounded-full hover:bg-pink-600"
            >
              Continue 🌷
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <h2 className="text-5xl text-pink-600 mb-8">
              🌷
            </h2>

            <p className="text-2xl leading-10 mb-10">
              I remembered the tulips.
            </p>

            <button
              onClick={() => setStep(3)}
              className="bg-pink-500 text-white px-8 py-4 rounded-full hover:bg-pink-600"
            >
              Continue 🦋
            </button>
          </>
        )}

        {step === 3 && (
          <>
            <h2 className="text-5xl mb-8">
              🐱
            </h2>

            <p className="text-2xl leading-10 mb-10">
              I remembered Batman, Kittu, and Sheru.
            </p>

            <button
              onClick={() => setStep(4)}
              className="bg-pink-500 text-white px-8 py-4 rounded-full hover:bg-pink-600"
            >
              Continue ☕
            </button>
          </>
        )}

        {step === 4 && (
          <>
            <h2 className="text-5xl mb-8">
              ☕
            </h2>

            <p className="text-2xl leading-10 mb-10">
              I remembered the coffee.
            </p>

            <p className="italic text-gray-500 mb-10">
              "The ice brings flavor."
            </p>

            <button
              onClick={() => setStep(5)}
              className="bg-pink-500 text-white px-8 py-4 rounded-full hover:bg-pink-600"
            >
              Continue 🌧
            </button>
          </>
        )}

        {step === 5 && (
          <>
            <h2 className="text-5xl mb-8">
              🌧
            </h2>

            <p className="text-2xl leading-10 mb-10">
              I remembered the rain.
            </p>

            <button
              onClick={() => setStep(6)}
              className="bg-pink-500 text-white px-8 py-4 rounded-full hover:bg-pink-600"
            >
              Continue 🎵
            </button>
          </>
        )}

        {step === 6 && (
          <>
            <p className="text-xl text-gray-500 mb-8">
              And somewhere between all those little things...
            </p>

            <div className="space-y-4 text-lg text-gray-700 mb-12">
              <p>I remembered your cats.</p>
              <p>I remembered your rain.</p>
              <p>I remembered your coffee.</p>
              <p>I remembered your songs.</p>
              <p>I remembered your tulips.</p>

              <p className="pt-6">
                And somewhere along the way...
              </p>

              <p className="text-3xl text-pink-600 font-semibold">
                I fell for you.
              </p>
            </div>

            <button
              onClick={() => setStep(7)}
              className="bg-pink-500 text-white px-8 py-4 rounded-full hover:bg-pink-600"
            >
              One Last Thing 💌
            </button>
          </>
        )}

        {step === 7 && (
          <>
            <h2 className="text-6xl text-pink-600 mb-12">
              Will You Be My Girlfriend? 🌷
            </h2>

            <div className="flex flex-wrap justify-center gap-6">

              <button
                onClick={() => {
                  setAnswer("yes");
                  window.open(
                    "https://ig.me/m/anonyme_shadow",
                    "_blank"
                  );
                }}
                className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-full shadow-lg"
              >
                Yes 🩷
              </button>

              <button
                onClick={() => {
                  setAnswer("think");
                  window.open(
                    "https://ig.me/m/anonyme_shadow",
                    "_blank"
                  );
                }}
                className="bg-white px-8 py-4 rounded-full shadow-lg"
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
          </>
        )}

      </div>
    </section>
  );
}