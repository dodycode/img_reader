function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            document.getElementById('yourimgid').src = e.target.result;
        };

        reader.readAsDataURL(input.files[0]);
    }
}


document.getElementById('yourinputfileid').addEventListener("change", function() {
  var file = this.files[0], img;
  if (Math.round(file.size / (1024 * 1024)) > 2) {
     alert('Image yang di upload terlalu besar! (Max: 2MB)');
     this.value = '';
     return false;
  }else{
    readURL(this);
  }
});
