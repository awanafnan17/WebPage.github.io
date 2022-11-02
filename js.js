function message(msg)
{
    document.getElementById('output').innerHTML = msg + " EVENT";
}
<body onload = "message('LOAD')"
onresize = "message('RESIZE')" 
onclick = "message('CLICK')"></body>
console.log("ERROR")
alert("heavy")