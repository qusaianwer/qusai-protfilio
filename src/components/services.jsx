const services = [
  {
    icon: "🌐",
    title: "Portfolio Websites",
    desc: "I build modern, responsive personal portfolio websites that showcase your skills, projects, experience, and achievements.",
  },
  {
    icon: "💻",
    title: "Business Websites",
    desc: "I create clean and responsive websites for small businesses, stores, and personal brands.",
  },
  {
    icon: "🤖",
    title: "AI Automation",
    desc: "I build AI-powered workflows that automate repetitive tasks and help businesses save time.",
  },
  {
    icon: "⚙️",
    title: "n8n Workflows",
    desc: "I design and connect automated workflows using n8n, APIs, and different business tools.",
  },
  {
    icon: "🔗",
    title: "API Integration",
    desc: "I connect websites and services together using APIs to automate data and processes.",
  },
  {
    icon: "🎨",
    title: "Website UI & Landing Pages",
    desc: "I create modern landing pages and user interfaces focused on a clean and professional experience.",
  },
  {
    icon: "🔧",
    title: "Website Updates & Fixes",
    desc: "I fix bugs, improve existing websites, and add new features when needed.",
  },
];

function Services() {
  return (
    <section className="sv-section" id="services">
      <h2 className="sv-title">Services</h2>
      <p className="sv-subtitle">What I can build for you</p>

      <div className="sv-grid">
        {services.map((s) => (
          <div className="sv-card" key={s.title}>
            <div className="sv-icon">{s.icon}</div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;