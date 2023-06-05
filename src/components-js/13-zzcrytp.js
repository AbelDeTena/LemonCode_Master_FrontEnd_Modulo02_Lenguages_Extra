// Descifra el siguiente secreto:
var secret =
  "': rg!qg yq,urae: ghsrf wuran shrerg jq,u'qf ra r' ,qaq' er g'q,o rg,fuwurae: m!hfua( t'usqfuq ,:apu(:m xv";

// Sabiendo que el alfabeto original ha sufrido la siguiente transformación:
var plain = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var cipher = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

function decrypt(secret) {
  const message = [];
  for (let i = 0; i < secret.length; i++) {
    const letter = secret[i];
    const index = cipher.indexOf(letter);
    if (index !== -1) {
      message.push(plain[index]);
    } else {
      message.push(letter);
    }
  }
  return message.join("");
}

const botton = document.getElementById("zzButton");
botton.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("Ejercicio 13 => ZZ Crytp");
  // Ejemplo
  console.log(decrypt(secret));
});
