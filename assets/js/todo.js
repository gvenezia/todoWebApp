// Event: Strikethrough text when clicking on clean list item
$('ul').on('click', 'li', function() { 
	$(this).toggleClass("completed");
});

// Event: Remove list item
$('ul').on('click', 'span', function(e){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	e.stopPropagation();
});

// Event: Add a new list item
$("input[type='text']").keypress(function(e){
	if (e.which === 13) {
		// get text from input
		var text = $(this).val();

		// add text to ul list
		$('ul').append("<li>" + text + "<span><i class='fas fa-trash-alt'></i></span></li>");

		// Empty the input field
		$(this).val("");
	}
});

$('.fa-plus').click(function(){
	$("input[type='text']").fadeToggle();
});