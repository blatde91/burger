$(document).ready(function() {
	$('#submit').on('click', function(event) {
		event.preventDefault();
		var newBurgerObj = {
			burgerName: $('#newBurger').val().trim()
		};
		console.log(newBurgerObj);
		$.ajax({
			method: "POST",
			url: '/api/burger',
			data: newBurgerObj
		}).then(function() {
			console.log("New Burger: " + newBurgerObj);
			location.reload();
		});
	});
	$(".devour").on('click', function(event) {
		var newBurgerObj = {
			burgerId: $(this).attr('data-id'),
			devoured: true
		}
		$.ajax({
			method: 'PUT',
			url: '/api/burger',
			data: newBurgerObj
		}).then(function() {
			console.log("Devoured: ", id);
			location.reload();
		});
	});
});