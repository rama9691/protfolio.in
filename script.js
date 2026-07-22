window.onload = function () {

    let bars = document.querySelectorAll(".progress-bar");

    bars.forEach(bar => {
        let width = bar.getAttribute("data-width");
        bar.style.width = width;
    });

};