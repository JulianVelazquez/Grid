$(function(){
	var count = 4;
	var text = "";
	for (var i = 0; i < count; i++){
		text += "<td><div></div></td>";
	};
	$('body').append('<table></table>');
	for (var i = 0; i < count; i++){
		$('table').append("<tr>" + text + "</tr>");
	};
	$('div').hover(function(){
		$(this).css('background-color', 'black')
		});
	$('#b2').click(function(){
		count = prompt("Pick a number");
		var divSize = (500 / count) + "px";
		text = "";
		for (var i = 0; i < count; i++){
		text += "<td><div></div></td>";
		};
		$('table').remove();
		$('body').append('<table></table>');
		for (var i = 0; i < count; i++){
		$('table').append("<tr>" + text + "</tr>");
		};
		$('div').css('height', divSize);
		$('div').css('width', divSize);
		$('div').hover(function(){
			$(this).css('background-color', 'black')
			});
	
	})
	$('#b1').click(function(){
		$('div').css('background-color', 'white')
	});
})
