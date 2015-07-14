// We use an "Immediate Function" to initialize the application to avoid leaving anything behind in the global scope
(function () {


	

	/* --------------------------------- Event Registration -------------------------------- */


	$('#picture-btn').on('click', function () {
		alert('clicked');
		takePicture();
	});
	
	$('#decode-btn').on('click', function () {
		 
		try {
			alert(qrcode.decode());
		} catch (err) {
			alert(err.message);
		}
	});

	function takePicture() {
		errorFactor = $('#errorFactor').val();
		navigator.camera.getPicture(onSuccess, onFail, {
			quality : 100,
			targetWidth : 300,
			targetHeight : 300,
			destinationType : Camera.DestinationType.DATA_URL,
			correctOrientation : true
		});

	}

	/* ---------------------------------- Local Functions ---------------------------------- */

	function onSuccess(imageData) {
		alert('starting');
		var imageObj = new Image();
		
		imageObj.src = "data:image/jpeg;base64," + imageData;
		imageObj.style.margin = "10px";
		imageObj.style.display = "block";

		var canvas = document.getElementById('qr-canvas');
		var context = canvas.getContext('2d');
		var x = 1;
		var y = 1;
		
		context.drawImage(imageObj, x, y);
		
		
		
		

	}

	function onFail(message) {
		alert(message);
	}

}());
