import '../styles/Footer.css';
import { resumeData } from '../resumeData';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <p className="copyright">
                    &copy; {new Date().getFullYear()} {resumeData.name}. All rights reserved.
                </p>
                <p className="built-with">
                    Built with React & Vanilla CSS
                </p>
            </div>
        </footer>
    );
};

export default Footer;
