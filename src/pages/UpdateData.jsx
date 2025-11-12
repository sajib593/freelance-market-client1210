import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAxios from "../hooks/useAxios";
import Swal from "sweetalert2";
import Navbar from "../components/Navbar";
import { useParams } from "react-router";
import Footer from "../components/Footer";


const UpdateData = () => {

    let [job, setJob] = useState(null)

    let {user} = useContext(AuthContext);

  let axiosInstance = useAxios()
  // console.log(axiosInstance);
  let {id} = useParams();
  // console.log(id);


   useEffect(()=>{
      axiosInstance.get(`/allJobs/${id}`)
      .then(res =>{
        setJob(res.data)
        console.log(res.data);
      })
      .catch((err) => console.log("Error fetching job:", err));
  },[axiosInstance, id])




  const handleUpdateJob = async (e) => {
    e.preventDefault();

    const form = e.target;
    const title = form.title.value;
    const category = form.category.value;
    const summary = form.summary.value;
    const coverImage = form.coverImage.value;
    const postedBy = user?.displayName || "Anonymous";
    // const userEmail = user?.email || "unknown@email.com";
    const postedDate = new Date().toISOString();

    const updatedJob = {
      title,
      postedBy,
      category,
      summary,
      coverImage,
      postedDate,
    };

    // console.log(newJob);


axiosInstance
      .put(`/allJobs/${id}`, updatedJob)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            title: "Updated!",
            text: "Your job has been updated successfully.",
            icon: "success",
            confirmButtonText: "OK",
          });
        }
      })
      .catch((err) => {
        console.error("Error updating job:", err);
        Swal.fire("Error", "Failed to update the job.", "error");
      });
    

   
      };
    


    return (
         <>

         <title>Add-Jobs</title>
         
          <Navbar></Navbar>

        

        <div className="max-w-2xl mx-auto mt-10 bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Update the Job
        </h2>

        <form onSubmit={handleUpdateJob} className="space-y-4">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Job Title
            </label>
            <input
              type="text"
              name="title"
              defaultValue={job?.title}
              required
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

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <select
              name="category"
              defaultValue={job?.category}
              required
              className="select select-bordered w-full"
            >
              <option value="">Select Category</option>
              <option value="Web Development">Web Development</option>
              <option value="Mobile Development">Mobile Development</option>
              <option value="Graphics Designing">Graphics Designing</option>
              <option value="SEO">SEO</option>
              <option value="Digital Marketing">Digital Marketing</option>
            </select>
          </div>

          {/* Summary */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Job Summary
            </label>
            <textarea
              name="summary"
              defaultValue={job?.summary}
              required
              className="textarea textarea-bordered w-full"
              rows="4"
            ></textarea>
          </div>

          {/* Cover Image */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Cover Image URL
            </label>
            <input
              type="text"
              name="coverImage"
              defaultValue={job?.coverImage}
              required
              className="input input-bordered w-full"
            />
          </div>

          {/* User Email */}
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

          <button
            type="submit"
            className="btn btn-neutral w-full mt-4 hover:bg-gray-700"
          >
            Update Job
          </button>
        </form>
      </div>

         <Footer></Footer>
         </>
    );
};

export default UpdateData;