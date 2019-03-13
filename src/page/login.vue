<template>
  	<div class="login_page fillcontain">
<transition name="form-fade" mode="in-out">
  			<el-button type="success" @click="manage()" class="manage_entry" v-show="showLogin" >管理员入口</el-button>
	 </transition>
	  	<transition name="form-fade" mode="in-out">
	  	
	  		
	  		<section class="form_contianer" v-show="showLogin">
	 				
	 	  		<div class="manage_tip">
		  			<p>区块链公益捐赠系统</p>
		  		</div>

		    	<el-form :model="loginForm" :rules="rules" ref="loginForm">
					<el-form-item prop="username">
						<el-input v-model="loginForm.username" placeholder="用户名"><span>dsfsf</span></el-input>
					</el-form-item>
					<el-form-item prop="password">
						<el-input type="password" placeholder="密码" v-model="loginForm.password"></el-input>
					</el-form-item>
					<el-form-item>
						<el-radio-group v-model="radio9" size="mini">
						 <el-radio label="1" border >捐款人</el-radio>
    					<el-radio  label="2" border >被捐款人</el-radio>
    					<el-radio  label="3" border>使用机构</el-radio>
    					 </el-radio-group>
    					  	<el-button type="primary" @click="submitForm('loginForm')" class="submit_btn">登录</el-button>
    					  	<el-button type="primary" @click="submitForm('loginForm')" class="submit_btn">注册</el-button>
				  	</el-form-item>
				</el-form>
				<p class="tip">Powered by ZSTU-Blockchain</p>
				<img src="@/assets/img/200px-Zstu.edu.png">
				<img src="@/assets/img/home-title.png">
				<img src="@/assets/img/logo.png">
				<img src="@/assets/svg/logo.svg">
				</section>
			
	  			
	  	</transition>
	  
  	</div>

</template>

<script>
	import {login, getAdminInfo} from '@/api/getData'
	import {mapActions, mapState} from 'vuex'

	export default {
	    data(){
			return {
				loginForm: {
					username: '',
					password: '',
				},
				rules: {
					username: [
			            { required: true, message: '请输入用户名', trigger: 'blur' },
			        ],
					password: [
						{ required: true, message: '请输入密码', trigger: 'blur' }
					],
				},
				showLogin: false,
				 radio9: '',
			}
		},
		mounted(){
			this.showLogin = true;
			if (!this.adminInfo.id) {
    			this.getAdminData()
    		}
		},
		computed: {
			...mapState(['adminInfo']),
		},
		methods: {
			...mapActions(['getAdminData']),

			async manage()
			{
				this.$router.push('manage');

			},
			async submitForm(formName) {
				this.$refs[formName].validate(async (valid) => {
					if (valid) {
						const res = await login({user_name: this.loginForm.username, password: this.loginForm.password})
						var type = ['捐款人', '被捐款人','使用机构'];

						if (res.status == 1) {
							this.$message({
		                        type: 'success',
		                        message: '登录成功'+type[this.radio9-1]
		                    });
							this.$router.push('manage-'+this.radio9);
						}else{
							this.$message({
		                        type: 'error',
		                        message: res.message
		                    });
						}
					} else {
						this.$notify.error({
							title: '错误',
							message: '请输入正确的用户名密码',
							offset: 100
						});
						return false;
					}
				});
			},
		},
		watch: {
			adminInfo: function (newValue){
				if (newValue.id) {
					this.$message({
                        type: 'success',
                        message: '检测到您之前登录过，将自动登录'
                    });
					//this.$router.push('manage')
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	@import '../style/mixin';
	.login_page{
		background-color: #324057;
	}
	.manage_tip{
		position: absolute;
		width: 100%;
		top: -100px;
		left: 0;
		p{
			font-size: 34px;
			color: #fff;
		}
	}
	.form_contianer{
		.wh(420px, 210px);
		.ctp(620px, 310px);
		padding: 55px;
		border-radius: 55px;
		text-align: center;
		background-color: #fff;
		.submit_btn{
			width: 40%;
			font-size: 16px;
			margin:20px;
		}
	}
	.tip
	{
		top: -10px;
		color: white;
	}
	img
	{
		height: 60px;
		margin: 15px;
	}
	.form-fade-enter-active, .form-fade-leave-active {
	  	transition: all 1s;
	}
	.form-fade-enter, .form-fade-leave-active {
	  	transform: translate3d(0, -50px, 0);
	  	opacity: 0;
	}
</style>
