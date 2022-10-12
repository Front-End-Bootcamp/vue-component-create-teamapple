export const toast = (message = "Default Message", options = {}) => {
	const { background = '#212121', position = 'top-right', icon = "mood", duration = 10000 } = options;
	const toast = {
		id: new Date().getTime(),
		description: message,
		show: true,
		duration,
		icon,
		class: {
			position,
			background,
		},
		success: (description = 'Success Notification !', options = {}) => {
			const { position = 'top-right', icon = "check_circle", duration = 10000 ,background = '#4caf50'} = options;
			toast.description = description;
			toast.class.position = position;
			toast.icon= icon;
			toast.duration = duration;
			toast.class.background = background;
			return toast;
		},
		error: (description = 'Error Notification !') => {
			const { position = 'top-right', icon = "priority_high", duration = 10000 ,background = '#f44336'} = options;
			toast.description = description;
			toast.class.position = position;
			toast.icon= icon;
			toast.duration = duration;
			toast.class.background = background;
			return toast;
		},
		warning: (description = 'Warning Notification !') => {
			const { position = 'top-right', icon = "warning", duration = 10000 ,background = '#ff9800'} = options;
			toast.description = description;
			toast.class.position = position;
			toast.icon= icon;
			toast.duration = duration;
			toast.class.background = background;
			return toast;
		},
		info: (description = 'Info Notification !') => {
			const { position = 'top-right', icon = "info", duration = 10000 ,background = '#2196f3'} = options;
			toast.description = description;
			toast.class.position = position;
			toast.icon= icon;
			toast.duration = duration;
			toast.class.background = background;
			return toast;
		},
	};
	return toast;
}
