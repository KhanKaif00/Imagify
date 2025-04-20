import { stepsData } from "../assets/assets"
import {motion } from "framer-motion"

const Steps = () => {
  return (
    <motion.div 
    initial={{ opacity: 0.2, y: 100}}
    transition={{ duration: 1 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="flex flex-col items-center justify-center my-32 ">
        
        <h1 className="text-3xl sm:text-4xl font-semibold mb-2 ">How it Works </h1>
        <p className="text-lg text-gray-600 mb-8">Transform word from stunning images </p>

        <div className="space-y-4 w-full max-w-3xl texl-sm">
            {stepsData.map((item,index)=>(
                
                <div className="flex items-center gap-4 p-5 px-8 bg-white/20 shadow-md border cursor-pointer hover:scale-[1.02] transition-all duration-300 rounded-lg" key={index}> 
                  <img width={40} src={item.icon} alt="" />
                  <div>
                    <h2 className="text-xl font-medium">{item.title}</h2>
                    <p className="text-gray-500">{item.description}</p>
                  </div>
                </div>
            ))}
        </div>

    </motion.div>
  )
}

export default Steps

// The .map() function in JavaScript is used to loop through each item in an array and create a new array by applying a function to every element. It does not change the original array, and it returns a new one with the results of whatever you do in the callback function. This is especially useful when you want to transform data or render a list of elements in React. Each time .map() runs, it gives you access to the current item, its index, and the whole array, allowing you to work with the data however you like.

// The .reduce() function in JavaScript is used to take all the elements in an array and reduce them to a single value by repeatedly applying a function you provide. It works by going through the array one item at a time and keeping track of an accumulator, which stores the ongoing result. You can use .reduce() for things like adding numbers, combining strings, or building more complex data structures. It takes two main arguments — a callback function and an optional initial value for the accumulator. The callback receives the accumulator and the current item in each step, making .reduce() a powerful tool for summarizing or transforming arrays into a final result.

