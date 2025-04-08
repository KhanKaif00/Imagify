import { assets } from "../assets/assets"

const Description = () => {
return (
    <div className="flex flex-col items-center justify-center my-24 p-6 md:px-28">
        <h1 className="text-3xl sm:text-4xl font-semibold mb-2 ">Create AI Images </h1>
        <p className="text-gray-500 mb-8 ">Turn Your Imagination into visuals</p>

        <div className=" flex flex-col gap-5 md:gap-14 md:flex-row items-center ">
            <img className="w-80 xl:w-96 rounded-lg " src={assets.sample_img_1} alt="" />
            <div>
                <h2 className="text-3xl font-medium max-w-lg mb-4"> Introducing the AI-Powered Text to Image Generator </h2>
                <p className="text-gray-600  mb-4">This project allows users to generate images from text descriptions using advanced AI algorithms. It enhances creativity, saves time, and provides a unique way to visualize ideas.</p>
                <p className="text-gray-600  mb-4">Benefits of AI include increased efficiency, the ability to handle large amounts of data, improved accuracy, and the automation of repetitive tasks.</p>
            </div>
        </div>
    </div>
)
}

export default Description