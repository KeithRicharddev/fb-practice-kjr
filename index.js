// import our restaurants
const restaurants = require("./restaurants.json");

// import a set of tooks to talk to firebase and Firestore
const {
  initializeApp,
  applicationDefault,
  cert,
} = require("firebase-admin/app");
const {
  getFirestore,
  Timestamp,
  FieldValue,
} = require("firebase-admin/firestore");

//import our credentails
const credentials = require("./credentials.json");

//connect to firebase services
initializeApp({
  credential: cert(credentials),
});

//connect to firestore
const db = getFirestore();

// create a collection called "restaurants"

//add each restaurants
db.collection("restaurants")
  .add(restaurants[1])
  .then((doc) => {
    console.log("Added restaurants", doc.id);
  })
  .catch((err) => {
    console.error(err);
  });
