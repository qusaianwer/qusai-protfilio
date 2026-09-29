import { FaEnvelope, FaWhatsapp, FaInstagram } from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Contact with me</h2>
      <p>If you'd like to work with me or have any questions, contact me here :</p>

      <div className="social-links">
        <a href="mailto:qusaianwer06@gmail.com" className="social-icon" aria-label="Email">
          <div className="card"><FaEnvelope /></div>
        </a>

        <a
          href="https://wa.me/962779527025"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon whatsapp"
          aria-label="WhatsApp"
        >
          <div className="card"><FaWhatsapp /></div>
        </a>

        <a
          href="https://www.instagram.com/qusaialdaaja?stkn=MTV2Yjd2YnA5MHJ0dA=="
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon instagram"
          aria-label="Instagram"
        >
          <div className="card"><FaInstagram /></div>
        </a>
      </div>
    </section>
  );
}

export default Contact;