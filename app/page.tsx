import Footer from "../components/Footer";
import ContactInformation from "../components/ContactInformation";
import ProjectCarousels from "../components/ProjectCarousels";
import ResumeSkills from "../components/ResumeSkills";
import Introduction from "../components/Introduction";
import Menu from "@/components/Menu";

export default function Home() {
  return (
    <main className="h-screen snap-y snap-mandatory overflow-scroll z-0">
      <section id="introduction" className="mt-20 snap-center">
        <Introduction />
      </section>
      <section id="menu" className="mt-20 snap-center">
        <Menu />
      </section>
      <section className="mt-40 mb-100 snap-center">
        <ResumeSkills />
      </section>
      <section className="mt-40 snap-center">
        <ProjectCarousels />
      </section>
      <section className="mt-20 mb-40 snap-center">
        <ContactInformation />
      </section>
      <section className="mt-20 snap-center">
        <Footer />
      </section>
    </main>
  );
}
