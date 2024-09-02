import { connectAuthEmulator, getAuth } from "firebase/auth";
import { firebaseApp } from "./firebase";

const auth = getAuth(firebaseApp);
connectAuthEmulator(auth, process.env.FIREBASE_AUTH_DOMAIN || 'http://127.0.0.1:9099')

export default auth