#pragma strict

var player:Transform;
function Start () {
	
}

function Update () {
		transform.position.x=player.position.x;
		transform.position.y=player.position.y+5;
		transform.position.z=player.position.z-6;
}