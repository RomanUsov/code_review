<html>

<head>
  <title>В Контакте | Страницы юзера</title>
    <style type="text/css">
    	body{
    		background: black;
    		color: #D1D1D1;
    		font-family: "Trebuchet MS", Verdana, Geneva, Arial, Helvetica, sans-serif;
    		font-size: 1.2em;
    	}
    	div.body{
    		margin-left: auto;
    		margin-right: auto;
    		width: 520px;
    	}
    	a{color: #D1D1D1; text-decoration: none;}
    	a:hover{color: #3e9af2; text-decoration: underline;}
    	li{white-space: nowrap; list-style: none;}
    	input{
    		background: black;
    		color: #D1D1D1;
    		border:none;
    		border-bottom: 1px dotted #D1D1D1;
    		font-family: "Trebuchet MS", Verdana, Geneva, Arial, Helvetica, sans-serif;
    		font-size: 1.2em;
    		margin-bottom: -2px;
    	}
    </style>
	<script type="text/javascript">
	<!--//
	function set_id(){
		var user_id_1 = document.getElementById('user_id').value.replace(/[^\d]/g, "");
		var user_id_2 = user_id_1 + '&' + Math.round(Math.random() * 999999);

		var user_links = '';
		user_links += '<ul>';
		user_links += '	<li><a href="http://vkontakte.ru/id' + user_id_1 + '?' + Math.round(Math.random() * 999999) + '" target="_blank">Главная страница</a></li>';
		user_links += '	<li>';
		user_links += '		<a href="http://vkontakte.ru/wall.php?id=' + user_id_2 + '" target="_blank">Стена</a>';
		user_links += '		<ul>';
		user_links += '			<li><a href="http://vkontakte.ru/wall.php?act=write&id=' + user_id_2 + '" target="_blank">Оставить сообщение</a></li>';
		user_links += '			<li><a href="http://vkontakte.ru/graffiti.php?act=draw&to_id=' + user_id_2 + '" target="_blank">Оставить графити</a></li>';
		user_links += '			<li><a href="http://vkontakte.ru/photos.php?to_id=' + user_id_2 + '" target="_blank">Оставить фото</a></li>';
		user_links += '			<li><a href="http://vkontakte.ru/video.php?to_id=' + user_id_2 + '" target="_blank">Оставить видио</a></li>';
		user_links += '			<li><a href="http://vkontakte.ru/audio.php?to_id=' + user_id_2 + '" target="_blank">Оставить аудио</a></li>';
		user_links += '		</ul>';
		user_links += '	</li>';
		user_links += '	<li><a href="http://vkontakte.ru/mail.php?act=write&to=' + user_id_2 + '" target="_blank">Отправить сообщение</a></li>';
		user_links += '	<li><a href="http://vkontakte.ru/friend.php?id=' + user_id_2 + '" target="_blank">Друзья</a></li>';
		user_links += '	<li><a href="http://vkontakte.ru/photos.php?id=' + user_id_2 + '" target="_blank">Альбомы</a></li>';
		user_links += '	<li><a href="http://vkontakte.ru/photos.php?act=user&id=' + user_id_2 + '" target="_blank">Фото с юзером</a></li>';
		user_links += '	<li><a href="http://pda.vkontakte.ru/taggedphotos' + user_id_1 + '" target="_blank">Фото с юзером, если надо посмотреть скрытые фото</a></li>';
		user_links += '	<li><a href="http://vkontakte.ru/video.php?id=' + user_id_2 + '" target="_blank">Видeо</a></li>';
		user_links += '	<li><a href="http://vkontakte.ru/questions.php?mid=' + user_id_2 + '" target="_blank">Вопросы</a></li>';
		user_links += '	<li><a href="http://vkontakte.ru/notes.php?id=' + user_id_2 + '" target="_blank">Заметки</a></li>';
		user_links += '	<li><a href="http://vkontakte.ru/apps.php?mid=' + user_id_2 + '" target="_blank">Приложения</a></li>';
		user_links += '	<li><a href="http://vkontakte.ru/groups.php?mid=' + user_id_2 + '" target="_blank">Группы</a></li>';
		user_links += '</ul>';

        document.title = 'В Контакте | Страницы юзера id' + user_id_1;
        document.getElementById('user_id').value = user_id_1;
		document.getElementById('user_pages').innerHTML = user_links;
	}
	//-->
	</script>
</head>
<body onLoad="set_id()">
	<div class="body">
		Страницы юзера id<input name="user_id" id="user_id" type="text" value="1" onKeyUp="set_id()" onKeyPress="set_id()" onPaste="set_id()">
		<div id="user_pages"></div>
		<noscript><p align="center">Ипать))) ... ктож а таком старье сидит)....<br />Включи JavaScript!</p></noscript>
		<p align="center">by Dr.Freez</p>
	</div>
</body>

</html>
