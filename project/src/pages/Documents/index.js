import React, { Component } from 'react';
import { connect } from 'react-redux';
import  { Tabs, Button, Row, Col } from 'antd';
import Container from '../../components/container/index.js';
import Document from './document/index.js';
import ProjectManage from './projectManage/index.js';
import SpaceTree from './spaceTree/index.js';
import './index.css';

const { TabPane } = Tabs;

class Documents extends Component {
	render() {
		return (
			<Container>
				<div className="documents-container">
					<Tabs type="card" DefaultActiveKey="1">
						<TabPane key="1" tab={ <span>文档管理</span> } >
							<Document></Document>
						</TabPane>
						<TabPane key="2" tab={ <span>空间树管理</span> } >
							<SpaceTree></SpaceTree>
						</TabPane>
						<TabPane key="3" tab={ <span>工程进度</span> } >
							<ProjectManage></ProjectManage>
						</TabPane>
					</Tabs>
				</div>
			</Container>
		);
	}
}

export default Documents;