import { initializeApp } from '@firebase/app';
import { getStorage} from "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPbd_2aPOKWubybK0uYhSk43Okztllg38",
  authDomain: "my-final-app-3100.firebaseapp.com",
  projectId: "my-final-app-3100",
  storageBucket: "gs://my-final-app-3100.appspot.com",
  messagingSenderId: "438461403438",
  appId: "1:438461403438:web:4223147b16caa908742abf",
  measurementId: "G-Y1PTQ66F4C"
};

const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);
export default firebaseConfig;