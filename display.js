(function(root){
	var datePicker = root.datePicker = (root.datePicker || {});

	var Display = datePicker.Display = function(){
		this.renderHeading();
		this.renderMonth();
	};
	
	Display.prototype.renderHeading = function(){
		$("#calendar").show();
			var today = new Date();
			var dd = today.getDate();
			var mm = today.getMonth()+1;
			var yyyy = today.getFullYear();

			if(dd<10) {
			    dd='0'+dd;
			} 

			if(mm<10) {
			    mm='0'+mm;
			} 

			today = mm+'/'+dd+'/'+yyyy;
			$('#dateInput').val(today);
			$('#monthYear').html(months[mm-1] + " " + yyyy);
	};

	Display.prototype.renderMonth = function(){
		var $monthDisplay = $('#monthDisplay');
		$monthDisplay.html("");
		var month = new datePicker.Month($monthDisplay);
	};
})(this);