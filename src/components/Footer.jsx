import '../components/css/Footer.css';
import imgFooter from './src/assets/github-mark.png';

function FooterImg() {
  return (
    <img src={imgFooter} alt="NimMac/Bungin GitHub link" />
  );
}

function Footer() {
  return (
    <footer className="footer">
      <a href="https://github.com/bungin/">
        <button >
          <FooterImg />
        </button>
      </a>
      &copy; {new Date().getFullYear()} NimMac/Bungin
    </footer>
  );
}

export default Footer;