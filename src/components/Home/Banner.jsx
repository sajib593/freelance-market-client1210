import { motion } from "motion/react"
import { Link } from "react-router";

const Banner = () => {
    return (
        <motion.section
      className="relative h-[500px] md:h-[600px] bg-cover bg-center flex items-center justify-center text-center"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1600&q=80')`,
        // Replace with your actual image path
      }}
    
       initial={{ scale: 1.1, filter: "brightness(0.7)" }}
      animate={{ scale: 1, filter: "brightness(1)" }}
      transition={{ duration: 2, ease: "easeOut" }}
    >
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <motion.div className="relative z-10 max-w-4xl mx-auto px-4"
      
      initial={{ height: 20 }}
  animate={{ height: "auto" }}
  transition={{delay: .3}}

      >
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Find remote jobs
        </h1>
        <p className="text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto">
          Fill your job in hours, not weeks. Search for free.
        </p>

        {/* Two Buttons */}
        <div 
        className="flex flex-col sm:flex-row gap-4 justify-center">

          <Link to='/allJobs'>
          
          <motion.button

           initial={{ y: 20 }}
  animate={{ y: 2 }}
  whileHover={{ scale: 1.5 }}
  whileTap={{ scale: 0.9 }}

           className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg transition duration-200 shadow-md">
            Search Jobs
          </motion.button>

          </Link>
          

          
          
        <Link to='/addJobs'>
      
       <motion.button 
        
          
           initial={{ y: 20 }}
  animate={{ y: 5 }}
  whileHover={{ scale: 1.5 }}
  whileTap={{ scale: 0.9 }}

          className="bg-white hover:bg-gray-100 text-gray-800 font-medium py-3 px-8 rounded-lg transition duration-200 shadow-md">
            
           Post a Job
          </motion.button>

      </Link>
         
        </div>
      </motion.div>
    </motion.section>
    );
};

export default Banner;