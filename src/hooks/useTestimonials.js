import { useState, useEffect, useCallback } from 'react';
import { supabase, hashPassword, HASHED_PASSWORD } from '../supabaseClient';

export function useTestimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchTestimonials = useCallback(async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setTestimonials(Array.isArray(data) ? data : []);
      setError('');
    } catch (err) {
      console.error('فشل تحميل الآراء من Supabase:', err);
      setError('تعذر تحميل الآراء');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTestimonials();
  }, [fetchTestimonials]);

  const addTestimonial = useCallback(
    async (testimonialData) => {
      try {
        const name = testimonialData?.name;
        const message = testimonialData?.message || testimonialData?.text;

        if (!name || !message) {
          console.error('الاسم أو الرسالة غير مكتملة');
          return false;
        }

        const { error } = await supabase.from('testimonials').insert([
          {
            name,
            message,
            created_at: new Date().toISOString()
          }
        ]);

        if (error) throw error;
        await fetchTestimonials();
        return true;
      } catch (err) {
        console.error('فشل إرسال الرأي إلى Supabase:', err);
        return false;
      }
    },
    [fetchTestimonials]
  );

  const deleteTestimonial = useCallback(
    async (id, passcode) => {
      if (!id) return false;

      const hashed = await hashPassword(passcode);
      if (hashed !== HASHED_PASSWORD) {
        return { error: 'كلمة المرور غير صحيحة' };
      }

      try {
        const { error } = await supabase.from('testimonials').delete().eq('id', id);
        if (error) throw error;
        await fetchTestimonials();
        return { success: true };
      } catch (err) {
        console.error('فشل حذف الرأي من Supabase:', err);
        return { error: 'تعذر حذف الرأي' };
      }
    },
    [fetchTestimonials]
  );

  return { testimonials, loading, error, fetchTestimonials, addTestimonial, deleteTestimonial };
}