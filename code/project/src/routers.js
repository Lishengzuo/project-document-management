import Home from './pages/Home';
import Login from './pages/LoginPage';
import Register from './pages/RegisterPage';
import WhitePaperBook from './pages/WhitePaper';
import Container from './components/container';
import Solution from './pages/Solution';
import Example from './pages/Example';
import CompanyProfile from './pages/CompanyProfile';
import Documents from './pages/Documents/index.js';

const routeConfig =[
	{ 
		path:'/',
		component: Home,
		childRoutes:[],
		exact: true
　　  },
	{ 
		path:'/user/login',
		component: Login,
		childRoutes:[]
　　  },
	{ 
		path:'/user/register',
		component: Register,
		childRoutes:[]
　　  }, 
	{
		path: '/pages/baipishu',
		component: WhitePaperBook,
		childRoutes:[]
	},
	{
		path: '/pages/zonghejiejue',
		component: Solution,
		childRoutes:[]
	},
	{
		path: "/pages/dianxinganli",
		component: Example,
		childRoutes:[]
	},
	{
		path: "/pages/gongsijianjie",
		component: CompanyProfile,
		childRoutes:[],
		exact: true
	},
	{
		path: '/h',
		component: Documents,
		childRoutes: [],
	}
];

export default routeConfig;
