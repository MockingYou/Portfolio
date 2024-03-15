export function showToast(type, message, duration = 3000, icon = '') {
	const toast = {
	  type,
	  message,
	  duration,
	  visible: true,
	  icon,
	};
  
	setTimeout(() => {
	  toast.visible = false;
	}, duration);
	return toast;
  }
  