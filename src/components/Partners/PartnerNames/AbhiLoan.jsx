import Merge from "../Merge";

function AbhiLoan() {
  const slides = [
    { 
      image: "/images/abhiloans.webp",
      offer: "Quick loans in only 10 seconds",
      logo: "/images/abhi_banner.webp",
      keydesc: ` Abhi Loans is a rapidly expanding, technology driven lending platform in India that aims to provide underserved and new to credit (NTC) people with quick, easy personal and business loans. Abhi Loans makes borrowing quick, easy, and safe, whatever your situation—whether you're a small company owner, freelance worker, or someone in dire need of money.
`,
benifirst:'/images/abhi.webp',
benisec:'/images/abhi.webp',
      site: `https://spectrum.gotrackier.com/click?campaign_id=772&pub_id=376`,
      pros: [
        "Quick online application process that takes only a few minutes to approve.",
        "KYC is entirely digital and requires little paperwork.",
        "Perfect for small enterprises or people who are new to credit (NTC).",
        "Alternative data and transaction history are frequently used to provide loans.",
      ]
      
    },
   
  ];

  return (
    <div>
      <Merge slides={slides} />
    </div>
  );
}

export default AbhiLoan;
