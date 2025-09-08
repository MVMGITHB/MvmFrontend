import Benifits from "./Benifits";
import HeroFirst from "./HeroFirst";
import HeroSecond from "./HeroSecond";

function Merge({ slides ,pros }) {
  return (
    <div className="bg-[#141313] mt-[100px]">
      <hr />
      <div className="w-[90%] flex flex-col lg:flex-row mx-auto  justify-center items-center  px-1 lg:px-10 ">
        <div className="w-full lg:w-[60%]">
          <HeroFirst herofirst={slides} />
        </div>
        <div className= "w-full lg:w-[40%] ">
          <HeroSecond herosecond={slides} />
        </div>
      </div>

      <div className="max-w-[1170px] mx-auto px-4 py-10">
        <Benifits benifits={slides} pros={slides[0].pros} />
      </div>
    </div>
  );
}

export default Merge;
