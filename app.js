let navphoto = document.querySelectorAll('.photo');
let highlight = document.querySelector('.highlight');
let pictitle = document.querySelector('.picture-heading');
let subtext = document.querySelector('.picture-paragraph');
let currentPicture = 0;
const leftButton = document.querySelector('.button-l');
const rightButton = document.querySelector('.button-r');

let pictureText = {
	0: {
		pictitle: 'Tények',
		subtext:
			'Steinbergerné Mari, makói polgár sétáltatni vitte jókedélyű házikedvencét. Terror lett a vége.',
	},
	1: {
		pictitle: 'Ferrari Master Plan',
		subtext: 'Clown Fiesta',
	},
	2: {
		pictitle: 'Diva',
		subtext: 'Sensation bear releases new album: Pwned!',
	},
	3: {
		pictitle: 'Chemistry',
		subtext: 'Cat is the water.',
	},
	4: {
		pictitle: 'Innocence',
		subtext: 'A burning sensation.',
	},
	5: {
		pictitle: 'Cat in a box',
		subtext: 'Baboooo! You fox eared asshole!',
	},
	6: {
		pictitle: 'Avengers',
		subtext: 'Just watch it for the memes',
	},
	7: {
		pictitle: 'Art',
		subtext: 'Rip Benke Laci, a true bad boy of the kitchen, archon of vegeta',
	},
};

leftButton.onclick = function () {
	if (currentPicture === 0) {
		currentPicture = 7;
		swapContent();
	} else {
		currentPicture--;
		swapContent();
	}
};
rightButton.onclick = function () {
	if (currentPicture === 7) {
		currentPicture = 0;
		swapContent();
	} else {
		currentPicture++;
		swapContent();
	}
};

for (let i = 0; i < navphoto.length; i++) {
	navphoto[i].addEventListener('click', function () {
		changePicture(i);
	});
}

function changePicture(number) {
	currentPicture = number;
	swapContent();
}
function swapContent() {
	highlight.innerHTML = navphoto[currentPicture].innerHTML;
	pictitle.textContent = pictureText[currentPicture].pictitle;
	subtext.textContent = pictureText[currentPicture].subtext;
}
