var database=[
{
	username :"deepak",
	password:"sam"
},{
	username :"deepk",
	password:"sasm"
},{
	username :"depak",
	password:"samb"
},{
	username :"deak",
	password:"sappm"
}
];
var newsfeed=[
	{
	username:"booby",
	timeline:"so tired of ur bullshit"	
	},
	{
	username:"Cheeku",
	timeline:"so tired of ur sugar"	
	},
];
var userNamePrompt = prompt("whats ur username");
var passwordPromt = prompt("whats your password");
function sign(user,pass){
	if(user==database[0].username && pass==database[0].password){
		console.log(newsfeed)
	} else{
		alert("yo mama suck")
	}
}
sign(userNamePrompt,passwordPromt);