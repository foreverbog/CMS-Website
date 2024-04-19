import { FaGithub, FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-[100%] bg-slate-800 text-white text-center p-4 ">
      <div className="mb-2 flex flex-wrap justify-center items-center">
        <a
          href="https://github.com/foreverbog/CMS-Website"
          className="mx-2 "
          target="_blank"
        >
          <FaGithub className="h-8 w-8" />
        </a>

        <a href="https://twitter.com" className="mx-2" target="_blank">
          <FaXTwitter className="h-8 w-8" />
        </a>

        <a href="https://facebook.com" className="mx-2" target="_blank">
          <FaFacebookF className="h-8 w-8" />
        </a>

        <a href="https://instagram.com" className="mx-2" target="_blank">
          <FaInstagram className="h-8 w-8" />
        </a>
      </div>
      <div>
        <p>Copyright © 2024.</p>
      </div>
    </footer>
  );
};

export default Footer;
