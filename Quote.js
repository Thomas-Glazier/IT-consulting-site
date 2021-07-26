function multiplication_calculate() {
var myBox1 = document.getElementById('box1').value; 
var myBox2 = document.getElementById('box2').value;
var result = document.getElementById('result'); 
var myResult = myBox1 * myBox2;
document.getElementById('result').value = myResult;
}
