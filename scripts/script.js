document.addEventListener("DOMContentLoaded", function () {
    const listItems = document.querySelectorAll(".course__list-item");
    const hoverImage = document.getElementById("hoverImg");
    hoverImage.style.display = "none";
    const offset = 500;
    listItems.forEach((item) => {
        item.addEventListener("mouseover", function (event) {
            const imagePath = item.getAttribute("data-image");
            hoverImage.src = imagePath;

            // Отримання координат миші
            const mouseX = event.clientX;
            const mouseY = event.clientY;

            // Встановлення положення зображення відносно миші
            hoverImage.style.left = mouseX  + "px";
            hoverImage.style.top = mouseY  + "px";

            hoverImage.style.display = "block";
        });

        item.addEventListener("mouseout", function () {
            hoverImage.style.display = "none";
        });
    });

    document.addEventListener("mousemove", function (event) {
        // Оновлення положення зображення при русі миші
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        hoverImage.style.left = mouseX + "px";
            hoverImage.style.top = mouseY  + "px";
    });
});