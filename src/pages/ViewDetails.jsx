import { useEffect, useState } from "react";
import { useParams } from "react-router";
import useAxios from "../hooks/useAxios";
import Swal from "sweetalert2";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const ViewDetails = () => {

    let [view, setView] = useState("")

    let {id} = useParams();
    // console.log(id);

    let axiosInstance = useAxios();

    useEffect(()=>{
        axiosInstance.get(`/allJobs/${id}`)

        .then(data=> {
            // console.log('viewdetails', data.data);
            setView(data.data)
        })

        
      },[axiosInstance, id])
      
      console.log(view);
      const { title, postedBy, category, summary, coverImage, userEmail } = view;


    let handlePostViewData = ()=>{

      
       axiosInstance.post('/my-accepted-tasks', { title, postedBy, category, summary, coverImage, userEmail })
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


    }

    




    return (
        <>
<Navbar></Navbar>

<div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
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
      <button onClick={handlePostViewData} className="btn btn-primary">Accept</button>
    </div>
  </div>
</div>


<Footer></Footer>
            
        </>
    );
};

export default ViewDetails;