import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { isAuthenticated } from "../utils/auth";

const Home = () => {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [file, setFile] = useState(null);
	const navigate = useNavigate();

	const handleFileChange = (e) => {
		setFile(e.target.files[0]);
	};

	useEffect(() => {
		if (!isAuthenticated()) {
			navigate("/login");
		}
	}, [navigate]);


	return (
		<div className="min-h-screen bg-gray-100 flex flex-col">
			<Navbar />
			<div className="flex flex-grow justify-center items-center px-4">
				<div className="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full md:w-[450px]">
					<h2 className="text-2xl font-bold text-center mb-4 text-gray-800">Upload your RESUME</h2>

					<div className="mb-4">
						<label className="block text-gray-700 font-semibold mb-1">Upload File:</label>
						<input
							type="file"
							onChange={handleFileChange}
							className="block w-full text-sm text-gray-500
                         file:mr-4 file:py-2 file:px-4
                         file:rounded-lg file:border-0
                         file:text-sm file:font-semibold
                         file:bg-blue-500 file:text-white
                         hover:file:bg-blue-600"
						/>
					</div>

					<div className="mb-4">
						<label className="block text-gray-700 font-semibold mb-1">Title:</label>
						<input
							type="text"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
							placeholder="Enter title"
							className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 outline-none"
						/>
					</div>

					<div className="mb-4">
						<label className="block text-gray-700 font-semibold mb-1">Description:</label>
						<textarea
							value={description}
							onChange={(e) => setDescription(e.target.value)}
							placeholder="Enter description"
							rows="3"
							className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 outline-none"
						></textarea>
					</div>

					<button className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition duration-200">
						Submit
					</button>
				</div>
			</div>
		</div>
	);
};

export default Home;
