import MainServices from './MainServices';

function SocialMediaMarketing() {
  const data = {
    title: "Social Media Marketing",
    img: "/images/smm.webp",
    points: [
      {
        heading: "What is Social Media Marketing?",
        description:
          "Social media marketing involves using social media to boost sales, enhance a company's brand, and improve website traffic.",
      },
      {
        heading: "What are some tools for Social Media Marketing?",
        description:
          "Social Media Marketing tools are important for increasing a brand’s online presence. Prominent ones include Sprout Social, Hootsuite and Agorapulse.",
      },
      {
        heading: "Types of Campaign Categories",
        description:
          "There are several types of social media marketing (SMM) initiatives, each with an independent goal. Some common types include brand awareness campaigns, engagement campaigns and social media advertising. ",
      },
      {
        heading: "Impact of Social Media Marketing", 
        description:
          " A well-executed SMM strategy amplifies brand visibility and also helps in customer engagement. It is beneficial for both businesses and customers. ",
      },
    ],
  };

  return <MainServices data={data} />
}

export default SocialMediaMarketing