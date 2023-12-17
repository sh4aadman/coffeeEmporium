import { IoIosArrowBack } from "react-icons/io";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();

  const { _id, name, supplier, category, chef, taste, details, photo } = coffee;

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const supplier = form.supplier.value;
    const category = form.category.value;
    const chef = form.chef.value;
    const taste = form.taste.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = { name, supplier, category, chef, taste, details, photo };

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, update it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/update/${_id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newCoffee),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged) {
              Swal.fire({
                title: "Updated!",
                text: "Your Coffee has been updated.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  return (
    <div className="min-h-screen bg-add bg-no-repeat">
      <Link to="/">
        <button className="text-3xl text-[#374151] font-rancho py-12 mx-72 flex items-center gap-4">
          <IoIosArrowBack /> Back to Home
        </button>
      </Link>
      <div className="bg-[#F4F3F0] space-y-8 mx-72 py-16 rounded-md mb-32">
        <h2 className="font-rancho text-5xl text-[#374151] text-center">
          Update Existing Coffee Details
        </h2>
        <p className="font-raleway text-lg text-center px-48">
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 font-raleway gap-6 px-28">
            <div className="space-y-6">
              <div>
                <h2 className="font-semibold text-xl">Name</h2>
                <input
                  type="text"
                  name="name"
                  id=""
                  placeholder="Enter coffee name"
                  className="mt-4 w-full p-3 rounded-md"
                  defaultValue={name}
                />
              </div>
              <div>
                <h2 className="font-semibold text-xl">Supplier</h2>
                <input
                  type="text"
                  name="supplier"
                  id=""
                  placeholder="Enter coffee supplier"
                  className="mt-4 w-full p-3 rounded-md"
                  defaultValue={supplier}
                />
              </div>
              <div>
                <h2 className="font-semibold text-xl">Category</h2>
                <input
                  type="text"
                  name="category"
                  id=""
                  placeholder="Enter coffee category"
                  className="mt-4 w-full p-3 rounded-md"
                  defaultValue={category}
                />
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h2 className="font-semibold text-xl">Chef</h2>
                <input
                  type="text"
                  name="chef"
                  id=""
                  placeholder="Enter chef name"
                  className="mt-4 w-full p-3 rounded-md"
                  defaultValue={chef}
                />
              </div>
              <div>
                <h2 className="font-semibold text-xl">Taste</h2>
                <input
                  type="text"
                  name="taste"
                  id=""
                  placeholder="Enter coffee taste"
                  className="mt-4 w-full p-3 rounded-md"
                  defaultValue={taste}
                />
              </div>
              <div>
                <h2 className="font-semibold text-xl">Details</h2>
                <input
                  type="text"
                  name="details"
                  id=""
                  placeholder="Enter coffee details"
                  className="mt-4 w-full p-3 rounded-md"
                  defaultValue={details}
                />
              </div>
            </div>
          </div>
          <div className="px-28 mt-6">
            <h2 className="font-semibold text-xl">Photo</h2>
            <input
              type="text"
              name="photo"
              id=""
              placeholder="Enter photo URL"
              className="mt-4 w-full p-3 rounded-md"
              defaultValue={photo}
            />
          </div>
          <div className="flex justify-center">
            <input
              className="mt-6 mx-28 bg-[#D2B48C] font-rancho text-2xl text-[#331A15] py-3 rounded-md border-2 border-[#331A15] w-full"
              type="submit"
              value="Update Coffee Details"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
