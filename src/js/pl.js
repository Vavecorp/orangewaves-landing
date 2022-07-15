const playerButton = document.getElementById("audio-player");
var audio = document.getElementById("audio-element");
var bg = document.getElementById("player-background");
console.log(playerButton);

function toggleAudio() {
  if (audio.paused) {
    audio.play();

    playerButton.classList.add("dance");
    bg.classList.add("waves");
  } else {
    audio.pause();
    playerButton.classList.remove("dance");
    bg.classList.remove("waves");
  }
}

playerButton.addEventListener("click", toggleAudio);

function changeTimelinePosition() {
  const percentagePosition = (100 * audio.currentTime) / audio.duration;
  timeline.style.backgroundSize = `${percentagePosition}% 100%`;
  timeline.value = percentagePosition;
}

audio.ontimeupdate = changeTimelinePosition;

function audioEnded() {
  playerButton.innerHTML = playIcon;
}

audio.onended = audioEnded;

function changeSeek() {
  const time = (timeline.value * audio.duration) / 100;
  audio.currentTime = time;
}

timeline.addEventListener("change", changeSeek);

function toggleSound() {
  audio.muted = !audio.muted;
  soundButton.innerHTML = audio.muted ? muteIcon : soundIcon;
}

soundButton.addEventListener("click", toggleSound);

// Language: javascript

function setToJustin() {
  audio.src =
    "https://netivebucket.s3.ap-south-1.amazonaws.com/tts_audio_files/2022-07-13_140140.0155270000_netiveAdmin--companyUrl--2022-03-10_103247.06513800.png";
  if (audio.paused == true) {
    toggleAudio();
  }
}

function setToJoana() {
  audio.src =
    "https://netivebucket.s3.ap-south-1.amazonaws.com/tts_audio_files/2022-07-15_082231.1079480000_vish--companyUrl--2022-07-15_073424.8001940000_test.png";
  if (audio.paused == true) {
    toggleAudio();
  }
}

function setToMatthew() {
  audio.src =
    "https://netivebucket.s3.amazonaws.com/tts_audio_files/2022-07-15_095200.8409220000_vish--companyUrl--2022-07-15_095021.1428830000_test.png";
  if (audio.paused == true) {
    toggleAudio();
  }
}
