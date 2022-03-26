$(function () {
    var nuevoRegistro = ""
    var Nombre = sessionStorage.getItem("NombreMayor")
    var Cedula = sessionStorage.getItem("CedulaMayor")
    var nota1 = sessionStorage.getItem("Nota1Mayor")
    var nota2 = sessionStorage.getItem("Nota2Mayor")
    var nota3 = sessionStorage.getItem("Nota3Mayor")
    var promedio = sessionStorage.getItem("PromedioMayor")
    var fecha = sessionStorage.getItem("FechaMayor")
    var edad = sessionStorage.getItem("EdadMayor")
    var imagen = sessionStorage.getItem("ImagenMayor")
    nuevoRegistro += "<tr class='table-warning'>"+
    '<td>' + Nombre + '</td>' +
        '<td>' + Cedula + '</td>' +
        '<td>' + nota1 + '</td>' +
        '<td>' + nota2 + '</td>' +
        '<td>' + nota3 + '</td>' +
        '<td>' + promedio + '</td>' +
        '<td>' + fecha + '</td>' +
        '<td>' + edad + '</td>' +
        "<td>" +'<image src=" ' + imagen + '" width="50" height="50">' + "</td>"+
        "</tr>";
    $("#tablaRegistros").append(nuevoRegistro);

    var nuevoRegistro = ""
    var Nombre = sessionStorage.getItem("NombreMenor")
    var Cedula = sessionStorage.getItem("CedulaMenor")
    var nota1 = sessionStorage.getItem("Nota1Menor")
    var nota2 = sessionStorage.getItem("Nota2Menor")
    var nota3 = sessionStorage.getItem("Nota3Menor")
    var promedio = sessionStorage.getItem("PromedioMenor")
    var fecha = sessionStorage.getItem("FechaMenor")
    var edad = sessionStorage.getItem("EdadMenor")
    var imagen = sessionStorage.getItem("ImagenMenor")
    nuevoRegistro += "<tr class='table-danger' style = 'color:#ffffff'>"+
    '<td>' + Nombre + '</td>' +
        '<td>' + Cedula + '</td>' +
        '<td>' + nota1 + '</td>' +
        '<td>' + nota2 + '</td>' +
        '<td>' + nota3 + '</td>' +
        '<td>' + promedio + '</td>' +
        '<td>' + fecha + '</td>' +
        '<td>' + edad + '</td>' +
        "<td>" +'<image src=" ' + imagen + '" width="50" height="50">' + "</td>"+
        "</tr>";
    $("#tablaRegistros").append(nuevoRegistro);


})