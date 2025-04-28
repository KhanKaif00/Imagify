import axios from "axios";
import userModel from "../models/userModel.js";
import FormData from "form-data";


export const generateImage = async (req, res) => {
    try{
        const userId = req.user.id;
        const { prompt } = req.body;
        const user = await userModel.findById(userId);
        console.log(user)

    if(!user || !prompt){
        return res.status(400).json({message:"Please fill all the fields"})
    }
    
    if(user.creditBalance === 0 || userModel.creditBalance < 0){
        return res.status(400).json({message:"You don't have enough credits", credits: user.creditBalance})
    }

    const formData = new FormData();

    formData.append("prompt", prompt);

   const {data} =  await axios.post('https://clipdrop-api.co/text-to-image/v1', formData, {
        headers: {
            'x-api-key': process.env.CLIPDROP_API,
          },
        responseType: 'arraybuffer',
    })
    
    const base64Image = Buffer.from(data, 'binary').toString('base64');
    const resultImage  = `data:image/png;base64,${base64Image}`;

    await userModel.findByIdAndUpdate(user._id, {
        $set: { creditBalance: user.creditBalance - 1 }, // Deduct 1 credit from the user's balance
    });

    res.json({ success: true, image: resultImage, credits: user.creditBalance - 1 });
}
    catch(err){
        console.log(err);
        res.status(500).json({ message: err.message });
    }
}