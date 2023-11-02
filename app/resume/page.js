"use client";
import { SEO } from "@/components";

export default function resume() {
  return (
    <>
      <SEO />
      <div className="bg-grey h-[100vh] flex justify-center items-center">
        <embed
          src="ShumNickResumeFall2023.pdf"
          height="100%"
          width="100%"
          type="application/pdf"
        />
      </div>
    </>
  );
}
