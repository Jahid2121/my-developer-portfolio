import SectionTitle from "../SectionTitle";

const StudyInfo = () => {
  return (
   <>
   <SectionTitle Title="<Education" />
    <div className="mt-8 p-4 border rounded shadow-md bg-artificialNavyBlue text-black">

      <div className="mt-4 flex flex-col md:flex-row justify-between">
        {/* SSC  */}
        <div className="mb-4">
          <div className="font-semibold text-2xl">SSC (Science)</div>
          <div className="text-artificialCyan">GPA - 4.17</div>
          <div className="text-artificialCyan">Passing Year - 2020</div>
          <div className="text-artificialCyan">Institute - Jaintapur Govt. High School</div>
        </div>
        
        {/* HSC  */}
        <div>
          <div className="font-semibold text-2xl">HSC (Management)</div>
          <div className="text-artificialBlue">GPA - 4.56</div>
          <div className="text-artificialBlue">Passing Year - 2023</div>
          <div className="text-artificialBlue">Institute - Jaintapur Tayob Ali Technical Collage</div>
        </div>
      </div>
    </div>
    <SectionTitle Title="/>" />
   </>
  );
};

export default StudyInfo;
