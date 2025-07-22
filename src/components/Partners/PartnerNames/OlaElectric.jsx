import Merge from "../Merge";

function OlaElectric() {
  const slides = [
    {
      image: "/images/ola logo.png",
      offer: "The Future of motorcycling is here",
      logo: "/images/ola banner.webp",
      benifirst: "/images/ola benifit.webp",
      benisec: "/images/ola benifit.webp",
      keydesc: `Ola Electric, the EV division of Ola, has entered the electric motorbike market following its success with electric scooters such as the Ola S1 and S1 Pro, With the goal of revolutionizing the two wheeler market in India, the company has formally announced its intentions to introduce a range of electric motorcycles.`,
      site: `https://spectrum.gotrackier.com/click?campaign_id=1720&pub_id=375`,
      pros: [
        "150–200+ km per charge—great for both city and highway rides.",
        "Quick top-ups via Ola’s Hypercharger network.",
        "₹1 crore accidental death cover",
        "Cheaper than petrol with minimal maintenance.",
        "Zero emissions for a greener, cleaner ride.",
      ],
    },
  ];

  return (
    <div>
      <Merge slides={slides} />
    </div>
  );
}

export default OlaElectric;
