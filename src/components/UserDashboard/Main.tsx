import Aside from "./Aside";
import Section from "./section/Section";

const Main = () => {
  return (
    <main className="flex bg-overlay-surface pt-1.5">
      <Aside />
      <Section />
    </main>
  );
};

export default Main;
