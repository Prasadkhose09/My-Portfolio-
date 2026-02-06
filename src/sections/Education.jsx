import { resumeData } from '../resumeData';
import { Award, GraduationCap } from 'lucide-react';
import '../styles/Education.css';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Education = () => {
    const [domRef, isVisible] = useScrollAnimation();

    return (
        <section id="education" className="section education-section" ref={domRef}>
            <div className={`container fade-in-section ${isVisible ? 'is-visible' : ''}`}>
                <h2 className="section-title">Education & Certifications</h2>

                <div className="education-grid">
                    <div className="education-column">
                        <div className="section-subtitle-wrapper">
                            <GraduationCap className="subtitle-icon" size={24} />
                            <h3 className="section-subtitle">Education</h3>
                        </div>
                        <div className="education-list">
                            {resumeData.education.map((edu, index) => (
                                <div key={index} className="education-card">
                                    <h4 className="edu-degree">{edu.degree}</h4>
                                    <p className="edu-institution">{edu.institution}</p>
                                    <div className="edu-meta">
                                        <span className="edu-year">{edu.year}</span>
                                        <span className="edu-score">{edu.score}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="education-column">
                        <div className="section-subtitle-wrapper">
                            <Award className="subtitle-icon" size={24} />
                            <h3 className="section-subtitle">Certifications & Awards</h3>
                        </div>
                        <div className="cert-list">
                            {resumeData.certifications.map((cert, index) => (
                                <div key={index} className="cert-card">
                                    <p className="cert-name">{cert}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
