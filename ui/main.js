console.log('Loaded!');

var button 	= 	document.getElementById('counter');

button.onclick 	= 	function(){
	console.log('yugfkdgbh');
	var request = new XMLHttpRequest();

	request.onreadystatechange 	= 	function(req, res){
		console.log(request.readyState);
		if(request.readyState === XMLHttpRequest.DONE){
			console.log(request.status);
			if(request.status == 200){
				console.log('gygyfufjykuh');
				var span 	= 	document.getElementById('count');
				span.innerHTML = request.responseText;
				
			}
		}
		
	}

	request.open('GET','http://http://neerajbhusari.imad.hasura-app.io//counter',true);
	request.send(null);

};



