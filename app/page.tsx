import ContactInformation from "../components/ContactInformation";
import ProjectCarousels from "../components/ProjectCarousels";

export default function Home() {
  return (
    <main>
      <h1>Samuel Lee Coding Portfolio</h1>;
      <div className="mt-40">
        <ProjectCarousels />
      </div>
      <div className="mt-20 mb-40">
        <ContactInformation />
      </div>
    </main>
  );
}
