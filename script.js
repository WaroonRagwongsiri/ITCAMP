let songBtn = document.getElementById("songBtn");
let gameBtn = document.getElementById("gameBtn");
let contactBtn = document.getElementById("contactBtn");

let reset = document.getElementById("reset");

let song = 0;
let game = 0;
let contact = 0;

songBtn.addEventListener("click", () => {
    if (song == 0){
        let img = new Image();
        img.src = '1.jpg';
        document.getElementById("1").appendChild(img);
        document.getElementById("favSong").innerHTML = "The Adult are talking";
        song++;
    }
});

gameBtn.addEventListener("click", () => {
    if (game == 0){
        let img = new Image();
        img.src = '2.jpg';
        document.getElementById("2").appendChild(img);
        document.getElementById("favGame").innerHTML = "Persona 3 Reload";
        game++;
    }
});

contactBtn.addEventListener("click", () => {
    if (contact == 0){
        let img = new Image();
        img.src = '3.png';
        document.getElementById("3").appendChild(img);
        document.getElementById("contact").innerHTML = "@naekniar";
        contact++;
    }
});

reset.addEventListener("click", () => {
    let boxes = document.querySelectorAll(".box");

    boxes.forEach(box => {
        let imgElement = box.querySelector("img");
        if (imgElement) {
            box.removeChild(imgElement);
        }
    });

    document.getElementById("favSong").innerHTML = "myFavSong";
    document.getElementById("favGame").innerHTML = "myFavGame";
    document.getElementById("contact").innerHTML = "myContact";

    song = 0;
    game = 0;
    contact = 0;
});