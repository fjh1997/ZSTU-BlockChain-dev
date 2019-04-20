<template>
	<div class="manage_page fillcontain">
		<el-row style="height: 100%;">
	  		<el-col :span="4"  style="min-height: 100%; background-color: #324057;">
				<el-menu :default-active="defaultActive" style="min-height: 100%;" background-color="#324057"  text-color="#fff" router>
					<el-menu-item index="manage-1"><i class="el-icon-menu"></i>首页</el-menu-item>
					<el-submenu index="2">
						<template slot="title"><i class="el-icon-document"></i>捐助项目</template>
						<el-menu-item index="donList">精准捐助</el-menu-item>
						<el-menu-item index="donList2">项目捐助</el-menu-item>
						<el-menu-item index="donList3">众筹捐助</el-menu-item>
					</el-submenu>
					<el-submenu index="3">
						<template slot="title"><i class="el-icon-plus"></i>余额充值</template>
						<el-menu-item index="AlipayandWechat">支付宝、微信充值</el-menu-item>
						<el-menu-item index="cryptocurrency">虚拟币充值</el-menu-item>
					</el-submenu>
					<el-submenu index="4">
						<template slot="title"><i class="el-icon-star-on"></i>捐赠统计</template>
						<el-menu-item index="Donstatics">捐助分布</el-menu-item>
						<el-menu-item index="Donstatics2">善款去向</el-menu-item>
						<el-menu-item index="Donstatics3">爱心资产</el-menu-item>
						<!-- <el-menu-item index="newMember">用户数据</el-menu-item> -->
					</el-submenu>
					<el-submenu index="5">
						<template slot="title"><i class="el-icon-edit"></i>区块链浏览器</template>
						<!-- <el-menu-item index="uploadImg">上传图片</el-menu-item> -->
						<el-menu-item index="manage-1/explorer">区块信息查询</el-menu-item>
						<el-menu-item index="transactioninfo">交易信息查询</el-menu-item>
					</el-submenu>
					<el-submenu index="6">
						<template slot="title"><i class="el-icon-setting"></i>设置</template>
						<el-menu-item index="PersoninfoSet">个人信息设置</el-menu-item>
						<!-- <el-menu-item index="sendMessage">发送通知</el-menu-item> -->
					</el-submenu>
					<el-submenu index="7">
						<template slot="title"><i class="el-icon-warning"></i>说明</template>
						<el-menu-item index="explain1">关于</el-menu-item>
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
