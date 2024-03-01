import Footer from "../components/Footer";
import ContactInformation from "../components/ContactInformation";
import ProjectCarousels from "../components/ProjectCarousels";
import ResumeSkills from "../components/ResumeSkills";
import Introduction from "../components/Introduction";
import Menu from "@/components/Menu";

export default function Home() {
  return (
    <main className="h-screen snap-y snap-mandatory overflow-scroll z-0 scrollbar scrollbar-track-[#32006e] scrollbar-thumb-[#ffc700]">
      {/* Introduction Menu */}
      <section id="menu" className=" snap-center">
        <Menu />
      </section>

      {/* Introduction Section */}
      <section id="introduction" className="snap-center">
        <Introduction />
      </section>

      {/* Skills Section */}
      <section id="skills" className=" snap-center">
        <ResumeSkills />
      </section>

      {/* Project Carousel */}
      <section id="projects" className=" snap-center">
        <ProjectCarousels />
      </section>

      {/* Contact Information */}
      <section id="contact" className=" snap-center">
        <ContactInformation />
      </section>

      {/* Footer Section */}
      <footer className="sticky bottom-5 w-full cursor-pointer">
        <Footer />
      </footer>
    </main>
  );
}
