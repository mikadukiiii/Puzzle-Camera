// This is a JavaScript file

      function ACreate () {
        //Specify the source to get the photos.
        navigator.camera.getPicture(album, function() {
        alert("アルバム機能が取り消されました");
    }, { 
          quality: 50, targetWidth: 350,  targetHeight: 500,
          destinationType: Camera.DestinationType.FILE_URI,
          sourceType: navigator.camera.PictureSourceType.SAVEDPHOTOALBUM
          });
      }

    function album(camera_url) {      
    if (camera_url) {
      var id = "a";
      var p = "jpPuzzle";
      var img = "<img id='"+ id +"' src='"+ camera_url +"' class='"+ p +"'>";
      localStorage.setItem("img",img);
    }
var result = confirm("この写真をパズルにしますか？");
if(result){
    location.href = "album.html";
}else{
    location.href = "index.html";
}

};