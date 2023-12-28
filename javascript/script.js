const navbar = document.getElementById("navbar");
const openBtn = document.getElementById("open-btn");
const closeBtn = document.getElementById("close-btn");
const navbarLinks = document.getElementById("navbar-links");
const triggerArea = document.getElementById("trigger-area");
const dialogBox = document.getElementById("dialog");
const form = document.forms[0];
const [name, email, subject, message, button] = form;

console.log(dialogBox.children); 

const openNavBar = () => {
	navbar.classList.remove("hidden");
	triggerArea.classList.remove("hidden");
};

const closeNavBar = () => {
	navbar.classList.add("hidden");
	triggerArea.classList.add("hidden");
};

const openDialogBox = (e) => {
	// console.log(e.target.id)
	e.preventDefault();
	if (e.target === button) {
		dialogBox.showModal();
	}
}

const clearForm = () => {
	name.value = '';
	email.value = '';
	subject.value = '';
	message.value = '';
}

const submitForm = (e) => {
	if (e.target.id === 'cancel-btn') {
		e.preventDefault();
		dialogBox.close()
	}
	else if (e.target.id === 'submit-btn') {
		form.submit()
		clearForm()
	}
}

openBtn.addEventListener("click", openNavBar);
closeBtn.addEventListener("click", closeNavBar);
navbarLinks.addEventListener("click", closeNavBar);
triggerArea.addEventListener("click", closeNavBar);
triggerArea.addEventListener("touchstart", closeNavBar);
form.addEventListener("click", openDialogBox);
dialogBox.addEventListener("click", submitForm);
