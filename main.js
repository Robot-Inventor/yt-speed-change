window.onload = function() {
    document.body.insertAdjacentHTML("beforeend", `
<div id="video_speed_controller">
    Speed: <input type="number" id="video_speed_controller_value" value=${document.querySelector("video.video-stream.html5-main-video").playbackRate} oninput="document.querySelector('video.video-stream.html5-main-video').playbackRate = event.target.value;"><button onclick="document.getElementById('video_speed_controller_value').value = 1; document.querySelector('video.video-stream.html5-main-video').playbackRate = document.getElementById('video_speed_controller_value').value;">reset</button>
</div>
    `);
};
