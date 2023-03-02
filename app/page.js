"use client";
import { Footer, Navbar, Sidebar, Loading } from "../components";
import { About, Hero, Projects, Experience, Contact } from "../sections";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 6000);
  }, []);
  return (
    <div className=" bg-primary w-full overflow-hidden">
      {loading ? (
        <Loading />
      ) : (
        <div className=" bg-primary w-full overflow-hidden">
          
          <Navbar />
          <Sidebar />
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Contact />
          <Footer />
        </div>
      )}
    </div>
  );
}
