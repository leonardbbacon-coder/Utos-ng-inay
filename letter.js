const letter = `I just want you to know something…

Si mommy ay maraming utos.
Sabi ni mommy send ko daw to sa kanya.
Kahit ayaw ko lagi niya akong kinukulit.
Sabi niya lagot daw ako sa kanya kapag hindi ko sinend.
Kaya yun ito na se send ko na sa kanya kasi baka mamaya,
ma lagot talaga ako edi kawawa nako niyan kung ganon.

Malay ko sayo
— Leo`;

const letterText = document.getElementById("letterText");
const openFlowers = document.getElementById("openFlowers");

let i = 0;

function typeLetter(){
  if(i < letter.length){
    letterText.textContent += letter[i];
    i++;
    setTimeout(typeLetter, 20);
  }
}
typeLetter();

openFlowers.addEventListener("click", () => {
  window.location.href = "flower.html";
});

