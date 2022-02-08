import React, { useState } from "react";
import { Formik, Form } from "formik";
import { initialValue, SignInSchema } from "./login";
import { LoginStyles } from "./styles";
import InputCustom from "../../components/InputCustom";
import useSignInForm from "./hook";

function LoginPage() {
	const [isSignIn, setIsSignIn] = useState(true);
	const { handleLogin } = useSignInForm();
	return (
		<LoginStyles>
			<Formik
				initialValues={initialValue}
				validationSchema={SignInSchema}
				onSubmit={handleLogin}
			>
				<Form className="sign-form">
					<div className="form-header">{isSignIn && "Sign In"}</div>
					<InputCustom name="email" placeholder="username or email" />
					<InputCustom name="password" placeholder="password" />
					<div className="group-bottom">
						<button type="submit" className="btn-pink">
							Sign In
						</button>
					</div>
					<div className="group-bottom">
						<button className="btn-white">Sign Up</button>
					</div>
				</Form>
			</Formik>
		</LoginStyles>
	);
}

export default LoginPage;
