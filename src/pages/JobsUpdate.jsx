import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAxios from "../hooks/useAxios";
import Navbar from "../components/Navbar";
import { Link } from "react-router";
import Footer from "../components/Footer";


const JobsUpdate = () => {


    const [jobs, setJobs] = useState([]);
    let {user} = useContext(AuthContext);
    let axiosInstance = useAxios()

    // console.log(user?.email);

   useEffect(() => {
    if (user?.email) {
      axiosInstance
        .get(`/jobsByEmail?email=${user.email}`)
        .then((res) => {
          console.log("Filtered jobs:", res.data);
          setJobs(res.data); // ✅ save data in state
        })
        .catch((err) => {
          console.error("Error fetching data:", err);
        });
    }
  }, [user, axiosInstance]);


    return (
        <div className="w-11/12 mx-auto">

        <Navbar></Navbar>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
    {jobs.map((view) => (
      <div
        key={view._id}
        className="flex flex-col md:flex-row items-center bg-base-200 p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
      >
        <img
          src={view.coverImage}
          alt={view.title}
          className="w-full md:w-1/2 rounded-xl object-cover"
        />

        <div className="md:ml-6 mt-4 md:mt-0 text-center md:text-left space-y-2">
          <h1 className="text-3xl font-bold">{view.title}</h1>
          <h2 className="text-xl font-semibold text-gray-600">{view.category}</h2>
          <h3 className="text-lg font-medium text-gray-500">Posted By: {view.postedBy}</h3>
          <p className="text-sm text-gray-500">Email: {view.userEmail}</p>

          <p className="py-3 text-gray-700">{view.summary}</p>

          <Link
            to={`/updateData/${view._id}`}
            className="btn btn-primary mt-3"
          >
            Update
          </Link>
        </div>
      </div>
    ))}
  </div>

            <Footer></Footer>
        </div>
    );
};

export default JobsUpdate;