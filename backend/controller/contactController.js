const Contact = require("../models/contact");
const sendEmail = require("../utils/sendEmail");

const contactController = {
    submit :async (req , res)=>{
        try {
            const {name , email , message} = req.body;
            //Save to MongoDB
            const contactData = await Contact.create({name , email , message});

            //Send email notification
            await sendEmail({name , email ,message})
            return res.status(200).json({message : "Message sent successfully..." , contactData});

        } catch (error) {
            console.error("Contact form error :" , error)   ;
            
            return res.status(500).json({
                message : "Failed to send message",
                error : error.message,
            })
        }        
    }
}

module.exports = contactController;