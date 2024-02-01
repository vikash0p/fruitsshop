'use client'
import { useReducer } from "react";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

const initialState = {
    username: "",
    email: "",
    password: "",
};

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_USERNAME":
            return { ...state, username: action.payload };
        case "SET_EMAIL":
            return { ...state, email: action.payload };
        case "SET_PASSWORD":
            return { ...state, password: action.payload };
        default:
            return state;
    }
};

const SignupPage = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleInputChange = (type, value) => {
        dispatch({ type, payload: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add signup logic here using state.username, state.email, and state.password
        // console.log("Signing up with:", state.username, state.email, state.password);
    };

    return (
        <div className="flex h-screen bg-gray-100">
            <div className="m-auto p-8 max-w-md bg-white shadow-md rounded-md">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-2xl font-semibold mb-4 text-center"
                >
                    Sign Up
                </motion.h1>
                <motion.form
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-4"
                    onSubmit={handleSubmit}
                >
                    <div className="flex items-center border-b border-gray-300 py-2">
                        <FaUser className="text-primary" />
                        <input
                            type="text"
                            placeholder="Username"
                            className="ml-2 outline-none flex-grow"
                            value={state.username}
                            onChange={(e) =>
                                handleInputChange("SET_USERNAME", e.target.value)
                            }
                        />
                    </div>
                    <div className="flex items-center border-b border-gray-300 py-2">
                        <FaEnvelope className="text-primary" />
                        <input
                            type="email"
                            placeholder="Email"
                            className="ml-2 outline-none flex-grow"
                            value={state.email}
                            onChange={(e) =>
                                handleInputChange("SET_EMAIL", e.target.value)
                            }
                        />
                    </div>
                    <div className="flex items-center border-b border-gray-300 py-2">
                        <FaLock className="text-primary" />
                        <input
                            type="password"
                            placeholder="Password"
                            className="ml-2 outline-none flex-grow"
                            value={state.password}
                            onChange={(e) =>
                                handleInputChange("SET_PASSWORD", e.target.value)
                            }
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 bg-primary text-white rounded-md hover:bg-primary focus:outline-none focus:ring focus:border-pribg-primary"
                    >
                        Sign Up
                    </button>
                </motion.form>
            </div>
        </div>
    );
};

export default SignupPage;
