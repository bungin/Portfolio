import '../components/css/Footer.css';
import imgFooter from './assets/github-mark.png';


function Footer() {
  return (
    <footer className="footer">
      <a href="https://github.com/bungin/">
        <button >
          <img src={imgFooter} alt="NimMac/Bungin GitHub link" />
        </button>
      </a>
      &copy; {new Date().getFullYear()} NimMac/Bungin
    </footer>
  );
}

export default Footer;