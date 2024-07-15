import { useState } from "react";

const Icons = ({ gap = "8" }) => {
  const [invertedIndex, setInvertedIndex] = useState<number>(0);

  const handleImageClick = (index: number) => {
    if (index === invertedIndex) {
      setInvertedIndex(-1);
    } else {
      setInvertedIndex(index);
    }
  };
  return (
    <div className="flex">
      <img
        src="/assets/facebook.png"
        alt="facebook"
        className={`p-4 border-2 mr-${gap} cursor-pointer bg-white border-black rounded-md ${
          invertedIndex === 0 ? "invert" : ""
        }`}
        onClick={() => handleImageClick(0)}
      />
      <img
        src="/assets/reddit.png"
        alt="reddit"
        className={`p-4 border-2 mr-${gap} cursor-pointer bg-white border-black rounded-md ${
          invertedIndex === 1 ? "invert" : ""
        }`}
        onClick={() => handleImageClick(1)}
      />
      <img
        src="/assets/twitter.png"
        alt="twitter"
        className={`p-4 border-2 mr-${gap} cursor-pointer bg-white border-black rounded-md ${
          invertedIndex === 2 ? "invert" : ""
        }`}
        onClick={() => handleImageClick(2)}
      />
      <img
        src="/assets/discord.png"
        alt="discord"
        className={`p-4 border-2 mr-${gap} cursor-pointer bg-white border-black rounded-md ${
          invertedIndex === 3 ? "invert" : ""
        }`}
        onClick={() => handleImageClick(3)}
      />
    </div>
  );
};

export default Icons;
