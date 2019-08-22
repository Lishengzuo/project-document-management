import arrow from './arrow.jpg';
import structure from './structure.jpg';
import friends from './friends.jpg';

const initailCompanyProfile = {
	developMessages: [
		{year: 2019, text: "因发展需要，业务扩展\n广州公司总部搬迁至东风中路515号"},
		{year: 2019, text: "因发展需要，业务扩展\n广州公司总部搬迁至东风中路515号"},
		{year: 2019, text: "因发展需要，业务扩展\n广州公司总部搬迁至东风中路515号"},
		{year: 2019, text: "因发展需要，业务扩展\n广州公司总部搬迁至东风中路515号"},
		{year: 2019, text: "因发展需要，业务扩展\n广州公司总部搬迁至东风中路515号"},
		{year: 2019, text: "因发展需要，业务扩展\n广州公司总部搬迁至东风中路515号"},
		{year: 2019, text: "因发展需要，业务扩展\n广州公司总部搬迁至东风中路515号"},
		{year: 2019, text: "因发展需要，业务扩展\n广州公司总部搬迁至东风中路515号"}
	],
	personMessages: [
		{position: "经理", name: "李文志", detailPosition: "开发部经理、二次开发工程师", workYears: "3年工龄", workContent: "主要负责新积水工厂项目、高速项目"},
		{position: "经理", name: "李文志", detailPosition: "开发部经理、二次开发工程师", workYears: "3年工龄", workContent: "主要负责新积水工厂项目、高速项目"},
		{position: "经理", name: "李文志", detailPosition: "开发部经理、二次开发工程师", workYears: "3年工龄", workContent: "主要负责新积水工厂项目、高速项目"},
		{position: "经理", name: "李文志", detailPosition: "开发部经理、二次开发工程师", workYears: "3年工龄", workContent: "主要负责新积水工厂项目、高速项目"},
		{position: "经理", name: "李文志", detailPosition: "开发部经理、二次开发工程师", workYears: "3年工龄", workContent: "主要负责新积水工厂项目、高速项目"}
	]
}

export function companyProfileData(state = initailCompanyProfile, action) {
	switch(action.type) {
		default:
			return state;
	}
}