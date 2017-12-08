$(document).ready(function() {
	$('#submit').on('click', function(event) {
		event.preventDefault();
		var newBurgerObj = {
			name: $('#newBurger').val().trim()
		};
		console.log(newBurgerObj);
		$.ajax("/api/burgers", {
			type: "POST",
			data: newBurgerObj
		}).then(function() {
			console.log("New Burger: " + newBurgerObj);
			locations.reload();
		});
	});
	$(".devourBurger").on('click', function(event) {
		var id = $(this).data('id');
		$.ajax('/api/burgers/' + id, {
			type: "PUT"
		}).then(function() {
			console.log("Devoured: ", id);
			location.reload();
		});
	});
	$(".delete").on('click', function(event) {
		var id = $(this).data('id');
		$.ajax('/api/burgers/' + id, {
			type: "DELETE"
		}).then(function() {
			console.log("Delted: ", id);
			location.reload();
		});
	});
});