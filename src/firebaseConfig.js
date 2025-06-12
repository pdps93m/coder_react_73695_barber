import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCyw1NPAAX4reAZkOLNj_b07QBA9vDYQrU",
  authDomain: "giordano-ecommerce.firebaseapp.com",
  projectId: "giordano-ecommerce",
  storageBucket: "giordano-ecommerce.appspot.com", 
  messagingSenderId: "173119075621",
  appId: "1:173119075621:web:aa5da515fb54509cc7d6cc"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);