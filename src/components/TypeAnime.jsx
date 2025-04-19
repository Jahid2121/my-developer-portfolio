import { TypeAnimation } from "react-type-animation";

const TypeAnime = () => {
  return (
    <div className="text-xl md:text-2xl mt-4 font-bold text-center text-artificialCoolGray">
      <TypeAnimation
        sequence={[
          'Front-End Developer',
          1500,
          'React Developer',
          1500,
          'Next.js Developer',
          1500,
          'Full-Stack Developer',
          1500,
          'Python Developer',
          1500,
          'Django Developer',
          1500,
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
        style={{ display: 'inline-block' }}
      />
    </div>
  );
};

export default TypeAnime;
