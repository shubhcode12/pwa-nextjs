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
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Aviator India</h1>
        <p className="text-xl text-gray-600 mb-4">4rabet India</p>
        {(
          <button onClick={handleInstallClick} className="px-6 py-2 bg-green-500 text-white rounded-lg">
            Install
          </button>
        )}
      </header>
      <div className="w-full max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
        <div className="flex flex-col items-center mb-4">
          <img src="/icon.png" alt="App Icon" className="w-16 h-16 mb-2" />
          <h2 className="text-2xl font-semibold">Aviator India</h2>
          <p className="text-gray-600">4rabet India</p>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <Card title="Huge Winnings" subtitle="1.26x" icon="/icon1.png" />
          <Card title="Fast Payouts" subtitle="21x" icon="/icon2.png" />
          <Card title="Bonus" subtitle="up to 700%" icon="/icon3.png" />
        </div>
      </div>
    </div>
  );
};

const Card = ({ title, subtitle, icon }: { title: string; subtitle: string; icon: string }) => (
  <div className="flex items-center p-4 bg-gray-100 rounded-lg shadow">
    <img src={icon} alt={`${title} icon`} className="w-12 h-12 mr-4" />
    <div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-600">{subtitle}</p>
    </div>
  </div>
);

export default InstallPrompt;
