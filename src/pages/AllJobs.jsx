import React from 'react';
import useAxios from '../hooks/useAxios';
import { useQuery } from '@tanstack/react-query';

const AllJobs = () => {


    let axiosInstance = useAxios()

     const { data: jobs = [], isLoading, isError, refetch } = useQuery({
        queryKey: ['allJob'],
        queryFn: async () => {
            const res = await axiosInstance.get('/allJobs');
            return res.data;
        }
    });


    if (isLoading) return <p className="text-center">Loading...</p>;
  if (isError) return <p className="text-center text-red-500">Failed to load jobs.</p>;



    return (
        <div>
            <h3>My Bids: {jobs.length}</h3>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Posted-By</th>
                            <th>Title</th>
                            <th>User-Email</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>


                        



                        {
                            jobs.map((job, index) => <tr key={job._id}>
                                <td>{index + 1}</td>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={job.coverImage}
                                                    alt={job.title} />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{job.postedBy}</div>
                                            
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {job.title}
                                </td>
                                <td>{job.userEmail}</td>
                                <td>
                                    
                                    {job.category}
                                </td>
                                <th>
                                    {/* <button
                                        onClick={() => handleDeleteBid(bid._id)}
                                        className="btn btn-outline btn-xs">Remove Bid</button> */}
                                </th>
                            </tr>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default AllJobs;