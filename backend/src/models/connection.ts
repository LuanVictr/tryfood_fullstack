import mongoose, { mongo } from "mongoose";
import 'dotenv/config';

const MongoURL = 'mongodb://localhost:27017/RecipesApp'

const connection = (
  mongoDbURI = process.env.MONGO_URI || MongoURL
) => mongoose.connect(mongoDbURI);

export default connection;