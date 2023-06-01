import * as Styled from "./style"

import LoginForm  from '../components/LoginForm';
import Input from "../../../components/Input";
import LoginSubmit from "../components/LoginSubmit";
import LoginChangeSign from "../components/LoginChangeSign";

export default function SignUp() {
    return (
        <LoginForm title="Sign Up">

            <Input
                label="Full Name"
                placeholder="Enter your name"
                type="text"
            />

            <Input
                label="Email"
                placeholder="Enter your email"
                type="email"
            />

            <Input
                label="Password"
                placeholder="Enter your password"
                type="password"
            />

            <Input
                label="Phone Number"
                placeholder="Enter your phone number"
                type="phone"
            />

            <LoginSubmit>Sign Up</LoginSubmit>
            <Styled.SignUpDoYouHaveAnAccount>Do you have an Account?</Styled.SignUpDoYouHaveAnAccount>
            <LoginChangeSign>Sign in</LoginChangeSign>

        </LoginForm>
    );
}
