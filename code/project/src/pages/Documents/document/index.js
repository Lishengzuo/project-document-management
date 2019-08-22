import React, { Component } from 'react';
import { Layout, Button, Row, Col, Modal } from 'antd';
import ImportDocument from './importDocument/index.js';

import './tree.css';

const { Sider, Content } = Layout;


class Document extends Component {
	constructor(props) {
		super(props);
		this.state = {
			handleCancel: {
				childCancle: ""
			}
		};
	}

	bridge(handleCancel) {
		this.setState({
			handleCancel: handleCancel
		})
	}

	render() {
		return (
			<div>
				<Layout>
					<Sider className="document-sider">
						<div className="document-sider-content">
							<p>文档目录</p>
							<div className="document-sider-tree">
								这是一棵文件树
							</div>
						</div>
					</Sider>
					<Content className="document-content">
						<div className="document-content-container">
							<div>
								<Button onClick={ this.state.handleCancel.childCancle } >导入文件</Button>
								<Button>新增文件夹</Button>
								<Button>删除</Button>
								<Button>下载</Button>
								<ImportDocument bridge={ this.bridge.bind(this) } ></ImportDocument>
							</div>
							<div>
								111111
							</div>
						</div>
					</Content>
				</Layout>
			</div>
		);
	}
}

export default Document;