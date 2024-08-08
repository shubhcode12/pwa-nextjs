import { BorderBeam } from "./borderBeam";
import Lottie from "lottie-react";
import ForwordAnimation from "../../public/Forward.json";
import LinkCard from "./LinkCard";
import SparklesText from "./SparkleText";

const InstalledHome = () => {
  return (
    <div className="flex flex-col w-full items-center justify-center min-h-screen bg-[url('/bg4.jpg')] bg-cover bg-bottom text-white p-5">
      {/* Header Start */}
      <div className="flex flex-col items-center space-y-4">
        <div className="relative w-24 h-24">
          <img
            src="/logo.webp"
            alt="Bharat Club"
            className="object-cover rounded-3xl"
          />
        </div>

        <div className="mt-8 space-y-4 w-full text-center">
          <SparklesText className="text-white font-bold" text="Bharat Club" />
          <h3 className="text-2xl text-white font-bold">
            Register Now And Get Upto 1000 ₹ On Upi
          </h3>
          <p className="text-white">
            To Clime Bonus Send Text To Bot Grab This Offer Now Offer Ends In
          </p>
        </div>

       


        <div className="flex flex-col md:flex-row items-center justify-center text-md font-normal">
          <div className="md:mr-4 mb-2 md:mb-0">
            &#x2705; 100% Winning Prediction
          </div>
          <div className="md:mr-4 mb-2 md:mb-0">
            &#x2705; Sure Shot Prediction
          </div>
          <div className="md:mr-4 mb-2 md:mb-0">&#x2705; Guarantee Winning</div>
        </div>
    

      </div>
      {/* Header End */}

      {/* Bonus Banner Start */}
      <div className="rounded-xl mt-4">
        <img
          src="./bonus.png"
          className="w-full max-w-md border border-gray-100 rounded-xl"
          alt="Bonus"
        />
      </div>
      {/* Bonus Banner End */}

      {/* Link Cards Start */}
      <div className="mt-8 space-y-4 w-full max-w-md">
        <LinkCard
          icon="/logo.webp"
          title="Join Bharatclub Now - Get instant Bonus on First Deposit"
          link="https://bharatclub.pro/#/register?invitationCode=56367247975"
        />

        <LinkCard
          icon="/telegram.jpg"
          title="Verify Registeration"
          link="https://t.me/bht_gift_code_bot"
        />

        <LinkCard
          icon="/telegram.jpg"
          title="Join Telegram Channel - Get Exclusive Prediction & Offers | Get First deposit free"
          link="https://t.me/+9mXPglKssjcwMDdl"
        />
      </div>
      {/* Link Cards End */}

      <div className="mt-8 text-center">
        <LinkIcon className="w-8 h-8 mx-auto" />
        <p className="mt-2">&copy; Bharatclub</p>
      </div>
    </div>
  );
};


// LinkIcon Component
function LinkIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

export default InstalledHome;
