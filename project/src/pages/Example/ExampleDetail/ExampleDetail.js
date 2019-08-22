import React, { Component } from 'react';
import { Row, Col, Button, Tabs } from 'antd';

const { TabPane } = Tabs;

class ExampleDetail extends Component {

	bridgeChild (visible) {
		const { bridge } = this.props.location.query;
		bridge(visible);
	}

	componentWillUnmount() {
		this.props.location.query.bridge(true);
	}

	render() {
		const { exampleSrc, exampleTitle, description } = this.props.location.query.exampleDetail;
		return (
			<div>
				<Row className="companyProfile-header">
					<Col span={4} className="companyProfile-header-h1">{ exampleTitle }</Col>
					<Col span={20} className="companyProfile-header-tab">
						<Button onClick={this.bridgeChild.bind(this, true)}>返回案例总览</Button>
					</Col>
				</Row>
				<div className="companyProfile-content-ct">
					<Row>
						<Col span={6}>
							<div className="img-ct">
								<img src={ exampleSrc } alt="" id="example-detail" style={{width: "100%"}}/>
							</div>
						</Col>
						<Col span={18}>
							<div className="detail-ct">
								<Tabs defaultActiveKey="1" className="tabs">
									<TabPane tab="案例成果" key="1">
										{ description }
									</TabPane>
									<TabPane tab="解决方案" key="2">
										{ description }
									</TabPane>
								</Tabs>
							</div>
						</Col>
					</Row>
				</div>
			</div>
		);
	}
}

export default ExampleDetail;