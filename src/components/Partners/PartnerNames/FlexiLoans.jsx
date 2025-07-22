import Merge from "../Merge";

function FlexiLoans() {
  const slides = [
    {
      image: "/images/flexi.webp",
      offer: "Get hassle free loans within 48 hours",
      logo: "/images/flexiloan.webp",
      benifirst:'/images/flexii.webp',
      benisec:'/images/flex.webp',
      keydesc: `Flexiloans offers, no collateral loans to MSME within 48 hours. These loans offer flexible tenure of 12 to 36 months with affordable interest rates starting from only 12% per year.-
The loan application is also simple with just three simple steps, and not to mention completely digital. All these perks ensure that clients don’t run into any cash flow problems or any other financial strain. `,
      site:`https://loans.flexiloans.com/?nlp=1&campaign_code=652fa4fbfof6e`,
      pros: [
        "Business Loan Upto Rs. 50Lakhs",
        "Loan Disbursal in 48 hours",
        "No collateral required",
        "Quick Disbursal",
        "Minimal Documentation",
        "Competitive Interest Rates"
      ]
      
    },
    
  ];

  return (
    <div >
      <Merge slides={slides} />
    </div>
  );
}

export default FlexiLoans;
