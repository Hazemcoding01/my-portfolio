import { useState } from 'react';
import { formatDate, escapeHtml } from '../supabaseClient';

export default function TestimonialCard({ testimonial, onOpenDelete }) {
  const [isHovered, setIsHovered] = useState(false);
  const initials = testimonial.name.trim().charAt(0).toUpperCase() || 'ز';

  return (
    <article
      className="testimonial-card"
      data-id={testimonial.id}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="testimonial-quote">“</span>
      <div className="testimonial-header">
        <div className="testimonial-user">
          <div className="testimonial-avatar">{escapeHtml(initials)}</div>
          <div>
            <p className="testimonial-name">{escapeHtml(testimonial.name)}</p>
            <span className="testimonial-date">{formatDate(testimonial.created_at)}</span>
          </div>
        </div>
      </div>
      <p className="testimonial-message">{escapeHtml(testimonial.message)}</p>

      <button
        className={`testimonial-delete ${isHovered ? 'visible' : ''}`}
        type="button"
        onClick={onOpenDelete}
        aria-label="حذف الرأي"
      >
        حذف
      </button>
    </article>
  );
}