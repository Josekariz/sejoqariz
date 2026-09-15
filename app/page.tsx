import dynamic from "next/dynamic";
import { FloatingNav } from "@/components/FloatingNav";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import { navItems } from "@/data/idx";

const RecentProjects = dynamic(() => import("@/components/RecentProjects"));
const Clients = dynamic(() => import("@/components/Clients"));
const Experience = dynamic(() => import("@/components/Experience"));
const Approach = dynamic(() => import("@/components/Approach"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-x-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
