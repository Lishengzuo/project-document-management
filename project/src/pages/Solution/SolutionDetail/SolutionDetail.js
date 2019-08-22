import React, { Component } from 'react';
import { Row, Col, Button } from 'antd';
import './style.css';

class SolutionDetail extends Component {
	bridgeChild(visible) {
		const { bridge } = this.props.location.query;
		bridge(visible);
	}

	componentWillUnmount() {
		this.props.location.query.bridge(true);
	} 

	render() {
		const  { id } = this.props.match.params;
		const { solutionTitle, solutionImg, description } = this.props.location.query.solutionDetail;

		return (
			<div>
				<Row className="companyProfile-header">
					<Col span={4} className="companyProfile-header-h1">{ solutionTitle }</Col>
					<Col span={20} className="companyProfile-header-tab">
						<Button onClick={this.bridgeChild.bind(this, true)}>返回案例总览</Button>
					</Col>
				</Row>
				<div className="companyProfile-content-ct">
					<Row gutter={16}>
						<Col span={6}>
							<div className="img-ct">
								<img src={ solutionImg } alt="" style={{width: "100%"}}/>
							</div>
						</Col>
						<Col span={18}>
							<div className="detail-ct">
								{ description }
							</div>
						</Col>
					</Row>
				</div>
			</div>
		);
	}
}

export default SolutionDetail;