<!DOCTYPE html>
<html lang="en">
<head>
	<script src="js/bundle.js"></script>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
	<link rel="stylesheet" href="css/main.css">
	<title>Forum</title>
</head>
<body>
	<header class="header">
		<div class="container">
			<div class="topbar">
				<div class="logo">Searchtool</div>
				<div class="search-field-block">
					<input type="text" name="tag_name" id="search_input" class="search-field" placeholder="Поиск...">
					<i class="fa fa-search search-field-icon" aria-hidden="true"></i>
					<br>
					<div class="typing" id="typing_id">
						 <span class="typing__bullet"></span>
						 <span class="typing__bullet"></span>
						 <span class="typing__bullet"></span>
					</div>
				</div>
				<div class="control-block">
					<a class="btn btn-login" href="#">Login</a>
					<a class="btn btn-register" href="#">Register</a>
				</div>
			</div>
		</div>
	</header>
	<div id="result_search_waiting"></div>
	<div id="result_search">You can find tools for work here. Machine learning tools will have an advantage<br><br> Set of tools - web service, which alow you select, test and share different tools to simplify development!</div>
</body>
</html>
