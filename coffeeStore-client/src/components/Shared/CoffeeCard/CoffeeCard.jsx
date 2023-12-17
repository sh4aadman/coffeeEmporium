import PropTypes from "prop-types";
import { IoEyeSharp, IoPencil } from "react-icons/io5";
import { AiTwotoneDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, photo, name, chef, price } = coffee;

  const handleDelete = (_id) => {

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              });
              const remaining = coffees.filter(elm => elm._id !== _id);
              setCoffees(remaining);
            }
          });
      }
    });
  };

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
          <span className="text-[#1B1A1A] font-semibold">Price:</span> {price}{" "}
          Taka
        </h2>
      </div>
      <div className="flex flex-col items-center gap-4">
        <Link to={`/details/${_id}`}>
          <IoEyeSharp className="bg-[#D2B48C] text-xl p-1 text-white rounded" />
        </Link>
        <Link to={`/update/${_id}`}>
          <IoPencil className="bg-[#3C393B] text-xl p-1 text-white rounded" />
        </Link>
        <AiTwotoneDelete
          onClick={() => handleDelete(_id)}
          className="bg-[#EA4744] text-xl p-1 text-white rounded"
        />
      </div>
    </div>
  );
};

CoffeeCard.propTypes = {
  coffee: PropTypes.object,
  coffees: PropTypes.array,
  setCoffees: PropTypes.func
};

export default CoffeeCard;
