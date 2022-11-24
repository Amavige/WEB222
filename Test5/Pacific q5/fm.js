function calculateVolume(length,width,height){
var length = document.getElementById(length).values;
var width = document.getElementById(width).values;
var height = document.getElementById(height).values;
var volume = length * width * height;
parseInt(length+width+height);
document.write(volume);

}
document.getElementById("submit").onclick = calculateVolume;