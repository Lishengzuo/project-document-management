
const initialHomeState = {
	introduce:"广州君和信息技术有限公司，一直以服务于基础设施行业为主要方向，以软件销售、工程 项目服务、软件和培训为主营业务，覆盖民用建筑、土木交通、工业建筑、水处理、勘察测绘、环保、石化、冶金 、电力等行业，提供从设计、施工到运维的软件和技术服务。 团队专业技术人员占比85%。技术能力与服务得到大公司的认可，近年事业绩蓬勃与中建、 中交、中水、中铁、中冶等中字头企业均有长期合伙。",
	menus: [
        {
            title:'开发服务',
            icon:'mail',
            lineTo:'/h',
        },{
            title:'产品销售',
            icon:'calendar',
            lineTo:'/h',

        },{
            title:'工程培训',
            icon:'mail',
            lineTo:'/h',

        },{
            title:'工程咨询',
            icon:'calendar',
            lineTo:'/h',

        },{
            title:'公司简介',
            icon:'mail',
            lineTo:'/pages/gongsijianjie',

        },{
            title:'典型案例',
            icon:'mail',
            lineTo:'/pages/dianxinganli',

        },{
            title:'综合解决',
            icon:'mail',
            lineTo:'/pages/zonghejiejue',

        },{
            title:'白皮书',
            icon:'calendar',
            lineTo:'/pages/baipishu',
        }
    ]
}

export function content(state = initialHomeState, action) {
	switch(action.type) {
		default:
			return state;
	}
}


