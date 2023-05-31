import * as Styled from "./style"

import LoginForm  from '../components/LoginForm';
import Input from "../../../components/Input";
import LoginSubmit from "../components/LoginSubmit";
import LoginChangeSign from "../components/LoginChangeSign";

export default function SignUp() {
    return (
        <LoginForm title="Sign Up">

            <Input
                labelContent="Full Name"
                inputPlaceHolder="Enter your name"
            />

            <Input
                labelContent="Email"
                inputPlaceHolder="Enter your email"
            />

            <Input
                labelContent="Password"
                inputPlaceHolder="Enter your password"
            />

            <Input
                labelContent="Phone Number"
                inputPlaceHolder="Enter your phone number"
            />

            <LoginSubmit>Sign Up</LoginSubmit>
            <Styled.SignUpDoYouHaveAnAccount>Do you have an Account?</Styled.SignUpDoYouHaveAnAccount>
            <LoginChangeSign>Sign in</LoginChangeSign>

        </LoginForm>
    );
}
