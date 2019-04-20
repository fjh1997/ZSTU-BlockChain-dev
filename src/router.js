import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const login = r => require.ensure([], () => r(require('@/page/login')), 'login');
const manage = r => require.ensure([], () => r(require('@/page/manage')), 'manage');
const manageDonor = r => require.ensure([], () => r(require('@/page/manage-1')), 'manage-1');
const manageDonee = r => require.ensure([], () => r(require('@/page/manage-2')), 'manage-2');
const manageMechan = r => require.ensure([], () => r(require('@/page/manage-3')), 'manage-3');
const home = r => require.ensure([], () => r(require('@/page/home')), 'home');
const addShop = r => require.ensure([], () => r(require('@/page/addShop')), 'addShop');
const addGoods = r => require.ensure([], () => r(require('@/page/addGoods')), 'addGoods');
const userList = r => require.ensure([], () => r(require('@/page/userList')), 'userList');
const shopList = r => require.ensure([], () => r(require('@/page/shopList')), 'shopList');
const foodList = r => require.ensure([], () => r(require('@/page/foodList')), 'foodList');
const orderList = r => require.ensure([], () => r(require('@/page/orderList')), 'orderList');
const adminList = r => require.ensure([], () => r(require('@/page/adminList')), 'adminList');
const visitor = r => require.ensure([], () => r(require('@/page/visitor')), 'visitor');
const newMember = r => require.ensure([], () => r(require('@/page/newMember')), 'newMember');
const uploadImg = r => require.ensure([], () => r(require('@/page/uploadImg')), 'uploadImg');
const vueEdit = r => require.ensure([], () => r(require('@/page/vueEdit')), 'vueEdit');
const adminSet = r => require.ensure([], () => r(require('@/page/adminSet')), 'adminSet');
const sendMessage = r => require.ensure([], () => r(require('@/page/sendMessage')), 'sendMessage');
const explain = r => require.ensure([], () => r(require('@/page/explain')), 'explain');
const donList = r => require.ensure([], () => r(require('@/page/donList')), 'donList');
const donList2 = r => require.ensure([], () => r(require('@/page/donList2')), 'donList2');
const donList3 = r => require.ensure([], () => r(require('@/page/donList3')), 'donList3');
const AlipayandWechat = r => require.ensure([], () => r(require('@/page/AlipayandWechat')), 'AlipayandWechat');
const cryptocurrency = r => require.ensure([], () => r(require('@/page/cryptocurrency')), 'cryptocurrency');
const Donstatics = r => require.ensure([], () => r(require('@/page/Donstatics')), 'Donstatics');
const Donstatics2 = r => require.ensure([], () => r(require('@/page/Donstatics2')), 'Donstatics2');
const Donstatics3 = r => require.ensure([], () => r(require('@/page/Donstatics3')), 'Donstatics3');
const transactioninfo = r => require.ensure([], () => r(require('@/page/transactioninfo')), 'transactioninfo');
const blockchaininfo = r => require.ensure([], () => r(require('@/page/blockchaininfo')), 'blockchaininfo');
const PersoninfoSet = r => require.ensure([], () => r(require('@/page/PersoninfoSet')), 'PersoninfoSet');
const recent = r => require.ensure([], () => r(require('@/page/recent')), 'recent');
const ChoiceCompany = r => require.ensure([], () => r(require('@/page/ChoiceCompany')), 'ChoiceCompany');
const ShowBalance = r => require.ensure([], () => r(require('@/page/ShowBalance')), 'ShowBalance');
const exchange = r => require.ensure([], () => r(require('@/page/exchange')), 'exchange');
const SearchCompany = r => require.ensure([], () => r(require('@/page/SearchCompany')), 'SearchCompany');
const Myhome = r => require.ensure([], () => r(require('@/components/home/home')), 'Myhome');
const MyBlockList = r => require.ensure([], () => r(require('@/components/home/blockList')), 'blockList');
const MyBlockDetails = r => require.ensure([], () => r(require('@/components/home/blockDetails')), 'blockDetails');
const routes = [
	{
		path: '/',
		component: login
	},
	{
		path: '/manage',
		component: manage,
		name: '',
		children: [{
			path: '',
			component: home,
			meta: [],
		},{
			path: '/addShop',
			component: addShop,
			meta: ['添加数据', '添加商铺'],
		},{
			path: '/addGoods',
			component: addGoods,
			meta: ['添加数据', '添加商品'],
		},{
			path: '/userList',
			component: userList,
			meta: ['数据管理', '用户列表'],
		},{
			path: '/shopList',
			component: shopList,
			meta: ['数据管理', '商家列表'],
		},{
			path: '/foodList',
			component: foodList,
			meta: ['数据管理', '食品列表'],
		},{
			path: '/orderList',
			component: orderList,
			meta: ['数据管理', '订单列表'],
		},{
			path: '/adminList',
			component: adminList,
			meta: ['数据管理', '管理员列表'],
		},{
			path: '/visitor',
			component: visitor,
			meta: ['图表', '用户分布'],
		},{
			path: '/newMember',
			component: newMember,
			meta: ['图表', '用户数据'],
		},{
			path: '/uploadImg',
			component: uploadImg,
			meta: ['文本编辑', 'MarkDown'],
		},{
			path: '/vueEdit',
			component: vueEdit,
			meta: ['编辑', '文本编辑'],
		},{
			path: '/adminSet',
			component: adminSet,
			meta: ['设置', '管理员设置'],
		},{
			path: '/sendMessage',
			component: sendMessage,
			meta: ['设置', '发送通知'],
		},{
			path: '/explain',
			component: explain,
			meta: ['说明', '说明'],
		}]
	},
	{
		path: '/manage-1',
		component: manageDonor,
		name: '',
		children: [{
			path: '',
			component: home,
			meta: [],
		},{
			path: '/addShop',
			component: addShop,
			meta: ['添加数据', '添加商铺'],
		},{
			path: '/addGoods',
			component: addGoods,
			meta: ['添加数据', '添加商品'],
		},{
			path: '/donList',
			component: donList,
			meta: ['捐赠项目', '项目捐助'],
		},
		{
			path: '/donList2',
			component: donList,
			meta: ['捐赠项目', '项目捐助'],
		},{
			path: '/donList3',
			component: donList,
			meta: ['捐赠项目', '众筹捐助'],
		},{
			path: '/AlipayandWechat',
			component: AlipayandWechat,
			meta: ['余额充值', '支付宝、微信充值'],
		},{
			path: '/cryptocurrency',
			component: cryptocurrency,
			meta: ['余额充值', '虚拟币充值'],
		},{
			path: '/orderList',
			component: orderList,
			meta: ['数据管理', '订单列表'],
		},{
			path: '/adminList',
			component: adminList,
			meta: ['数据管理', '管理员列表'],
		},{
			path: '/Donstatics',
			component: Donstatics,
			meta: ['捐赠统计', '捐助分布'],
		},{
			path: '/Donstatics2',
			component: Donstatics2,
			meta: ['捐赠统计', '善款去向'],
		},{
			path: '/Donstatics3',
			component: Donstatics3,
			meta: ['捐赠统计', '爱心资产'],
		},{
			path: '/newMember',
			component: newMember,
			meta: ['图表', '用户数据'],
		},{
			path: '/uploadImg',
			component: uploadImg,
			meta: ['文本编辑', 'MarkDown'],
		},{
			path: '/transactioninfo',
			component: transactioninfo,
			meta: ['区块链浏览器', '交易信息查询'],
		},
		{path: 'explorer',
      name: '',
      component: Myhome,
      children:[
       {
          path: '',
          redirect:"blockList",
        },
        {
          path: 'blockList',
          name: 'blockList',
          component: MyBlockList
        },
        {
          path: 'blockDetails',
          name: 'blockDetails',
          component: MyBlockDetails
        },
      ]
    },{
			path: '/PersoninfoSet',
			component: PersoninfoSet,
			meta: ['设置', '个人信息设置'],
		},{
			path: '/sendMessage',
			component: sendMessage,
			meta: ['设置', '发送通知'],
		},{
			path: '/explain1',
			component: explain,
			meta: ['说明', '说明'],
		}]
	},
		{
		path: '/manage-2',
		component: manageDonee,
		name: '',
		children: [{
			path: '',
			component: home,
			meta: [],
		},{
			path: '/ChoiceCompany',
			component: ChoiceCompany,
			meta: ['使用善款', '机构选择'],
		},{
			path: '/ShowBalance',
			component: ShowBalance,
			meta: ['使用善款', '查看余额'],
		},{
			path: '/SearchCompany',
			component: SearchCompany,
			meta: ['使用善款', '查询机构ID'],
		},

		{
			path: '/recent',
			component: recent,
			meta: ['捐赠详情', '近期捐赠'],
		},{
			path: '/transactioninfo2',
			component: transactioninfo,
			meta: ['区块链浏览器', '交易信息查询'],
		},
		{path: 'explorer',
      name: '',
      component: Myhome,
      children:[
       {
          path: '',
          redirect:"blockList",
        },
        {
          path: 'blockList',
          name: 'blockList',
          component: MyBlockList
        },
        {
          path: 'blockDetails',
          name: 'blockDetails',
          component: MyBlockDetails
        },
      ]
    },{
			path: '/PersoninfoSet2',
			component: PersoninfoSet,
			meta: ['设置', '个人信息设置'],
		},{
			path: '/explain2',
			component: explain,
			meta: ['说明', '说明'],
		}]
	},
	{
		path: '/manage-3',
		component: manageMechan,
		name: '',
		children: [{
			path: '',
			component: home,
			meta: [],
		},{
			path: '/exchange',
			component: exchange,
			meta: ['兑换余额', '兑换'],
		},{
			path: '/transactioninfo3',
			component: transactioninfo,
			meta: ['区块链浏览器', '交易信息查询'],
		},
		{
      path: 'explorer',
      name: '',
      component: Myhome,
      children:[
       {
          path: '',
          redirect:"blockList",
        },
        {
          path: 'blockList',
          name: 'blockList',
          component: MyBlockList
        },
        {
          path: 'blockDetails',
          name: 'blockDetails',
          component: MyBlockDetails
        },
      ]
    },{
			path: '/PersoninfoSet3',
			component: PersoninfoSet,
			meta: ['设置', '机构信息设置'],
		},{
			path: '/explain3',
			component: explain,
			meta: ['说明', '说明'],
		}]
	}

]

export default new Router({
	routes,
	strict: process.env.NODE_ENV !== 'production',
})
