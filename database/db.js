import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const DBConnection = async () => {
    // const USERNAME = process.env.DB_USERNAME;
    // const PASSWORD = process.env.DB_PASSWORD;

    // const MONGO_URI = `mongodb://vishaldharpure05:codeforu@ac-exjvbks-shard-00-00.cuu9jnc.mongodb.net:27017,ac-exjvbks-shard-00-01.cuu9jnc.mongodb.net:27017,ac-exjvbks-shard-00-02.cuu9jnc.mongodb.net:27017/?ssl=true&replicaSet=atlas-8k4qsd-shard-0&authSource=admin&retryWrites=true&w=majority`;
    const MONGO_URI=`mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@ac-fygpbub-shard-00-00.ew2pxcn.mongodb.net:27017,ac-fygpbub-shard-00-01.ew2pxcn.mongodb.net:27017,ac-fygpbub-shard-00-02.ew2pxcn.mongodb.net:27017/?ssl=true&replicaSet=atlas-x1dwf4-shard-0&authSource=admin&retryWrites=true&w=majority`
    try {
        await mongoose.connect(MONGO_URI, { useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error.message);
    }
}

export default DBConnection;