import mongoose from "mongoose"

mongoose.connect("mongodb+srv://Kamila:10190207@cluster0.pqpc21b.mongodb.net/?retryWrites=true&w=majority");

let db = mongoose.connection;

export default db;