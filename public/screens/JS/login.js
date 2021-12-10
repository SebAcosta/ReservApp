
function init(){
    document.querySelector('.btn-primary').addEventListener("click",login);
}

function login(){
    var usuario = document.getElementById('usuario').value
    var contrasenia = document.getElementById('contrasenia').value

    axios({
        //headers: {"Access-Control-Allow-Request": null, 'Content-Type': 'application/json'},
        method: 'post',
        url:'http://localhost:5000/login',
        data:{
            usuario: usuario,
            contrasenia: contrasenia
        },
    }).then(function(res){
        if (res.data.code === 200){
            window.location.href = 'inicio.html'
            console.log(res);
        }else{
            alert("Datos incorrectos")
        }
    }).catch(function(err){
        console.log("AAAAAAAAA", err)
        alert("Datos incorrectos")
    })
}