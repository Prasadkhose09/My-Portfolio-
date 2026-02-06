import { resumeData } from '../resumeData';
import { ArrowRight } from 'lucide-react';
import profileImg from '../assets/profile.jpg';
import '../styles/Hero.css';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Hero = () => {
    const [domRef, isVisible] = useScrollAnimation();

    return (
        <section id="hero" className="hero-section" ref={domRef}>
            <div className={`container hero-container fade-in-section ${isVisible ? 'is-visible' : ''}`}>
                <div className="hero-content">
                    <p className="greeting">Hello, I'm</p>
                    <h1 className="hero-name gradient-text">{resumeData.name}</h1>
                    <h2 className="hero-title">{resumeData.title}</h2>
                    <p className="hero-description">{resumeData.heroDescription}</p>

                    <div className="hero-actions">
                        <a href="#projects" className="btn btn-primary">
                            View My Work
                        </a>
                        <a href="#contact" className="btn btn-secondary">
                            Contact Me <ArrowRight size={20} />
                        </a>
                        <a
                            href={resumeData.contact.resumeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-secondary"
                            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                        >
                            Resume <ArrowRight size={20} />
                        </a>
                    </div>
                </div>

                <div className="hero-visual">
                    <div className="img-wrapper">
                        <img src={profileImg} alt="Prasad Khose" className="profile-img" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
