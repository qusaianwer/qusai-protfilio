import { FaEnvelope, FaWhatsapp, FaInstagram, FaGithub } from "react-icons/fa";

const contacts = [
  {
    icon: <FaEnvelope />,
    title: "Email",
    text: "qusaianwer06@gmail.com",
    link: "mailto:qusaianwer06@gmail.com",
    color: "#00d4ff",
  },
  {
    icon: <FaWhatsapp />,
    title: "WhatsApp",
    text: "Chat with me directly",
    link: "https://wa.me/962779527025",
    color: "#25d366",
  },
  {
    icon: <FaInstagram />,
    title: "Instagram",
    text: "Follow me on Instagram",
    link: "https://www.instagram.com/qusaialdaaja?stkn=MTV2Yjd2YnA5MHJ0dA==",
    color: "#e1306c",
  },
  {
    icon: <FaGithub />,
    title: "GitHub",
    text: "Check out my code",
    link: "https://github.com/qusaianwer",
    color: "#ffffff",
  },
];

function Contact() {
  return (
    <section className="cp-section" id="contact">
      <h2 className="cp-title">Contact</h2>
      <p className="cp-subtitle">
        If you'd like to work with me or have any questions, contact me here
      </p>

      <div className="cp-grid">
        {contacts.map((c) => (
          <a
            key={c.title}
            href={c.link}
            target={c.link.startsWith("mailto") ? undefined : "_blank"}
            rel="noopener noreferrer"
            className="cp-card"
            style={{ "--accent": c.color }}
          >
            <div className="cp-icon">{c.icon}</div>
            <h3>{c.title}</h3>
            <p>{c.text}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Contact;