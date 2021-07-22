import mongoose from "mongoose";

const Schema = mongoose.Schema({
    fullname: String,
    email: String,
    company: String,
    companySize: Number,
    profilePicture: String,
    memes: {
        meme1: String,
        meme2: String,
        meme3: String,
        meme4: String,
        meme5: String
    }
})

const FormSchema = mongoose.model("FormSchema", Schema)

export default FormSchema