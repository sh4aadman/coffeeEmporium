import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';

const AddCoffee = () => {
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

    console.log(newCoffee);

    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Coffee Added Successfully!",
            icon: "success",
            confirmButtonText: "Back",
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
          Add New Coffee
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
                  id="name"
                  placeholder="Enter coffee name"
                  className="mt-4 w-full p-3 rounded-md"
                />
              </div>
              <div>
                <h2 className="font-semibold text-xl">Supplier</h2>
                <input
                  type="text"
                  name="supplier"
                  id="supplier"
                  placeholder="Enter coffee supplier"
                  className="mt-4 w-full p-3 rounded-md"
                />
              </div>
              <div>
                <h2 className="font-semibold text-xl">Category</h2>
                <input
                  type="text"
                  name="category"
                  id="category"
                  placeholder="Enter coffee category"
                  className="mt-4 w-full p-3 rounded-md"
                />
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h2 className="font-semibold text-xl">Chef</h2>
                <input
                  type="text"
                  name="chef"
                  id="chef"
                  placeholder="Enter chef name"
                  className="mt-4 w-full p-3 rounded-md"
                />
              </div>
              <div>
                <h2 className="font-semibold text-xl">Taste</h2>
                <input
                  type="text"
                  name="taste"
                  id="taste"
                  placeholder="Enter coffee taste"
                  className="mt-4 w-full p-3 rounded-md"
                />
              </div>
              <div>
                <h2 className="font-semibold text-xl">Details</h2>
                <input
                  type="text"
                  name="details"
                  id="details"
                  placeholder="Enter coffee details"
                  className="mt-4 w-full p-3 rounded-md"
                />
              </div>
            </div>
          </div>
          <div className="px-28 mt-6">
            <h2 className="font-semibold text-xl">Photo</h2>
            <input
              type="text"
              name="photo"
              id="photo"
              placeholder="Enter photo URL"
              className="mt-4 w-full p-3 rounded-md"
            />
          </div>
          <div className="flex justify-center">
            <input
              className="mt-6 mx-28 bg-[#D2B48C] font-rancho text-2xl text-[#331A15] py-3 rounded-md border-2 border-[#331A15] w-full"
              type="submit"
              value="Add Coffee"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
