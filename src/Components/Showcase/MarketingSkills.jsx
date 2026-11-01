import skillGroups from "../../skillsData";

const MarketingSkills = () => (
  <div className="skill-groups">
    {skillGroups.map((group) => (
      <div className="skill-group" key={group.label}>
        <div className="skill-group-label">{group.label}</div>
        <div className="skill-grid">
          {group.skills.map((skill) => (
            <article className="skill-card" key={skill.name} data-aos="fade-up">
              <span className="tech-logo" style={{ color: skill.color }}>
                <skill.icon aria-hidden="true" />
              </span>
              <div>
                <h3>{skill.name}</h3>
                <span>{skill.note}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default MarketingSkills;
