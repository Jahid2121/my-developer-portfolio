import { motion } from "framer-motion";
import SectionTitle from "../SectionTitle";

const categories = [
  {
    title: "Frontend",
    skills: ["js", "ts","react", "nextjs"],
  },
  {
    title: "Backend",
    skills: [ "django", "python"],
  },
  {
    title: "Tools",
    skills: [ "jest"],
  },
];

const SkillIcon = ({ name }) => (
  <motion.div
    whileHover={{ scale: 1.15 }}
    className="relative group transition duration-300"
  >
    <img
      src={`https://skillicons.dev/icons?i=${name}`}
      alt={name}
      className="w-12 h-12"
    />
    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 text-xs text-white bg-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
      {name.toUpperCase()}
    </div>
  </motion.div>
);

const Skills = () => {
  return (
    <div className="mt-40 px-4">
      <SectionTitle Title="<Skills" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto text-center space-y-12"
      >
        {categories.map(({ title, skills }) => (
          <div key={title}>
            <h3 className="text-2xl font-semibold mb-4 text-white">{title}</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {skills.map((skill) => (
                <SkillIcon key={skill} name={skill} />
              ))}
            </div>
          </div>
        ))}
      </motion.div>

      <div className="flex justify-end mt-10">
        <SectionTitle Title="/>" />
      </div>
    </div>
  );
};

export default Skills;
