<template>
    <div class="fillcontain">
        <head-top></head-top>
        <table width="50%" border="1" align="center" style="margin-top:50px">
        <p style="text-align: center;font-size: 20px;color: #333" >区块链公益捐赠系统</p>
        <p class="explain_text" >1) 用户注册与登录。
首先，当新用户首次进入平台时，需要进行注册。其中，
被捐款人和善款使用机构则需提交一系列审核材料以防止存
在欺诈行为，待后台审核通过后方可加入。用户注册成功后，
即可登录平台进行系列操作。</p>
<p class="explain_text" >2) 捐款人操作流程。
捐款人登录捐款平台后，可浏览相应的捐款项目选定项
目后确定金额并进行捐赠，若余额不足系统会提示进行充值，
充值后方可完成捐赠。</p>
<p class="explain_text" >3) 被捐款人操作流程。
当被捐款人需要使用善款时，他需要搜索对应的善款使
用机构。如果善款使用机构不在平台内部，被捐款人需要联
系该机构，之后机构提交对应材料申请加入平台。找到对应
的善款使用机构后，被捐款人可以使用自己所获得善款获得
相应的服务，如教育、医疗等。</p>
<p class="explain_text" >
4) 善款使用机构的操作。
当该机构需要为被捐款人提供相应的服务时他可以直接
联系发行商将账户中的余额兑换成现实货币，兑换完成后也
将记录到数据库中; 否则返回主页面。</p>
</table>
        
    </div>
</template>

<script>
	import headTop from '../components/headTop'
    export default {
    	components: {
    		headTop,
    	},
    }
</script>

<style lang="less">
	@import '../style/mixin';
	.explain_text{
		margin-top: 20px;
		text-align: left;
		font-size: 20px;
		color: #333;
	}
</style>
