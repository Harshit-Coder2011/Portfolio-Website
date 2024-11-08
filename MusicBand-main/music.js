document.addEventListener('DOMContentLoaded', () => {
    const tracks = [
        { id: 'audio-track1', playButtonId: 'play-pause1', progressId: 'progress1', currentTimeId: 'current-time1', durationId: 'duration1' },
        { id: 'audio-track2', playButtonId: 'play-pause2', progressId: 'progress2', currentTimeId: 'current-time2', durationId: 'duration2' },
        { id: 'audio-track3', playButtonId: 'play-pause3', progressId: 'progress3', currentTimeId: 'current-time3', durationId: 'duration3' },
        { id: 'audio-track4', playButtonId: 'play-pause4', progressId: 'progress4', currentTimeId: 'current-time4', durationId: 'duration4' },
        { id: 'audio-single1', playButtonId: 'play-pause5', progressId: 'progress5', currentTimeId: 'current-time5', durationId: 'duration5' },
        { id: 'audio-single2', playButtonId: 'play-pause6', progressId: 'progress6', currentTimeId: 'current-time6', durationId: 'duration6' },
    ];

    tracks.forEach(track => {
        const audio = document.getElementById(track.id);
        const playPauseButton = document.getElementById(track.playButtonId);
        const progressBar = document.getElementById(track.progressId);
        const currentTimeDisplay = document.getElementById(track.currentTimeId);
        const durationDisplay = document.getElementById(track.durationId);

        audio.addEventListener('loadedmetadata', () => {
            durationDisplay.textContent = formatTime(audio.duration);
            progressBar.max = audio.duration;
        });

        audio.addEventListener('timeupdate', () => {
            progressBar.value = audio.currentTime;
            currentTimeDisplay.textContent = formatTime(audio.currentTime);
        });

        progressBar.addEventListener('input', () => {
            audio.currentTime = progressBar.value;
        });

        playPauseButton.addEventListener('click', () => {
            if (audio.paused) {
                audio.play();
                playPauseButton.textContent = 'Pause';
            } else {
                audio.pause();
                playPauseButton.textContent = 'Play';
            }
        });
    });

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const tracks = [
        { id: 'audio-track1', playButtonId: 'play-pause1', progressId: 'progress1', currentTimeId: 'current-time1', durationId: 'duration1' },
        { id: 'audio-track2', playButtonId: 'play-pause2', progressId: 'progress2', currentTimeId: 'current-time2', durationId: 'duration2' },
        { id: 'audio-track3', playButtonId: 'play-pause3', progressId: 'progress3', currentTimeId: 'current-time3', durationId: 'duration3' },
        { id: 'audio-track4', playButtonId: 'play-pause4', progressId: 'progress4', currentTimeId: 'current-time4', durationId: 'duration4' },
        { id: 'audio-single1', playButtonId: 'play-pause5', progressId: 'progress5', currentTimeId: 'current-time5', durationId: 'duration5' },
        { id: 'audio-single2', playButtonId: 'play-pause6', progressId: 'progress6', currentTimeId: 'current-time6', durationId: 'duration6' },
    ];

    tracks.forEach(track => {
        const audio = document.getElementById(track.id);
        const playPauseButton = document.getElementById(track.playButtonId);
        const progressBar = document.getElementById(track.progressId);
        const currentTimeDisplay = document.getElementById(track.currentTimeId);
        const durationDisplay = document.getElementById(track.durationId);

        audio.addEventListener('loadedmetadata', () => {
            durationDisplay.textContent = formatTime(audio.duration);
            progressBar.max = audio.duration;
        });

        audio.addEventListener('timeupdate', () => {
            progressBar.value = audio.currentTime;
            currentTimeDisplay.textContent = formatTime(audio.currentTime);
        });

        progressBar.addEventListener('input', () => {
            audio.currentTime = progressBar.value;
        });

        playPauseButton.addEventListener('click', () => {
            if (audio.paused) {
                audio.play();
                playPauseButton.textContent = 'Pause';
            } else {
                audio.pause();
                playPauseButton.textContent = 'Play';
            }
        });
    });

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    }
});
