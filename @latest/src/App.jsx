import { useState } from "react";
import "./App.css";
import { FaDna } from "react-icons/fa";

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

      if (matchNecleotide) {
        complimentaryBucket.push(matchNecleotide.base);
      } else if (typeof neuclutides == "number") {
        setComplimentary("Invalid dna sequence");
      }
    });
    setComplimentary(complimentaryBucket.join(""));
  };

  return (
    <>
      <div className="flex h-screen bg-green-700 justify-center items-center flex-col">
        <h1 className="absolute top-0 text-4xl max-sm:text-xl text-gray-300 font-bold">
          Welcome Back,
        </h1>
        <FaDna className="text-9xl text-gray-200 m-1" />

        <h1 className=" text-gray-300 text-4xl max-sm:text-xl max-sm:font-bold max-sm:text-center">
          {" "}
          COMPLIMENTARY DNA SEQUENCE GENERATOR
        </h1>

        <input
          className="px-1 py-2 w-72 rounded-md"
          type="text"
          value={dna}
          placeholder="Enter your dna sequence"
          onChange={(e) => setDna(e.target.value)}
        />
        <input
          onClick={() => handleDnaComplimentartSequence(dna)}
          type="submit"
          value={"Generate DNA complimentary"}
          className="m-1 border border-green-500 px-2 py-2 w-72 bg-green-600  text-gray-200 rounded-md font-bold hover:bg-gray-200 hover:border-green-400 hover:text-green-500"
        />
        <div className="h-36  text-green-500 border border-gray-300 w-72 overflow-auto rounded-md bg-gray-300 px-1 py-2 flex justify-center items-center flex-wrap  ">
          <h1 className="font-bold text-4xl">{complimentary}</h1>
        </div>
      </div>
    </>
  );
}

export default App;
