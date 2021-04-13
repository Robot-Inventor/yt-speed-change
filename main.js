const video_element = document.querySelector("video.video-stream.html5-main-video");
let default_speed = video_element ? parseFloat(video_element.playbackRate) : 1;

document.body.insertAdjacentHTML("beforeend", `
<div id="speed_controller">
    Speed: <input type="number" id="speed_controller_input" value=${default_speed}><button id="speed_reset_button">reset</button>
</div>
`);

const speed_input = document.getElementById("speed_controller_input");

speed_input.addEventListener("input", () => {
    video_element.playbackRate = speed_input.value;
});

document.getElementById("speed_reset_button").addEventListener("click", () => {
    speed_input.value = 1;
    video_element.playbackRate = speed_input.value;
});
