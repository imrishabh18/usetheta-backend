import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import FormSchema from "./models/Schema.js";

const app = express()
dotenv.config()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

const CONNECTION_URL = process.env.CONNECTION_URL
const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on ${PORT}`)))
    .catch((err) => console.error(err))

mongoose.set('useFindAndModify', false);

// To post data to the DB
app.post('/', async (req, res) => {
    const data = req.body
    const newUser = new FormSchema(data)

    try{
        await newUser.save()
        res.status(200).json(newUser)
    }catch(err){
        res.json({message: err.message})
    }
})

//Example
app.get('/', (req, res) => {
    res.send("HEY!!")
})
