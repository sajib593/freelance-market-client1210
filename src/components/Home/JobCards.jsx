import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import { FaHeart } from "react-icons/fa";



const JobCards = () => {

    let axiosInstance = useAxios()

     const { data: jobs = [], isLoading, isError, refetch } = useQuery({
        queryKey: ['allJobs'],
        queryFn: async () => {
            const res = await axiosInstance.get('/allJobs');
            return res.data;
        }
    });


    if (isLoading) return <p className="text-center">Loading...</p>;
  if (isError) return <p className="text-center text-red-500">Failed to load jobs.</p>;

console.log(jobs);


    return (

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {
                jobs.map(job =>
                     <div key={job._id} className="group relative bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden">



    

      
     

      {/* Cover Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={job.coverImage}
          alt={job.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Card Body */}
      <div className="p-4 bg-amber-50">
        
       

        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-900 line-clamp-2 mb-2">
          {job.title}
        </h3>

        {/* Meta info */}
        <div className="space-y-1 text-sm text-gray-600 mb-4">
          <div className="flex items-center gap-1">
            
            <span>{job.category}</span>
          </div>
          <div className="flex items-center gap-1">
            
            <span>{job.postedBy}</span>
          </div>
         
        </div>

        {/* Price & Button */}
        <div className="flex items-center justify-between">
         

          <button className="bg-white border border-gray-300 text-gray-800 font-medium px-4 py-2 rounded-lg hover:bg-gray-50 transition">
            Send proposals
          </button>
        </div>
      </div>
    </div>
                )
            }

        </div>
       
    );
};

export default JobCards;