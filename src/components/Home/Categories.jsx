
import { FaArrowRightToBracket } from "react-icons/fa6";

const categories = [
  {
    name: "React JS",
    image: "https://images-cdn.openxcell.com/wp-content/uploads/2024/07/25085005/reactjs-inner.svg", // Fallback from Django (adapt for React; real: https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg
    color: "from-cyan-500 to-blue-500",
    hover: "hover:from-cyan-600 hover:to-blue-600"
  },
  {
    name: "Django",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtHecqjTbqeRNoPqeoRs7-Sj-dqvvPcnvHvl-bJ_Ot0E5FElNj2ciODx52daoe2PcdwH4&usqp=CAU", // Official Django logo
    color: "from-green-500 to-yellow-500",
    hover: "hover:from-green-600 hover:to-yellow-600"
  },
  {
    name: "Node.js",
    image: "https://images-cdn.openxcell.com/wp-content/uploads/2024/07/25090553/nodejs-inner.webp", // Official Node.js logo
    color: "from-green-600 to-gray-800",
    hover: "hover:from-green-700 hover:to-gray-900"
  },
  {
    name: "Flutter",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1MjZivXZPc2ANBOgmhAaUJml8Q1e9qHihSg&s", // Official Flutter logo (dark version for light bg)
    color: "from-blue-500 to-indigo-500",
    hover: "hover:from-blue-600 hover:to-indigo-600"
  },
  {
    name: "UI/UX Design",
    image: "https://img.freepik.com/premium-vector/ui-ux-design-icon-vector-image-can-be-used-design_120816-246203.jpg", // Free from Flaticon (UI/UX icon)
    color: "from-purple-500 to-pink-500",
    hover: "hover:from-purple-600 hover:to-pink-600"
  },
  {
    name: "Digital Marketing",
    image: "https://png.pngtree.com/png-clipart/20241204/original/pngtree-digital-marketing-business-symbols-illustrated-png-image_17524845.png", // Free from Flaticon (marketing icon)
    color: "from-pink-500 to-orange-500",
    hover: "hover:from-pink-600 hover:to-orange-600"
  },
];

const Categories = () => {
    return (
        <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Top Job Categories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore high-demand freelance skills and find your next project
          </p>
        </div>

        {/* Responsive Grid: 1 col (mobile) → 2 (tablet) → 3 (desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {categories.map((cat, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl border border-gray-200 
                bg-gradient-to-br ${cat.color} transform transition-all duration-300 
                hover:scale-105 hover:shadow-xl cursor-pointer flex flex-col items-center 
                text-center p-6 md:p-8`}
            >
              {/* Category Image */}
              <div className="mb-4 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm group-hover:scale-110 transition-transform">
                <img
                  src={cat.image}
                  alt={`${cat.name} logo`}
                  className="w-10 h-10 md:w-12 md:h-12 object-contain group-hover:brightness-110 transition"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextSibling.style.display = 'flex'; // Fallback icon if needed
                  }}
                />
                {/* Fallback: Hidden React Icon (uncomment if you want fallback) */}
                {/* <AiOutlineCode className="w-10 h-10 text-white hidden" /> */}
              </div>

              {/* Category Name */}
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-gray-100">
                {cat.name}
              </h3>

              {/* Subtext */}
              <p className="text-white/80 text-sm">
                200+ active jobs
              </p>
            </div>
          ))}
        </div>

        {/* Optional CTA */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-lg transform hover:scale-105">
            View All Categories
            
            <FaArrowRightToBracket />
          </button>
        </div>
      </div>
    </section>
    );
};

export default Categories;