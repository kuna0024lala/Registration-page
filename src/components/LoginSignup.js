import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./loginSignup.css";

export const LoginSignup = () => {
    const [action, setAction] = useState("Sign Up");
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });

    useEffect(() => {
        const savedFormData = localStorage.getItem("formData");
        if (savedFormData) {
            setFormData(JSON.parse(savedFormData));
        }
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        localStorage.setItem("formData", JSON.stringify(formData));
        alert(`${action} successful!`);
        setFormData({
            username: "",
            email: "",
            password: "",
        });
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <form onSubmit={handleSubmit} className="bg-white p-4 shadow rounded">
                        <div className="text-center mb-4">
                            <h1 className="text-primary">{action}</h1>
                            <hr className="w-25 mx-auto text-primary" />
                        </div>
                        <div className="mb-3">
                            {action === "Login" ? null : (
                                <div className="input-group mb-3">
                                    <span className="input-group-text bg-light">
                                        <img src="person.png" alt="" />
                                    </span>
                                    <input
                                        type="text"
                                        name="username"
                                        className="form-control"
                                        placeholder="Username"
                                        value={formData.username}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                            )}
                            <div className="input-group mb-3">
                                <span className="input-group-text bg-light">
                                    <img src="email.png" alt="" />
                                </span>
                                <input
                                    type="email"
                                    name="email"
                                    className="form-control"
                                    placeholder="Email Id"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="input-group mb-3">
                                <span className="input-group-text bg-light">
                                    <img src="password.png" alt="" />
                                </span>
                                <input
                                    type="password"
                                    name="password"
                                    className="form-control"
                                    placeholder="Password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                        </div>
                        {action === "Sign Up" ? null : (
                            <div className="mb-3 text-end">
                                <a href="#" className="text-decoration-none text-muted">
                                    Forgot Password?
                                </a>
                            </div>
                        )}
                        <div className="d-flex justify-content-around">
                            <button
                                type="submit"
                                className={`btn ${action === "Login" ? "btn-light text-muted" : "btn-primary"}`}
                                onClick={() => setAction("Sign Up")}
                            >
                                Sign Up
                            </button>
                            <button
                                type="submit"
                                className={`btn ${action === "Sign Up" ? "btn-light text-muted" : "btn-primary"}`}
                                onClick={() => setAction("Login")}
                            >
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
