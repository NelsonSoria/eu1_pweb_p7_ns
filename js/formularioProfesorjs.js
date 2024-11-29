var cedula = "";
var nombre = "";
var apellido = "";
var profesor = {
    cedulaP: "",
    nombreP: "",
    apellidoP: "",
}

function guardar() {
    this.cedula = document.getElementById("idcedula").value;
    this.nombre = document.getElementById("idnombre").value;
    this.apellido = document.getElementById("idapellido").value;

    if (this.cedula !== "" && this.apellido !== "" && this.nombre !== "") {
        this.profesor.apellidoP = this.apellido;
        this.profesor.cedulaP = this.cedula;
        this.profesor.nombreP = this.nombre;

        let aux = JSON.stringify(this.profesor)
        document.getElementById("json-input").value = aux;

    } else {
        console.log("Error campos imcompletos")

    }
    console.log(profesor)

}
function guardarJson() {

    valorText = document.getElementById("json-input").value;
    this.profesor = JSON.parse(valorText);
    console.log(this.profesor)

    this.cedula = this.profesor.cedulaP;
    this.nombre = this.profesor.nombreP;
    this.apellido = this.profesor.apellidoP;

    if (this.cedula !== "" && this.apellido !== "" && this.nombre !== "") {

        document.getElementById("idcedula").value = this.cedula;
        document.getElementById("idnombre").value = this.nombre;
        document.getElementById("idapellido").value = this.apellido;

    } else {
        console.log("Error campos imcompletos")

    }
    console.log(profesor)

}