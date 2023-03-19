console.clear();

const { gsap, CircleType } = window;

const cursorOuter = document.querySelector(".cursor--large");
const cursorInner = document.querySelector(".cursor--small");
const clock = document.querySelector(".clock");
const cursorTextContainerEl = document.querySelector(".cursor--text");
const cursorTextEl = cursorTextContainerEl.querySelector(".text");

const hoverItems = document.querySelectorAll(".cursor-hover-item");
const hoverEffectDuration = 0.3;
let isHovered = false;
let initialCursorHeight;

const cursorRotationDuration = 7;

let circleType = new CircleType(cursorTextEl);
circleType.radius(50);

setTimeout(() => {
	initialCursorHeight = circleType.container.style.getPropertyValue("height");
	console.log(initialCursorHeight);
}, 50);

hoverItems.forEach((item) => {
	item.addEventListener("pointerenter", handlePointerEnter);
	item.addEventListener("pointerleave", handlePointerLeave);
});

let mouse = {
	x: -100,
	y: -100,
};


//double click and single click
document.body.addEventListener("mousedown", (e) => {
	if (e.detail === 2) { // check if it was a double-click event or single-click event
		gsap.to(cursorInner, hoverEffectDuration, {
			scale: 10.4   // set inner cursor scale to 0.4
		});
		gsap.to(cursorOuter, hoverEffectDuration, {
			scale: 0.3    // set outer cursor scale to 1
		});
		let rotateInterval;

		// Add event listeners for when the user presses and releases a button
		document.addEventListener('mousedown', function (event) {
			if (event.code === 'click') { // replace 'Space' with the desired button key code
				rotateInterval = setInterval(rotateElement, 10); // replace 10 with the desired rotation speed
			}
		});

		document.addEventListener('mouseup', function (event) {
			if (event.code === 'click') {
				clearInterval(rotateInterval); // stop rotating the element
			}
		});

		// This function will continually rotate the specified element
		function rotateElement() {
			const element = document.querySelector(".clock");

			// Modify the style of the element to make it rotate. You can adjust the transform values for different rotation directions and speeds
			element.style.transform += 'rotate(20deg)'; // replace 1deg with the desired amount of rotation per interval
		}
	} else { // otherwise, execute single click event
		gsap.to(cursorInner, hoverEffectDuration, {
			scale: 3.5
		});
		gsap.to(cursorOuter, hoverEffectDuration, {
			scale: 0.4
		});
	}
});

document.body.addEventListener("mouseup", (e) => {
	gsap.to(cursorInner, hoverEffectDuration, {
		scale: 1
	});
	gsap.to(cursorOuter, hoverEffectDuration, {
		scale: 1.2
	});
});



document.body.addEventListener("pointermove", updateCursorPosition);

function updateCursorPosition(e) {
	mouse.x = e.pageX;
	mouse.y = e.pageY;
}

function updateCursor() {
	gsap.set([cursorInner, cursorTextContainerEl], {
		x: mouse.x,
		y: mouse.y
	});

	gsap.to(cursorOuter, {
		duration: 0.029,
		x: mouse.x,
		y: mouse.y
	});

	if (!isHovered) {
		gsap.to(cursorTextContainerEl, hoverEffectDuration * 0.5, {
			opacity: 0
		});
		gsap.set(cursorTextContainerEl, {
			rotate: 0
		});
	}

	requestAnimationFrame(updateCursor);
}

updateCursor();

function handlePointerEnter(e) {
	isHovered = true;

	const target = e.currentTarget;
	updateCursorText(target);

	gsap.set([cursorTextContainerEl, cursorTextEl], {
		height: initialCursorHeight,
		width: initialCursorHeight
	});

	gsap.fromTo(
		cursorTextContainerEl,
		{
			rotate: 0
		},
		{
			duration: cursorRotationDuration,
			rotate: 360,
			ease: "none",
			repeat: -1
		}
	);

	gsap.to(cursorInner, hoverEffectDuration, {
		scale: 2
	});

	gsap.fromTo(
		cursorTextContainerEl,
		hoverEffectDuration,
		{
			scale: 1.2,
			opacity: 0
		},
		{
			delay: hoverEffectDuration * 0.75,
			scale: 1,
			opacity: 1
		}
	);
	gsap.to(cursorOuter, hoverEffectDuration, {
		scale: 2.0,
		opacity: 0
	});
}


hoverItems.forEach((item) => {
	item.addEventListener("click", handleClick);
	item.addEventListener("pointerleave", handlePointerLeave);
});

function handlePointerLeave() {
	isHovered = false;
	gsap.to([cursorInner, cursorOuter], hoverEffectDuration, {
		scale: 1,
		opacity: 1
	});
}

function updateCursorText(textEl) {
	const cursorTextRepeatTimes = textEl.getAttribute("data-cursor-text-repeat");
	const cursorText = returnMultipleString(
		textEl.getAttribute("data-cursor-text"),
		cursorTextRepeatTimes
	);

	circleType.destroy();

	cursorTextEl.innerHTML = cursorText;
	circleType = new CircleType(cursorTextEl);
}

function returnMultipleString(string, count) {
	let s = "";
	for (let i = 0; i < count; i++) {
		s += ` ${string} `;
	}
	return s;
}  