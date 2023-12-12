import { TypeAnimation } from "react-type-animation";

const TypeAnime = () => {
  return (
    <div>
      <div className="text-2xl container mt-16 font-bold text-center"> 🚀 Transforming <p>{' '}</p>  
{/* <span className="text first-text">{displayText}</span> */}
<TypeAnimation
  sequence={[
    'Ideas',
    500,
    'Ideas Into ', //  Continuing previous Text
    500,
    'Ideas Into  Reality',
    500,
    'Ideas Into ',
    500,
    'Ideas',
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