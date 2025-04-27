let visiblee = false
let barvisible = false

function buttonPressed() {
    const image = document.getElementById("image");
    if (visiblee == false) {
        image.classList.add('visible');
        visiblee = true;
    }else {
        image.classList.remove('visible');
        visiblee = false;
    }
};

function sidebar() {
    const image = document.getElementById("bar");
    if (barvisible == false) {
        image.classList.add('visible');
        barvisible = true;
    }else {
        image.classList.remove('visible');
        barvisible = false;
    }
};

function fullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
      } else {
        document.exitFullscreen();
      }
}