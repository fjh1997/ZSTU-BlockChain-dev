<template>
    <div id="app" class="fillcontain">
		    <router-view></router-view>
    <svg-icon></svg-icon>
    </div>
    	
</template>

<script>
   import svgIcon from './components/svg';
     import "./common/stylus/index.styl";
  	export default {
    	components:{
            svgIcon
        }
  	}

</script>

<style lang="less">
	@import './style/common';
</style>
