import { DESIGN_WORKS, BEHANCE_URL } from '../data/designWorks.js';
import { IconExternal } from './Icons.jsx';

export default function DesignSection() {
  return (
    <section id="design" className="section design-section">
      <h2 className="section-title">أعمال التصميم</h2>
      <p className="section-subtitle">هويات بصرية وتصميمات سوشيال ميديا ومطبوعات، وهذه نماذج من أعمالي كمصمم جرافيك</p>

      {DESIGN_WORKS.length > 0 && (
        <div className="design-grid">
          {DESIGN_WORKS.map((work) => {
            const content = (
              <>
                <img src={work.image} alt={work.imageAlt} loading="lazy" decoding="async" />
                <figcaption>
                  <strong>{work.title}</strong>
                  {work.category && <span>{work.category}</span>}
                </figcaption>
              </>
            );
            return (
              <figure className="design-card" key={work.id}>
                {work.href ? (
                  <a href={work.href} target="_blank" rel="noopener noreferrer" aria-label={`${work.title} على Behance`}>
                    {content}
                  </a>
                ) : (
                  content
                )}
              </figure>
            );
          })}
        </div>
      )}

      <div className="design-cta">
        <p>شاهد مجموعة أعمالي الكاملة وتفاصيل كل مشروع على Behance.</p>
        <a className="design-cta-btn" href={BEHANCE_URL} target="_blank" rel="noopener noreferrer">
          <span>شاهد أعمالي على Behance</span>
          <IconExternal />
        </a>
      </div>
    </section>
  );
}
