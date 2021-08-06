import { FunctionComponent } from 'react';

interface ButtonProps {
	label: string;
}

export const Button: FunctionComponent<ButtonProps> = ({
	label
}) => {
	return(
		<button>{label}</button>
	)
}