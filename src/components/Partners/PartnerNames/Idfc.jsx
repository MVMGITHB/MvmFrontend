import Merge from "../Merge";

function Idfc() {
    const slides = [
        {
            image: "/images/idfclogo2.png",
            offer: "Lifetime free credit card with unbeatable rewards",
            logo: "/images/idfcbanner.webp",
            benifirst: "/images/idfc.jpg",
            benisec: "/images/idfc.jpg",
            keydesc: `IDFC FIRST Bank credit cards combine lifelong free membership with excellent benefits like low interest rates, generous reward points, and interest-free ATM withdrawals. Whether you're shopping, dining, or traveling, earn rewards and enjoy perks without worrying about fees.`,
            site: `https://spectrum.gotrackier.com/click?campaign_id=384&pub_id=945`,
            pros: [
                "No annual or joining fees – lifetime free",
                "Interest rates starting as low as 8.5% p.a.",
                "10X reward points on birthday and milestone spends",
                "Reward points never expire",
                "Up to 45 days interest-free ATM cash withdrawal",
                "Complimentary roadside assistance and insurance covers"
            ]
        },

    ];


    return (
        <div >
            <Merge slides={slides} />
        </div>
    );
}

export default Idfc;
