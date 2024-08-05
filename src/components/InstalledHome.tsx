const InstalledHome = () => (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
        <div className="banner mb-4">
          <img src="/next.svg" alt="Banner" className="w-full rounded-lg" />
        </div>
        <div className="grid grid-cols-1 gap-4">
          <Card title="Huge Winnings" subtitle="1.26x" icon="/icon1.png" link="#" />
          <Card title="Fast Payouts" subtitle="21x" icon="/icon2.png" link="#" />
          <Card title="Bonus" subtitle="up to 700%" icon="/icon3.png" link="#" />
        </div>
      </div>
    </div>
  );
  
  const Card = ({ title, subtitle, icon, link }: { title: string; subtitle: string; icon: string; link: string }) => (
    <a href={link} className="block bg-gray-100 rounded-lg shadow p-4 text-center hover:bg-gray-200">
      <img src={icon} alt={`${title} icon`} className="w-12 h-12 mx-auto mb-2" />
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-sm text-gray-600">{subtitle}</p>
    </a>
  );
  
  export default InstalledHome;
  