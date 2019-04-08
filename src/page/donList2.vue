<template>
    <div class="fillcontain">
        <head-top></head-top>
        <don-page ></don-page>
       <don-page></don-page>
       <don-page></don-page>
        </div>
    </div>
</template>

<script>
    import headTop from '../components/headTop'
    import donPage from '../components/donPage'
    import {getUserList, getUserCount} from '@/api/getData'
    export default {
        data(){
            return {
              
            }
        },
    	components: {
    		headTop,
    		donPage
    	},
        created(){
            
        },
        methods: {
    
    }
}
</script>



<style lang="less">
	@import '../style/mixin';
    .table_container{
        padding: 20px;
    }

</style>
