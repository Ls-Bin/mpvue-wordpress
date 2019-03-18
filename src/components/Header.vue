<template>
  <div>

    <header 
      id="site-header" 
      role="banner">
      <div class="header-top section-inner">
        <h1 class="site-title"><a href="/">{{ $store.state.info.name }}</a></h1>
        <button 
          :class="{active:showMenu}"
          type="button" 
          aria-pressed="false" 
          class="toggle nav-toggle" 
          @click="showMenu=!showMenu"
        >
          <label>
            <span class="show">Menu</span>
            <span class="hide">Close</span>
          </label>
          <div class="bars">
            <div class="bar"/>
            <div class="bar"/>
            <div class="bar"/>
          </div><!-- .bars -->
        </button><!-- .nav-toggle -->

      </div><!-- .header-top -->
  
      <div class="header-inner section-inner">
        <div class="header-inner-top">				
          <p class="site-description">{{ $store.state.info.description }}</p>
   
        </div><!-- .header-inner-top -->

        <div class="social-menu-wrapper">
          <ul class="social-menu reset-list-style social-icons s-icons">								
            <li class="search-toggle-wrapper"><button 
              type="button" 
              aria-pressed="false" 
              data-toggle-target=".search-overlay" 
              data-set-focus=".search-overlay .search-field" 
              class="toggle search-toggle"><span class="screen-reader-text">Toggle the search field</span></button></li>				
          </ul><!-- .social-menu -->				
        </div><!-- .social-menu-wrapper -->

      </div><!-- .header-inner -->

    </header>


    <div 
      :class="{active:showMenu}"
      class="mobile-menu-wrapper" 
      aria-expanded="true" >
      <div class="mobile-menu section-inner">
        <div class="mobile-menu-top">
          <p class="site-description">{{ $store.state.info.description }}</p>	
  
        </div><!-- .mobile-menu-top -->
        <div class="social-menu-wrapper">						
          <ul class="social-menu ">							
            <li class="search-toggle-wrapper"><button 
              type="button" 
              aria-pressed="false" 
              data-toggle-target=".search-overlay" 
              data-set-focus=".search-overlay .search-field" 
              class="toggle search-toggle"><span class="screen-reader-text">Toggle the search field</span></button></li>								
          </ul><!-- .social-menu -->					
        </div><!-- .social-menu-wrapper -->
      </div><!-- .mobile-menu -->
    </div>
  </div>

</template>
<script>
export default {
  data() {
    return {
      showMenu: false
    }
  }
}
</script>


<style lang="scss" scoped >
#site-header {
  background: #fff;
  box-shadow: 0 0 2px #ccc;

  @include min-screen(1000px) {
    width: 31%;
    display: flex;
    flex-direction: column;
    justify-content: stretch;

    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    box-shadow: none;
    padding: 8rem 4rem 0 4rem;
    background: none;
  }
  @include min-screen(1200px) {
    width: 40%;
    padding: 12rem 8rem 0 8rem;
  }
  @include min-screen(1440px) {
    width: 44.5rem;
  }
}

// header-top ----------------------------
.header-top {
  position: relative;
  padding: 3.3rem 10rem 3.3rem 0;
  @include min-screen(600px) {
    padding: 4rem 0;
  }
  @include min-screen(1000px) {
    width: 100%;
    padding: 0;
  }
}
.site-title {
  font-size: 2rem;
  font-weight: 600;
  line-height: 1.25;
  @include min-screen(600px) {
    font-size: 2.8rem;
  }
}

// header-inner ------------------------------

.header-inner {
  display: none;
  @include min-screen(1000px) {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: space-between;
  }
}

.site-description {
  color: #4b555f;
  font-size: 1.8rem;
  margin-bottom: 5rem;
  max-width: 32rem;
  @include min-screen(1000px) {
    margin: 2rem 0 0;
  }
}
ul.site-nav {
  @include min-screen(1000px) {
    margin-top: 6rem;
  }
}

// site Navigation--------------------
.nav-toggle {
  @include min-screen(1000px) {
    display: none;
  }
}

// Mobile 相关 -------------------------

// Nav button------------
button.toggle {
  background-color: transparent;
  border: none;
  &:active,
  &:focus {
    label {
      text-decoration: underline;
    }
  }
}
.nav-toggle {
  width: 10rem;
  height: 5rem;
  padding: 0;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);

  &:not(.active) .hide {
    display: none;
  }

  label {
    font-size: 1.4rem;
    color: #232d37;
    cursor: pointer;
    display: block;
    font-weight: 600;
    position: absolute;
    right: 3.3rem;
    top: 50%;
    transform: translateY(-50%);
    white-space: nowrap;
  }

  // bars--------------
  .bars {
    height: 1.4rem;
    position: absolute;
    right: 0;
    top: calc(50% - 0.7rem);
    width: 1.9rem;
  }
  .bar {
    background: #232d37;
    border-radius: 0.2rem;
    display: block;
    height: 0.2rem;
    position: absolute;
    right: 0;
    top: calc(50% - 0.1rem);
    transition: transform 0.2s ease-in, opacity 0s ease-out 0.2s,
      margin 0.2s ease-out 0.2s;
    width: 100%;
    &:nth-child(1) {
      margin-top: -0.6rem;
    }
    &:nth-child(3) {
      margin-top: 0.6rem;
    }
  }

  &.active {
    .show {
      display: none;
    }
    .bar {
      transition: margin 0.2s ease-in, opacity 0s ease-in 0.2s,
        transform 0.2s ease-out 0.25s;
    }
    .bar:nth-child(1) {
      margin-top: -0.1rem;
      transform: rotate(45deg);
    }
    .bar:nth-child(2) {
      opacity: 0;
    }
    .bar:nth-child(3) {
      margin-top: -0.1rem;
      transform: rotate(-45deg);
    }
  }
}

// mobile-menu-wrapper ----------------------
.mobile-menu-wrapper {
  display: flex;
  background: #fff;
  overflow: auto;
  padding: 8rem 0 0 0;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0;
  transition: opacity 0.25s ease-in, z-index 0.25s;
  z-index: -1;

  @include max-screen(780px) {
    top: 8rem;
  }
  &.active {
    opacity: 1;
    z-index: 99;
  }
}
</style>
