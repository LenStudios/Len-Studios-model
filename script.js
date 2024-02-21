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


public class Main {
 public void mouseClicked(MouseEvent event) {
    System.out.println("I just got executed!");
  }

  if (event.getClickCount() == 2 && event.getButton() == MouseEvent.BUTTON1) {
    System.out.println("double clicked");
  }
};
