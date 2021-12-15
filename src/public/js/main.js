port = 8085;
var socket = io.connect(`http://localhost:${port}`, {'forceNew': true});
  

// --> this go to sockets.js
async function updatePriority (id, priority){
    // socket.emit("updatePriority", id, priority);

}

// <--- this come back from sockets.js
socket.on('setPlate', function (data) {
    // console.log(data.data)
    const {database_type, number, information, template_name} = data.data;
    // console.log(database_type, number, information, template_name)
    if(database_type !== "whitelist"){
        document.getElementById('body').style.background = "rgb(199, 0, 0)";
        document.getElementById('body').style.border = "10px solid red";
    }else{
        document.getElementById('body').style.background = "#1F2840";
        document.getElementById('body').style.border = "10px solid #1F2840";
    }

    if(template_name === "ARG_MERC"){
        renderNewPlate(number, information);

    }else if(template_name === "ARG_3L3D"){
        renderOldPlate(number, information);

    }else if(template_name === "ARG_MERC_DR"){
        renderOldBikePlate(number, information);

    }

});

function renderNewPlate( number, information){
    console.log("renderNewPlate")
   document.getElementById('section_plate').innerHTML = `
   <div class="placa_blanca">
        <div class="header">
            <h6>REPUPLICA DE ARGENTINA</h6>
            <img class="flag" src="./img/arg_flag.gif" alt="img" />
        </div>
        <h1 class="code">${number}</h1>
    </div>

    <div class="comentario_wrapper">
      <small>Comentario</small>
      <Label class="comentario">${information}</Label>
    </div>
   `;

}

function renderOldPlate( number, information){
    document.getElementById('section_plate').innerHTML = `
    <div class="placa_negra">
        <div class="header">
            <img class="flag" src="./img/arg_escudo.png" alt="img">
            <div class="mark"></div>
            <h4>ARGENTINA</h4>
            <div class="mark"></div>
        </div>
        <h1 class="code"> ${number} </h1>
        <div class="footer">
                <div class="mark"></div>
                <h4 class="letter_invisible">ARGENTINA</h4>
                <div class="mark"></div>
        </div>
    </div>

    <div class="comentario_wrapper">
        <small>Comentario</small>
        <Label class="comentario">${information}</Label>
    </div>
   `;
}

function renderOldBikePlate(number, information){
    let codeUp = number.substring(0,3)
    let codeDown = number.substring(4,8)

    document.getElementById('section_plate').innerHTML = `
    <div class="bike_plate">
        <div class="header">
            <h6>REPUPLICA DE ARGENTINA</h6>
            <img class="flag" src="./img/arg_flag.gif" alt="img" />
        </div>
        <h1 class="code">${codeUp}</h1>
        <h1 class="code">${codeDown}</h1>
    </div>

    <div class="comentario_wrapper">
        <small>Comentario</small>
        <Label class="comentario">${information}</Label>
    </div>
   `;
}


socket.on('setSync', function (data) {

    const {date, time, count, state} = data.data;
    document.getElementById('section_two').innerHTML = `
    <h3 class="tittle">DATOS DE SINCRONISMO DE LISTAS</h3>
    <div class="fecha_hora_wrapper">
      <div class="fecha_wrapper">
        <small>Fecha</small>
        <Label class="fecha">${date}</Label>
      </div>
      <div class="hora_wrapper">
        <small>Hora</small>
        <Label class="hora">${time}</Label>
      </div>
    </div>

    <div class="registro_estado_wrapper">
      <div class="registro_wrapper">
        <small>Registros tranferido</small>
        <Label class="registro">${count}</Label>
      </div>
      <div class="estado_wrapper">
        <small>estado</small>
        <Label class="estado">${state}</Label>
      </div>
    </div>
    `;
});