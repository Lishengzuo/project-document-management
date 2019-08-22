import pdf from "./pdf.jpg";

const whitePaper = [
	{solutionImg: pdf, whitePaperTitle: "向建筑产业现代化迈进 广联达《数字建筑白皮书》11111", id: 1, content: "1111111111111111111111111111111111111111"},
	{solutionImg: pdf, whitePaperTitle: "向建筑产业现代化迈进 广联达《数字建筑白皮书》22222", id: 2, content: "2222222222222222222222222222222222222222"}
];

export function whitePaperCont(state = whitePaper, action) {
	switch(action.type) {
		default:
			return state;
	}
}