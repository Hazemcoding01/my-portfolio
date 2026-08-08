export default function SkillsSection() {
  const skills = ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Tailwind CSS', 'Git & GitHub'];

  return (
    <section id="skills" className="section">
      <h2 className="section-title">المهارات والتقنيات</h2>
      <p className="section-subtitle">الأدوات واللغات التي أستخدمها في بناء المشاريع</p>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-card" key={skill}>
            <h4>{skill}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
