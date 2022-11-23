const video_selector = "video.video-stream.html5-main-video";
const fullscreen_mode_class = "fullscreen_mode";

/**
 * Get visible video element which is played now.
 * @returns {HTMLVideoElement | null} video element or null if no playing video found.
 */
const get_video_element = () => {
    const video_elements_list = [...document.querySelectorAll(video_selector)];

    // Get visible video elements.
    const video_element = video_elements_list.filter((element) => element.offsetParent)[0];
    return video_element || null;
};

/**
 * Set video playback rate.
 * @param {number} speed
 */
const set_video_speed = (speed) => {
    const video = get_video_element();
    if (!video) return;
    video.playbackRate = speed;
};

/**
 * Get video playback rate. If visible video isn't found, return 1.
 * @returns {number} playback rate
 */
const get_video_speed = () => {
    const video = get_video_element();
    if (!video) return 1;
    return video.playbackRate;
};

const default_speed = get_video_speed();

const controller_outer = document.createElement("div");
controller_outer.id = "speed_controller";
controller_outer.textContent = "Speed: ";

const speed_input = document.createElement("input");
speed_input.type = "number";
speed_input.min = 0;
speed_input.id = "speed_controller_input";
speed_input.value = default_speed;
speed_input.addEventListener("input", () => {
    set_video_speed(speed_input.value);
});

const reset_button = document.createElement("button");
reset_button.id = "speed_reset_button";
reset_button.textContent = "reset";
reset_button.addEventListener("click", () => {
    speed_input.value = 1;
    set_video_speed(speed_input.value);
});

controller_outer.appendChild(speed_input);
controller_outer.appendChild(reset_button);

document.body.appendChild(controller_outer);

// Hide controller when fullscreen mode.
document.addEventListener("fullscreenchange", () => {
    if (document.fullscreenElement) {
        controller_outer.classList.add(fullscreen_mode_class);
    } else {
        controller_outer.classList.remove(fullscreen_mode_class);
    }
});
