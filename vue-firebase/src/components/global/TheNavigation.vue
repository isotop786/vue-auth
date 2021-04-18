<template>
<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <router-link to='/' class="navbar-item" >
      <h1 class="title">Vue App.</h1>
    </router-link>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item">
        Home
      </a>
    </div>

    <div class="navbar-end">
      <div class="navbar-item">
        <div class="navbar-item">
          <p class="p">Maruf</p>
        </div>
        <div class="buttons">
          <router-link to='/signup' class="button is-primary">
            <strong>Sign up</strong>
          </router-link>
          <router-link to="/login" class="button is-light">
            Signin
          </router-link>

          <a class="button is-danger">
            Log out
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
</template>

<script>
</script>

<style>
    .navbar {
        margin-bottom: 40px;
    }
</style>
