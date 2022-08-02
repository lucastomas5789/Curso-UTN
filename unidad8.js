var Nombre = prompt("¿Cual es tu nombre?");
alert("Bienvenid@," + Nombre);
var Edad = prompt(Nombre + ", ¿Cuantos años tenés?");
var Pais = prompt(Nombre + ", ¿En que país vivís?");
var Genero = prompt(Nombre + ", Cual es tu genero");
var animales = prompt(Nombre + ", ¿Te gustan los animales?");

var confirmar = "si";
var edadPermitida = 18;

if (animales == confirmar) {
    alert("Me alegro " + Nombre + ", espero que te guste mi pagina!");
} else {
    alert("Que pena que no te gusten, espero que tu visita a mi pagina te haga cambiar de opinion");
}
if(Edad >= edadPermitida) {
    alert(Nombre + " puedes ingresar a la pagina ya que eres mayor de edad!");
} else{           
    alert(Nombre + " No eres mayor de edad asi que no puedes ingresar");
}

var TextoDiv = document.getElementById("text")
TextoDiv.innerText=" Bienvenid@: " + Nombre + ", Tienes " + Edad + " años de edad," + " eres " + Genero + ",y sos de " + Pais;

