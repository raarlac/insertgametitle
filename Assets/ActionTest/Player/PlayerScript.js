#pragma strict

var speed:float;
var initialRotation:Quaternion;
function Start () {
	initialRotation=transform.rotation;
}

function Update () {
	if(onattack)
	{
		transform.position.z+=Time.deltaTime;
		childTransform.LookAt(target);
		if(transform.position.z>target.position.z)
		{
			onattack=false;
		}
	}
	else transform.position.z+=Time.deltaTime*speed;
}

var onattack:boolean=false;
var target:Transform;
var childAnimator:Animator;
var childTransform:Transform;
var cameraAnimator:Animator;
function OnTriggerEnter (other : Collider) 
{
	target=other.transform;
	onattack=true;
	childAnimator.SetBool("jump",true);
	cameraAnimator.SetBool("sideview",true);
}

function OnCollisionEnter(collision : Collision)
{
	if(collision.gameObject.tag=="enemy")
	{
		Destroy(collision.gameObject);
		onattack=false;
		childAnimator.SetBool("jump",false);
		cameraAnimator.SetBool("sideview",false);
		childTransform.forward=Vector3(0,0,1);
	}
}