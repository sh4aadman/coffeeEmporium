import { useLoaderData } from "react-router-dom";
import { TiCoffee } from "react-icons/ti";
import { Link } from "react-router-dom";
import CoffeeCard from "../../Shared/CoffeeCard/CoffeeCard";

const Products = () => {

    const coffees = useLoaderData();

  return (
    <div className="py-32">
      <p className="font-raleway text-[#1B1A1A] text-xl text-center">
        --- Sip & Savor ---
      </p>
      <h2 className="text-[#331A15] text-6xl font-rancho text-center mt-2">
        Our Popular Products
      </h2>
      <div className="flex justify-center mt-4">
        <Link to="/add">
          <button className="font-rancho text-2xl py-2 px-5 rounded-md border-2 border-[#331A15] bg-[#E3B577] text-white flex items-center gap-2">
            Add Coffee <TiCoffee className="text-[#331A15]" />
          </button>
        </Link>
      </div>
      <div className="mt-12">
        <div className="grid grid-cols-2 max-w-5xl mx-auto gap-6 ">
          {coffees.map((coffee) => (
            <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
