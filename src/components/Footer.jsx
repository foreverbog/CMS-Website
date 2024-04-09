const Footer = () => {
  return (
    <footer className="w-[100%] bg-yellow-200 text-black text-center p-4 ">
      <div className="mb-2">
        <a href="https://twitter.com" className="mx-2">
          Twitter
        </a>
        |
        <a href="https://facebook.com" className="mx-2">
          Facebook
        </a>
        |
        <a href="https://instagram.com" className="mx-2">
          Instagram
        </a>
      </div>
      <div>
        <p>Copyright © {new Date().getFullYear()}.</p>
      </div>
    </footer>
  );
};

export default Footer;
