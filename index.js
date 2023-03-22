document.addEventListener("DOMContentLoaded", () => {
  console.log("Hello World!");
}); 
var data = {
    fullName : name,
    phone : phone,
    email : email,
    desc : desc
};
function printMsg(){
	window.alert('Hello There');
	$.ajax({
    	type: "POST",
    	URL : 'https://pl3q36s3g3.execute-api.ap-south-1.amazonaws.com/default/ajaxLambdaFun',
    	crossDomain: "true",
    	contentType: "application/json",
    	data: JSON.stringify(data),
    	success: function () {
         alert("Successful!");
    	},
    	error: function () {
         	alert("Unsuccessful!");
    	}});
}
