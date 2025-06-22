import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <div className="flex-center flex-col gap-4 h-[100vh]">
      <h1 className="text-4xl text-indigo-800">Hello, GSAP!</h1>
      <p>lorem ipsum</p>
    </div>
  );
};

export default App;
