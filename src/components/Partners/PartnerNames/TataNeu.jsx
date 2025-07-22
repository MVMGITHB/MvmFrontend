import Merge from "../Merge";

function TataNeu() {  
  const slides = [
    {
      image: "/images/tata.webp",
      offer: "Quick and contactless transactions every time",
      logo: "/images/tata_neu.webp",
      benifirst:'/images/tata_side_image.webp',
      benisec:'/images/tata_side_image.webp',
      keydesc:`Tata Neu’s credit card is a versatile choice, as it covers expenses among most of Tata Neu’s partner brands.-
With perks like contactless payment and interest free credit period, it offers convenience and flexibility for users. Additionally, cardholders can earn rewards points on their purchases which can be redeemed while shopping. So, if you want value for money, get this card. 
`,
      site:`https://www.tataneu.com/creditcard/`,
      pros: [
        "1% fuel surcharge waiver (max ₹500 per statement cycle)",
        "Contactless payment enabled",
        "₹1 crore accidental death cover",
        "8 complimentary domestic and 4 international lounge visits annually",
        "Up to 1.5% NeuCoins on UPI transactions using the Tata Neu UPI ID",
        "499 NeuCoins upon completing the first transaction"
      ]
      
    },
  ];

  return (
    <div >
      <Merge slides={slides} />
    </div>
  );
}

export default TataNeu;
