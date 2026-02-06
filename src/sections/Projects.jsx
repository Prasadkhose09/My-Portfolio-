import { resumeData } from '../resumeData';
import { ExternalLink, Code } from 'lucide-react';
import '../styles/Projects.css';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Projects = () => {
    const [domRef, isVisible] = useScrollAnimation();

    return (
        <section id="projects" className="section projects-section" ref={domRef}>
            <div className={`container fade -in -section ${isVisible ? 'is-visible' : ''} `}>
                <h2 className="section-title">Projects</h2>

                <div className="projects-grid">
                    {resumeData.projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <div className="project-header">
                                <div className="folder-icon">
                                    <Code size={40} color="#d4af37" />
                                </div>
                                <div className="project-links">
                                    {/* Placeholder links since resume doesn't have specific URLs per project yet */}
                                    <a href="#" className="project-link"><ExternalLink size={20} /></a>
                                </div>
                            </div>

                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>

                            <div className="project-tech">
                                {project.tech.map((tech) => (
                                    <span key={tech} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
