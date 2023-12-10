import PropTypes from "prop-types";
import { IoEyeSharp, IoPencil } from "react-icons/io5";
import { AiTwotoneDelete } from "react-icons/ai";

const CoffeeCard = ({ coffee }) => {
  const { photo, name, chef, price } = coffee;

  return (
    <div className="grid grid-cols-4 bg-[#F5F4F1] p-7 rounded-lg items-center gap-5 font-raleway">
      <div>
        <img src={photo} alt="coffee" />
      </div>
      <div className="col-span-2">
        <h2 className="text-[#5C5B5B] text-xl">
          <span className="text-[#1B1A1A] font-semibold">Name:</span> {name}
        </h2>
        <h2 className="text-[#5C5B5B] text-xl">
          <span className="text-[#1B1A1A] font-semibold">Chef:</span> {chef}
        </h2>
        <h2 className="text-[#5C5B5B] text-xl">
          <span className="text-[#1B1A1A] font-semibold">Price:</span> {price} Taka
        </h2>
      </div>
      <div className="flex flex-col items-center gap-4">
        <IoEyeSharp className="bg-[#D2B48C] text-xl p-1 text-white rounded" />
        <IoPencil className="bg-[#3C393B] text-xl p-1 text-white rounded" />
        <AiTwotoneDelete className="bg-[#EA4744] text-xl p-1 text-white rounded" />
      </div>
    </div>
  );
};

CoffeeCard.propTypes = {
  coffee: PropTypes.obj,
};

export default CoffeeCard;
