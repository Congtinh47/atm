import React, { FC } from "react";
import { ErrorMessage, Field } from "formik";
import { ErrorMessageStyles, InputCustomStyle } from "./styled";
interface Iprops {
	name: string;
	placeholder: string;
	type: string;
}
const InputCustom: FC<Iprops> = ({ name, placeholder, type }) => {
	return (
		<InputCustomStyle>
			<Field
				id={name}
				name={name}
				placeholder={placeholder}
				className="input-form"
				type={type}
			/>
			<ErrorMessage name={name} render={displayErrorMessage} />
		</InputCustomStyle>
	);
};
export default React.memo(InputCustom);
function displayErrorMessage(msg: string) {
	return <ErrorMessageStyles>{msg}</ErrorMessageStyles>;
}
