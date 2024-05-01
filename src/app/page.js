import Scorecards from "@/components/Scorecards";
import SideNavbar from "@/components/SideNavbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <h1 className="tracking-tight text-center w-full text-3xl font-bold">Info Golf</h1>
      <Scorecards />
    </div>
  );
}


// API --> https://rapidapi.com/slashgolf/api/live-golf-data/
