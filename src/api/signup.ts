import { Request, Response } from "express";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/auth";
export const signUpController = async (req: Request, res: Response) => {
    const { email, password } = req.body;
  
    try {
      // Create a new user with the provided email and password
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      res.json(user);
    } catch (error) {
      console.error("Error creating user:", error);
      res.status(500).send({
        message: (error as Error).message,
      });
    }
  }