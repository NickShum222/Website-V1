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
    }, 100);
  }, []);
  return (
    <div className={``}>
      <div className=" bg-grey w-full overflow-hidden">
        {loading ? (
          <Loading />
        ) : (
          <div className=" bg-grey w-full overflow-hidden">
            <Navbar />
            <Sidebar />
            <Hero />
     

            <Projects />

            <Experience />
            <About />
            <Contact />
            <Footer />
          </div>
        )}
      </div>
    </div>
  );
}
