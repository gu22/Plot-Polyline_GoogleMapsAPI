var map
var marker

var encodedPoints 


var decodePoints 
var decodePoints2
var encodedPolyline
var encodedPolyline2

var Polytext  = window.document.getElementById('polytext')
var Polytext2 = window.document.getElementById('polytext2')






//Iniciando o MAPS --------------------------------------

function initialize() {
    var mapOptions = {
      center: new google.maps.LatLng(-12.1609, -48,0654),
  //center: new google.maps.LatLng(-25.363882,131.044922),
      zoom: 5,
      mapTypeId: google.maps.MapTypeId.ROADMAP
  
    }

    map = new google.maps.Map(document.getElementById("map_canvas"),
    mapOptions);

    // encodedPoints = 'tgioCdgb|Gu{DdvpBkshD|xeA'
    // decodedPoints = google.maps.geometry.encoding.decodePath(encodedPoints) ; 
    // encodedPolyline = new google.maps.Polyline ( {                             
    //     strokeColor: "#970E04",
    //     strokeOpacity: 1.0,
    //     strokeWeight: 2,
    //     path: decodedPoints,
    //     clickable: true
    // });

    // encodedPolyline.setMap(map);
    
}    



// FUNÇAO COM O BOTAO ------------------------------------------

function info(){
    var aa = "ola"
    var botao = window.document.getElementById('b')
    var dly = window.document.getElementById('resp')
    // var cod = 'tgioCdgb|Gu{DdvpBkshD|xeA'
    // var inf = encodedPoints
    Polytext = window.document.getElementById('polytext').value
    dly.innerText = decodePoints

}

function plot(){
    marker = new google.maps.Marker({
        position: {lat: -27.63800,lng: -50.702137},
        map: map,
        title: 'oh ho!',
        label: "T"	
          })
    marker.setMap(map)      
}  

function decoder(){
   
   var decodificacao = window.document.getElementById('menu')
   decodificacao.innerText = decodedPoints = google.maps.geometry.encoding.decodePath(window.document.getElementById('polytext').value).toString()
}

function limpar(){
    //marker.setMap(null)
    encodedPolyline.setMap(null)
    encodedPolyline2.setMap(null)
}

// ------------- INSERÇÃO DOS PONTOS -----------------------------

function polyinsert(){
    //encodedPoints   = ("'"+ Polytext + "'")
    decodedPoints = google.maps.geometry.encoding.decodePath(window.document.getElementById('polytext').value) ; 
    // decodedPoints2 = google.maps.geometry.encoding.decodePath(window.document.getElementById('polytext2').value) ;

    encodedPolyline = new google.maps.Polyline ( {                             
        strokeColor: "#970E04",
        strokeOpacity: 1.0,
        strokeWeight: 2,
        path: decodedPoints,
        clickable: false
    });

    // encodedPolyline2 = new google.maps.Polyline ( {                             
    //     strokeColor: #4e52f3,
    //     strokeOpacity: 1.0,
    //     strokeWeight: 2,
    //     path: decodedPoints2,
    //     clickable: false
    // });

    encodedPolyline.setMap(map);
    // encodedPolyline2.setMap(map);
    

} 

function polyinsert2(){
    //encodedPoints   = ("'"+ Polytext + "'")
     
    decodedPoints2 = google.maps.geometry.encoding.decodePath(window.document.getElementById('polytext2').value) ;

    encodedPolyline2 = new google.maps.Polyline ( {                             
        strokeColor: '#4e52f3',
        strokeOpacity: 1.0,
        strokeWeight: 2,
        path: decodedPoints2,
        clickable: false
    });

    
    encodedPolyline2.setMap(map);

} 



// --------------------------------------------------------------------------------------------

function text1_c(){
    var texto = window.document.getElementById('polytext')
    if (texto.value == 'Polyline Programada'){
        texto.value = null
    }
}

function text2_c(){
    var texto2 = window.document.getElementById('polytext2')
    if (texto2.value == 'Polyline Realizada'){
        texto2.value = null
    }
}


// document.getElementById("inputfile").addEventListener('change',openarq())

// function openarq(){
//     var fr = new FileReader()
//     fr.onload = readarq()
//     fr.readAsText(this.files[0])
// }

// function readarq(){
//     document.getElementById('arquivor').textContent = this.result
// }

// document.getElementById('inputfile').addEventListener('change',function{
//     var fr=new FileReader()
//     fr.onload = function(){
//         document.getElementById("arquivor").textContent=this.result
//     }
//     fr.readAsText(this.file[0])
// })

// function doc(){
//      document.getElementById('inputfile').addEventListener('change',function{
//     var fr=new FileReader()
//     fr.onload = function(){
//         document.getElementById("arquivor").textContent=this.result
//     }
//     fr.readAsText(this.file[0])
//     })

// }

//input = document.getElementById("inputfile");

// input.addEventListener('change'function(e){
//     console.log(input.files)
// },false)

var input


function readarq(){
    // alert("ok")
    
    // function le(){
        var read = window.document.getElementById('inputfile')
        console.log(read.files[0])
    

    //var read = window.document.getElementById('inputfile').addEventListener("click",le())
    
    // //console.log(read.file)

    // var viewer = document.getElementById('arquivor')
    // var filer = document.getElementById('inputfile').files[0]
    // var visu = new FileReader()

    // visu.onloadend = function(){
    //     viewer.src = visu.result
    // }

    // if(filer){
    //     visu.readAsDataURL(filer)
    // }else{
    //     viewer.src=""
    // }

}