// Event: Strikethrough text when clicking on clean list item
$('li').on('click', function() { 
	
	$(this).css("text-decoration", "line-through");
});