"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import InstallPrompt from "../components/InstallPrompt";
import InstalledHome from "../components/InstalledHome";

export default function Home() {
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    setIsInstalled(window.matchMedia("(display-mode: standalone)").matches);
  }, []);
  return (
    <main className="">
      {!isInstalled ? <InstallPrompt /> : <InstalledHome />}
    </main>
  );
}
