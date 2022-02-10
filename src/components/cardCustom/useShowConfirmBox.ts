import { useState } from "react";

const useShowConfirmBox = () => {
	const [isOpenBox, setIsOpenBox] = useState(false);
	const handleClickDelete = () => {
		setIsOpenBox(true);
	};
	const handleClickClose = () => {
		setIsOpenBox(false);
	};
	const handleDisAgree = () => {
		setIsOpenBox(false);
	};
	return { isOpenBox, handleClickDelete, handleClickClose, handleDisAgree };
};

export default useShowConfirmBox;
