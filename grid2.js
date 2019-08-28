function openNavG7() {
  document.getElementById("mySidenav").style.width = "100%";
}
function closeNavG7() {
  document.getElementById("mySidenav").style.width = "0";
}


function openNavLong() {
  document.getElementById("respoLong").style.width = "100%";
}
function closeNavLong() {
  document.getElementById("respoLong").style.width = "0";
}


function openNavTriple() {
  document.getElementById("respoTriple").style.width = "100%";
}
function closeNavTriple() {
  document.getElementById("respoTriple").style.width = "0";
}


function openNavKraber() {
  document.getElementById("respokraber").style.width = "100%";
}
function closeNavKraber() {
  document.getElementById("respokraber").style.width = "0";
}


function openNavWing() {
  document.getElementById("mySidenav").style.width = "100%";
}
function closeNavWing() {
  document.getElementById("mySidenav").style.width = "0";
}


function openNavRE() {
  document.getElementById("respoRe").style.width = "100%";
}
function closeNavRE() {
  document.getElementById("respoRe").style.width = "0";
}


function openNavP20() {
  document.getElementById("respoP20").style.width = "100%";
}
function closeNavP20() {
  document.getElementById("respoP20").style.width = "0";
}


function openNavSpit() {
  document.getElementById("respoSpit").style.width = "100%";
}
function closeNavSpit() {
  document.getElementById("respoSpit").style.width = "0";
}


function openNavDevot() {
  document.getElementById("respoDevo").style.width = "100%";
}
function closeNavDevot() {
  document.getElementById("respoDevo").style.width = "0";
}


function openNavStar() {
  document.getElementById("respoStar").style.width = "100%";
}
function closeNavStar() {
  document.getElementById("respoStar").style.width = "0";
}


function openNavProw() {
  document.getElementById("respoProw").style.width = "100%";
}
function closeNavProw() {
  document.getElementById("respoProw").style.width = "0";
}


function openNav99() {
  document.getElementById("respoR99").style.width = "100%";
}
function closeNav99() {
  document.getElementById("respoR99").style.width = "0";
}


function openNavAlt() {
  document.getElementById("respoAlter").style.width = "100%";
}
function closeNavAlt() {
  document.getElementById("respoAlter").style.width = "0";
}


function openNavMoz() {
  document.getElementById("respoMoz").style.width = "100%";
}
function closeNavMoz() {
  document.getElementById("respoMoz").style.width = "0";
}


function openNavMas() {
  document.getElementById("respoMast").style.width = "100%";
}
function closeNavMas() {
  document.getElementById("respoMast").style.width = "0";
}


function openNavPeace() {
  document.getElementById("respoPeace").style.width = "100%";
}
function closeNavPeace() {
  document.getElementById("respoPeace").style.width = "0";
}


function openNavEve() {
  document.getElementById("respoEve").style.width = "100%";
}
function closeNavEve() {
  document.getElementById("respoEve").style.width = "0";
}


function openNavFlat() {
  document.getElementById("respoFlat").style.width = "100%";
}
function closeNavFlat() {
  document.getElementById("respoFlat").style.width = "0";
}


function openNavHem() {
  document.getElementById("respoHem").style.width = "100%";
}
function closeNavHem() {
  document.getElementById("respoHem").style.width = "0";
}


function openNav301() {
  document.getElementById("respoR30").style.width = "100%";
}
function closeNav301() {
  document.getElementById("respoR30").style.width = "0";
}


function openNavHavoc() {
  document.getElementById("respoHav").style.width = "100%";
}
function closeNavHavoc() {
  document.getElementById("respoHav").style.width = "0";
}







const xepa = document.querySelector(".d1");
const slide = document.querySelector(".g1");

const tl = new TimelineMax();

tl.fromTo(xepa, 1, { height: "0%" }, { height: "100%", ease: Power2.easeInOut })
  .fromTo(
    xepa,
    1.2,
    { width: "0%" },
    { width: "100%", ease: Power2.easeInOut }
  )
  .fromTo(
    slide,
    1.2,
    { y: "-100%" },
    { y: "0%", ease: Power2.easeInOut },
    "-=1.2"
  )