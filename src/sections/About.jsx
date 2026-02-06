import { resumeData } from '../resumeData';
import '../styles/About.css';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About = () => {
    const [domRef, isVisible] = useScrollAnimation();

    return (
        <section id="about" className="section about-section" ref={domRef}>
            <div className={`container fade-in-section ${isVisible ? 'is-visible' : ''}`}>
                <h2 className="section-title">About Me</h2>
                <div className="about-content">
                    <div className="about-text-card">
                        <p>{resumeData.summary}</p>
                        <div className="about-stats">
                            <div className="stat-item">
                                <span className="stat-number">5 Months</span>
                                <span className="stat-label">Experience</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
