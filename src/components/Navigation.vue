<template>
  <header :class="{ 'scrolled-nac': scrollPoisiton }">
    <nav>
      <div class="branding">
        <img src="../../public/logos/navbar.png" alt="" />
      </div>
      <ul class="navigation" v-show="!mobile">
        <li>
          <router-link class="link" :to="{ name: 'Home' }">Home</router-link>
        </li>
        <li>
          <router-link class="link" :to="{ name: 'About' }">About</router-link>
        </li>
      </ul>
      <div class="icon">
        <i
          class="far fa-bars"
          v-show="mobile"
          @click="toggleMobileNav"
          :class="{ 'icon-active': mobileNav }"
        ></i>
      </div>
      <transition name="mobile-nav">
        <ul class="dropdown-nav" v-show="mobileNav">
          <li>
            <router-link class="link" :to="{ name: 'Home' }">Home</router-link>
          </li>
          <li>
            <router-link class="link" :to="{ name: 'About' }"
              >About</router-link
            >
          </li>
        </ul>
      </transition>
    </nav>
  </header>
</template>

<script>
export default {
  data: () => {
    return {
      appTitle: "Awesome App",
      sidebar: false,
      menuItems: [
        { title: "Home", path: "/home", icon: "home" },
        { title: "Sign Up", path: "/signup", icon: "face" },
        { title: "Sign In", path: "/signin", icon: "lock_open" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>

header{
  background-color: rgba(0,0,0,0.8);
  z-index: 99999999;
  width: 100%;
  position: fixed;
  transition: .5s ease all;
  color: #fff;

  nav{
    display: flex;
    flex-direction: row;
    padding: 12px 0;
    transition: .5s ease all;
    width: 90%;
    margin: 0 auto;
    @media(min-width: 1140px){
      max-width: 1140px;
    }

    ul, 
    .link{
      font-weight: 500;
      color: #fff;
      list-style: none;
      text-decoration: none;
    }

    li{
      text-transform: uppercase;
      padding: 16px;
      margin-left: 16px;
    }

    .link{
      font-size: 14px;
      transition: .5s ease all;
      padding-bottom: 4px;
      border-bottom: 1px solid transparent;

      &:hover{
        color: #00efaa;
        border-color: #00efaa;
      }
    }

    .branding{
      display: flex;
      align-items: center;
      
      img{
        width: 50px;
        transition: .5s ease all;
      }
    }
  }
}

</style>