import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { login } from "../utils/auth";

const Login = ({ setAuth }) => {
	const [email, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleLogin = async (e) => {
		e.preventDefault();
		setLoading(true);

		try {
			const response = await fetch("http://localhost:5000/api/login", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ email, password }),
			});

			const data = await response.json();

			console.log("Response OK:", response.ok)
			console.log("Data Token:", data.token)

			if (response.ok && data.token) {
				login(data.token); // Store token
				setAuth(true);
				console.log("response ok, should redirect to home")
				navigate("/"); // Redirect to Home
				console.log("navigate should have run");
			} else {
				console.log("response not ok")
				setError("Invalid credentials. Please try again.");
			}
		} catch (error) {
			setError("An error occurred. Please try again later.");
		} finally {
			setLoading(false);
		}
	};

	return (
		<div>
			<Navbar />
			<div className="container">
				<h2>Login</h2>

				{error && <p className="error-message">{error}</p>}

				<form onSubmit={handleLogin}>
					<label>Username/Email:</label>
					<input
						type="text"
						value={email}
						onChange={(e) => setUsername(e.target.value)}
						placeholder="Enter your username/email"
						required
					/>

					<label>Password:</label>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						placeholder="Enter your password"
						required
					/>

					<button type="submit" disabled={loading}>
						{loading ? "Logging in..." : "Login"}
					</button>
				</form>
			</div>
		</div>
	);
};

export default Login;
