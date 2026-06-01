"use client";

import Image from "next/image";
import { useState } from "react";

export default function Cats() {
  const [selectedCat, setSelectedCat] = useState("");

  return (
    <section
      id="cats"
      className="min-h-screen bg-gradient-to-b from-pink-100 to-pink-50 px-6 py-20"
    >
      <h2 className="text-6xl text-center text-pink-600 mb-4">
        🐱 The Cat Kingdom
      </h2>

      <p className="text-center text-gray-500 mb-16">
        Three tiny rulers. One very lucky human.
      </p>

      {/* Cat Selection Cards */}

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        <button
          onClick={() => setSelectedCat("Batman")}
          className="bg-white rounded-3xl overflow-hidden shadow-lg hover:scale-105 transition"
        >
          <Image
            src="/images/Batman.jpg"
            alt="Batman"
            width={400}
            height={300}
            className="w-full h-64 object-cover"
          />

          <div className="p-6">
            <h3 className="text-3xl">
              Batman 🖤
            </h3>
          </div>
        </button>

        <button
          onClick={() => setSelectedCat("Kittu")}
          className="bg-white rounded-3xl overflow-hidden shadow-lg hover:scale-105 transition"
        >
          <Image
            src="/images/Kittu.jpg"
            alt="Kittu"
            width={400}
            height={300}
            className="w-full h-64 object-cover"
          />

          <div className="p-6">
            <h3 className="text-3xl">
              Kittu 😴
            </h3>
          </div>
        </button>

        <button
          onClick={() => setSelectedCat("Sheru")}
          className="bg-white rounded-3xl overflow-hidden shadow-lg hover:scale-105 transition"
        >
          <Image
            src="/images/Sherru.jpg"
            alt="Sheru"
            width={400}
            height={300}
            className="w-full h-64 object-cover"
          />

          <div className="p-6">
            <h3 className="text-3xl">
              Sheru ⚡
            </h3>
          </div>
        </button>

      </div>

      {/* Selected Cat Info */}

      <div className="max-w-4xl mx-auto mt-16">

        {selectedCat === "Batman" && (
          <div className="bg-white p-10 rounded-3xl shadow-lg">
            <h3 className="text-5xl text-pink-600 mb-6">
              Batman 🖤
            </h3>

            <p className="text-lg">
              Protective • Curious • Always Watching
            </p>

            <p className="mt-8">
              <strong>Fun Fact</strong>
              <br />
              Probably judges everyone silently.
            </p>

            <p className="mt-8">
              <strong>What I Learned</strong>
              <br />
              Every time you talk about him,
              it sounds like you're talking about family.
            </p>
          </div>
        )}

        {selectedCat === "Kittu" && (
          <div className="bg-white p-10 rounded-3xl shadow-lg">
            <h3 className="text-5xl text-pink-600 mb-6">
              Kittu 😴
            </h3>

            <p className="text-lg">
              Sleepy • Relaxed • Affectionate
            </p>

            <p className="mt-8">
              <strong>Fun Fact</strong>
              <br />
              Professional nap champion.
            </p>

            <p className="mt-8">
              <strong>What I Learned</strong>
              <br />
              I don't think Kittu has ever rushed a
              single day in his life.
            </p>
          </div>
        )}

        {selectedCat === "Sheru" && (
          <div className="bg-white p-10 rounded-3xl shadow-lg">
            <h3 className="text-5xl text-pink-600 mb-6">
              Sheru ⚡
            </h3>

            <p className="text-lg">
              Chaotic • Energetic • Playful
            </p>

            <p className="mt-8">
              <strong>Fun Fact</strong>
              <br />
              Believes rules are optional.
            </p>

            <p className="mt-8">
              <strong>What I Learned</strong>
              <br />
              Every story involving Sheru somehow
              ends in complete chaos.
            </p>
          </div>
        )}

      </div>

      {/* Hidden Cute Section */}

      <div className="text-center mt-20">
        <p className="text-gray-500 italic">
          🐾 You're obviously their favorite human.
        </p>
      </div>

    </section>
  );
}
<div className="mt-20 text-center text-4xl">
  🌷
</div>