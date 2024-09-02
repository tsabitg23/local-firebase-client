import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { signUpController } from "./api/signup";
import { loginController } from "./api/login";
import { callFunction } from "./api/callCloudFunction";

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());

// ENDPOINTS
app.post("/signup", signUpController);
app.post("/login", loginController);
app.post("/call/:functionName", callFunction);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
