function randomint(min, max) {
    return Math.floor((Math.random() * (max - min)) + min);
}
function randomfloat(min, max) {
    return ((Math.random() * (max - min)) + min);
}

function buscarMayor(){

    mayor = 0;
    var Nombre, Cedula, edad, nota1, nota2, nota3, promedio, imagen,fecha;

    $("#tabla tbody tr").each(function(index){

        if(Number($(this).children("td").eq(5).text())>mayor) {

            Nombre = $(this).children("td").eq(0).text()
            Cedula = $(this).children("td").eq(1).text()
            nota1 = $(this).children("td").eq(2).text()
            nota2 = $(this).children("td").eq(3).text()
            nota3 = $(this).children("td").eq(4).text()
            promedio = $(this).children("td").eq(5).text()
            fecha = $(this).children("td").eq(6).text()
            edad = $(this).children("td").eq(7).text()
            imagen = $(this).children("td").find('img').attr('src')

            sessionStorage.setItem("NombreMayor",Nombre)
            sessionStorage.setItem("CedulaMayor",Cedula)
            sessionStorage.setItem("Nota1Mayor",nota1)
            sessionStorage.setItem("Nota2Mayor",nota2)
            sessionStorage.setItem("Nota3Mayor",nota3)
            sessionStorage.setItem("PromedioMayor",promedio)
            sessionStorage.setItem("FechaMayor",fecha)
            sessionStorage.setItem("EdadMayor",edad)
            sessionStorage.setItem("ImagenMayor",imagen)

            mayor = Number($(this).children("td").eq(5).text());
            console.log(mayor)
        }



    })

}

function buscarMenor(){

    menor = 999;
    var Nombre, Cedula, edad, nota1, nota2, nota3, promedio, imagen,fecha;

    $("#tabla tbody tr").each(function(index){

        if(Number($(this).children("td").eq(5).text())<menor) {

            Nombre = $(this).children("td").eq(0).text()
            Cedula = $(this).children("td").eq(1).text()
            nota1 = $(this).children("td").eq(2).text()
            nota2 = $(this).children("td").eq(3).text()
            nota3 = $(this).children("td").eq(4).text()
            promedio = $(this).children("td").eq(5).text()
            fecha = $(this).children("td").eq(6).text()
            edad = $(this).children("td").eq(7).text()
            imagen = $(this).children("td").find('img').attr('src')

            sessionStorage.setItem("NombreMenor",Nombre)
            sessionStorage.setItem("CedulaMenor",Cedula)
            sessionStorage.setItem("Nota1Menor",nota1)
            sessionStorage.setItem("Nota2Menor",nota2)
            sessionStorage.setItem("Nota3Menor",nota3)
            sessionStorage.setItem("PromedioMenor",promedio)
            sessionStorage.setItem("FechaMenor",fecha)
            sessionStorage.setItem("EdadMenor",edad)
            sessionStorage.setItem("ImagenMenor",imagen)

            menor = Number($(this).children("td").eq(5).text());
            console.log(mayor)
        }



    })

}

$(document).ready(function () {

    $("#generar").click(function () {
        var numero = randomint(1, 20)
        const año = randomint(1980, 2005)
        const mes = randomint(1, 12)
        const dia = randomint(1, 30)
        var currentTime = new Date(); //crea un registro date
        const fecha = dia + '/' + mes + '/' + año
        const Nombre = "Estudiante" + numero
        const Cedula = randomint(10000000, 1000000000)
        const edad = currentTime.getFullYear() - año //en vez de restar por 2022 asi toma la fecha del sistema, no se tiene que actualizar con el tiempo
        var nota1 = randomfloat(0.00, 5.00).toFixed(2)
        var nota2 = randomfloat(0.00, 5.00).toFixed(2)
        var nota3 = randomfloat(0.00, 5.00).toFixed(2)
        var promedio = (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3;
        promedio = promedio.toFixed(2);
        var imagen
        if (numero % 2 == 0) { // condicion par/impar 
            imagen = "<img src='image/usuario2.jpg'" //etiqueta para la imagen2
        } else {
            imagen = "<img src='image/usuario1.jpg'" //etiqueta para la imagen1
        }
        var nuevaFila;

        nuevaFila = "<tr>"+
        '<td>' + Nombre + '</td>' +
            '<td>' + Cedula + '</td>' +
            '<td>' + nota1 + '</td>' +
            '<td>' + nota2 + '</td>' +
            '<td>' + nota3 + '</td>' +
            '<td>' + promedio + '</td>' +
            '<td>' + fecha + '</td>' +
            '<td>' + edad + '</td>' +
            "<td>" + imagen + " style='width: 50px; height: 50px;'>" + "</td>"+
            "</tr>";

        $("#tabla").append(nuevaFila);
    })

    $("#resaltar").click(function () {
        var i = 0;
        var mayor;
        $("#tabla tbody tr").each(function () {
            var Nombre, Cedula, edad, nota1, nota2, nota3, promedio, imagen;
            mayor = 0;
            let array = []
            $(this).children("td").each(function (index) {
                switch (index) {
                    case 0:
                        Nombre = $(this).text();
                        break;
                    case 1:
                        Cedula = $(this).text();
                        break;
                    case 2:
                        nota1 = $(this).text();
                        break;
                    case 3:
                        nota2 = $(this).text();
                        break;
                    case 4:
                        nota3 = $(this).text();
                        break;
                    case 5:
                        promedio = $(this).text();
                        break;
                    case 6:
                        fecha = $(this).text();
                    case 7:
                        edad = $(this).text();
                    case 8:
                        imagen = $(this).text();
                }
            })
            if (promedio < 3.0) {
                $(this).css("background-color", "red");
            }
            if (promedio >= 3.5) {
                $(this).css("background-color", "green");
            }
        })
    })

    $("#Mostrar").click(function (e) {
        e.preventDefault();
        buscarMayor();
        buscarMenor();

        window.open("index2.html",'_blank')

    })
})