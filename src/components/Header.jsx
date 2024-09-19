import '../components/css/Header.css'

function Header() {

  return (
    <header><h1> Nimai MacMillan </h1>
      <nav>
        <ul>
          <ls><a href="aboutme">About</a></ls>
          <ls><a href="mywork">Projects</a></ls>
          <ls><a href="contact">Contact</a></ls>
          <ls><a href="resume">Resume</a></ls>
        </ul>
      </nav>
    </header>
  )
}

export default Header;