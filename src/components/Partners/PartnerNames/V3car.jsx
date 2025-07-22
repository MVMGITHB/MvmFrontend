import Merge from "../Merge";

function V3car() {
  const slides = [
    {
      image: "/images/v3carslogo.webp",
      offer: "V3 Cars: Sell cars quickly with instant quotes ",
      logo: "/images/CenterV33.webp",
      keydesc: `V3 Cars allows you to sell your car quickly, easily, and conveniently. With their platform, you can list your vehicle, reach genuine buyers, and receive competitive offers without any unnecessary delays. Sell your car with confidence, knowing that V3 Cars helps you get the best value in the shortest time. Their efficient and transparent three step process ensures a smooth, hassle free experience for both sellers and buyers.`,
      benifirst: "/images/leftV33.webp",
      benisec: "/images/rightV33.webp",
      site: `https://www.v3cars.com/sell-used-car?utm_source=_661&utm_medium=Partner&utm_campaign=used-car&transaction_id=`,
      pros: [
        "Hassle free process",
        "Free RC transfer",
        "Massive network of buyers",
        "Expert guidance",
        "Smooth selling process",
      ],
    },
  ];

  return (
    <div>
      <Merge slides={slides} />
    </div>
  );
}

export default V3car;
