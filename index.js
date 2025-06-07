const videoElement = document.getElementById('video');
const errorMessage = document.getElementById('errorMessage');

function startCameraAndMic() {
  navigator.mediaDevices.getUserMedia({ video: true, audio: true })
    .then(stream => {
      videoElement.srcObject = stream;
    })
    .catch(error => {
      errorMessage.textContent = 'تعذّر الوصول إلى الكاميرا أو الميكروفون: ' + error.message;
    });
}

startCameraAndMic();