import React from 'react';
import useAxios from '../hooks/useAxios';
import { useQuery } from '@tanstack/react-query';
import Navbar from '../components/Navbar';
import { Link } from 'react-router';
import Footer from '../components/Footer';

const AllJobs = () => {


    let axiosInstance = useAxios()

     const { data: jobs = [], isLoading, isError, refetch } = useQuery({
        queryKey: ['allJob'],
        queryFn: async () => {
            const res = await axiosInstance.get('/allJobss');
            return res.data;
        }
    });


    if (isLoading) return <p className="text-center">Loading...</p>;
  if (isError) return <p className="text-center text-red-500">Failed to load jobs.</p>;



    return (
        <div className="w-11/12 mx-auto my-10">

  <Navbar />
  <br />

  <h2 className="text-3xl font-bold text-center mb-6 text-primary">
    All Available Jobs
  </h2>
  <br />

  <div className="overflow-x-auto rounded-xl shadow-xl border border-gray-200 bg-base-100">
    <table className="table table-zebra w-full text-sm sm:text-base">
      {/* Table Head */}
      <thead className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-xs sm:text-sm md:text-base">
        <tr>
          <th>#</th>
          <th>Posted-By</th>
          <th>Title</th>
          <th>User-Email</th>
          <th>Category</th>
          <th>Actions</th>
        </tr>
      </thead>

      {/* Table Body */}
      <tbody>
        {jobs.map((job, index) => (
          <tr
            key={job._id}
            className="hover:bg-blue-50 transition-all duration-300 border-b border-gray-200"
          >
            <td className="font-semibold text-gray-700">{index + 1}</td>

            {/* Posted By */}
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar hidden sm:block">
                  <div className="mask mask-squircle h-10 w-10 sm:h-12 sm:w-12">
                    <img src={job.coverImage} alt={job.title} />
                  </div>
                </div>
                <div>
                  <div className="font-semibold text-gray-800 text-sm sm:text-base">
                    {job.postedBy}
                  </div>
                </div>
              </div>
            </td>

            {/* Title */}
            <td className="font-medium text-gray-700">{job.title}</td>

            {/* Email */}
            <td className="text-gray-600 truncate max-w-[120px] sm:max-w-none">
              {job.userEmail}
            </td>

            {/* Category */}
            <td>
              <span className="badge badge-outline badge-primary text-xs sm:text-sm">
                {job.category}
              </span>
            </td>

            {/* Button */}
            <th>
              <Link
                to={`/viewDetails/${job._id}`}
                className="btn btn-xs sm:btn-sm md:btn-md btn-primary hover:scale-105 transition-transform duration-300"
              >
                View Details
              </Link>
            </th>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  <Footer />
</div>
    );
};

export default AllJobs;