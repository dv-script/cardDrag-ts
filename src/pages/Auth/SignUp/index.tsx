import * as Styled from "./style"

import LoginForm  from '../components/LoginForm';
import LoginInput from "../components/LoginInput";
import LoginSubmit from "../components/LoginSubmit";
import LoginChangeSign from "../components/LoginChangeSign";

export default function SignUp() {
    return (
        <LoginForm title="Sign Up">

            <LoginInput
                labelContent="Full Name"
                inputPlaceHolder="Enter your name"
            />

            <LoginInput
                labelContent="Email"
                inputPlaceHolder="Enter your email"
            />

            <LoginInput
                labelContent="Password"
                inputPlaceHolder="Enter your password"
            />

            <LoginInput
                labelContent="Phone Number"
                inputPlaceHolder="Enter your phone number"
            />

            <LoginSubmit>Sign Up</LoginSubmit>
            <Styled.SignUpDoYouHaveAnAccount>Do you have an Account?</Styled.SignUpDoYouHaveAnAccount>
            <LoginChangeSign>Sign in</LoginChangeSign>

        </LoginForm>
    );
}
