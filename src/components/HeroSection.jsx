import hazemImg from '../assets/hazem1.jpeg';

export default function HeroSection() {
  return (
    <section className="section">
      <div className="glass-card hero-card">
        <div className="profile-wrapper">
          <img src={hazemImg} alt="Hazem Photo" className="profile-img" />
        </div>
        <h1 className="hero-name">مطور فرونت إند | Frontend Developer</h1>
        <div className="role-badge">Frontend Developer (React.js)</div>
        <p className="hero-bio">
          أبني واجهات ويب حديثة وسريعة بتصاميم عصرية وتجربة مستخدم متميزة، أدمج بين الحس الفني لكود التصميم والخبرة البرمجية.
        </p>
        <div className="cta-group">
          <a href="#projects" className="btn btn-primary">استكشف أعمالي</a>
          <a href="#contact" className="btn btn-secondary">تواصل معي</a>
        </div>
      </div>
    </section>
  );
}