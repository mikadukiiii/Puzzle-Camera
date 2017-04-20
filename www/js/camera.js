// This is a JavaScript file
function CCreate() {
    navigator.camera.getPicture(camera, function() {
        alert("カメラ機能が取り消されました");
    }, {
        quality : 50,
        destinationType : Camera.DestinationType.FILE_URI,
        targetWidth : 350,
        targetHeight : 500
    });
}
function camera(camera_url) {
    if (camera_url) {
      var id = "c";
      var p = "jpPuzzle";
      var img = "<img id='"+ id +"' src='"+ camera_url +"' class='"+ p +"'>";
      localStorage.setItem("img",img);
    }
var result = confirm("この写真をパズルにしますか？");
if(result){
    location.href = "camera.html";
}else{
    location.href = "index.html";
}

    
};
