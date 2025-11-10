import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import useAxios from "../hooks/useAxios";
import Navbar from "../components/Navbar";


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
        <>

        <Navbar></Navbar>

        <div>
            {
                jobs.map(view=>   <div className="hero-content flex-col lg:flex-row">
    <img
      src={view.coverImage}
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-5xl font-bold">{view.title}</h1>
      <h1 className="text-2xl font-bold">{view.category}</h1>
      <h1 className="text-2xl font-bold">{view.postedBy}</h1>
      <h1 className="text-2xl font-bold">{view.userEmail}</h1>
      <p className="py-6">
        {view.summary}
      </p>
      <button className="btn btn-primary">Update</button>
    </div>
  </div>)
            }
        </div>


        </>
    );
};

export default JobsUpdate;