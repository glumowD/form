$(document).ready(function() {
	$('#nav li').on('click', function(event) {
		const id = $(this).children();
		const href = id.attr('href');
		$('#wrapper > div').each(function(index,el) {
			let elem = '#' + el.id;
			if(href == elem){
				$('#wrapper > div').css('display','none');
				$('#nav li a').removeClass('active-tab')
				$(id).addClass('active-tab')
				$(elem).css('display','block');
			}
		})
	});
})