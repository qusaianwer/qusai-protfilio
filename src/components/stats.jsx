import { memo } from "react";
import { keyStats } from "../data/skillsData";

function Stats() {
  return (
    <section className="st-section" aria-label="Key Highlights">
      <div className="st-container">
        <div className="st-grid">
          {keyStats.map((item, idx) => (
            <div className="st-card" key={idx}>
              <div className="st-value">{item.value}</div>
              <div className="st-label">{item.label}</div>
              <div className="st-sublabel">{item.sublabel}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(Stats);
