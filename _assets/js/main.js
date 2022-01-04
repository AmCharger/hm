function calculateAge(dob, dt) {
	dt = dt || new Date();
	var diff = dt.getTime() - new Date(dob).getTime();
	return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
}

let age = calculateAge("2006-12-15");

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
	particlesJS.load("particles-js", "/_assets/particles.json", function () {
		console.log("callback - particles.js config loaded");
	});
});
