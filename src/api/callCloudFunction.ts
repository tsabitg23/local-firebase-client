import { Request, Response } from "express";
import { callCloudFunction } from "../firebase/cloudFunctions";

export const callFunction = async (req: Request, res: Response) => {
    const { functionName } = req.params;
  
    try {
      // Execute the Firebase Cloud Function with data from the request body
      const result = await callCloudFunction(functionName, req.body);
  
      res.json(result.data);
    } catch (error) {
      console.error(
        `Error calling Firebase Cloud Function ${functionName}:`,
        error
      );
      res.status(500).send("Internal Server Error");
    }
  }