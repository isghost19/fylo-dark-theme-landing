function validarCorreo() {
    const correo = document.getElementById("email").value;
        if (correo == "") {
            document.getElementById("error").innerHTML = "Debes ingresar un correo electronico";
            setTimeout(() => {
                document.getElementById("error").innerHTML = "";
            }, 5000);
            return false;
        }
}