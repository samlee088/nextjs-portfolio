import Footer from "../components/Footer";
import ContactInformation from "../components/ContactInformation";
import ProjectCarousels from "../components/ProjectCarousels";
import ResumeSkills from "../components/ResumeSkills";
import Introduction from "../components/Introduction";
import Menu from "@/components/Menu";

export default function Home() {
  return (
    <main>
      <section id="introduction" className="mt-20">
        <Introduction />
      </section>
      <section id="menu" className="mt-20">
        <Menu />
      </section>
      <section className="mt-40 mb-100">
        <ResumeSkills />
      </section>
      <section className="mt-40">
        <ProjectCarousels />
      </section>
      <section className="mt-20 mb-40">
        <ContactInformation />
      </section>
      <section className="mt-20">
        <Footer />
      </section>
    </main>
  );
}
