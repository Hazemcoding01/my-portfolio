import React, { useState } from 'react';
import './ContactSection.css';
import { SITE } from '../data/siteData.js';
import {
  IconWhatsApp,
  IconLinkedIn,
  IconGitHub,
  IconFacebook,
  IconMail,
  IconDownload,
} from './Icons.jsx';

const SOCIALS = [
  { key: 'wa', label: 'WhatsApp', href: SITE.whatsapp, Icon: IconWhatsApp },
  { key: 'in', label: 'LinkedIn', href: SITE.linkedin, Icon: IconLinkedIn },
  { key: 'gh', label: 'GitHub', href: SITE.github, Icon: IconGitHub },
  { key: 'fb', label: 'Facebook', href: SITE.facebook, Icon: IconFacebook },
].filter((item) => item.href);

export default function ContactSection({ onAddTestimonial }) {
  const [name, setName] = useState('');
  const [feedback, setFeedback] = useState('');
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [message, setMessage] = useState('');

  const resetStatus = () => {
    if (status !== 'idle' && status !== 'sending') {
      setStatus('idle');
      setMessage('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === 'sending') return;

    if (!name.trim() || !feedback.trim()) {
      setStatus('error');
      setMessage('من فضلك اكتب الاسم والرأي قبل الإرسال.');
      return;
    }

    if (!onAddTestimonial) {
      setStatus('error');
      setMessage('الإرسال غير متاح حالياً.');
      return;
    }

    setStatus('sending');
    setMessage('');

    let result;
    try {
      result = await onAddTestimonial({ name, text: feedback });
    } catch {
      result = { ok: false };
    }

    if (result?.ok) {
      // لا نمسح الحقول إلا بعد نجاح الإرسال فعلاً
      setName('');
      setFeedback('');
      setStatus('success');
      setMessage('تم إرسال رأيك بنجاح، شكراً لك!');
    } else {
      setStatus('error');
      setMessage(result?.error || 'تعذر إرسال رأيك الآن، حاول مرة أخرى بعد قليل. رسالتك ما زالت في النموذج.');
    }
  };

  return (
    <section id="contact" className="exact-contact-section">
      <h2 className="exact-title">تواصل معي</h2>
      <p className="exact-subtitle">
        أهلاً بك! شاركني رأيك وانطباعك للتطوير، وللتواصل المباشر يمكنك استخدام الروابط أدناه.
      </p>

      <div className="exact-outer-box">
        {/* جهة اليمين: النموذج */}
        <form className="exact-form" onSubmit={handleSubmit} aria-busy={status === 'sending'}>
          <div>
            <label htmlFor="review-name">الاسم</label>
            <input
              id="review-name"
              name="name"
              type="text"
              placeholder="الاسم"
              autoComplete="name"
              maxLength={60}
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                resetStatus();
              }}
              required
            />
          </div>
          <div>
            <label htmlFor="review-message">رأيك</label>
            <textarea
              id="review-message"
              name="message"
              placeholder="ادعمني برأيك هنا..."
              maxLength={500}
              value={feedback}
              onChange={(e) => {
                setFeedback(e.target.value);
                resetStatus();
              }}
              required
            ></textarea>
          </div>
          <button type="submit" className="exact-submit-btn" disabled={status === 'sending'}>
            {status === 'sending' ? 'جارٍ الإرسال...' : 'إرسال الرأي'}
          </button>
          <p
            className={`form-status ${status}`}
            role={status === 'error' ? 'alert' : 'status'}
            aria-live={status === 'error' ? 'assertive' : 'polite'}
          >
            {message}
          </p>
        </form>

        {/* جهة اليسار: الأيقونات */}
        <div className="exact-social-card">
          <div className="exact-social-grid">
            {SOCIALS.map(({ key, label, href, Icon }) => (
              <a
                key={key}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`exact-tile ${key}`}
                title={label}
                aria-label={label}
              >
                <Icon />
              </a>
            ))}
          </div>

          {(SITE.email || SITE.cv) && (
            <div className="contact-actions">
              {SITE.email && (
                <a className="contact-action" href={`mailto:${SITE.email}`}>
                  <IconMail />
                  <span>راسلني بالبريد</span>
                </a>
              )}
              {SITE.cv && (
                <a className="contact-action secondary" href={SITE.cv} download>
                  <IconDownload />
                  <span>تحميل السيرة الذاتية</span>
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
