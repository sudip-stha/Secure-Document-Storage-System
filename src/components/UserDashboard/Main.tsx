import Aside from "./Aside";
import Section from "./Section";

const Main = () => {
  return (
    <div className="flex bg-overlay-surface pt-1.5">
      <Aside />
      <Section />
    </div>
  );
};

export default Main;
