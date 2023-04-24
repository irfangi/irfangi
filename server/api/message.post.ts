// import createValidator from "~~/services/validation";

// // firestore
// import { initializeApp } from "firebase/app";
// import {
//   collection,
//   addDoc,
//   query,
//   where,
//   getDocs,
//   updateDoc,
// } from "firebase/firestore";
// import firebaseConfig from "~~/config/firebase";

// import { getFirestore } from "firebase/firestore";

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// interface Message {
//   name: string;
//   email: string;
//   message: string;
//   topic: number;
// }

// export default defineEventHandler(async event => {
//   const body: Message = await readBody(event);
//   const rules: any = {
//     name: ["required"],
//     email: ["required", "email"],
//     message: ["required"],
//     topic: ["required"],
//   };
//   const validate = createValidator(rules);
//   //   check validation is not valid
//   if (Object.keys(validate(body)).length > 0) {
//     throw createError({
//       statusCode: 400,
//       statusMessage: "Error Validate!",
//       data: validate(body),
//     });
//   } else {
//     try {
//       //   check is exist
//       const q = query(
//         collection(db, "message"),
//         where("email", "==", body.email)
//         // where("topic", "==", body.topic)
//       );
//       const data: any = await getDocs(q);
//       if (!data.empty) {
//         const docRef: any = await updateDoc(data.docs[0].ref, {
//           message: body.message,
//           name: body.name,
//         });
//         return {
//           statusCode: 200,
//           message: "Succes Update Data!",
//         };
//       } else {
//         const docRef: any = await addDoc(collection(db, "message"), body);
//         return {
//           statusCode: 200,
//           message: "Succes Add Data!",
//         };
//       }
//     } catch (error) {
//       throw createError({
//         statusCode: 400,
//         statusMessage: "Error add collection!",
//         data: error,
//       });
//     }
//   }
// });
