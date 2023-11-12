import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
export const config = {
	// apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
	apiKey: "AIzaSyAO0hKtLEP-GT6n46R8U65VdnhwyR1I68A",
	authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
	projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
	storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
	appId: import.meta.env.VITE_ID,
};
const app = firebase.initializeApp(config);

const firestore = app.firestore();
// console.log(import.meta.env);
export const database = {
	folders: firestore.collection("folders"),
	files: firestore.collection("files"),
	formatDoc: (doc) => {
		return { id: doc.id, ...doc.data() };
	},
	getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp,
};

export const storage = app.storage();
export const auth = app.auth();
export default app;
