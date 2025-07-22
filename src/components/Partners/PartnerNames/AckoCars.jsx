import Merge from "../Merge";

function AckoCars() {
  const slides = [
    {
      image: "/images/acklogo.webp",
      offer: "Drive Worry-Free with ACKO",
      logo: "/images/acko banner.webp",
      keydesc: `ACKO Auto Insurance is a digital first provider of affordable, paperless auto insurance with prompt claim resolutions. ACKO, which is well known for its easy to use website and app, offers third party insurance, comprehensive coverage, and practical extras like roadside assistance and zero depreciation. It's perfect for people looking for hassle free, reasonably priced, and convenient internet insurance services.
`,
      benifirst: "/images/acko benifit.webp",
      benisec: "/images/acko benifit.webp",
      site: `https://cl.adosiz.net/tracking/click/240328/5711/333422?unique_id=publisher_click_id&sub_id1=your_sub_id1&sub_id2=your_sub_id2`,
      pros: [
        "Easy on your pocket: When you insure your car with us, you only pay for insurance. No fees, No commissions.",
        "Stress free claims: During claims, you chill and we hustle. We offer free pick up and drop services (in selected cities).",
        " You can also avail our instant claim settlement process for minor claims.",
        "Instant everything: Right from policy issuance to claim settlement, we do everything quickly. No paperwork, no hassle.",
      ],
    },
  ];

  return (
    <div>
      <Merge slides={slides} />
    </div>
  );
}

export default AckoCars;
