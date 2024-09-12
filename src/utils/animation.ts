export const slideIn = (direction: string, type: string, delay: number) => ({
	hidden: {
		x: direction === 'left' ? -100 : direction === 'right' ? 100 : 0,
		y: direction === 'top' ? -100 : direction === 'bottom' ? 100 : 0,
		opacity: 0,
	},
	show: {
		x: 0,
		y: 0,
		opacity: 1,
		transition: {
			type: type,
			duration: 1.25,
			delay,
			ease: 'easeInOut',
		},
	},
});

export const fadeIn = (
	direction: string,
	type: string,
	delay: number,
	duration: number
) => ({
	hidden: {
		x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
		y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
		opacity: 0,
	},
	show: {
		x: 0,
		y: 0,
		opacity: 1,
		transition: {
			type,
			delay,
			duration,
			ease: 'easeOut',
		},
	},
});

export const navAnim = {
	hidden: {
		opacity: 0,
		y: -50,
		transition: {
			type: 'spring',
			stiffness: 300,
			damping: 140,
		},
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			type: 'spring',
			stiffness: 80,
			delay: 0.2,
		},
	},
};

export const footerAnim = {
	hidden: {
		opacity: 0,
		y: -50,
		transition: {
			type: 'tween',
			stiffness: 300,
			damping: 140,
		},
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			type: 'tween',
			stiffness: 80,
			delay: 0.2,
		},
	},
};
