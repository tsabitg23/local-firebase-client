import { Request, Response } from "express";
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/auth";

export const loginController = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    // Execute the Firebase Cloud Function with data from the request body
    const user = await signInWithEmailAndPassword(auth, email, password);
    res.json(user);
  } catch (error) {
    res.status(500).send({
      message: (error as Error).message,
    });
  }
};
