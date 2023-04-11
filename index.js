import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()
// const express = require("express"); //"type":"commonjs"
import express from "express";//"type":"module"
import { MongoClient } from "mongodb"
import cors from "cors"
import studentRouter from "./student-mentor.js"
import hallBookingRouter from "./hallbooking.js"

export const app = express();

const PORT = process.env.PORT;

const MONGO_URL = process.env.MONGO_URL
// const MONGO_URL = "mongodb://127.0.0.1"

// console.log(process.env.MONGO_URL)

export const client = new MongoClient(MONGO_URL) //dial
await client.connect()
console.log("Mongo is connected")

app.use(cors())
app.use(express.json())

app.get("/", function (request, response) {
    response.send("🙋‍♂️, 🌏 🎊✨🤩");
});

app.use("/", studentRouter)
app.use("/", hallBookingRouter)

app.listen(PORT, () => console.log(`The server started in: ${PORT}`))