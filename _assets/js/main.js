function calculateAge(dob, dt) {
	dt = dt || new Date();
	var diff = dt.getTime() - new Date(dob).getTime();
	return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
}

let age = calculateAge("2006-12-15");

var options = {
	particles: {
		number: { value: 99, density: { enable: true, value_area: 552.4033491425909 } },
		color: { value: "#ffffff" },
		shape: {
			type: "circle",
			stroke: { width: 0, color: "#000000" },
			polygon: { nb_sides: 3 },
			image: { src: "img/github.svg", width: 70, height: 100 },
		},
		opacity: {
			value: 1,
			random: true,
			anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
		},
		size: {
			value: 2,
			random: true,
			anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
		},
		line_linked: { enable: false, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
		move: {
			enable: true,
			speed: 1.5782952832645452,
			direction: "none",
			random: true,
			straight: false,
			out_mode: "out",
			bounce: false,
			attract: { enable: false, rotateX: 600, rotateY: 1200 },
		},
	},
	interactivity: {
		detect_on: "canvas",
		events: {
			onhover: { enable: false, mode: "repulse" },
			onclick: { enable: false, mode: "repulse" },
			resize: true,
		},
		modes: {
			grab: { distance: 400, line_linked: { opacity: 1 } },
			bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
			repulse: { distance: 200, duration: 0.4 },
			push: { particles_nb: 4 },
			remove: { particles_nb: 2 },
		},
	},
	retina_detect: false,
};

function gS() {
	$.getJSON("https://api.lanyard.rest/v1/users/645045981238394902", data => {
		data = data.data;
		if (data.active_on_discord_mobile && !data.active_on_discord_desktop) {
			$("#online-status").html(`<span style="color: #F2A6AB">on Mobile</span>`);
		} else if (data.active_on_discord_desktop) {
			$("#online-status").html(`<span style="color: #abffbf">Online</span>`);
		} else {
			$("#online-status").html(`<span style="color: #d4d4d4">Offline</span>`);
		}
	});
}

gS();

setInterval(gS, 10000);
$(() => {
	$("#age").text(age);
	particlesJS("particle", options);
});
