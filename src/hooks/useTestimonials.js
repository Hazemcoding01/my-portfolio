import { useState, useEffect, useCallback } from 'react';
import { supabase, hashPassword, HASHED_PASSWORD } from '../supabaseClient';

// لو السيرفر مش بيرد (مثلاً مشروع Supabase موقوف) لا نترك الواجهة معلّقة للأبد
const REQUEST_TIMEOUT_MS = 12000;

const NETWORK_ERROR_MESSAGE =
  'تعذر الاتصال بالخادم الآن، تأكد من الإنترنت وحاول مرة أخرى بعد قليل. رسالتك ما زالت في النموذج ولم تُمسح.';
const GENERIC_ERROR_MESSAGE = 'حدث خطأ أثناء حفظ رأيك، حاول مرة أخرى لاحقاً.';

const isNetworkError = (err) =>
  /abort|fetch|network|timeout|load failed/i.test(`${err?.name || ''} ${err?.message || ''}`);

function createTimeout() {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
  return { signal: controller.signal, clear: () => clearTimeout(timer) };
}

export function useTestimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchTestimonials = useCallback(async () => {
    const timeout = createTimeout();
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .order('created_at', { ascending: false })
        .abortSignal(timeout.signal);

      if (error) throw error;
      setTestimonials(Array.isArray(data) ? data : []);
      setError('');
    } catch (err) {
      console.error('فشل تحميل الآراء من Supabase:', err);
      setError('تعذر تحميل الآراء');
    } finally {
      timeout.clear();
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTestimonials();
  }, [fetchTestimonials]);

  // تُرجع { ok: true } عند النجاح أو { ok: false, error: 'رسالة للمستخدم' } عند الفشل
  const addTestimonial = useCallback(
    async (testimonialData) => {
      const name = testimonialData?.name?.trim();
      const message = (testimonialData?.message || testimonialData?.text)?.trim();

      if (!name || !message) {
        return { ok: false, error: 'من فضلك اكتب الاسم والرأي قبل الإرسال.' };
      }

      const timeout = createTimeout();
      try {
        const { error } = await supabase
          .from('testimonials')
          .insert([{ name, message, created_at: new Date().toISOString() }])
          .abortSignal(timeout.signal);

        if (error) throw error;
      } catch (err) {
        console.error('فشل إرسال الرأي إلى Supabase:', err);
        return { ok: false, error: isNetworkError(err) ? NETWORK_ERROR_MESSAGE : GENERIC_ERROR_MESSAGE };
      } finally {
        timeout.clear();
      }

      // الرأي اتحفظ بنجاح. تحديث القائمة فشله لا يعني فشل الإرسال.
      await fetchTestimonials();
      return { ok: true };
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
