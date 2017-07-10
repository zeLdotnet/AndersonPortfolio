var name, comments, x, y, z;

function myFunction(){
	x=document.getElementById("user");
	y=x.elements["name"].value;
	document.write("Thanks" + y + "!!!");
	z=x.elements["comments"].value;
	document.write(toUpperCase(z));
}