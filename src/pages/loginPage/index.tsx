import React, { useState } from "react";
import { Formik, Form } from "formik";
import { initialValue, SignInSchema } from "./login";
import { LoginStyles } from "./styles";
import InputCustom from "../../components/InputCustom";
import useSignInForm from "./hook";

function LoginPage() {
	const { changeForm, isSignIn, handleSubmitForm } = useSignInForm();
	return (
		<LoginStyles>
			<Formik
				initialValues={initialValue}
				validationSchema={SignInSchema}
				onSubmit={handleSubmitForm}
			>
				<Form className="sign-form">
					<div className="form-header">{isSignIn ? "Sign In" : "Sign Up"}</div>
					<InputCustom name="email" placeholder="username or email" />
					<InputCustom name="password" placeholder="password" />
					<div className="group-bottom">
						<button type="submit" className="btn-pink">
							{isSignIn ? "Sign In" : "Sign Up"}
						</button>
					</div>
					<div className="group-bottom">
						<button type="button" className="btn-white" onClick={changeForm}>
							{isSignIn ? "Sign Up" : "Sign In"}
						</button>
					</div>
				</Form>
			</Formik>
		</LoginStyles>
	);
}

export default LoginPage;
