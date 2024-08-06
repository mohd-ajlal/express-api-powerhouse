import express from 'express';
import "dotenv/config"
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware

app.use(express.json());
app.use(express.urlencoded({
    extended:false
}));

app.get("/", (req, res)=>{
    return res.json({
        message:"Working Properly"
    })
})

// import routes

import ApiRoutes from "./routes/api.js";

app.use("/api", ApiRoutes);






app.listen(PORT, ()=> console.log("Server is running on port " +PORT)) 