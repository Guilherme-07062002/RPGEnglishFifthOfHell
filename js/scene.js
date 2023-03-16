var cont = 0;
function toScenario2() {
  const img = document.querySelector(".scene");
  const msg = document.getElementById("description");
  const title = document.getElementById("title");
  const dialog = document.querySelector(".dialog");
  // let el = event.target || event.srcElement;
  // let id = el.id;
  if (cont == 0) {
    dialog.style.transition = "4s";
    dialog.style.width = "860px";
    dialog.style.height = "150px";
    dialog.style.padding = "10px";
    dialog.style.paddingbottom = "70px";
    msg.style.transition = "2s";
    setTimeout(() => {
      msg.textContent =
        "Some travelers in the middle of a long journey take a path that leads to an unknown forest until it starts to get dark, they look for a place that could serve as a shelter and after finding it, they start to set up camp until they hear desperate screams coming. from some direction among the trees of the forest and in that they wonder… Should they investigate what could have caused it?";
      msg.style.cssText = "opacity: 100%; transition 2s";
    }, 5000);
    img.style.cssText =
      "background-image: url(imgs/ForestDark.png); background-size:cover;transition: 3s";
    cont++;
  } else if (cont == 1) {
    msg.textContent =
      "The forest was so dark and dense that you could barely see a few feet beyond their torchlights, the wind passing between the trees whistled in their ears like whispers, whispered by someone leaning lightly over their heads. shoulders, but when they looked back they saw nothing around them but the darkness and fear that surrounded them.";
    cont++;
  } else if (cont == 2) {
    dialog.style.height = "172px";
    msg.textContent =
      "However, at a given moment, the “whispers” caused by the wind became louder and it is as if it were possible to discern a sound similar to a voice among the other noises in the forest, a sound that resembled laughter as if something or someone was really making fun of them, and when they look back they realize that a member of the group has disappeared from view. What should they do? Search for the lost member or follow the path without him?";
    cont++;
  } else if (cont == 3) {
    dialog.style.height = "130px";
    img.style.cssText =
      "background-image: url(imgs/BlackBackground.png); background-size:cover;transition: 5s";
    setTimeout(() => {
      img.style.cssText =
        "background-image: url(imgs/Mine2.png); background-size:contain;transition: 5s";
    }, 5000);
    title.innerHTML = "CAVE";
    msg.textContent =
      "After some time they came across the entrance of what seemed to be some sort of dilapidated mine that looked like it had been abandoned a long time ago, and they realize that the whispers have stopped, now all they hear is the silence and the beating of their voices. own hearts, so they come together to decide whether to enter or not.";
    cont++;
  } else if (cont == 4) {
    dialog.style.height = "180px";
    img.style.cssText =
      "background-image: url(imgs/BlackBackground.png); background-size:cover;transition: 4s";
    setTimeout(() => {
      img.style.cssText =
        "background-image: url(imgs/stairsDark.png); background-position-x: center;transition: 4s";
    }, 5000);
    title.innerHTML = "INSIDE CAVE";
    msg.textContent =
      "The adventurers enter the mine little by little, after going down steps they didn't know if it had been minutes or hours that had passed, however at some point they heard a loud noise coming from the entrance of the mine as if something very heavy had fallen, at the same moment a wind blows very strong from the direction of the noise extinguishing everyone's torches and at that moment they wonder if the presence they had felt had something to do with it";
    cont++;
  } else if (cont == 5) {
    dialog.style.height = "140px";
    img.style.cssText =
      "background-image: url(imgs/BlackBackground.png); background-size:cover;transition: 4s";
    setTimeout(() => {
      img.style.cssText =
        "background-image: url(imgs/InsideCave2.png); background-size: cover;transition: 4s;background-position-y: center;";
    }, 5000);
    msg.textContent =
      "After finally accepting their inevitable end, that they would die there, trapped in an abandoned mine in the dark and without the comfort of the light of their torches, one of the travelers notes that curiously he had seen what appeared to be an ephemeral bluish glow emanating from the depths. (Which still seemed far away) from the mine.";
    cont++;
  } else if (cont == 6) {
    dialog.style.height = "120px";
    msg.textContent =
      "When approaching the light they came across a large open space, it was still dark, however there they could distinguish the shapes of things, and in the middle of that place there was a river that passed from one end to the other preventing them from crossing to the other side.";
    cont++;
  } else if (cont == 7) {
    dialog.style.height = "120px";
    img.style.cssText =
      "background-image: url(imgs/BlackBackground.png); background-size:cover;transition: 4s";
    setTimeout(() => {
      img.style.cssText =
        "background-image: url(imgs/manWithDragon.gif); background-size: contain;transition: 4s";
    }, 5000);
    msg.textContent =
      "After some time walking they came across figures that looked like skeletons around a hooded man holding a glowing staff, they seemed to be in a kind of ritual, and when they realized the presence of the adventurers they went for them.";
    cont++;
  } else if (cont == 8) {
    msg.textContent = "";
    dialog.style.transition = "4s";
    dialog.style.width = "0px";
    dialog.style.height = "0px";
    dialog.style.padding = "0px";
    msg.style.cssText = "opacity: 0;";
    cont++;
  } else if (cont == 9) {
    img.style.cssText =
      "background-image: url(imgs/BlackBackground.png); background-size:cover;transition: 4s";
    dialog.style.transition = "4s";
    dialog.style.width = "860px";
    dialog.style.height = "100px";
    dialog.style.padding = "10px";
    dialog.style.paddingbottom = "70px";
    setTimeout(() => {
      img.style.cssText =
        "background-image: url(imgs/theEnd.jpg); background-size: cover;background-position-x: right;transition: 4s";
      msg.textContent = "The End";
      msg.style.cssText =
        "opacity: 100%; transition 6s; font-size: 60px;font-family:newFont";
      dialog.style.transition = "4s";
    }, 5000);

    // dialog.style.width = "0px";
    // dialog.style.height = "0px";
    // dialog.style.padding = "0px";
    cont++;
  }
}
