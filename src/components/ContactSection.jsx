import React, { useState } from 'react';
import './ContactSection.css';

export default function ContactSection({ onAddTestimonial }) {
  const [name, setName] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !feedback.trim()) return;

    if (onAddTestimonial) {
      onAddTestimonial({ name, text: feedback });
    }
    setName('');
    setFeedback('');
  };

  return (
    <section id="contact" className="exact-contact-section">
      <h2 className="exact-title">تواصل معي</h2>
      <p className="exact-subtitle">
        أهلاً بك! شاركني رأيك وانطباعك للتطوير، وللتواصل المباشر يمكنك استخدام الروابط أدناه.
      </p>

      <div className="exact-outer-box">
        {/* جهة اليمين: النموذج */}
        <form className="exact-form" onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="الاسم"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <textarea
              placeholder="ادعمني برأيك هنا..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit" className="exact-submit-btn">
            إرسال الرأي
          </button>
        </form>

        {/* جهة اليسار: الأيقونات */}
        <div className="exact-social-card">
          <div className="exact-social-grid">
            <a
              href="https://wa.me/201092984711"
              target="_blank"
              rel="noopener noreferrer"
              className="exact-tile"
              title="WhatsApp"
            >
              <svg viewBox="0 0 24 24">
                <path
                  fill="#25D366"
                  d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.758.459 3.474 1.33 4.982L2 22l5.133-1.343a9.963 9.963 0 004.877 1.277h.005c5.505 0 9.989-4.477 9.99-9.983A9.925 9.925 0 0018.08 4.918 9.921 9.921 0 0012.012 2zm5.836 14.165c-.247.692-1.229 1.267-1.7 1.31-.471.042-1.077.206-3.568-.783-2.986-1.186-4.908-4.218-5.058-4.417-.149-.198-1.21-1.611-1.21-3.073 0-1.462.766-2.181 1.038-2.478.272-.298.593-.371.791-.371.198 0 .396.001.568.01.183.009.431-.07.674.515.247.593.841 2.052.915 2.201.074.148.124.321.025.519-.099.198-.149.321-.297.495-.148.173-.312.387-.446.519-.148.148-.302.309-.129.605.173.297.771 1.274 1.656 2.062 1.137 1.012 2.095 1.325 2.392 1.473.297.148.47.124.643-.074.173-.198.742-.865.94-1.162.198-.297.396-.247.667-.148.272.099 1.73.816 2.027.964.297.148.495.222.568.346.074.124.074.717-.173 1.409z"
                />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/hazem-mahmoud-3790b341b"
              target="_blank"
              rel="noopener noreferrer"
              className="exact-tile"
              title="LinkedIn"
            >
              <svg viewBox="0 0 24 24">
                <path
                  fill="#0A66C2"
                  d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"
                />
              </svg>
            </a>

            <a
              href="https://github.com/Hazemcoding01"
              target="_blank"
              rel="noopener noreferrer"
              className="exact-tile"
              title="GitHub"
            >
              <svg viewBox="0 0 24 24">
                <path
                  fill="#FFFFFF"
                  d="M12 2C6.477 2 2 6.585 2 12.253c0 4.53 2.865 8.373 6.839 9.728.5.093.683-.218.683-.484 0-.237-.009-.868-.014-1.703-2.782.606-3.369-1.342-3.369-1.342-.455-1.157-1.11-1.465-1.11-1.465-.908-.621.069-.608.069-.608 1.004.071 1.532 1.032 1.532 1.032.893 1.53 2.341 1.088 2.912.832.091-.647.35-1.088.636-1.338-2.221-.253-4.555-1.112-4.555-4.947 0-1.092.39-1.987 1.029-2.687-.103-.253-.446-1.272.097-2.65 0 0 .84-.269 2.75 1.025A9.565 9.565 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.748-1.025 2.748-1.025.544 1.378.201 2.397.099 2.65.642.7 1.028 1.595 1.028 2.687 0 3.842-2.338 4.691-4.566 4.94.359.31.68.924.68 1.861 0 1.343-.012 2.425-.012 2.754 0 .269.18.582.688.483A10.006 10.006 0 0 0 22 12.253C22 6.585 17.523 2 12 2Z"
                />
              </svg>
            </a>

            <a
              href="https://www.facebook.com/share/1Dcax13VGA/"
              target="_blank"
              rel="noopener noreferrer"
              className="exact-tile"
              title="Facebook"
            >
              <svg viewBox="0 0 24 24">
                <path
                  fill="#1877F2"
                  d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}