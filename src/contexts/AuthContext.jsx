import React, { useContext, useEffect, useState } from "react";
import { auth } from "../firebase";

const AuthContext = React.createContext();

export function useAuth() {
	return useContext(AuthContext);
}

export function AuthProvider({ children }) {
	const [currentUser, setCurrentUser] = useState();
	const [loading, setLoading] = useState(true);

	function signUp(email, password) {
		return auth.createUserWithEmailAndPassword(email, password); // this would return a promise, so we can give error message if there is a failure or redirect if successful
	}
	// whenever we call createUserWithE... its gonna call setCurrentUser

	function login(email, password) {
		return auth.signInWithEmailAndPassword(email, password);
	}

	function logout() {
		return auth.signOut();
	}

	function resetPassword(email) {
		return auth.sendPasswordResetEmail(email);
	}

	function updateEmail(email) {
		return currentUser.updateEmail(email);
	}

	function updatePassword(password) {
		return currentUser.updatePassword(password);
	}

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			setCurrentUser(user);
			setLoading(false);
		});
		return unsubscribe;
		//we will unsubscibe from this event(onAuthStateChanged) whenever we unmount this component
	}, []);
	const value = {
		currentUser,
		signUp,
		login,
		logout,
		resetPassword,
		updateEmail,
		updatePassword,
	};
	return (
		<AuthContext.Provider value={value}>
			{!loading && children}
		</AuthContext.Provider>
	);
}
