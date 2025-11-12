import React, { useContext } from 'react';
import useAxios from '../hooks/useAxios';
import { AuthContext } from '../Provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Swal from 'sweetalert2';

const AcceptedTask = () => {


    let axiosInstance = useAxios()
    // let {user} = useContext(AuthContext)



     const { data: acceptedTasks = [], isLoading, isError, refetch } = useQuery({
        queryKey: ['acceptTask'],
        queryFn: async () => {
            const res = await axiosInstance.get('/my-accepted-tasks-email');
            return res.data;
        }
    });


    //   const { data: acceptedTasks = [], isLoading, isError, refetch } = useQuery({
    //     queryKey: ['acceptTask', user?.email],
    //     queryFn: async () => {
    //         const res = await axiosInstance.get(`/my-accepted-tasks-email?email=${user?.email}`);
    //         return res.data;
    //     }
    // });

    console.log(acceptedTasks);



     const handleDelete = async (id) => {
    
    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "This task will be permanently deleted.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    });

    if (result.isConfirmed) {
      try {
        const res = await axiosInstance.delete(`/deleteJob/${id}`);
        if (res.data.deletedCount > 0) {
          Swal.fire('Deleted!', 'The task has been deleted.', 'success');

          refetch(); 
          

        } else {
          Swal.fire('Error!', 'Failed to delete the task.', 'error');
        }
      } catch (err) {
        Swal.fire('Error!', 'Something went wrong.', 'error');
        console.error(err);
      }
    }
  };

    if (isLoading) return <p className="text-center">Loading...</p>;
  if (isError) return <p className="text-center text-red-500">Failed to load jobs.</p>;


    return (

        <div className='w-11/12 mx-auto'>

        <Navbar></Navbar>

      <div className="min-h-screen bg-base-200 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          {acceptedTasks.length > 0 ? (
            acceptedTasks.map((view) => (
              <div
                key={view._id}
                className="hero-content flex-col lg:flex-row bg-white rounded-2xl shadow-xl p-6 max-w-4xl w-full"
              >
                <img
                  src={view.coverImage}
                  className="max-w-sm rounded-lg shadow-2xl"
                  alt={view.title}
                />
                <div>
                  <h1 className="text-3xl font-bold text-primary">{view.title}</h1>
                  <p className="text-lg font-semibold text-gray-600">{view.category}</p>
                  <p className="text-lg text-gray-500">{view.postedBy}</p>
                  <p className="text-sm text-gray-400">{view.userEmail}</p>
                  <p className="py-4 text-gray-700">{view.summary}</p>

                  <button
                    onClick={() => handleDelete(view._id)}
                    className="btn btn-error"
                  >
                    Delete
                  </button>


                  <button
                    onClick={() => handleDelete(view._id)}
                    className="btn btn-primary ml-5"
                  >
                    Cancel
                  </button>


                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-600 text-lg font-medium">
              No accepted tasks found.
            </p>
          )}
        </div>
      </div>

        <Footer></Footer>

        </div>
    );
};

export default AcceptedTask;