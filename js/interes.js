

// Добавление интересов и занесение в localStorage

$(document).ready(function() {
	function Events(el, ev) {
		this.el = el;
		this.ev = ev;
		this.int(el,ev);
	}

	Events.prototype.int = function(el,ev) {
		$(el).on(ev,function(e) {
			if(e.keyCode == 13 || ev == 'click'){
				var val = document.querySelector('.form-int input').value;
				if(val == ''){return false;}else{
					$('#list-interests').prepend('<a href=#>'+val+'</a>');
					document.querySelector('.form-int input').value="";
					var a = document.querySelectorAll('#list-interests a');
					for(var i = 0; i<a.length; i++){
						var num = a[i].dataset.num = 'num-' + (i+1);
						localStorage.setItem(num, a[i].innerHTML);
						localStorage.setItem('count', i+1);
					}
				}
				return false;
			}
		})
	}
	const btn = new Events('#addInt', 'click');
	const input = new Events('.form-int input', 'keypress');

// Создание интересов после перезагрузки страницы

	reboot();

	function reboot() {
		var col = localStorage.getItem('count');
			if(col!=null){
				for(var i = 0; i<col; i++){
				$('#list-interests').append('<a href=#>'+localStorage.getItem('num-' + (i+1))+'</a>');
				document.querySelectorAll('#list-interests a')[i].dataset.num = 'num-' + (i+1);
			}
		}
	}

// Удаление интересов по клику

	$('#list-interests').on('click','a',function(e) {
			e.preventDefault();
			var th = $(this);
			var attr = th.attr('data-num');
			th.remove();
			localStorage.removeItem(attr);
			localStorage.setItem('count', $('#list-interests a').length);
		});

});
