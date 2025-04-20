import { assets } from "../assets/assets"
import {  motion } from "motion/react"
import { useContext } from "react"
import { AppContext } from "../context/AppContext"
import { useNavigate } from "react-router-dom"

const Header = () => {
  const {user,setShowLogin} = useContext(AppContext)
  const navigate = useNavigate()

  const Handler = () => {
    if (user) {
      navigate("/result");
    } else {
      setShowLogin(true);
    }
  };
  return (
    <motion.div className="flex flex-col justify-center items-center tedxt-center my-20 "
    initial={{ opacity: 0.2, y: 100 }}
    transition={{ duration: 1 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    >
      <motion.div className="text-stone-500 inline-flex items-center gap-2 bg-white px-6 py-1 rounded-full border border-neutral-500"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay:0.2, duration: 0.8 }}
      >
        <p> Best text to image generator </p>
        <img src={assets.star_icon} alt="" />
      </motion.div>
      <motion.h1 className="text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center"
      initial={{ opacity: 0}}
      animate={{ opacity: 1}}
      viewport={{ once: true }}
      transition={{ delay:0.4, duration: 2}}
    >Turn text to <span className="text-blue-600"
      
      >image</span>  in secons.</motion.h1>
     <motion.p className="textcenter max-w-xl mx-auto mt-5"
     initial={{ opacity: 0, y: 20 }}
     animate={{ opacity: 1, y: 0 }}
     transition={{ delay:0.6, duration: 0.8 }}
     >  
        AI technology has revolutionized the way we create and interact with digital content
     </motion.p>
     <motion.button className="sm:text-lg text-white bg-black w-auto mt-8 px-12 py-2.5 flex items-center gap-2 rounded-full "
      onClick={Handler}

     whileHover={{ scale: 1.05 }}
     whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0}}
      animate={{ opacity: 1 }}
      transition={{ default:{duration:0.5}, opacity:{delay:0.8, duration: 0.8}  }}
     >Generate Images 
        <img className="h-6" src={assets.star_group} alt="" />
     </motion.button>

     <motion.div 
       initial={{ opacity: 0}}
       animate={{ opacity: 1 }}
       transition={{ delay:1, duration: 1 }}
     className="flex flex-wrap justify-center mt-6 gap-3">
        {Array(6).fill('').map((item,index)=>(
            <motion.img 
            whileHover={{ scale: 1.05,duration: 0.1 }}

            className="rounded hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-10" 
            src={index % 2 === 0 ? assets.sample_img_2 : assets.sample_img_1}
            alt="" key={index} width={70}/>
    ))}
     </motion.div>

     {/* Array(6).fill('') → Creates an array like this: ['', '', '', '', '', '']

.map((item, index) => (...)) → Loops through each item in the array.

For every loop, it returns a JSX element (an <img> tag).

index gives the position (0, 1, 2, 3, 4, 5), which is used:

To alternate between two images.

As the React key. */}



     <motion.p
     initial={{ opacity: 0}}
     animate={{ opacity: 1 }}
     transition={{ delay:1.2, duration: 0.8 }}
     className="mt-2 text-neutral-600">Generated  images from Imagify</motion.p>

    </motion.div>
  )
}

export default Header

// map
// What it does:
// Takes an array, processes each item, and returns a new array with the transformed values.

// Does not modify the original array (immutable).

// Commonly used in React to render lists.

// Arguments:
// currentItem → The current element being processed.

// index (optional) → The index of the current element.

// originalArray (optional) → The original array being mapped.

// reduce 
// What it does:
// Takes an array and combines all values into a single result (e.g., sum, average, grouping).

// Useful for calculations like totals, averages, or grouping data.



// Arguments:
// accumulator → Stores the combined result after each step.

// currentItem → The current element being processed.

// index (optional) → The index of the current element.

// originalArray (optional) → The original array being reduced.

// initialValue (optional but recommended) → The starting value of the accumulator.
