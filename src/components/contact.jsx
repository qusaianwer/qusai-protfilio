import { useState, useEffect, memo } from "react";
import { useLocation } from "react-router-dom";
import {
  FaEnvelope,
  FaWhatsapp,
  FaInstagram,
  FaGithub,
  FaYoutube,
  FaCopy,
  FaCheck,
  FaPaperPlane,
  FaClock,
  FaMapMarkerAlt
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";

const contactChannels = [
  {
    icon: <FaEnvelope />,
    title: "Email",
    value: "qusaianwer06@gmail.com",
    href: "mailto:qusaianwer06@gmail.com",
    label: "Send Email",
    color: "#00d4ff"
  },
  {
    icon: <FaWhatsapp />,
    title: "WhatsApp",
    value: "+962 7 7682 2441",
    href: "https://wa.me/962776822441",
    label: "Chat on WhatsApp",
    color: "#25d366"
  },
  {
    icon: <FaGithub />,
    title: "GitHub",
    value: "github.com/qusaianwer",
    href: "https://github.com/qusaianwer",
    label: "View Repositories",
    color: "#ffffff"
  },
  {
    icon: <FaYoutube />,
    title: "YouTube",
    value: "@q3v_203 (Q3V)",
    href: "https://youtube.com/@q3v_203?si=nJ_gJDI9gQJcoDzD",
    label: "Subscribe",
    color: "#ff0000"
  },
  {
    icon: <FaInstagram />,
    title: "Instagram",
    value: "@qusaialdaaja",
    href: "https://www.instagram.com/qusaialdaaja?stkn=MTV2Yjd2YnA5MHJ0dA==",
    label: "Follow",
    color: "#e1306c"
  }
];

// Leaf component for Jordan live clock — isolates 1-second interval re-renders from the rest of Contact
const JordanClock = memo(function JordanClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    let timer = 0;
    const update = () => {
      if (document.hidden) return;
      try {
        const now = new Intl.DateTimeFormat("en-US", {
          timeZone: "Asia/Amman",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true
        }).format(new Date());
        setTime(now);
      } catch {
        setTime("GMT+3");
      }
    };

    update();
    timer = setInterval(update, 1000);

    const onVis = () => {
      if (!document.hidden) update();
    };
    document.addEventListener("visibilitychange", onVis);

    return () => {
      clearInterval(timer);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  return <strong>{time || "GMT+3"}</strong>;
});

function Contact() {
  const location = useLocation();
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: location.state?.subject || "",
    message: ""
  });
  const [formSent, setFormSent] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("qusaianwer06@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const handleChange = (e) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formState;

    const mailtoUrl = `mailto:qusaianwer06@gmail.com?subject=${encodeURIComponent(
      subject || `Portfolio Message from ${name}`
    )}&body=${encodeURIComponent(
      `From: ${name} (${email})\n\nMessage:\n${message}`
    )}`;

    window.location.href = mailtoUrl;
    setFormSent(true);
    setTimeout(() => setFormSent(false), 6000);
  };

  return (
    <section className="cp-section" id="contact">
      <div className="cp-container">
        {/* Header */}
        <div className="cp-header">
          <div className="section-eyebrow">
            <HiSparkles className="eyebrow-icon" /> Start a Conversation
          </div>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Whether you have an engineering opportunity, a software project in mind, or want to explore AI automation, I'd love to hear from you.
          </p>
        </div>

        {/* Location & Timezone Pill */}
        <div className="cp-timezone-bar">
          <div className="cp-tz-item">
            <FaMapMarkerAlt className="cp-tz-icon" />
            <span>Amman, Jordan (WISE)</span>
          </div>
          <div className="cp-tz-divider">•</div>
          <div className="cp-tz-item">
            <FaClock className="cp-tz-icon" />
            <span>Local Time: <JordanClock /> (UTC+3)</span>
          </div>
          <div className="cp-tz-divider">•</div>
          <div className="cp-tz-status">
            <span className="cp-status-dot" />
            <span>Ready for Remote & On-Site Roles</span>
          </div>
        </div>

        {/* Main Contact Grid */}
        <div className="cp-grid">
          {/* Left: Interactive Form */}
          <div className="cp-form-card">
            <div className="cp-form-header">
              <h3>Send Me a Message</h3>
              <p>Direct communication via email or mailto client.</p>
            </div>

            <form onSubmit={handleSubmit} className="cp-form">
              <div className="cp-form-row">
                <div className="cp-field">
                  <label htmlFor="contact-name">Your Name</label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    required
                    placeholder="e.g. Tariq Ahmad"
                    value={formState.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="cp-field">
                  <label htmlFor="contact-email">Email Address</label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    required
                    placeholder="tariq@example.com"
                    value={formState.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="cp-field">
                <label htmlFor="contact-subject">Subject</label>
                <input
                  type="text"
                  id="contact-subject"
                  name="subject"
                  required
                  placeholder="e.g. AI Automation Project / Job Opportunity"
                  value={formState.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="cp-field">
                <label htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows="4"
                  required
                  placeholder="Tell me about your project, timeline, or inquiry..."
                  value={formState.message}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="cp-submit-btn">
                <FaPaperPlane /> Send Message
              </button>

              {formSent && (
                <div className="cp-sent-banner">
                  <FaCheck /> Your default email client was opened. If not, feel free to email me directly!
                </div>
              )}
            </form>
          </div>

          {/* Right: Direct Channels & Copy Email */}
          <div className="cp-channels-card">
            <div className="cp-quick-copy-box">
              <div className="cp-qc-info">
                <span className="cp-qc-label">Direct Email Address:</span>
                <span className="cp-qc-email">qusaianwer06@gmail.com</span>
              </div>
              <button
                onClick={handleCopyEmail}
                className="cp-copy-btn"
                aria-label="Copy email address"
              >
                {copied ? (
                  <>
                    <FaCheck className="copy-ok" /> Copied!
                  </>
                ) : (
                  <>
                    <FaCopy /> Copy
                  </>
                )}
              </button>
            </div>

            <div className="cp-cards-list">
              {contactChannels.map((c) => (
                <a
                  key={c.title}
                  href={c.href}
                  target={c.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="cp-channel-item"
                  style={{ "--chan-color": c.color }}
                >
                  <div className="cp-channel-top">
                    <div className="cp-chan-icon">{c.icon}</div>
                    <div className="cp-chan-body">
                      <span className="cp-chan-title">{c.title}</span>
                      <span className="cp-chan-val">{c.value}</span>
                    </div>
                  </div>
                  <span className="cp-chan-action">{c.label} &rarr;</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(Contact);
