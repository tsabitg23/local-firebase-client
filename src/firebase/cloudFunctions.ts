import { firebaseApp } from "./firebase";
import {
  connectFunctionsEmulator,
  getFunctions,
  httpsCallable,
} from "firebase/functions";

const firebaseFunctions = getFunctions(firebaseApp);
connectFunctionsEmulator(
  firebaseFunctions,
  process.env.FIREBASE_FUNCTION_HOST || "127.0.0.1",
  +(process.env.FIREBASE_FUNCTION_PORT || 5001)
);

export async function callCloudFunction(functionName: string, data: any) {
  const functionRef = httpsCallable(firebaseFunctions, functionName);
  return functionRef(data);
}
