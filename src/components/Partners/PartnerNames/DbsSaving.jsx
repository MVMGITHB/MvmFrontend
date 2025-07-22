import Merge from "../Merge";

function DbsSaving() {
  const slides = [
    {
      image: "/images/dbslogo.webp",
      offer: "Smart. Secure. Seamless – That’s digibanking with DBS.",
      logo: "/images/dbsbanner.webp",
      benifirst:'/images/dbsads.webp',
      benisec:'/images/dbsads.webp',
      keydesc: `The biggest and most prominent bank in Singapore, DBS Group Holdings Ltd., has an Indian affiliate called DBS Bank India Limited. DBS India greatly increased its physical presence after purchasing Lakshmi Vilas Bank in 2020, enhancing its already robust online presence. Offering a broad variety of retail, corporate, SME, and wealth management services nationwide, DBS Bank India operates through both branches and digital platforms. `,
      site:`https://s1.whistleloop.com/?linkid=45600&offerid=1218&publisher_id=3962&parentid=1690&sub_id1=1234`,
      pros: [
        "Offers paperless account opening with the digibank app.",
        "Functioning as a digitally native bank.",
        "Renowned for its user-friendly mobile banking.",
        "E-KYC and quick account registration.",
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

export default DbsSaving;
