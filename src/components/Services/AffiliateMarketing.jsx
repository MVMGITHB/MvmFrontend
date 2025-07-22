import MainServices from './MainServices';

function AffiliateMarketing() {
  const data = {
    title: "Affiliate Marketing",
    img: "/images/affiliate_marketing.webp",
    points: [
      {
        heading: "What is Affiliate Marketing?",
        description:
          "Affiliate Marketing is a strategy through which an affiliate’ earns a commission by promoting an agency’s products or services on the basis of leads.",
      },
      {
        heading: "What are some tools for Affiliate Marketing?",
        description:
          "Some common tools for affiliate marketing include HubSpot, Mailchimp and Netcore. They help to maximise efficiency.",
      },
      {
        heading: "Types of Campaign Categories",
        description:
          "Affiliate Marketing campaigns are generally of three types – unattached, related and involved.  ",
      },
      {
        heading: "Impact of Affiliate Marketing",
        description:
          "Affiliate Marketing is an extremely effective strategy for businesses. It drives traffic and improves overall sales.",
      },
    ],
  };

  return <MainServices data={data} />
}

export default AffiliateMarketing