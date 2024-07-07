import Form from "../components/Form"
import NavBar from "../components/NavBar";

function Login() {
    return (
        <div>
            <NavBar /> {/* Include the NavBar component */}
            <div className="container mt-4">
                <Form route="/api/token/" method="login" /> {/* Include the Form component */}
            </div>
        </div>
    );
}

export default Login;