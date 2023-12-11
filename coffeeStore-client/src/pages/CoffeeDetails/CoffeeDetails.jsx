import { IoIosArrowBack } from "react-icons/io";
import { Link, useLoaderData } from "react-router-dom";

const CoffeeDetails = () => {
  const coffee = useLoaderData();

  const { photo, name, chef, supplier, taste, category, details } = coffee;

  console.log(coffee);

  return (
    <div className="min-h-screen bg-add bg-no-repeat">
      <Link to="/">
        <button className="text-3xl text-[#374151] font-rancho py-12 mx-72 flex items-center gap-4">
          <IoIosArrowBack /> Back to Home
        </button>
      </Link>
      <div className="bg-[#F4F3F0] space-y-8 mx-72 rounded-md mb-32 flex items-center gap-28 px-44 py-16">
        <div>
          <img className="w-36" src={photo} alt="photo" />
        </div>
        <div>
          <h2 className="font-rancho text-4xl text-[#331A15] mb-8">{name}</h2>
          <div className="space-y-2">
            <h2 className="text-[#5C5B5B] text-xl font-raleway">
              <span className="text-[#1B1A1A] font-semibold">Name:</span> {name}
            </h2>
            <h2 className="text-[#5C5B5B] text-xl font-raleway">
              <span className="text-[#1B1A1A] font-semibold">Chef:</span> {chef}
            </h2>
            <h2 className="text-[#5C5B5B] text-xl font-raleway">
              <span className="text-[#1B1A1A] font-semibold">Supplier:</span>{" "}
              {supplier}
            </h2>
            <h2 className="text-[#5C5B5B] text-xl font-raleway">
              <span className="text-[#1B1A1A] font-semibold">Taste:</span>{" "}
              {taste}
            </h2>
            <h2 className="text-[#5C5B5B] text-xl font-raleway">
              <span className="text-[#1B1A1A] font-semibold">Category:</span>{" "}
              {category}
            </h2>
            <h2 className="text-[#5C5B5B] text-xl font-raleway">
              <span className="text-[#1B1A1A] font-semibold">Details:</span>{" "}
              {details}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
