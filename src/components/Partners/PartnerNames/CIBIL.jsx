import Merge from "../Merge";

function CIBIL() {
  const slides = [
    {
      image: "/images/cibillogo.webp",
      offer: "  Know Your Score. Own Your Future.",
      logo: "/images/cibilbanner.webp",
      benifirst:"/images/cibilads.webp",
      benisec:"/images/cibilads.webp",
      keydesc: `The top credit information provider in India is Credit Information Bureau (India) Limited, or CIBIL for short. Today, it is called TransUnion CIBIL. CIBIL was founded in 2000 and is overseen by the Reserve Bank of India (RBI). It gathers and keeps track of people's and companies' credit histories from banks and other financial institutions all around the nation. A person's creditworthiness is shown by their CIBIL Score, a three digit figure that ranges from 300 to 900. It also creates credit reports.`,
      site: `https://www.cibil.com/freecibilscore?utm_source=OMD&utm_medium=SM_MOH_%7baff_id%7d_%7bsub_aff_id%7d&utm_campaign=CIBIL_Free-Score_May25`,
      pros: [
        "Increased Chances of Credit Card and Loan Approval",
        "Quicker and More Effective Loan Choices",
        "Financial Knowledge and Self-Control",
       "Greater Access to Premium Credit Offers",
       "Improved Negotiation Power on Interest Rates"
      ]
      
    },
      ];

  return (
    <div >
      <Merge slides={slides} />
    </div>
  );
}

export default CIBIL;
