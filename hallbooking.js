import { client } from './index.js';
import express from "express"

const router = express.Router()

router.post("/rooms", async function (request, response) {
    const data = request.body;
    const room = await client.db("database").collection("rooms").insertOne(data);
    response.send(room);
});
router.post("/book-rooms", async function (request, response) {
    const data = request.body;
    const bookRooms = await client.db("database").collection("bookRooms").insertOne(data);
    response.send(bookRooms);
});


router.get("/rooms", async function (request, response) {
    const room_create = await client
        .db("database")
        .collection("rooms")
        .find({})
        .toArray();
    response.send(room_create);
});


router.get("/book-rooms", async function (request, response) {
    const room_booking = await client
        .db("database")
        .collection("bookRooms")
        .find({})
        .toArray();
    response.send(room_booking);
});


router.get("/booked-data", async function (request, response) {
    const room_booked_data = await client
        .db("database")
        .collection("room_booked_data")
        .find({})
        .toArray();
    response.send(room_booked_data);
});

router.post("/booked-data", async function (request, response) {
    const data = request.body;
    console.log(data);
    const result = await client
        .db("database")
        .collection("room_booked_data")
        .insertMany(data)
    response.send(result);
});

router.get("/customerbooked-data", async function (request, response) {
    const customer_booked_data = await client
        .db("database")
        .collection("customer_booked_data")
        .find({})
        .toArray();
    response.send(customer_booked_data);
});

router.post("/customerbooked-data", async function (request, response) {
    const data = request.body;
    console.log(data);
    const result = await client
        .db("database")
        .collection("customer_booked_data")
        .insertMany(data)
    response.send(result);
});

export default router