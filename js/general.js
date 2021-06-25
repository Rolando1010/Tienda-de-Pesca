document.head.innerHTML+=`
	<link rel="icon" href="img/logo.ico">
	<link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous" />
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
	<link href="css/estilo.css" rel="stylesheet"></link>
`;

document.body.innerHTML=`
    <nav class="text-center navbar navbar-expand-lg navbar-light bg-light shadow-lg p-3 mb-5 bg-body rounded">
		<div class="container-fluid">
			<ul class="mx-auto navbar-nav me-auto mb-2 mb-lg-0">
				<li class="nav-item dropdown">
					<a class="nav-link dropdown-toggle h5 titulo" href="#" id="navbarDropdown" role="button"
						data-bs-toggle="dropdown" aria-expanded="false">Tienda de Pesca</a>
					<ul class="dropdown-menu" aria-labelledby="navbarDropdown">
						<li><a class="dropdown-item" href="#">Categoría 1</a></li>
						<li><a class="dropdown-item" href="#">Categoría 2</a></li>
						<li><a class="dropdown-item" href="#">Categoría 3</a></li>
						<li><a class="dropdown-item" href="#">Categoría 4</a></li>
						<li><a class="dropdown-item" href="#">Categoría 5</a></li>
						<li><a class="dropdown-item" href="#">Categoría 6</a></li>
					</ul>
				</li>
			</ul>
			<button class="navbar-toggler" type="button" data-bs-toggle="collapse"
				data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
				aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse opciones-Menu" id="navbarSupportedContent">
				<ul class="mx-auto navbar-nav me-auto mb-2 mb-lg-0">
					<a href="index.html"><img title="Inicio" class="logo mx-auto" src="img/logo.png"></a>
				</ul>
				<a href="#pie"><i title="Contacto" class="far fa-envelope"></i></a>
				<form>
					<input type="text" class="busqueda" name="search" placeholder="Buscar..">
				</form>
				<a href="catalogo.html"><i title="Catálogo" class="fas fa-list-alt"></i></a>
			</div>
		</div>
	</nav>
`+document.body.innerHTML;
				
//<i title="Búsqueda" class="fas fa-search"></i>

document.body.innerHTML+=`
    <footer class="bg-light text-center text-lg-start footer" id="pie">
        <div class="container p-4">
            <div class="row superior-footer">
                <div class="col-lg-3 col-md-6 mb-4 mb-md-0 contenedor-contacto-footer">
                    <h5 class="text-uppercase">Contacto:</h5>
                    <ul class="list-unstyled mb-0 contacto-footer">
                        <li>
                            <a href="#!" class="text-dark"><i class="fas fa-envelope"><p class="texto-contacto-footer">tiendapesca@gmail.com</p></i></a>
                        </li>
                        <li>
                            <a href="#!" class="text-dark"><i class="fab fa-facebook-f"><p class="texto-contacto-footer">Tienda de Pesca</p></i></a>
                        </li>
                        <li>
                            <a href="#!" class="text-dark"><i class="fas fa-phone-alt"><p class="texto-contacto-footer">+506 88888888</p></i></a>
                        </li>
                        <li>
                            <a href="#!" class="text-dark"><i class="fab fa-instagram"><p class="texto-contacto-footer">Tienda de Pesca</p></i></a>
                        </li>
                    </ul>
                </div>
                <div class="col-lg-6 col-md-12 mb-4 mb-md-0 mx-auto">
                    <h5 class="text-uppercase">Tienda de Pesca</h5>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae aliquam voluptatem veniam, est atque cumque eum delectus sint! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, eius doloribus maiores dolores, dolorum dolorem delectus quo veniam culpa ipsum in. Nam repellat non eaque recusandae ipsam natus sit tenetur.</p>
                </div>
            </div>
        </div>
        <div class="text-center p-3 final-footer">© Tienda de Pesca 2021</div>
    </footer>
`;
	
document.write(`<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js"></script>`);
