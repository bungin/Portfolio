import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer';
import About from './pages/About';
import Resume from './pages/Resume';
import Projects from './pages/Projects';
import Contact from './pages/Contact';



function App() {


    return (
        <>
            <Header />
            <BrowserRouter>
                <Routes>
                    <Route index element={<About />} />
                    <Route path="/aboutme" element={<About />} />
                    <Route path="/mywork" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/resume" element={<Resume />} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </>
    );
}

export default App
