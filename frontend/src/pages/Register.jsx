import Form from "../components/Form"
import NavBar from "../components/NavBar";
import Footer from '../components/Footer';

function Register() {
    return (
        <div>
            <NavBar /> {/* Include the NavBar component */}
            <div className="container mt-4">
                <Form route="/api/user/register/" method="register" /> {/* Include the Form component */}
            </div>
            <Footer />
        </div>
    );
}

export default Register;