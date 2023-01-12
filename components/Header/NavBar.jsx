import CartWidget from "./CartWidget";

const NavBar = () => {
    return <div>
        <nav class="navbar navbar-expand-lg bg-light">
  <div class="container">
    <a class="navbar-brand" href="#">SJA Indumentaria</a>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Producto 1</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Producto 2</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Producto 3</a>
        </li>
      </ul>
      
    </div>
    <CartWidget />
    
  </div> 
</nav>
        
    </div>;
}

export default NavBar;