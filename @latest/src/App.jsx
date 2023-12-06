import { useState } from "react";
import "./App.css";

function App() {
  const [dna, setDna] = useState("");
  const [complimentary, setComplimentary] = useState("");
  const [neuclutides] = useState([
    {
      symbol: "A",
      base: "T",
    },
    {
      symbol: "T",
      base: "A",
    },
    {
      symbol: "C",
      base: "G",
    },
    {
      symbol: "G",
      base: "C",
    },
  ]);
  const handleDnaComplimentartSequence = (dna) => {
    const complimentaryBucket = [];
    const splitSequence = dna.toUpperCase().split("");
    splitSequence.map((nucleotide) => {
      const matchNecleotide = neuclutides.find((nucleo) => {
        return nucleo.symbol == nucleotide;
      });
      if (!matchNecleotide) {
        setComplimentary("invalid DNA sequence");
      } else {
        complimentaryBucket.push(matchNecleotide.base);
      }
    });
    setComplimentary(complimentaryBucket.join(""));
  };

  return (
    <>
      <div className="flex h-screen bg-green-700 justify-center items-center flex-col">
        <h1 className="text-white text-4xl max-sm:text-xl max-sm:font-bold max-sm:text-center">
          {" "}
          DNA SEQUENCE COMPLIMENTARY GENERATOR
        </h1>
        <input
          className="rounded-sm px-1 py-2 w-72"
          type="text"
          value={dna}
          placeholder="Enter your dna sequence"
          onChange={(e) => setDna(e.target.value)}
        />
        <input
          onClick={() => handleDnaComplimentartSequence(dna)}
          type="submit"
          value={"Generate DNA complimentary"}
          className="m-1 border border-gray-500 px-1 py-2 w-72 bg-black text-white rounded-sm font-bold hover:bg-green-600 hover:border-black"
        />
        <div className="h-36 border border-gray-300 w-72 overflow-auto rounded-sm bg-gray-300 px-1 py-2 flex justify-center items-center flex-wrap  ">
          <h1 className="font-bold text-4xl">{complimentary}</h1>
        </div>
      </div>
    </>
  );
}

export default App;
