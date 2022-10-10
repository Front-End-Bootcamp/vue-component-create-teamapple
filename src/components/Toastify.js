export const toast = (message ="Default Message", options = {}) => {
  const { type = 'default', position = 'top-right' , icon = "mood" , duration = 5000 } = options;
  const toast = {
    id: new Date().getTime(),
    description: message,
    show: true,
    duration,
    icon,
    class: {
      type,
      position,
    },
    success: (description = 'Success Notification !' , options = {}) => {
      const { position = 'top-right' , icon = "mood" , duration = 5000 } = options;
      toast.description = description;
      toast.class.position = position;
      toast.class.type = 'success';
      toast.icon = 'check_circle';
      return toast;
    },
    error: (description = 'Error Notification !') => {
      toast.description = description;
      toast.class.type = 'error';
      toast.icon = 'priority_high';
      return toast;
    },
    warning: (description = 'Warning Notification !') => {
      toast.description = description;
      toast.class.type = 'warning';
      toast.icon = 'warning';
      return toast;
    },
    info: (description = 'Info Notification !') => {
      toast.description = description;
      toast.class.type = 'info';
      toast.icon = 'info';
      return toast;
    },
  };
  return toast;
}
