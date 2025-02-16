const add = document.getElementById("add");
const sub = document.getElementById("sub");
const mult = document.getElementById("mult");
const div = document.getElementById("div");

add.onclick = function()
{
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  let result = num1 + num2;
  document.getElementById("result").textContent = `result : ${result} `;
}
sub.onclick = function()
{
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  let result = num1 - num2;
  document.getElementById("result").textContent = `result : ${result} `;
}
mult.onclick = function()
{
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  let result = num1 * num2;
  document.getElementById("result").textContent = `result : ${result} `;
}
div.onclick = function()
{
  let num1 = Number(document.getElementById("num1").value);
  let num2 = Number(document.getElementById("num2").value);
  let result = num1 / num2;
  document.getElementById("result").textContent = `result : ${result} `;
}
