import React from "react";
import { ErrorMessage, Field } from "formik";
import { ErrorMessageStyles, InputCustomStyle } from "./style";
interface Iprops {
	name: string;
	placeholder: string;
	rest?: any;
}
export default function InputCustom({ name, placeholder, ...rest }: Iprops) {
	return (
		<InputCustomStyle>
			<Field
				id={name}
				name={name}
				placeholder={placeholder}
				className="input-form"
			/>
			<ErrorMessage name={name} render={displayErrorMessage} />
		</InputCustomStyle>
	);
}

function displayErrorMessage(msg: string) {
	return <ErrorMessageStyles>{msg}</ErrorMessageStyles>;
}
