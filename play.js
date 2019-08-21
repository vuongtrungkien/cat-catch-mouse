let cat = new Cat("Rengar",50,58);
let rat = new Rat("Twitch",15,62);

function display(cat,rat) {
    let statusCat = cat.getStatusCat()? "catched" : "Can't catch it";
    let statusRat =  rat.getStatus() ? "alive" : "dead";
    document.getElementById(cat.name).innerHTML = "Name cat : " + cat.getNameCat();
    document.getElementById(rat.name).innerHTML = "Name rat : " + rat.getNameRats();
    document.getElementById(cat.name + "-Weight").innerHTML = "Weight : " + cat.getWeight();
    document.getElementById(cat.name + "-Speed").innerHTML = "Speed : " + cat.getSpeed();
    document.getElementById(cat.name + "-Status").innerHTML = "Status : " + statusCat ;

    document.getElementById(rat.name + "-Weight").innerHTML = "Weight : " + rat.getWeight();
    document.getElementById(rat.name + "-Speed").innerHTML = "Speed : " + rat.getSpeedRat();
    document.getElementById(rat.name + "-Status").innerHTML = "Status : " + statusRat;

}

display(cat,rat);

function chasing(cat,rat) {
    cat.speedRange();
    rat.speedRange();
    cat.catchTheMouse(rat);
    rat.setStatus(cat);
}

function eat(cat,rat) {
    cat.eatRats(rat);
}


window.addEventListener("click", function () {
    display(cat,rat);
});