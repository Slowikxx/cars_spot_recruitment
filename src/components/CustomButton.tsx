interface CustomButtonProps {
	btnText: string;
	additionalStyles: string;
}

const CustomButton = ({ btnText, additionalStyles }: CustomButtonProps) => {
	return (
		<button
			className={`py-4 rounded-xl font-robotoFlex font-semibold leading-[22.5px] text-[15px] flex justify-center items-center ${additionalStyles}`}
		>
			{btnText}
		</button>
	);
};

export default CustomButton;
