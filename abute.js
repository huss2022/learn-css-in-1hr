const baboto = document.getElementById("baba-bu");
const nameOfBo = document.getElementById("nameOfBo");
console.log(nameOfBo);

console.log(baboto);

baboto.style.border = "5px solid red";

baboto.addEventListener("click", (eo) => {
  // if (eo.target.className == "btn btn-primary") {
  //   nameOfBo.innerText = "primary";
  // }else if
  //   (eo.target.className == "btn btn-secondary") {
  //     nameOfBo.innerText = "secondary";
  // }

  switch (eo.target.className) {
    case "btn btn-primary":
      nameOfBo.innerText = "primary";
      nameOfBo.style.color="red"
      nameOfBo.style.marginTop = "50px"
      break;
    case "btn btn-secondary":
      nameOfBo.innerText = "secondary";
      break;
    case "btn btn-success":
      nameOfBo.innerText = "success";
      break;
    case "btn btn-danger":
      nameOfBo.innerText = "danger";
      break;
    case "btn btn-warning":
      nameOfBo.innerText = "warning";
      break;
    case "btn btn-info":
      nameOfBo.innerText = "info";
      break;

    default:
      nameOfBo.innerText = "Error";
      break;
  }
});
