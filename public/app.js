const splash = document.querySelector('.splash__screen');

document.addEventListener('DOMContentLoaded', (e) => {
	setTimeout(() => {
		splash.classList.add('display-none');
	}, 3000);
});

function handleClick2() {
	document.getElementById('contactus-form').reset();
	document.getElementById('thankyou').style.display = 'inline-block';
}
