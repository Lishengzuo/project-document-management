import React, { Component } from 'react';
import { Row, Col, Button } from 'antd';
import { Route } from 'react-router';

import solution from "./images/solution.jpg";
import SolutionDetail from './SolutionDetail/SolutionDetail.js';
import './style.css';

class SolutionCard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			visible: false
		}
	}

	bridgeChild(visible) {
		this.props.bridge(visible);
		const { id } = this.props.solution;
		const pathValue = {
			pathname: `${this.props.match.path}/${id}`,
			query: {
				bridge: this.props.bridge,
				solutionDetail: this.props.solution
			}
		}
		this.props.history.push(pathValue);
	}

	render() {
		console.log(this.props.solution);
		const { solutionImg, solutionTitle, solutionTime, solutionContent } = this.props.solution;
		return (
			<div className="solution-card-ct" onClick={ this.bridgeChild.bind(this, this.state.visible) }>
				<div className="img-ct" id="solution-image">
					<img src={ solutionImg } alt="" style={{width: "100%"}}/>
				</div>
				<div className="solution-text-ct">
					<div className="solution-title">
						{solutionTitle}
					</div>
					<div className="solution-time">
						{ solutionTime }
					</div>
					<div className="solution-content">
						{solutionContent}
					</div>
				</div>
			</div>
		);
	}
}


class Solution extends Component {
	constructor(props) {
		super(props);
		this.state = {
			visible: true
		}
	}

	bridge(visible) {
		this.setState({
			visible: visible
		});
	}

	render() {
		console.log(this.props.solutionData);
		return (
			<Route 
				render = { ((solutionData) => { return this.state.visible ? 
					<div>
						<Row className="companyProfile-header">
							<Col span={4} className="companyProfile-header-h1">综合解决方案</Col>
							<Col span={20} className="companyProfile-header-tab">
								<Button>编辑案例</Button>
							</Col>
						</Row>
						<div className="companyProfile-content-ct">
							<div className="example-ct">
								{
									this.props.solutionData.map((solution, index) => (
										<SolutionCard
											key={index}
											solution = { solution }
											{...this.props}
											bridge = { this.bridge.bind(this) }
										/>
									))
								}
							</div>
						</div>
					</div> :
					<Route path={ `${ this.props.match.path }/:id` } component={ SolutionDetail } />
				}).bind(this) }
			/>
		);

	}
}

export default Solution;
