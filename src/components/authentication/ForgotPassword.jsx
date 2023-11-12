import React, { useRef, useState } from "react";
import { Card, Button, Form, Alert } from "react-bootstrap";
import { useAuth } from "../../contexts/AuthContext";
import { Link } from "react-router-dom";
import CenteredContainer from "./CenteredContainer";

export default function ForgotPassword() {
	const emailRef = useRef();
	const { resetPassword } = useAuth();
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState("");

	async function handleSubmit(e) {
		e.preventDefault();

		try {
			setMessage("");
			setError("");
			setLoading(true);
			// await login(emailRef.current.value);
			await resetPassword(emailRef.current.value);
			setMessage("Check your inbox for further instructions");
		} catch (err) {
			setError("Failed to reset password");
		}
		setLoading(false);
	}

	return (
		<CenteredContainer>
			<Card>
				<Card.Body>
					<h2 className="text-center mb-4">Password Reset</h2>
					{message && <Alert variant="success">{message}</Alert>}
					{error && <Alert variant="danger">{error}</Alert>}
					<Form onSubmit={handleSubmit}>
						<Form.Group id="email">
							<Form.Label>Email</Form.Label>
							<Form.Control
								type="email"
								required
								ref={emailRef}
							/>
						</Form.Group>

						<Button
							className="w-100 mt-3"
							type="submit"
							disabled={loading}
						>
							Reset Password
						</Button>
					</Form>
					<div className="w-100 text-center mt-3">
						<Link to="/login">Log In</Link>
					</div>
				</Card.Body>
			</Card>
			<div className="w-100 text-center mt-2">
				Need an account? <Link to="/signup">Sign Up</Link>
			</div>
		</CenteredContainer>
	);
}
