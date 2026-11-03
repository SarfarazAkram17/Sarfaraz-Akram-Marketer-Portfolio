import TiltCard from "../Tilt3D/TiltCard";
import skillGroups from "../../skillsData";

const MarketingSkills = () => (
  <div className="skill-groups">
    {skillGroups.map((group) => (
      <div className="skill-group" key={group.label}>
        <h3 className="skill-group-label">{group.label}</h3>
        <div className="skill-grid">
          {group.skills.map((skill) => (
            <TiltCard
              as="article"
              className="skill-card"
              key={skill.name}
              max={14}
            >
              <span className="tech-logo" style={{ color: skill.color }}>
                <skill.icon aria-hidden="true" />
              </span>
              <div className="skill-text">
                <h4>{skill.name}</h4>
                <span>{skill.note}</span>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default MarketingSkills;
