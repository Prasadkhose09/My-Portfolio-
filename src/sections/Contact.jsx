import { resumeData } from '../resumeData';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import '../styles/Contact.css';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Contact = () => {
    const [domRef, isVisible] = useScrollAnimation();

    return (
        <section id="contact" className="section contact-section" ref={domRef}>
            <div className={`container contact-container fade-in-section ${isVisible ? 'is-visible' : ''}`}>
                <h2 className="section-title">Get In Touch</h2>
                <p className="contact-subtitle">
                    I'm actively looking for new opportunities as a Software Developer.
                    Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>

                <div className="contact-grid">
                    <div className="contact-card">
                        <div className="icon-wrapper">
                            <Mail size={32} />
                        </div>
                        <h3>Email</h3>
                        <p>{resumeData.contact.email}</p>
                        <a href={`mailto:${resumeData.contact.email}`} className="contact-link">
                            Send Message <Send size={14} style={{ marginLeft: '5px' }} />
                        </a>
                    </div>

                    <div className="contact-card">
                        <div className="icon-wrapper">
                            <Phone size={32} />
                        </div>
                        <h3>Phone</h3>
                        <p>{resumeData.contact.phone}</p>
                        <a href={`tel:${resumeData.contact.phone}`} className="contact-link">
                            Call Me
                        </a>
                    </div>

                    <div className="contact-card">
                        <div className="icon-wrapper">
                            <MapPin size={32} />
                        </div>
                        <h3>Location</h3>
                        <p>{resumeData.contact.location}</p>
                    </div>
                </div>

                <div className="social-links-big">
                    {resumeData.contact.social.map((social) => (
                        <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" className="social-icon-big">
                            <social.icon size={28} />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Contact;
