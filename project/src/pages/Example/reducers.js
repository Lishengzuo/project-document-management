import example from "./example.jpg";

const initailExampleData = [
	{exampleSrc: example, exampleTitle: "各种图片不同颜色测试", exampleTime: "2019-6-22", id: 1, description: "广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司"},
	{exampleSrc: example, exampleTitle: "各种图片不同颜色测试", exampleTime: "2019-6-22", id: 2, description: "广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司"},
	{exampleSrc: example, exampleTitle: "各种图片不同颜色测试", exampleTime: "2019-6-22", id: 3, description: "广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司"},
	{exampleSrc: example, exampleTitle: "各种图片不同颜色测试", exampleTime: "2019-6-22", id: 4, description: "广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司广州君和信息技术有限公司"},
	{exampleSrc: example, exampleTitle: "各种图片不同颜色测试", exampleTime: "2019-6-22", id: 5, description: "5555555555555555555555555555555555"},
	{exampleSrc: example, exampleTitle: "各种图片不同颜色测试", exampleTime: "2019-6-22", id: 6, description: "666666666666666666666666666666666666"},
	{exampleSrc: example, exampleTitle: "各种图片不同颜色测试", exampleTime: "2019-6-22", id: 7, description: "777777777777777777777777777777777"},
	{exampleSrc: example, exampleTitle: "各种图片不同颜色测试", exampleTime: "2019-6-22", id: 8, description: "88888888888888888888888888888888888"},
	{exampleSrc: example, exampleTitle: "各种图片不同颜色测试", exampleTime: "2019-6-22", id: 9, description: "99999999999999999999999999999999999999"},
	{exampleSrc: example, exampleTitle: "各种图片不同颜色测试", exampleTime: "2019-6-22", id: 10, description: "100000000000000000000000000000000000000000000"},
	{exampleSrc: example, exampleTitle: "各种图片不同颜色测试", exampleTime: "2019-6-22", id: 11, description: "11111111111111111111111111111111111111111111111111111111111111"}
];

export function exampleData(state = initailExampleData, action) {
	switch(action.type) {
		default:
			return state;
	}
}