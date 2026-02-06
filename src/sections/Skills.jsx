import { resumeData } from '../resumeData';
import '../styles/Skills.css';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Skills = () => {
    const [domRef, isVisible] = useScrollAnimation();

    return (
        <section id="skills" className="section skills-section" ref={domRef}>
            <div className={`container fade-in-section ${isVisible ? 'is-visible' : ''}`}>
                <h2 className="section-title">Technical Skills</h2>

                <div className="skills-grid">
                    {Object.entries(resumeData.skills).map(([category, items]) => (
                        <div key={category} className="skill-card">
                            <h3 className="skill-category">{category.replace(/([A-Z])/g, ' $1').trim()}</h3>
                            <div className="skill-tags">
                                {items.map((skill) => (
                                    <span key={skill} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
