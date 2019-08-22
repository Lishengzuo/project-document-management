import { combineReducers } from 'redux';

import * as Home from './pages/Home/reducers';
import * as WhitePaper from './pages/WhitePaper/reducers';
import * as Solution from './pages/Solution/reducers';
import * as Example from './pages/Example/reducers';
import * as CompanyProfile from './pages/CompanyProfile/reducers';





// 通过一系列异步加载来创建总reducers
export default combineReducers({
	...Home,
	...WhitePaper,
	...Solution,
	...Example,
	...CompanyProfile
});



