import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin, faGithub
} from "@fortawesome/free-brands-svg-icons"; 

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row bg-black text-white">
      {/* Contact Section */}
      <div className="w-full md:w-1/3 p-3 flex items-center">
        <span className="ml-2">
          <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
          pradhumensingh1112@gmail.com
        </span>
      </div>

      {/* Logo Section */}
      <div className="w-full md:w-1/3 p-3 flex justify-center items-center">
        Password Generator
      </div>

      {/* Social Media Section */}
      <div className="w-full md:w-1/3 p-3 flex justify-center items-center space-x-4">
        <a
          href="https://www.linkedin.com/in/pradhumen2000"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} className="text-white text-2xl" />
        </a>
        <a
          href="https://github.com/Pradhumen"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} className="text-white text-2xl" />
        </a>
      </div>
    </div>
  );
};

export default Header;

