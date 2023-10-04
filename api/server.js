import express from "express";
import bodyParser from "body-parser";
import cors from "cors"
import mongoose from "mongoose";
import path from "path";
import bookstore from "./models/bookmodel.js"


const app = express();

app.use(bodyParser.json());
app.use(cors());

//mongoose connetions

mongoose.connect(
    "mongodb+srv://rabiagulcakilkaya:Rgb.0502@cluster0.turx8wx.mongodb.net/books?retryWrites=true&w=majority",
    {useNewUrlParser: true,
    useUnifiedTopology: true}
    ).then(console.log("connected to db"))
    .catch((err) => console.log(err))

app.get("/books", (req,res) =>{
    bookstore.find().then(books => res.json(books))
})

app.post("/newbook", async (req, res) =>{
    try{
        const newbook = new bookstore({
            bookName : req.body.bookName,
            author : req.body.author,
            quantity : req.body.quantity,
            department : req.body.department,
            comment : req.body.comment
        })

        const book = await newbook.save();
        res.status(200).json(book);

    }catch(err){
        console.log(err)
    }
})

app.delete('/delete/:id' , async (req,res) => {
    const id = req.params.id;
    console.log("req params", req.params.id)

    try {
        await bookstore.findByIdAndRemove(req.params.id)
        res.status(204).json()
    } catch (e) {
        res.status(500).json()
        console.log(e)
    }
})


app.listen(3000, () => {
    console.log("server çalıştı ")
});

