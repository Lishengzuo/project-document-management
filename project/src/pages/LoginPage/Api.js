import axios from 'axios';

var bosapp=window.bosapp||{};
const baseUrl=bosapp.baseUrl;
const appKey = bosapp.appKey;

export function login(data) {
	var formData = new FormData();
    formData.append("name",data.name);
    formData.append("password",data.password);
	return axios({
		url: `${baseUrl}/bospersonnelservice/${appKey}/users/login`,
		method: "post",
		headers: {'Accept':'*/*', 'Content-Type':'multipart/form-data'},
		data: formData,
		timeout: 0
	});
}