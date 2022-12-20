function insertarGrupo(){
    let F_ProgEd = document.getElementById("F_ProgEd").value;
    let F_Grupo = document.getElementById("F_Grupo").value;
    let F_Cuatri = document.getElementById("F_Cuatri").value;
    let Turno = document.getElementById("Turno").value;
    let Modalidad = document.getElementById("Modalidad").value;
    let Extra = document.getElementById("Extra1").value;

    let mandar={
        F_ProgEd : F_ProgEd, 
        F_Grupo : F_Grupo, 
        F_Cuatri : F_Cuatri, 
        Turno : Turno, 
        Modalidad : Modalidad, 
        Extra : Extra,   
    };

    let recurso2="http://localhost:64499/api/GrupoCuatrimestre?type=json";
    fetch(recurso2,{
        method: 'POST', //formato de la petición
        body:JSON.stringify(mandar), // Convertir los datos a enviar en un flujo(stream)
        headers: {
            'Content-Type':'application/json'
        }
    })
    .then( resp => {
        console.log(resp);
        return resp.json();
    })
    .then(respuestajson=> {
       console.log(respuestajson);
       console.log("Insertado");
        
    }
    )
    .catch(error2 => console.log(error2));
}

function insertarAlPositivo(){
    let FechaConfirmado = document.getElementById("FechaConfirmado").value;
    let Comprobacion = document.getElementById("Comprobacion").value;
    let Antecendentes = document.getElementById("Antecendentes").value;
    let NumContagio = document.getElementById("NumContagio").value;
    let Extra = document.getElementById("Extra2").value;
    let F_Alumno = document.getElementById("F_Alumno").value;
    let Riesgo = document.getElementById("Riesgo").value;

    let mandar={
        FechaConfirmado : FechaConfirmado, 
        Comprobacion : Comprobacion, 
        Antecendentes : Antecendentes, 
        NumContagio : NumContagio, 
        Extra  : Extra, 
        F_Alumno : F_Alumno,   
        Riesgo : Riesgo
    };

    let recurso2="http://localhost:64499/api/PositivoAlumno?type=json";
    fetch(recurso2,{
        method: 'POST', //formato de la petición
        body:JSON.stringify(mandar), // Convertir los datos a enviar en un flujo(stream)
        headers: {
            'Content-Type':'application/json'
        }
    })
    .then( resp => {
        console.log(resp);
        return resp.json();
    })
    .then(respuestajson=> {
       console.log(respuestajson);
       console.log("Insertado");
        
    }
    )
    .catch(error2 => console.log(error2));
}


function insertarSeguimiento(){
    let F_Medico = document.getElementById("F_Medico").value;
    let F_PositivoAl = document.getElementById("F_PositivoAl").value;
    let Fecha = document.getElementById("Fecha").value;
    let Form_Comunicativa = document.getElementById("Form_Comunicativa").value;
    let Entrevista = document.getElementById("Entrevista").value;
    let Reporte = document.getElementById("Reporte").value;
    let Extra = document.getElementById("Extra3").value;

    let mandar={
        F_Medico : F_Medico, 
        F_PositivoAl : F_PositivoAl, 
        Fecha : Fecha, 
        Form_Comunicativa : Form_Comunicativa, 
        Entrevista  : Entrevista, 
        Reporte : Reporte,   
        Extra : Extra
    };

    let recurso2="http://localhost:64499/api/SeguimientoAL?type=json";
    fetch(recurso2,{
        method: 'POST', //formato de la petición
        body:JSON.stringify(mandar), // Convertir los datos a enviar en un flujo(stream)
        headers: {
            'Content-Type':'application/json'
        }
    })
    .then( resp => {
        console.log(resp);
        return resp.json();
    })
    .then(respuestajson=> {
       console.log(respuestajson);
       console.log("Insertado");
        
    }
    )
    .catch(error2 => console.log(error2));
}

