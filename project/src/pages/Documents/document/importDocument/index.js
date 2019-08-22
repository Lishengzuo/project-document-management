import React, { Component } from 'react';
import { Layout, Spin, Tabs, Row, Col, LocaleProvider, Button, Icon,
	Modal
} from 'antd';

class ImportDocument extends Component {
	constructor(props) {
		super(props);
		this.state = {
			visible: false
		}
	}

	handleCancle = () => {
		this.setState({
			visible: !this.state.visible
		});
	}

	componentDidMount() {
		this.props.bridge({ childCancle: this.handleCancle });
	}

	render() {
		return (
				<Modal 
					width="60%" 
					title="导入文件"
					visible={ this.state.visible } 
					footer={[
						<Button key="Button1" onClick={ this.handleCancle } >返回</Button>,
						<Button key="Button2">提交</Button>
					]}
				>
					<p key="1">1 pppp</p>
					<p key="2">2 pppp</p>
					<p key="3">3 pppp</p>
					<p key="4">4 pppp</p>
					<p key="5">5 pppp</p>
				</Modal>
		);
	}
}


export default ImportDocument;