import '../components/css/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <a href="https://github.com/bungin/">
        <button>
          <img className='gitButt' src="./src/assets/github-mark.png" alt="NimMac/Bungin GitHub link" />
        </button>
      </a>
      &copy; {new Date().getFullYear()} NimMac/Bungin
    </footer>
  );
}

export default Footer;