import logo from "../../../assets/logo1.png";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdLocalPhone, MdLocationPin } from "react-icons/md";
import { BiSolidMessageAltDetail } from "react-icons/bi";

const FooterDetails = () => {
  return (
    <footer className="footer bg-footerDetails text-base-content grid grid-cols-2 items-center gap-40 p-36">
      <div className="space-y-8">
        <img className="w-16" src={logo} alt="logo" />
        <h2 className="font-rancho text-5xl text-[#331A15]">
          Espresso Emporium
        </h2>
        <p className="text-xl font-raleway text-[#1B1A1A]">
          Always ready to be your friend. Come & Contact with us to share your
          memorable moments, to share with your best companion.
        </p>
        <div className="flex gap-5 text-5xl text-[#331A15]">
          <FaFacebook></FaFacebook>
          <FaTwitter></FaTwitter>
          <FaInstagram></FaInstagram>
          <FaLinkedin></FaLinkedin>
        </div>
        <h3 className="font-rancho text-[#331A15] text-5xl">Get in Touch</h3>
        <p className="font-raleway text-xl text-[#1B1A1A] flex items-center gap-8">
          <MdLocalPhone /> +88 01533 333 333
        </p>
        <p className="font-raleway text-xl text-[#1B1A1A] flex items-center gap-8">
          <BiSolidMessageAltDetail /> info@gmail.com
        </p>
        <p className="font-raleway text-xl text-[#1B1A1A] flex items-center gap-8">
          <MdLocationPin /> 72, Wall street, King Road, Dhaka
        </p>
      </div>
      <form>
        <header className="text-[#331A15] text-5xl font-rancho">
          Connect with Us
        </header>
        <fieldset className="form-control w-80">
          <input
            type="text"
            placeholder="Name"
            className="w-[500px] mt-8 placeholder:font-raleway py-4 px-3"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-[500px] mt-4 placeholder:font-raleway py-4 px-3"
          />
          <input
            type="text"
            placeholder="Message"
            className="w-[500px] mt-4 placeholder:font-raleway py-4 px-3"
          />
          <input type="submit" value="Send Message" className="font-rancho text-[#331A15] text-2xl border-2 rounded-full w-[150px] border-[#331A15] mt-6 py-2 px-5" />
        </fieldset>
      </form>
    </footer>
  );
};

export default FooterDetails;
