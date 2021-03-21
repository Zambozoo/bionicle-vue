<template>
  <div id="app">
    <header class="header">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"><strong>BIONICLE</strong></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" href="http://vuebionicle.parkernel.com/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Products</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Story</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Gallery</a>
              </li>
			</ul>
          </div>
        </div>
      </nav>
    </header>
  <div class="content">
    <router-view />
  </div>
  <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"><strong>BIONICLE</strong></a>
      <div id="navbarFooter">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <a class="nav-link" href="https://lego.com/">LEGO®</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="https://github.com/Zambozoo/bionicle-vue">Github</a>
          </li>
		</ul>  
      </div>
    </div>
  </nav>
</div>
</template>
<style>
#app {
  font-family: Cinzel, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
