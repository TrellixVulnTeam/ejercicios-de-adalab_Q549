"use strict";
const containerStyle = document.querySelector(".container");
const title = document.querySelector(".title");
const text = document.querySelector(".text");
if (containerStyle.classList.contains("warning")) {
  title.innerHTML = "AVISO";
  text.innerHTML = "Tenga cuidado";
} else if (containerStyle.classList.contains("error")) {
  title.innerHTML = "ERROR";
  text.innerHTML = "Ha surgido un error";
} else if (containerStyle.classList.contains("sucess")) {
  title.innerHTML = "CORRECTO";
  text.innerHTML = "Los datos son correctos";
}
