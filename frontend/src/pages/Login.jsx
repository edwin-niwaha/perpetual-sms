import Form from "../components/UserForm"
import TopBar from "../components/TopBar";
import Footer from '../components/Footer';

function Login() {
    return (
        <div>
            <TopBar /> {/* Include the TopBar component */}
            <div className="container mt-4">
                <Form route="/api/token/" method="login" /> {/* Include the Form component */}
            </div>
            <Footer />
        </div>
    );
}

export default Login;