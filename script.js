let songBtn = document.getElementById("songBtn");
let gameBtn = document.getElementById("gameBtn");
let contactBtn = document.getElementById("contactBtn");

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