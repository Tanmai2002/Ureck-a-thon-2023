import { addDoc, collection, getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { doc, setDoc ,getDoc,updateDoc} from "firebase/firestore"; 

// process
// let env=process.env
// import {env} from "process";


    let env=import.meta.env


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// console.log(env)
const firebaseConfig = {
  apiKey:env.VITE_apiKey,
  authDomain: env.VITE_authDomain,
  projectId: env.VITE_projectId,
  storageBucket: env.VITE_storageBucket,
  messagingSenderId: env.VITE_messagingSenderId,
  appId: env.VITE_appId,
  measurementId: env.VITE_measurementId
};
// Initialize Firebase
const _app = initializeApp(firebaseConfig);
const _analytics = getAnalytics(_app);
const _db = getFirestore(_app);

const getUser=async(address)=>{
    try {
        let docRef=await getDoc(doc(_db,"users",address));
        console.log(docRef);
        if(docRef.data()){
            return docRef.data();
        }
        return {};
        
    } catch (error) {
        console.error(error)
        
    }
}

const updateUser=async(map,id)=>{
    try {
         let docRef = await updateDoc(doc(_db, "users",id), map);
          console.log("Document updated with ID: ", docRef);
        
    } catch (error) {
        console.error("Error adding document: ", error);
    }
}

const syncUserProfile=async(address)=>{
    try {
        let docRef=await getDoc(doc(_db,"users",address));
        console.log(docRef);
        if(docRef.data()){
            return docRef.data();
        }
         docRef = await setDoc(doc(_db, "users",address), {
            walletAddress:address
          });
          console.log("Document written with ID: ", docRef);
        
    } catch (error) {
        console.error("Error adding document: ", error);
    }

}


const writeTransaction=async(hash,receipt)=>{
    try {
        
         let docRef = await setDoc(doc(_db, "transactions",hash), 
         JSON.parse(JSON.stringify(receipt))
          );
          console.log("Document written with ID: ", docRef);
        
    } catch (error) {
        console.error("Error adding document: ", error);
    }

}

const writeRequest=async(requestTo,map)=>{
    try {
        
         let docRef = await addDoc(collection(_db, `users/${requestTo}/request`), 
         JSON.parse(JSON.stringify(map))
          );
          console.log("Document written with ID: ", docRef);
        
    } catch (error) {
        console.error("Error adding document: ", error);
    }

}






export {syncUserProfile,getUser,writeTransaction,updateUser,writeRequest}

