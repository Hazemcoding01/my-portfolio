import mockmateImg from '../assets/images/project 1.jpeg';
import portfolioCover from '../assets/images/portfolio-cover.svg';

/*
  قائمة المشاريع. لإضافة مشروع جديد انسخ أحد العناصر وعدّل بياناته:

  {
    id: 'my-new-project',          // اسم فريد بالإنجليزي
    title: 'اسم المشروع',
    description: 'وصف قصير من سطرين.',
    tags: ['React.js', 'Vite'],
    image: myImage,                // import من src/assets/images/
    imageAlt: 'وصف الصورة للقارئ الشاشي',
    details: '/project-details',   // مسار صفحة التفاصيل (أو null)
    github: 'https://github.com/...',
    live: 'https://...',           // رابط التجربة المباشرة (أو null)
  }

  لمشروع قيد التنفيذ استخدم status: 'soon' وسيظهر ككارت باهت بدون روابط.
  احذف الكارت التجريبي بالأسفل عندما تضيف مشروعك الحقيقي.
*/
export const PROJECTS = [
  {
    id: 'mockmate-admin',
    title: 'MockMate AI – Admin Panel',
    description:
      'لوحة تحكم إدارية خاصة بمشرفي النظام لإدارة الأسئلة، المسارات التدريبية، ومتابعة المقابلات المنجزة.',
    tags: ['REST APIs', 'CSS3', 'HTML5'],
    image: mockmateImg,
    imageAlt: 'لقطة شاشة من لوحة تحكم MockMate AI الإدارية',
    details: '/project-details',
    github: 'https://github.com/Hazemcoding01/MockMate-DashBoard-vg.2',
    live: null,
  },
  {
    id: 'portfolio-react',
    title: 'Portfolio Website – React',
    description:
      'موقع البورتفوليو الشخصي الذي تتصفحه الآن، مبني بـ React وVite مع React Router وقاعدة بيانات Supabase لآراء الزوار.',
    tags: ['React.js', 'Vite', 'React Router', 'Supabase'],
    image: portfolioCover,
    imageAlt: 'غلاف مشروع موقع البورتفوليو المبني بـ React',
    details: null,
    github: 'https://github.com/Hazemcoding01/my-portfolio',
    live: null,
  },
  {
    id: 'next-react-project',
    status: 'soon',
    title: 'مشروع React جديد',
    description: 'قيد التنفيذ، سيتم إضافته هنا قريباً.',
    tags: ['React.js'],
    image: null,
    imageAlt: '',
    details: null,
    github: null,
    live: null,
  },
];
