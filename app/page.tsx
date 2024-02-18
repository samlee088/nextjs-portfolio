import Footer from "../components/Footer";
import ContactInformation from "../components/ContactInformation";
import ProjectCarousels from "../components/ProjectCarousels";
import ResumeSkills from "../components/ResumeSkills";

export default function Home() {
  return (
    <main>
      <div className="mt-40 mb-100">
        <ResumeSkills />
      </div>
      <div className="mt-40">
        <ProjectCarousels />
      </div>
      <div className="mt-20 mb-40">
        <ContactInformation />
      </div>
      <div className="mt-20">
        <Footer />
      </div>
    </main>
  );
}
