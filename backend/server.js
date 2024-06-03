const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://aadi:mongopass123@cluster0.lwjxmia.mongodb.net/UCW?retryWrites=true&w=majority")
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.error("Error connecting to MongoDB:", err));

const clubSchema= new mongoose.Schema({
  id:Number,
  title:String,
  description:String,
  image:String,
  logo:String
})

const Club= mongoose.model('Club',clubSchema,'Clubs');

app.get("/clubs",async(req,res)=>{
  try{
    const clubs = await Club.find().exec();
    res.json(clubs);
  }catch(err){
    console.error(err);
    res.status(500).json({message: "Error fetching clubs"});
  }
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});