<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>
<template>
  <header>
    <div class="logo"><img src="../../assets/images/logo.png" alt=""></div>
    <nav :class="!isMenuOpen ? 'menuAnimOff' : 'menu'">
      <ul>
        <li>
          <router-link to="/" class="nav-link">MOVIES</router-link>
        </li>
        <li>
          <router-link to="/celebsAndPhotos" class="nav-link">CELEBS & PHOTOS</router-link>
        </li>
        <li>
          <router-link to="/community" class="nav-link">COMMUNITY</router-link>
        </li>
        <li>
          <router-link to="/news" class="nav-link">NEWS</router-link>
        </li>
      </ul>
    </nav>
    <div class="hamburger-menu">
      <button class="hamburger-button" @click="toggleMenu">
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
      </button>
    </div>
  </header>
</template>
  
<style lang="scss" scoped>
header {
  background-color: #fff;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .logo {
    width: 100px;

    img {
      width: 100%;
    }
  }
}

.nav-link {
  color: #000;
  text-decoration: none;
  margin-right: 10px;
}

li {
  a.router-link-exact-active {
    color: var(--primary-color);
  }
}

nav {
  width: 100%;
  position: absolute;
  top: 86px;
  left: 0;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    padding: 30px;
    text-align: start;
  }
}

.menuAnimOff {
  height: 0px;
  opacity: 0;
  transition: all 0.5s ease;

  ul {
    display: none;
  }
}

.menu {
  height: 179px;
  background-color: rgba(134, 134, 134, 0.546);
  transition: all 0.5s ease;
}

.hamburger-menu {
  position: relative;

  .hamburger-button {
    display: flex;
    flex-direction: column;
    cursor: pointer;
    padding: 10px;
    background-color: transparent;
    border: none;
  }

  .line {
    height: 3px;
    width: 30px;
    background-color: #333;
    margin: 4px 0;
    transition: transform 0.3s, opacity 0.3s;
  }

}


@media screen and (min-width: 768px) {
  nav {
    width: 100%;
    position: relative;
    top: 0;
    left: 0;

    ul {
      text-align: center;
    }

    li {
      display: inline-block;
    }
  }

  .hamburger-menu {
    display: none;
  }

  .menuAnimOff {
    height: 100%;
    opacity: 1;
    transition: all 0.5s ease;

    ul {
      display: block;
    }
  }
}
</style>
