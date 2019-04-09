<template>
	<div class="manage_page fillcontain">
		<el-row style="height: 100%;">
	  		<el-col :span="4"  style="min-height: 100%; background-color: #324057;">
				<el-menu :default-active="defaultActive" style="min-height: 100%;" background-color="#324057"  text-color="#fff" router>
					<el-menu-item index="manage-3"><i class="el-icon-menu"></i>首页</el-menu-item>
					<el-submenu index="2">
						<template slot="title"><i class="el-icon-document"></i>兑换余额</template>
						<el-menu-item index="exchange">兑换</el-menu-item>
					</el-submenu>
						<el-submenu index="3">
						<template slot="title"><i class="el-icon-setting"></i>设置机构信息</template>
						<el-menu-item index="personinfoset3">通知设置</el-menu-item>
						<!-- <el-menu-item index="sendMessage">发送通知</el-menu-item> -->
					</el-submenu>
						<el-submenu index="4">
						<template slot="title"><i class="el-icon-edit"></i>区块链浏览器</template>
						<!-- <el-menu-item index="uploadImg">上传图片</el-menu-item> -->
						<el-menu-item index="blockchaininfo3">区块信息查询</el-menu-item>
						<el-menu-item index="transactioninfo3">交易信息查询</el-menu-item>
					</el-submenu>
					<el-submenu index="5">
						<template slot="title"><i class="el-icon-warning"></i>说明</template>
						<el-menu-item index="explain3">说明</el-menu-item>
					</el-submenu>
				</el-menu>
			</el-col>
			<el-col :span="20" style="height: 100%;overflow: auto;">
				<keep-alive>
				    <router-view></router-view>
				</keep-alive>
			</el-col>
		</el-row>
  	</div>
</template>

<script>
    export default {
		computed: {
			defaultActive: function(){
				return this.$route.path.replace('/', '');
			}
		},
    }
</script>


<style lang="less" scoped>
	 @import '../style/mixin'; 
		.manage_page{
		
	}

</style>
