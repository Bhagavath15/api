import { client } from "./index.js";
import express from "express"

const router = express.Router()

router.get("/students", async function (request, response) {
    const result = await client.db("database").collection("students").find({}).toArray();
    response.send(result);
});
router.post("/students", async function (request, response) {
    const data = request.body;
    const student = await client.db("database").collection("students").insertMany(data);
    response.send(student);
});
router.get("/mentors", async function (request, response) {
    const result = await client.db("database").collection("mentors").find({}).toArray();
    response.send(result);
});
router.post("/mentors", async function (request, response) {
    const data = request.body;
    const mentor = await client.db("database").collection("mentors").insertMany(data);
    response.send(mentor);
});
router.get("/mentor-student", async function (request, response) {
    const assign = await client.db("database").collection("mentorstudent").find({}).toArray();
    response.send(assign);
});
router.post("/mentor-student", async function (request, response) {
    const data = request.body;
    const result = await client.db("database").collection("mentorstudent").insertMany(data);
    response.send(data);
});
router.get("/mentor-student/:mentorName", async function (request, response) {
    const { mentorName } = request.params;
    const name = await client.db("database").collection("mentorstudent").findOne({ mentorName: mentorName });
    name ? response.send(name) : response.status(400).send({ message: "mentor is not found" });
});
router.put("/mentor-student/:mentorName", async function (request, response) {
    const { mentorName } = request.params;
    const data = request.body;
    const name = await client.db("database").collection("mentorstudent").updateOne({ mentorName: mentorName }, { $set: data });
    response.send(name);
});

export default router