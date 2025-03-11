import React, { useState } from "react";

const Login = () => {
    // State to toggle between login and register views
    const [view, setView] = useState("login");

    // State for login form
    const [loginForm, setLoginForm] = useState({
        username: "",
        password: "",
    });

    // State for new user registration form
    const [newUser, setNewUser] = useState({
        username: "",
        email: "",
        password: "",
    });

    // Handle login form input changes
    const handleLoginChange = (e) => {
        setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
    };

    // Handle new user form input changes
    const handleNewUserChange = (e) => {
        setNewUser({ ...newUser, [e.target.name]: e.target.value });
    };

    // Handle login form submission
    const handleLoginSubmit = (e) => {
        e.preventDefault();
        console.log("Login submitted:", loginForm);
        alert("Login submitted! Check console for details.");
    };

    // Handle new user registration
    const handleRegisterUser = (e) => {
        e.preventDefault();
        if (newUser.username && newUser.email && newUser.password) {
            console.log("Registration submitted:", newUser);
            alert("Registration submitted! Check console for details.");
            setNewUser({ username: "", email: "", password: "" });
            setView("login");
        } else {
            alert("Please fill in all fields.");
        }
    };

    return (
        <div className="min-h-screen bg-gray-200 flex items-center justify-center">
            <div className="bg-white p-6 rounded-2xl shadow-2xl w-[80vw] md:w-[50vw] lg:w-[40vw] xl:w-[30vw]">
                <div className="flex justify-center mb-6">
                    <img
                        src="./nea_logo.png"
                        alt="Nepal Electricity Authority Logo"
                        className="h-16" // Adjust height as needed (e.g., 64px)
                    />
                </div>

                {view === "login" ? (
                    <>
                        {/* Login Form */}
                        <h2 className="text-2xl font-bold text-blue-500 mb-8 text-center">Login</h2>
                        <form onSubmit={handleLoginSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="username" className="block text-gray-700 mb-2 font-medium">
                                    Username
                                </label>
                                <input
                                    type="text"
                                    name="username"
                                    value={loginForm.username}
                                    onChange={handleLoginChange}
                                    className="border border-gray-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                    placeholder="Enter your username"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block text-gray-700 mb-2 font-medium">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    value={loginForm.password}
                                    onChange={handleLoginChange}
                                    className="border border-gray-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                    placeholder="Enter your password"
                                    required
                                />
                            </div>
                            <div className="flex justify-center">
                                <button
                                    type="submit"
                                    className="bg-green-500 text-white font-semibold py-2 px-4 rounded-full hover:bg-green-600 transition duration-300"
                                >
                                    Sign In
                                </button>
                            </div>
                        </form>
                        <div className="text-center mt-6">
                            <button
                                onClick={() => setView("register")}
                                className="bg-green-500 text-white font-semibold py-2 px-4 rounded-full hover:bg-green-600 transition duration-300"
                            >
                                Register
                            </button>
                        </div>
                    </>
                ) : (
                    <>
                        {/* Registration Form */}
                        <h3 className="text-2xl font-bold text-blue-500 mb-8 text-center">
                            Register New User
                        </h3>
                        <form onSubmit={handleRegisterUser} className="space-y-6">
                            <div>
                                <label htmlFor="username" className="block text-gray-700 mb-2 font-medium">
                                    Username
                                </label>
                                <input
                                    type="text"
                                    name="username"
                                    value={newUser.username}
                                    onChange={handleNewUserChange}
                                    className="border border-gray-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                    placeholder="Enter username"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={newUser.email}
                                    onChange={handleNewUserChange}
                                    className="border border-gray-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                    placeholder="Enter email"
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block text-gray-700 mb-2 font-medium">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    value={newUser.password}
                                    onChange={handleNewUserChange}
                                    className="border border-gray-300 p-3 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                                    placeholder="Enter password"
                                />
                            </div>
                            <div className="flex justify-center">
                                <button
                                    type="submit"
                                    className="bg-green-500 text-white font-semibold py-2 px-4 rounded-full hover:bg-green-600 transition duration-300"
                                >
                                    Register
                                </button>
                            </div>
                        </form>
                        <div className="text-center mt-6">
                            <button
                                onClick={() => setView("login")}
                                className="bg-green-500 text-white font-semibold py-2 px-4 rounded-full hover:bg-green-600 transition duration-300"
                            >
                                Back to Sign In
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Login;