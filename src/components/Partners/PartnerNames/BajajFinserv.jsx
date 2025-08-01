import Merge from "../Merge";

function BajajFinserv() {
  const slides = [
    { 
      image: "/images/bajaj.webp",
      offer: "Instant personal loans up to 50 lakhs",
      logo: "/images/BajajFinserv.png",
      keydesc: ` With Bajaj Finserv, you can get instant personal loans and also online.-

The affordable interest rates start from only 11% per annum, and allow clients to avail loans up to 50 lakh. Customers can also choose from Bajaj Markets’ vast range of lending partners as per their preferences. With this personal loan, manage all your personal finance needs without any worries.   
`,
benifirst:'/images/Bajaj Finserv (1).png',
benisec:'/images/Bajaj Finserv (1).png',
      site: `https://www.bajajfinservmarkets.in/apply-for-personal-loan-finservmarkets/`,
      pros: [
        "Personal Loan up to Rs.55 Lakh",
        "Online Procedure and Instant Approval",
        "Money in the bank within 24 hours",
        "No Collateral Needed",
        "Flexible Repayment Tenure",
        "Competitive Interest Rates"
      ]
      
    },
   
  ];

  return (
    <div>
      <Merge slides={slides} />
    </div>
  );
}

export default BajajFinserv;
