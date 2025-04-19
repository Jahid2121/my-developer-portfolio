import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-14 pb-7 border border-white p-8 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex items-center space-x-3">
            <span className="text-4xl font-semibold font-customGaramond whitespace-nowrap">
              Jahid&apos;s Portfolio
            </span>
          </div>

          <div className="text-center md:text-right space-y-2">
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} Jahid Hasan. All rights reserved.
            </p>
            <p className="text-sm text-gray-500">
              Built with ❤️ using React and Tailwind CSS
            </p>
            <div className="flex justify-center md:justify-end gap-4 pt-2 text-xl">
              <a href="https://github.com/Jahid2121" target="_blank" rel="noopener noreferrer">
                <FaGithub className="hover:text-gray-300 transition" />
              </a>
              <a href="https://www.linkedin.com/in/md-jahid-hasan01" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn className="hover:text-gray-300 transition" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
