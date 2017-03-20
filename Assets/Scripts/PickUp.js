var target : Transform;
public var rb : Rigidbody;

function Update() {

}

function OnMouseDown() {
	rb = GetComponent.<Rigidbody>();
	rb.useGravity = false;
	this.transform.position = target.position;
	this.transform.parent = GameObject.Find("FPSController").transform;
	this.transform.parent = GameObject.Find("FirstPersonCharacter").transform;
}

function OnMouseUp() {
	rb.useGravity = true;
	rb = null;
	this.transform.parent = GameObject.Find("FPSController").transform;
	this.transform.parent = null;
}