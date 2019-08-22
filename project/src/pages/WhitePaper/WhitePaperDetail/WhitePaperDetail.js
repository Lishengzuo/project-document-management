import React, { Component } from 'react';
import {Row, Col, Button} from 'antd';

class WhitePaperDetail extends Component {
	bridgeChild(visible) {
		const { bridge } = this.props.location.query;
		bridge(visible);
	}

	componentWillUnmount() {
		this.props.location.query.bridge(true);
	}

	render() {
		const { dataDetail } = this.props.location.query;
		return (
			<div>
				<Row className="companyProfile-header">
					<Col span={20} className="companyProfile-header-h1">{ dataDetail.whitePaperTitle }</Col>
					<Col span={4} className="companyProfile-header-tab">
						<Button onClick={this.bridgeChild.bind(this, true)}>返回案例总览</Button>
					</Col>
				</Row>
				<div className="companyProfile-content-ct">
					{ dataDetail.whitePaperContent }
				</div>
			</div>
		);
	}
}

export default WhitePaperDetail;