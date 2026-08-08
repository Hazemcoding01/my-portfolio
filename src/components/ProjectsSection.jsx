import { Link } from 'react-router-dom';
import projectImg from '../assets/images/project 1.jpeg';

export default function ProjectsSection() {
  return (
    <section id="projects" className="section projects-section">
      <h2 className="section-title">أحدث المشاريع</h2>
      <p className="section-subtitle">نماذج من أعمالي وتطبيقات الويب التي قمت ببنائها</p>

      <div className="projects-grid">
        <div className="project-card">
          <img src={projectImg} alt="MockMate Dashboard" className="project-img" />
          <div className="project-content">
            <h3 className="project-title">MockMate AI – Admin Panel</h3>
            <p className="project-desc">
              لوحة تحكم إدارية خاصة بمشرفي النظام لإدارة الأسئلة، المسارات التدريبية، ومتابعة المقابلات المنجزة.
            </p>
            <div className="project-tags">
              <span className="tag">REST APIs</span>
              <span className="tag">CSS3</span>
              <span className="tag">HTML5</span>
            </div>
            <div className="project-links">
              <Link to="/project-details" className="card-btn primary">
                عرض التفاصيل والصور
              </Link>
              <a
                href="https://github.com/Hazemcoding01/MockMate-DashBoard-vg.2"
                target="_blank"
                rel="noopener noreferrer"
                className="card-btn"
              >
                الكود على GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}