import { useState } from 'react';
import { Link } from 'react-router-dom';
import './MockMateDetails.css';

// استيراد الصور بالمسار الصحيح من مجلد components للخارج ثم إلى assets/images
import loginImg from '../assets/images/login.png';
import registerImg from '../assets/images/register.png';
import tracksImg from '../assets/images/tracks.png';
import questionImg from '../assets/images/question.png';
import interviewsImg from '../assets/images/interviews.png';

export default function MockMateDetails() {
  const [activeImage, setActiveImage] = useState(null);

  const galleryItems = [
    { src: loginImg, title: '01. Login Screen', alt: 'واجهة تسجيل الدخول' },
    { src: registerImg, title: '02. Register Screen', alt: 'واجهة إنشاء حساب جديد' },
    { src: tracksImg, title: '03. Tracks Management', alt: 'إدارة المسارات' },
    { src: questionImg, title: '04. Question Bank', alt: 'إدارة بنك الأسئلة' },
    { src: interviewsImg, title: '05. Interviews Tracking', alt: 'متابعة المقابلات' },
  ];

  return (
    <div className="mockmate-case-study">
      {/* Topbar */}
      <header className="topbar">
        <div className="topbar-inner">
          <Link to="/" className="back-link">
            ← العودة للبورتفوليو
          </Link>
          <div className="brand">
            HAZEM<span>.dev</span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="container">
        {/* Hero Section */}
        <section className="hero">
          <div className="eyebrow">CASE STUDY</div>
          <h1>MockMate AI – Admin Control Panel</h1>
          <p>
            لوحة تحكم إدارية مخصصة للـ Admins لإدارة وتغذية المنصة بالمحتوى، ومتابعة جميع العمليات والمقابلات عبر واجهة مركزية وواضحة توفر تحكماً كاملاً في النظام.
          </p>

          <div className="meta-row">
            <span className="meta-chip">HTML5</span>
            <span className="meta-chip">CSS3</span>
            <span className="meta-chip">JavaScript</span>
            <span className="meta-chip">REST APIs</span>
          </div>
        </section>

        {/* Info Grid */}
        <section className="info-grid">
          <div className="mini-card">
            <span className="mini-card-label">Role</span>
            <strong>Admin Control Panel</strong>
          </div>
          <div className="mini-card">
            <span className="mini-card-label">Tech</span>
            <strong>HTML5, CSS3, JavaScript, REST APIs</strong>
          </div>
          <div className="mini-card">
            <span className="mini-card-label">Purpose</span>
            <strong>Content Management & Interview Analytics</strong>
          </div>
        </section>

        {/* Main Grid */}
        <section className="main-grid">
          <article className="card">
            <h2 className="section-title">نبذة المشروع</h2>
            <p className="description">
              تم تصميم لوحة MockMate AI كمنصة إدارية متقدمة تتيح للمشرفين إدارة المحتوى التقني الخاص بالمنصة ومراجعة جميع النشاطات الخاصة بالمقابلات، مع واجهة تفاعلية ومريحة جداً في الاستخدام.
            </p>

            <ul className="feature-list">
              <li>إضافة وتحديث الأسئلة، المسارات التقنية (Tracks)، والمهارات (Skills) المتاحة للمتقدمين.</li>
              <li>الرقابة والمتابعة الشاملة لكافة أنواع المقابلات الثلاثة المنجزة على التطبيق.</li>
              <li>نظام أمان وسجل دخول معتمد على مفاتيح التحقق (Verification Keys) لضمان سرية البيانات.</li>
            </ul>
          </article>

          <aside className="side-panel">
            <div className="card">
              <h3 className="section-title">Tech Stack</h3>
              <div className="stack-box">
                <span className="tag">HTML5</span>
                <span className="tag">CSS3</span>
                <span className="tag">JavaScript</span>
                <span className="tag">REST APIs</span>
                <span className="tag">Admin Dashboard</span>
              </div>

              <div className="cta-row">
                <a
                  className="btn primary"
                  href="https://github.com/Hazemcoding01/MockMate-DashBoard-vg.2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Repository
                </a>
                <Link className="btn" to="/">
                  Portfolio
                </Link>
              </div>

              <p className="security-note">
                تنويه: لوحة التحكم مخصصة للمشرفين فقط وتتطلب مفتاح دخول خاص، تم إدراج الشاشات أعلاه لاستعراض الواجهات.
              </p>
            </div>
          </aside>
        </section>

        {/* Gallery Section */}
        <section className="gallery-section">
          <h2 className="section-title">Screenshots Gallery</h2>

          <div className="gallery-grid">
            {galleryItems.map((item, index) => (
              <figure
                key={index}
                className="gallery-item"
                onClick={() => setActiveImage(item)}
              >
                <figcaption>{item.title}</figcaption>
                <img src={item.src} alt={item.alt} />
              </figure>
            ))}
          </div>
        </section>
      </main>

      {/* Lightbox Modal */}
      <div
        className={`lightbox ${activeImage ? 'open' : ''}`}
        onClick={() => setActiveImage(null)}
        aria-hidden={!activeImage}
      >
        <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
          <button
            className="lightbox-close"
            type="button"
            onClick={() => setActiveImage(null)}
            aria-label="Close"
          >
            ×
          </button>
          {activeImage && (
            <img src={activeImage.src} alt={activeImage.title} />
          )}
        </div>
      </div>
    </div>
  );
}