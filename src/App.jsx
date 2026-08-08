import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import HeroSection from './components/HeroSection.jsx';
import AboutSection from './components/AboutSection.jsx';
import SkillsSection from './components/SkillsSection.jsx';
import ProjectsSection from './components/ProjectsSection.jsx';
import ContactSection from './components/ContactSection.jsx';
import TestimonialsSection from './components/TestimonialsSection.jsx';
import MockMateDetails from './components/MockMateDetails.jsx';
import { useTestimonials } from './hooks/useTestimonials';

function Home() {
  const { testimonials, loading, error, addTestimonial, deleteTestimonial } = useTestimonials();

  return (
    <div className="app-background">
      <div className="app-content">
        <Navbar />
        <main className="container">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection onAddTestimonial={addTestimonial} />
          <TestimonialsSection
            testimonials={testimonials}
            loading={loading}
            error={error}
            onDeleteTestimonial={deleteTestimonial}
          />
        </main>
        <footer>
          <p>
            <span dir="ltr">&copy; 2026</span> Developed By - Hazem Mahmoud
          </p>
        </footer>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project-details" element={<MockMateDetails />} />
      </Routes>
    </Router>
  );
}