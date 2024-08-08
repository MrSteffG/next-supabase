import Functionality from "./components/Functionality";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="flex h-full w-full flex-col">
      <Navbar />
      <Functionality />
    </div>
  );
}
