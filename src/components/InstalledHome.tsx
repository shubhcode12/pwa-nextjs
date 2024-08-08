import Link from "next/link";
import { BorderBeam } from "./borderBeam";
import Lottie from "lottie-react";
import ForwordAnimation from "../../public/Forward.json";
import LinkCard from "./LinkCard";
import SparklesText from "./SparkleText";
import PulsatingButton from "./PulseButton";

const InstalledHome = () => {
  const tableData = [
    { recharge: "₹100-₹299", agentBonus: 38, downlineBonus: 30 },
    { recharge: "₹300-₹499", agentBonus: 128, downlineBonus: 50 },
    { recharge: "₹500-₹999", agentBonus: 188, downlineBonus: 100 },
    { recharge: "₹1000-₹4999", agentBonus: 288, downlineBonus: 150 },
    { recharge: "₹6000-₹Above", agentBonus: 388, downlineBonus: 248 },
  ];
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[url('/bg4.jpg')] bg-cover bg-center text-white p-5">
      <div className="flex flex-col items-center space-y-4">
        <div className="relative w-24 h-24">
          <img
            src="/logo.webp"
            alt="Bharat Club"
            className="object-cover rounded-2xl"
          />
          <BorderBeam
            className="rounded-2xl"
            size={250}
            duration={12}
            delay={9}
          />
        </div>
        <div className="mt-8 space-y-4 w-full max-w-lg text-center">
          <SparklesText className=" text-white font-bold" text="Bharat Club" />
          <h3 className="text-2xl text-white font-bold">
            Register Now And Get Upto 1000 ₹ On Upi
          </h3>
          <p className="text-white">
            To Clime Bonus Send Text To Bot Grab This Offer Now Offer Ends In
          </p>
        </div>
        <div className="flex">
          <div className="flex items-center p-4">
            <Lottie
              className="w-12"
              animationData={ForwordAnimation}
              loop={true}
            />
            <h3 className="text-black font-bold text-md">
              100% Winning Prediction
            </h3>
          </div>
          <div className="flex items-center p-4">
            <Lottie
              className="w-12"
              animationData={ForwordAnimation}
              loop={true}
            />
            <h3 className="text-black font-bold text-md">
              Sure Shot Prediction
            </h3>
          </div>
          <div className="flex items-center p-4">
            <Lottie
              className="w-12"
              animationData={ForwordAnimation}
              loop={true}
            />
            <h3 className="text-black font-bold text-md">Gurantee Winning</h3>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="border rounded-lg shadow overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr className="divide-x divide-gray-200">
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-bold text-black uppercase">
                        Downline 1st Recharge(Rs)
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-bold text-black uppercase">
                        Agent Bonus(Rs)
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-bold text-black uppercase">
                        Downline Bonus(Rs)
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {tableData.map((item, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">
                          {item.recharge}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                          {item.agentBonus}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                          {item.downlineBonus}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

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
          title="Join Telegram Channel - Get Exclusive Prediction & Offers | Get
                First deposit free"
          link="https://t.me/+9mXPglKssjcwMDdl"
        />
      </div>

      <div className="mt-8 text-center">
        <LinkIcon className="w-8 h-8 mx-auto" />
        <p className="mt-2">&copy; Bharatclub</p>
      </div>
    </div>
  );
};

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
      strokeLinejoin="round">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

function ShareIcon(props: any) {
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
      strokeLinejoin="round">
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" x2="12" y1="2" y2="15" />
    </svg>
  );
}

export default InstalledHome;
