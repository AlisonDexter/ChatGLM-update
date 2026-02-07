$(document).ready(function() {
    //... existing code...

    let mediaRecorder;
    let audioChunks = [];
    let isRecordingStopped = false; // 新增：用于跟踪录音是否已停止

    $('#start-recording').on('click', function() {
        navigator.mediaDevices.getUserMedia({ audio: true })
           .then(stream => {
                mediaRecorder = new MediaRecorder(stream);
                mediaRecorder.start();
                $('#recording-indicator').show();
                $('#start-recording').prop('disabled', true);
                $('#stop-recording').prop('disabled', false);

                mediaRecorder.ondataavailable = event => {
                    audioChunks.push(event.data);
                };

                mediaRecorder.onstop = () => {
                    if (!isRecordingStopped) { // 新增：检查录音是否已停止
                        isRecordingStopped = true; // 设置录音已停止标志
                        const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
                        const audioUrl = URL.createObjectURL(audioBlob);
                        const audio = new Audio(audioUrl);
                        const downloadLink = document.createElement('a');
                        downloadLink.href = audioUrl;
                        downloadLink.download = 'recording.wav';
                        downloadLink.textContent = 'Download recording';
                        $('#download-recording').prop('disabled', false).on('click', function() {
                            downloadLink.click();
                        });
                    }
                };
            })
           .catch(error => console.error('Error accessing media devices.', error));
    });

    $('#stop-recording').on('click', function() {
        mediaRecorder.stop();
        $('#recording-indicator').hide();
        $('#start-recording').prop('disabled', false);
        $('#stop-recording').prop('disabled', true);
    });
});
