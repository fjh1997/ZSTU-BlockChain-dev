<template>
	<div class="manage_page fillcontain">
		<el-row style="height: 100%;">
	  		<el-col :span="4"  style="min-height: 100%; background-color: #324057;">
				<el-menu :default-active="defaultActive" style="min-height: 100%;" background-color="#324057"  text-color="#fff" router>
					<el-menu-item index="/manage-2"><i class="el-icon-menu"></i>首页</el-menu-item>
					<el-submenu index="2">
						<template slot="title"><i class="el-icon-document"></i>使用善款</template>
						<el-menu-item index="/ChoiceCompany">机构选择</el-menu-item>
						<el-menu-item index="/ShowBalance">查看余额</el-menu-item>
						<el-menu-item index="/SearchCompany">查询机构ID</el-menu-item>
					</el-submenu>
						<el-submenu index="3">
						<template slot="title"><i class="el-icon-star-on"></i>捐赠详情</template>
						<el-menu-item index="/recent">近期捐赠</el-menu-item>
					<!-- <el-menu-item index="newMember">用户数据</el-menu-item> -->
					</el-submenu>
						<el-submenu index="4">
						<template slot="title"><i class="el-icon-edit"></i>区块链浏览器</template>
						<!-- <el-menu-item index="uploadImg">上传图片</el-menu-item> -->
						<el-menu-item index="/explorer2">区块信息查询</el-menu-item>
						<el-menu-item index="/transactioninfo2">交易信息查询</el-menu-item>
					</el-submenu>
					<el-submenu index="5">
						<template slot="title"><i class="el-icon-setting"></i>设置个人信息</template>
						<el-menu-item index="/PersoninfoSet2">设置</el-menu-item>
						<!-- <el-menu-item index="sendMessage">发送通知</el-menu-item> -->
					</el-submenu>
					<el-submenu index="6">
						<template slot="title"><i class="el-icon-warning"></i>说明</template>
						<el-menu-item index="/explain2">关于</el-menu-item>
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
