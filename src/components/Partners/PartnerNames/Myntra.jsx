import Merge from "../Merge";

function Myntra() {
  const slides = [
    {
      image: "/images/myntra.webp",
      offer: " India’s favourite online fashion store",
      logo: "/images/my.webp",
      keydesc: `Myntra Fashion gives you products that are 100% original and high quality.- 

Wedding, daily wear, formals, at Myntra you can get clothes for every occasion. And the super fast delivery will be within 24 to 48 hours. Myntra also gives you features such as vernacular language search, attractive offers and free exchange. So look no further for fashion related needs.  `,
      site: `https://www.myntra.com/`,
      benifirst:'/images/myntrar.webp',
      benisec:'/images/myntral.webp',
      pros: [
        "100% Original and High Quality Products",
        "Super Fast delivery within 24 to 48 hours",
        "Attractive Offers and Free Exchange",
        "Clothes for every Occasion",
        "Multiple Payment Options"
      ]
      
    },
   
  ];

  return (
    <div>
      <Merge slides={slides} />
    </div>
  );
}

export default Myntra;
