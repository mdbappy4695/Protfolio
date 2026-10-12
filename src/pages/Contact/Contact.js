import React from "react";
import "./Contact.css";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";
import FadeIn from "../../components/FadeIn/FadeIn";
import { profile } from "../../data/profile";

const socialItems = [
  {
    key: "linkedin",
    Icon: BsLinkedin,
    label: "LinkedIn",
    className: "social-linkedin",
  },
  {
    key: "github",
    Icon: BsGithub,
    label: "GitHub",
    className: "social-github",
  },
  {
    key: "facebook",
    Icon: BsFacebook,
    label: "Facebook",
    className: "social-facebook",
  },
];

const Contact = () => {
  const { contact, social, name, certifications } = profile;
  const linkedSocials = socialItems.filter((item) => social[item.key]);

  return (
    <div className="contact" id="contact">
      <FadeIn>
        <div className="contact-panel">
          <div className="contact-brand">
            <h2>Get in touch</h2>
            <p>
              Open to full-stack and .NET opportunities. Reach out by email,
              phone, or WhatsApp.
            </p>
          </div>
          <div className="contact-details">
            {linkedSocials.length > 0 && (
              <div className="contact-socials">
                <span className="contact-socials-label">Connect</span>
                <div className="contact-social-links">
                  {linkedSocials.map(({ key, Icon, label, className }) => (
                    <a
                      key={key}
                      href={social[key]}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={label}
                      className={`contact-social-link ${className}`}
                    >
                      <Icon size={28} aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>
            )}
            <ul className="contact-list">
              <li>
                <span>Name</span>
                <strong>{name}</strong>
              </li>
              <li>
                <span>Email</span>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </li>
              <li>
                <span>Phone</span>
                <a href={`tel:${contact.phone}`}>{contact.phone}</a>
              </li>
              <li>
                <span>Address</span>
                <strong>{contact.address}</strong>
              </li>
            </ul>
            {certifications?.length > 0 && (
              <div className="contact-certs">
                <span className="contact-socials-label">Certifications</span>
                <ul className="contact-certs-list">
                  {certifications.map((cert) => (
                    <li key={cert.id}>
                      <strong>{cert.name}</strong>
                      <span>{cert.year}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </FadeIn>
    </div>
  );
};

export default Contact;
