// import { initializeApp } from "firebase/app";
// import { getDatabase, ref, get, onValue } from "firebase/database";

// const firebaseConfig = {
//   apiKey: "AIzaSyDoI1B1ogg_h_SbiHidacG3LzUJ-hw_kr4",
//   authDomain: "techsec-react.firebaseapp.com",
//   databaseURL:
//     "https://techsec-react-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "techsec-react",
//   storageBucket: "techsec-react.appspot.com",
//   messagingSenderId: "888662298735",
//   appId: "1:888662298735:web:ce1227bccec55ca690fd9a",
// };

// const app = initializeApp(firebaseConfig);

// const db = getDatabase(app);
// const dbref = ref(db);

// let ProductItemData = [];

// get(dbref).then((snapshot) => {
//   snapshot.forEach((snap) => {
//     ProductItemData.push(snap.val());
//   });
// });

// // onValue(dbref, (snapshot) => {
// //   snapshot.forEach((snap) => {
// //     ProductItemData.push(snap.val());
// //   });
// // });

// export default ProductItemData;
