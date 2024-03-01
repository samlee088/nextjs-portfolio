import Footer from "../components/Footer";
import ContactInformation from "../components/ContactInformation";
import ProjectCarousels from "../components/ProjectCarousels";
import ResumeSkills from "../components/ResumeSkills";
import Introduction from "../components/Introduction";
import Menu from "@/components/Menu";

export default function Home() {
  return (
    <main className="h-screen snap-y snap-mandatory overflow-scroll z-0">
      {/* Introduction Menu */}
      <section id="menu" className=" snap-center">
        <Menu />
      </section>

      {/* Introduction Section */}
      <section id="introduction" className="snap-center">
        <Introduction />
      </section>

      {/* Skills Section */}
      <section id="skills" className=" snap-start">
        <ResumeSkills />
      </section>

      {/* Project Carousel */}
      <section id="projects" className=" snap-center">
        <ProjectCarousels />
      </section>

      {/* Contact Information */}
      <section id="contact" className=" snap-start">
        <ContactInformation />
      </section>
      {/* <section className="snap-center">
      </section> */}
    </main>
  );
}
