import dotenv from "dotenv";
dotenv.config();

let keys = process.env.dummy_array.split(",");
console.log(keys);