// import { getFirestore } from 'firebase-admin/firestore'
// import { initializeApp, getApps, cert } from 'firebase-admin/app'

// const apps = getApps()

// if (!apps.length) {
//     initializeApp({
//         credential: cert( './backand-74aba-firebase-adminsdk-t6yf4-301d06b939.json') // 👈 Path to your JSON Firebase certificate
//     })
// }

// export default async () => {
//     const db = getFirestore()
//     const productsSnap = await db.collection('message').get()
//     const productsData = productsSnap.docs.map(doc => {
//         return {
//             uuid: doc.id,
//             ...doc.data()
//         }
//     })

//     return productsData
// }

import { initializeApp } from "firebase/app";
import { collection, doc, getDocs, getFirestore } from "firebase/firestore";
import firebaseConfig from "~~/config/firebase";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default async () => {
  const querySnapshot = await getDocs(collection(db, "message"));
  return querySnapshot;
};
