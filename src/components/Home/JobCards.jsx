import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import Loading from "../../pages/Loading";
import { motion } from "motion/react"




const JobCards = () => {

    let axiosInstance = useAxios()

     const { data: jobs = [], isLoading, isError } = useQuery({
        queryKey: ['allJobs'],
        queryFn: async () => {
            const res = await axiosInstance.get('/allJobs');
            return res.data;
        }
    });


    if (isLoading) return <Loading></Loading>
  if (isError) return <p className="text-center text-red-500">Failed to load jobs.</p>;

// console.log(jobs);


    return (

      
        

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {
                jobs.map(job =>
                     <motion.div
                      key={job._id}

                      initial={{ opacity: 0, scale: 2 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 1.8,
                scale: { type: "spring", visualDuration: 0.9, bounce: 0.5 },
            }}

                       className="group relative bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden">



    

      
     

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
    </motion.div>
                )
            }

        </div>



        
       
    );
};

export default JobCards;