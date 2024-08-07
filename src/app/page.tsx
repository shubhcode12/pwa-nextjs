"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import InstallPrompt from "../components/InstallPrompt";
import InstalledHome from "../components/InstalledHome";

export default function Home() {
  const [isInstalled, setIsInstalled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);



  useEffect(() => {
    const checkInstallationStatus = () => {
      const installed = window.matchMedia("(display-mode: standalone)").matches;
      setIsInstalled(installed);
      setIsLoading(false);
    };

    checkInstallationStatus();
  }, []);
  return (
    <main className="">
      {isLoading ? (
        <ProgressBar />
      ) : !isInstalled ? (
        <InstallPrompt />
      ) : (
        <InstalledHome />
      )}
    </main>
  );
}
const ProgressBar = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative w-full max-w-lg">
        <div className="h-1.5 overflow-hidden rounded-full bg-gray-200">
          <div className="h-1.5 animate-progress-bar bg-primary"></div>
        </div>
      </div>
    </div>
  );
};