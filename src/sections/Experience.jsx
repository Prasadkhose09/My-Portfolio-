import { resumeData } from '../resumeData';
import { Calendar, Briefcase } from 'lucide-react';
import '../styles/Experience.css';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Experience = () => {
    const [domRef, isVisible] = useScrollAnimation();

    return (
        <section id="experience" className="section experience-section" ref={domRef}>
            <div className={`container fade-in-section ${isVisible ? 'is-visible' : ''}`}>
                <h2 className="section-title">Experience</h2>

                <div className="timeline">
                    {resumeData.experience.map((exp, index) => (
                        <div key={index} className="timeline-item">
                            <div className="timeline-marker">
                                <div className="timeline-dot"></div>
                                <div className="timeline-line"></div>
                            </div>
                            <div className="timeline-content">
                                <div className="experience-header">
                                    <h3 className="role">{exp.role}</h3>
                                    <div className="duration">
                                        <Calendar size={16} />
                                        <span>{exp.duration}</span>
                                    </div>
                                </div>
                                <ul className="experience-highlights">
                                    {exp.highlights.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
