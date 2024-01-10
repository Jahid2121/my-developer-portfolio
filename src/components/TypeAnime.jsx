import { TypeAnimation } from "react-type-animation";

const TypeAnime = () => {
  return (
    <div>
      <div className="text-xl md:text-2xl mt-4 font-bold text-center text-artificialCoolGray">  
<TypeAnimation
  sequence={[
    'Front',
    500,
    'Front-End ', 
    500,
    'Front-End Web',
    500,
    'Front-End Web Developer',
    500,
    'Front-End Web ',
    500,
    'Front-End',
    500,
    'Front',
    500,
    '',
    500,
  ]}
  style={{ fontSize: '1em' }}
  repeat={Infinity}
/>
  </div>
    </div>
  );
};

export default TypeAnime;