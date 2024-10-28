let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");


function generateQR() {
    if (qrText.value.length > 0) {
        qrImage.onload = function() {
            imgBox.classList.add("show-img");
        };
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
    } else {
        qrText.classList.add("error");
        setTimeout(() => {
            qrText.classList.remove("error");
        }, 1000);
    }
}



// function generateQR() {
//     if(qrText.value.length > 0){
//     qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?data=" + qrText.value;
//     imgBox.classList.add("show-img");
// }
//     else{
//         qrText.classList.add("error");
//         setTimeout(() => {  
//             qrText.classList.remove("error");
//         }, 2000);
// }
// }