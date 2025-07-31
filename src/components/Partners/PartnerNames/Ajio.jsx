import Merge from "../Merge";

function Ajio() {
  const slides = [
    {
      image: "/images/ajiologo.webp",
      offer: "AJIO – Your Daily Dose of Wow-Worthy Fashion",
      logo: "/images/ajiobanner.webp",
      keydesc: `  Reliance's well known online fashion store, AJIO, sells stylish yet reasonably priced apparel for men, women, and children. It offers a large selection of both Indian and foreign brands, fashionable collections, simple return policies, and regular deals. Customers who are interested in fashion frequent it because of its well chosen edits and premium brands.`,
      benifirst: "/images/ajiobenifit.webp",
      benisec: "/images/ajiobenifit.webp",
      site: `https://tracking.ajio.business/click?pid=87&offer_id=2&sub1=pass_your_subid%20&redirect=https://www.ajio.com/s/50to90percentoff-140961`,
      pros: [
        "Provides leading fashion brands from India and abroad.",
        "Regular sales, discounts, and pocketbook deals",
        "Updated frequently to reflect the newest collections and current trends.",
        "Easy filtering, seamless browsing, and speedy checkout",
        "Easy return and exchange procedures",
      ],
    },
  ];

  return (
    <div>
      <Merge slides={slides} />
    </div>
  );
}

export default Ajio;
