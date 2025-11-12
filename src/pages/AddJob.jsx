import { useContext } from "react";
import Navbar from "../components/Navbar";
import { AuthContext } from "../Provider/AuthProvider";
import useAxios from "../hooks/useAxios";
import Swal from "sweetalert2";
import Footer from "../components/Footer";


const AddJob = () => {

  let {user} = useContext(AuthContext);

  let axiosInstance = useAxios()
  // console.log(axiosInstance);


  const handleCreateJob = async (e) => {
    e.preventDefault();

    const form = e.target;
    const title = form.title.value;
    const category = form.category.value;
    const summary = form.summary.value;
    const coverImage = form.coverImage.value;
    const postedBy = user?.displayName || "Anonymous";
    const userEmail = user?.email || "unknown@email.com";
    const postedDate = new Date().toISOString();

    const newJob = {
      title,
      postedBy,
      category,
      summary,
      coverImage,
      userEmail,
      postedDate,
    };

    console.log(newJob);

    // axiosSecure.post('/products', newProduct)
    // .then((data) => {
    //     console.log('after secure call',data.data);
    // })
    

    axiosInstance.post('/allJobs', newJob)
    .then(data =>{
        console.log('add new job', data.data);



          if (data.data.insertedId) {
      Swal.fire({
        title: 'Success!',
        text: 'Job added successfully 🎉',
        icon: 'success',
        confirmButtonText: 'OK'
      });
    }
  })
  .catch(error => {
    console.error(error);
    Swal.fire({
      title: 'Error!',
      text: 'Failed to add job. Please try again.',
      icon: 'error',
      confirmButtonText: 'OK'
    });




    })

  };



    return (

         <>

         <title>Add-Jobs</title>
         
          <Navbar></Navbar>

         <div className="max-w-2xl mx-auto mt-10 bg-white p-8 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Post a New Job
      </h2>

      <form onSubmit={handleCreateJob} className="space-y-4">


        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Job Title
          </label>
          <input
            type="text"
            name="title"
            required
            placeholder="Enter job title"
            className="input input-bordered w-full"
          />
        </div>


        {/* Posted By */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Posted By
          </label>
          <input
            type="text"
            name="postedBy"
            value={user?.displayName || ""}
            readOnly
            className="input input-bordered w-full bg-gray-100 cursor-not-allowed"
          />
        </div>



        {/* Category Dropdown */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Category
          </label>
          <select
            name="category"
            required
            className="select select-bordered w-full"
          >
            <option value="">Select Category</option>
            <option value="Web Development">
              Web Development
            </option>
            <option value="Mobile Development">
              Mobile Development
            </option>
            <option value="Graphics Designing">
              Graphics Designing
            </option>
            <option value="SEO">SEO</option>
            <option value="Digital Marketing">
              Digital Marketing
            </option>
          </select>
        </div>


        {/* Summary */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Job Summary
          </label>
          <textarea
            name="summary"
            required
            placeholder="Write a short description of the job..."
            className="textarea textarea-bordered w-full"
            rows="4"
          ></textarea>
        </div>

        {/* Cover Image URL */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Cover Image URL
          </label>
          <input
            type="text"
            name="coverImage"
            required
            placeholder="Image URL"
            className="input input-bordered w-full"
          />
        </div>

        {/* User Email (readonly) */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            User Email
          </label>
          <input
            type="email"
            name="userEmail"
            value={user?.email || ""}
            readOnly
            className="input input-bordered w-full bg-gray-100 cursor-not-allowed"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="btn btn-neutral w-full mt-4 hover:bg-gray-700"
        >
          Add Job
        </button>
      </form>
    </div>


         <Footer></Footer>
         </>
    );
};

export default AddJob;