import { useState } from "react";
import { skills } from "../../js/data.js";

const SkillsGrid = () => {
  const [invertedIndex, setInvertedIndex] = useState<number>(1);

  const handleImageClick = (index: number) => {
    setInvertedIndex(index === invertedIndex ? -1 : index);
  };

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-5 w-5/6 mx-auto gap-4 md:gap-16 my-14">
        {skills.map((skill, index) => (
          <div
            key={index}
            onClick={() => handleImageClick(index)}
            className={`p-6 cursor-pointer  h-36  md:h-48 flex flex-col justify-around items-center border-3 border-black rounded-md ${
              invertedIndex === index
                ? "bg-black text-white"
                : "bg-white text-black"
            }`}
          >
            <img
              src={skill.image}
              alt={skill.title}
              className={`${invertedIndex === index ? "invert" : ""}`}
            />
            <h2 className="heading-h5-bold">{skill.title}</h2>
          </div>
        ))}
      </div>
    </>
  );
};

export default SkillsGrid;
