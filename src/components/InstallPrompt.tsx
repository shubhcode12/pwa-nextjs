import { useEffect, useState } from 'react';

const InstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstallButton, setShowInstallButton] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event: any) => {
      event.preventDefault();
      setDeferredPrompt(event);
      setShowInstallButton(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult: any) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the install prompt');
        } else {
          console.log('User dismissed the install prompt');
        }
        setDeferredPrompt(null);
        setShowInstallButton(false);
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <header className="mb-4 text-center">
        <h1 className="text-2xl text-black font-bold">Aviator India</h1>
        <p className="text-sm text-gray-600">4rabet India</p>
      </header>
      {showInstallButton && <button onClick={handleInstallClick} className="px-4 py-2 bg-blue-500 text-white rounded-lg">Install App</button>}
      <div className="mt-4">
        <img src="/next.svg" alt="Banner" className="w-full rounded-lg" />
      </div>
    </div>
  );
};

export default InstallPrompt;
