
function openCertificate(imageSrc) {
    console.log("openCertificate")
    var modal = document.createElement("div");
    modal.style.position = "fixed";
    modal.style.top = "0";
    modal.style.left = "0";
    modal.style.width = "100%";
    modal.style.height = "100%";
    modal.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    modal.style.display = "flex";
    modal.style.alignItems = "center";
    modal.style.justifyContent = "center";
    modal.style.zIndex = 999;

    var certificateImage = document.createElement("img");
    certificateImage.src = imageSrc;
    certificateImage.alt = "Certificate";
    certificateImage.style.maxWidth = "765px";
    certificateImage.style.maxHeight = "560px";

    modal.appendChild(certificateImage);

    document.body.appendChild(modal);

    modal.onclick = function () {
        modal.style.display = "none";
    };
}



