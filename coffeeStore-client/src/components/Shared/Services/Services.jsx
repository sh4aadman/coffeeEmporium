import service1 from "../../../assets/icons/1.png";
import service2 from "../../../assets/icons/2.png";
import service3 from "../../../assets/icons/3.png";
import service4 from "../../../assets/icons/4.png";

const Services = () => {
  return (
    <div className="grid grid-cols-4 bg-[#ECEAE3] justify-items-center py-14 px-36">
      <div>
        <img src={service1} alt="service" />
        <h2 className="font-rancho text-[#331A15] text-4xl mt-4">Awesome Aroma</h2>
        <p className="text-[#1B1A1A] font-raleway">You will definitely be a fan of the design & aroma of your coffee</p>
      </div>
      <div>
        <img src={service2} alt="service" />
        <h2 className="font-rancho text-[#331A15] text-4xl mt-4">High Quality</h2>
        <p className="text-[#1B1A1A] font-raleway">We served the coffee to you maintaining the best quality</p>
      </div>
      <div>
        <img src={service3} alt="service" />
        <h2 className="font-rancho text-[#331A15] text-4xl mt-4">Pure Grades</h2>
        <p className="text-[#1B1A1A] font-raleway">The coffee is made of the green coffee beans which you will love</p>
      </div>
      <div>
        <img src={service4} alt="service" />
        <h2 className="font-rancho text-[#331A15] text-4xl mt-4">Proper Roasting</h2>
        <p className="text-[#1B1A1A] font-raleway">Your coffee is brewed by first roasting the green coffee beans</p>
      </div>
    </div>
  );
};

export default Services;
