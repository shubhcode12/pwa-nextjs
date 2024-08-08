import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const InstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event: any) => {
      event.preventDefault();
      setDeferredPrompt(event);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  const handleInstallClick = () => {

    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult: any) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the install prompt");
          setDeferredPrompt(null);
          window.location.reload();
        } else {
          console.log("User dismissed the install prompt");
        }
        setDeferredPrompt(null);
      });
    }
  };

  const handleShareClick = () => {
    if (navigator.share) {
      navigator.share({
        title: "Bharat Club",
        text: "Check out this amazing app!",
        url: window.location.href
      }).then(() => {
        console.log("Thanks for sharing!");
      }).catch((error) => {
        console.log("Share failed:", error);
      });
    } else {
     toast("Sharing not supported on this device.")
    }
  };

  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <ToastContainer />
      <div className="w-full max-w-4xl mx-auto p-4">
        <div className="container mx-auto p-4 md:p-8">
          <header className="flex flex-col md:flex-row items-start text-left space-y-4 md:space-y-0 md:space-x-4">
            <img src="/logo.webp" className="w-24 rounded-md" alt="App Logo" />
            <div>
              <h1 className="text-2xl md:text-3xl text-black font-bold">
                Bharat Club
              </h1>
              <div className="flex flex-wrap items-center space-x-2 mt-2">
                <span className="text-sm text-gray-600">Bharatclub Inc</span>
                <div className="inline-flex text-gray-600 items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-primary text-primary-foreground">
                  Contains ads
                </div>
              </div>
              <div className="flex flex-wrap items-center space-x-2 mt-2">
                <span className="text-lg text-gray-600 font-semibold">4.5</span>
                <span className="text-sm text-gray-600">1.56K reviews</span>
                <span className="text-sm text-gray-600">100K+ downloads</span>
                <div className="inline-flex text-gray-600 items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-primary text-primary-foreground">
                  Everyone
                </div>
              </div>
            </div>
          </header>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 mt-4">
            <button
              onClick={handleInstallClick}
              className="inline-flex bg-black items-center justify-center whitespace-nowrap rounded-md text-sm text-white font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full md:w-auto">
              Install
            </button>
            <button onClick={handleShareClick} className="inline-flex bg-black items-center justify-center whitespace-nowrap rounded-md text-sm text-white font-medium border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full md:w-auto">
              Share
            </button>
          </div>
          <section className="mt-8">
            <h2 className="text-2xl text-black font-bold">About this app</h2>
            <p className="mt-2 text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              non fringilla magna. Nam sit amet ultrices massa, nec vestibulum
              velit. Aliquam semper ipsum eu dapibus faucibus. Morbi non lacinia
              lorem, in tempor tortor. Nullam lorem lorem, maximus eu tristique
              vitae, vulputate in metus.
            </p>
            <div className="mt-8">
              <h2 className="text-2xl text-black font-bold">Screenshots</h2>
              <div className="flex overflow-x-auto space-x-4">
                <div className="flex-none w-64 p-2">
                  <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                    <img
                      src="/1.png"
                      alt="Feature 1"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-none w-64 p-2">
                  <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                    <img
                      src="/2.png"
                      alt="Feature 2"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-none w-64 p-2">
                  <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
                    <img
                      src="/3.png"
                      alt="Feature 3"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="mt-8">
            <h2 className="text-2xl text-black font-bold">Data safety</h2>
            <p className="mt-2 text-gray-600">
              Safety starts with understanding how developers collect and share
              your data. Data privacy and security practices may vary based on
              your use, region, and age. The developer provided this information
              and may update it over time.
            </p>
            <div className="mt-4">
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4">
                <h3 className="text-lg text-black font-bold">
                  No data shared with third parties
                </h3>
                <p className="text-gray-600">
                  Learn more about how developers declare collection
                </p>
              </div>
            </div>
          </section>
          <section className="mt-8">
            <h2 className="text-2xl text-black font-bold">
              Ratings and reviews
            </h2>
            <div className="flex items-center space-x-4 mt-4">
              <span className="text-3xl text-gray-600 font-bold">3.5</span>
              <div className="flex-1">
                <p className="text-sm text-gray-600">1.56K reviews</p>
              </div>
            </div>
            <div className="mt-4">
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4">
                <div className="flex items-center space-x-4">
                  <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                    <img
                      className="aspect-square h-full w-full"
                      alt="User 1"
                      src="user.png"
                    />
                  </span>
                  <div>
                    <h3 className="text-lg text-black font-bold">
                      Keith White
                    </h3>
                    <p className="text-sm text-gray-600">5 June 2024</p>
                    <p className="mt-2 text-gray-600">
                      BharatClub - Highly recommanded app. I will rate 5 stars.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-4 mt-4">
                <div className="flex items-center space-x-4">
                  <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                    <img
                      className="aspect-square h-full w-full"
                      alt="User 2"
                      src="/user.png"
                    />
                  </span>
                  <div>
                    <h3 className="text-lg text-black font-bold">
                      Jaharabe Ashraf
                    </h3>
                    <p className="text-sm text-gray-600">3 July 2024</p>
                    <p className="mt-2 text-gray-600">
                      Bharatclub is best gaming app
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default InstallPrompt;
