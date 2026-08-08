import React, { useState } from 'react';
import TestimonialCard from './TestimonialCard.jsx';
import { hashPassword, HASHED_PASSWORD } from '../supabaseClient';

export default function TestimonialsSection({ testimonials, loading, error, onDeleteTestimonial }) {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [targetId, setTargetId] = useState(null);
  const [passcode, setPasscode] = useState('');
  const [deleteError, setDeleteError] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const openDeleteModal = (id) => {
    setTargetId(id);
    setPasscode('');
    setDeleteError('');
    setShowDeleteModal(true);
  };

  const closeDeleteModal = () => {
    setShowDeleteModal(false);
    setTargetId(null);
    setPasscode('');
    setDeleteError('');
  };

  const confirmDelete = async () => {
    if (!targetId) return;
    setIsDeleting(true);
    setDeleteError('');

    const result = await onDeleteTestimonial(targetId, passcode.trim());

    if (result && result.error) {
      setDeleteError(result.error);
      setIsDeleting(false);
      return;
    }

    setIsDeleting(false);
    closeDeleteModal();
  };

  return (
    <section id="testimonials" className="section testimonials-section">
      <h2 className="section-title">آراء الزوار</h2>
      <div className="testimonials-card">
        <div className="testimonials-list">
          {loading && <div className="empty-testimonials">جارٍ تحميل الآراء...</div>}
          {!loading && error && <div className="empty-testimonials">{error}</div>}
          {!loading && !error && testimonials.length === 0 && (
            <div className="empty-testimonials">لا توجد آراء بعد.. كن أول من يشارك رأيه!</div>
          )}
          {!loading &&
            !error &&
            testimonials.map((item) => (
              <TestimonialCard
                key={item.id}
                testimonial={item}
                onOpenDelete={() => openDeleteModal(item.id)}
              />
            ))}
        </div>
      </div>

      {/* المودال المركزي الشامل الذي يغطي الشاشة بالكامل بدون أي قيود */}
      {showDeleteModal && (
        <div className="testimonial-delete-modal open" onClick={(e) => e.target === e.currentTarget && closeDeleteModal()}>
          <div className="testimonial-delete-panel" role="dialog" aria-modal="true" aria-label="حذف التعليق">
            <h4>حذف التعليق</h4>
            <input
              id="admin-passcode-input"
              className="delete-modal-field"
              type="password"
              placeholder="أدخل كلمة المرور"
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
              aria-label="كلمة المرور"
            />
            <p className="delete-modal-error">{deleteError}</p>
            <div className="delete-modal-actions">
              <button type="button" className="btn-cancel" onClick={closeDeleteModal}>إلغاء</button>
              <button type="button" className="btn-confirm" onClick={confirmDelete} disabled={isDeleting}>
                {isDeleting ? '...' : 'تأكيد'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}