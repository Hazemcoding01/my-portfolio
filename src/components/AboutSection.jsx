export default function AboutSection() {
  return (
    <section id="about" className="section">
      <h2 className="section-title">نبذة عني</h2>

      <div className="about-grid">
        <div className="about-card">
          <p className="about-summary">
            أنا حازم محمود، خريج تكنولوجيا معلومات (IT) <span className="dot">•</span> متخصص في تطوير واجهات المستخدم (Frontend Developer) <span className="dot">•</span> ومتقن للتعامل مع React.js وبناء وتطوير تطبيقات الويب التفاعلية واللوحات الإدارية (Dashboards).
          </p>

          <div className="about-panels">
            <div className="about-panel">
              <div className="about-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none"></circle>
                  <ellipse cx="12" cy="12" rx="9" ry="4.5"></ellipse>
                  <ellipse cx="12" cy="12" rx="9" ry="4.5" transform="rotate(60 12 12)"></ellipse>
                  <ellipse cx="12" cy="12" rx="9" ry="4.5" transform="rotate(120 12 12)"></ellipse>
                </svg>
              </div>
              <h4>تطوير واجهات ويب تفاعلية وسريعة باستخدام HTML, CSS, JavaScript, و React.js.</h4>
            </div>

            <div className="about-divider"></div>

            <div className="about-panel">
              <div className="about-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="7" height="9" rx="1.5"></rect>
                  <rect x="14" y="3" width="7" height="5" rx="1.5"></rect>
                  <rect x="14" y="12" width="7" height="9" rx="1.5"></rect>
                  <rect x="3" y="16" width="7" height="5" rx="1.5"></rect>
                </svg>
              </div>
              <h4>بناء وتصميم لوحات التحكم والأنظمة الإدارية المعقدة وربطها بـ REST APIs.</h4>
            </div>

            <div className="about-divider"></div>

            <div className="about-panel">
              <div className="about-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="9" y="3" width="6" height="18" rx="1"></rect>
                  <line x1="2" y1="9" x2="6" y2="12"></line>
                  <line x1="2" y1="15" x2="6" y2="12"></line>
                  <line x1="22" y1="9" x2="18" y2="12"></line>
                  <line x1="22" y1="15" x2="18" y2="12"></line>
                </svg>
              </div>
              <h4>كتابة كود نظيف، منظم، وقابل للتطوير مع ضمان التجاوب التام مع جميع الشاشات.</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
