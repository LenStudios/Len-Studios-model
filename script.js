// Handles loading the events for <model-viewer>'s slotted progress bar
const onProgress = (event) => {
  const progressBar = event.target.querySelector('.progress-bar');
  const updatingBar = event.target.querySelector('.update-bar');
  updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
  if (event.detail.totalProgress === 1) {
    progressBar.classList.add('hide');
    event.target.removeEventListener('progress', onProgress);
  } else {
    progressBar.classList.remove('hide');
  }
};
document.querySelector('model-viewer').addEventListener('progress', onProgress);



document.querySelector('model-viewer').addEventListener('dblclick', function(event) {

resetCameraPercent();
resetCameraMeter();
});




function resetCameraPercent() {
        mv.cameraOrbit = '180.01deg 87.19deg 105%'
        mv.fieldOfView = 'auto'
      };
      function resetCameraMeter() {
        mv.cameraOrbit = '180.01deg 87.19deg 29.44m'
        mv.fieldOfView = 'auto'
      };    
  






