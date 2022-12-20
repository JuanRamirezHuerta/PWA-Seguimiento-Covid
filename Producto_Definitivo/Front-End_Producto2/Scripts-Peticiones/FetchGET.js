let url="http://localhost:64499/api/GrupoCuatrimestre?type=json";
fetch(url)
.then(resp => resp.json())
.then(datosjson => {
    console.log(datosjson);
    var row = "<tr><th>Id_GruCuat</th><th>F_ProgEd</th><th>F_Grupo</th><th>F_Cuatri</th><th>Turno</th><th>Modalidad</th><th>Extra</th></tr>"
    for(var i = 0; i < datosjson.length; i++){
        row +=
        `<tr>
        <td>${datosjson[i].Id_GruCuat}</td>
        <td>${datosjson[i].F_ProgEd}</td>
        <td>${datosjson[i].F_Grupo}</td>
        <td>${datosjson[i].F_Cuatri}</td>
        <td>${datosjson[i].Turno}</td>
        <td>${datosjson[i].Modalidad}</td>
        <td>${datosjson[i].Extra}</td>
        </tr>`
    }
    document.getElementById("tabla").innerHTML = row;
})
.catch(er => console.log("Error"+er))

let url2="http://localhost:64499/api/GrupoCuatrimestre?type=json";
fetch(url2)
.then(resp => resp.json())
.then(datosjson => {
    console.log(datosjson);
    var row = "<tr><th>Turno</th><th>Modalidad</th><th>Extra</th></tr>"
    for(var i = 0; i < datosjson.length; i++){
        row +=
        `<tr>
        <td>${datosjson[i].Turno}</td>
        <td>${datosjson[i].Modalidad}</td>
        <td>${datosjson[i].Extra}</td>
        </tr>`
    }
    document.getElementById("tabla2").innerHTML = row;
})
.catch(er => console.log("Error"+er))

let url3="http://localhost:64499/api/PositivoAlumno?type=json";
fetch(url3)
.then(resp => resp.json())
.then(datosjson => {
    console.log(datosjson);
    var row = "<tr><th>ID_posAl</th><th>FechaConfirmado</th><th>Comprobacion</th><th>Antecendetes</th><th>Riesgo</th><th>NumContagio</th><th>Extra</th><th>F_Alumno</th></tr>"
    for(var i = 0; i < datosjson.length; i++){
        row +=
        `<tr>
        <td>${datosjson[i].ID_posAl}</td>
        <td>${datosjson[i].FechaConfirmado}</td>
        <td>${datosjson[i].Comprobacion}</td>
        <td>${datosjson[i].Antecendetes}</td>
        <td>${datosjson[i].Riesgo}</td>
        <td>${datosjson[i].NumContagio}</td>
        <td>${datosjson[i].Extra}</td>
        <td>${datosjson[i].F_Alumno}</td>
        </tr>`
    }
    document.getElementById("tabla3").innerHTML = row;
})
.catch(er => console.log("Error"+er))

let url4="http://localhost:64499/api/PositivoAlumno?type=json";
fetch(url4)
.then(resp => resp.json())
.then(datosjson => {
    console.log(datosjson);
    var row = "<tr><th>FechaConfirmado</th><th>Comprobacion</th><th>Antecendetes</th><th>Riesgo</th><th>NumContagio</th><th>Extra</th></tr>"
    for(var i = 0; i < datosjson.length; i++){
        row +=
        `<tr>
        <td>${datosjson[i].FechaConfirmado}</td>
        <td>${datosjson[i].Comprobacion}</td>
        <td>${datosjson[i].Antecendetes}</td>
        <td>${datosjson[i].Riesgo}</td>
        <td>${datosjson[i].NumContagio}</td>
        <td>${datosjson[i].Extra}</td>
        
        </tr>`
    }
    document.getElementById("tabla4").innerHTML = row;
})
.catch(er => console.log("Error"+er))

let url5="http://localhost:64499/api/SeguimientoAL?type=json";
fetch(url5)
.then(resp => resp.json())
.then(datosjson => {
    console.log(datosjson);
    var row = "<tr><th>ID_Seguimiento</th><th>F_Positivo</th><th>F_Medico</th><th>Fecha</th><th>Form_Comunica</th><th>Reporte</th><th>Entrevista</th><th>Extra</th></tr>"
    for(var i = 0; i < datosjson.length; i++){
        row +=
        `<tr>
        <td>${datosjson[i].ID_Seguimiento}</td>
        <td>${datosjson[i].F_Positivo}</td>
        <td>${datosjson[i].F_Medico}</td>
        <td>${datosjson[i].Fecha}</td>
        <td>${datosjson[i].Form_Comunica}</td>
        <td>${datosjson[i].Reporte}</td>
        <td>${datosjson[i].Entrevista}</td>
        <td>${datosjson[i].Extra}</td>
        </tr>`
    }
    document.getElementById("tabla5").innerHTML = row;
})
.catch(er => console.log("Error"+er))

let url6="http://localhost:64499/api/SeguimientoAL?type=json";
fetch(url6)
.then(resp => resp.json())
.then(datosjson => {
    console.log(datosjson);
    var row = "<tr><th>Fecha</th><th>Form_Comunica</th><th>Reporte</th><th>Entrevista</th><th>Extra</th></tr>"
    for(var i = 0; i < datosjson.length; i++){
        row +=
        `<tr>
        <td>${datosjson[i].Fecha}</td>
        <td>${datosjson[i].Form_Comunica}</td>
        <td>${datosjson[i].Reporte}</td>
        <td>${datosjson[i].Entrevista}</td>
        <td>${datosjson[i].Extra}</td>
        
        </tr>`
    }
    document.getElementById("tabla6").innerHTML = row;
})
.catch(er => console.log("Error"+er))