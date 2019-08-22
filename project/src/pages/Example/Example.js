import React, { Component } from 'react';// React虽然未使用到，但是不可删除，否则会报错，Component作为所有组件的基类,提供了很多组件共有的功能,下面会创建一个组件类,这个组件类的的父类就是Component
import example from "./example.jpg";
import { Row, Col, Button } from 'antd';
import { Route } from 'react-router';
import ExampleDetail from './ExampleDetail/ExampleDetail.js';
import './style.css';

/*const ExampleCard = (props)=>{
	const {exampleSrc, exampleTitle, exampleTime, id, ...reset} = props;
	console.log(reset);
	const gotoExampleDetail = ()=>{
		props.history.push(`/pages/dianxinganli/${id}`)
	};
	return (
		<div className="example-card-ct" onClick={gotoExampleDetail}>
			<div className="img-ct">
				<img src={exampleSrc} alt="" style={{width: "100%"}}/>
			</div>
			<div className="title-ct">
				{exampleTitle}
			</div>
			<div className="time-ct">
				{exampleTime}
			</div>
		</div>
	)
};*/

class ExampleCard extends Component {
	bridgeChild(visible) {
		this.props.bridge(visible);
		const { id } = this.props.example;
		const pathValue = {
			pathname: `${this.props.match.path}/${id}`,
			query: {
				bridge: this.props.bridge,
				exampleDetail: this.props.example
			}
		};
		this.props.history.push(pathValue);
	}

	render() {
		const { exampleSrc, exampleTitle, exampleTime } = this.props.example;
		return (
			<div className="example-card-ct" onClick={ this.bridgeChild.bind(this, false) }>
				<div className="img-ct">
					<img src={ exampleSrc } alt="" style={{width: "100%"}}/>
				</div>
				<div className="title-ct">
					{ exampleTitle }
				</div>
				<div className="time-ct">
					{ exampleTime }
			</div>
		</div>
		);
	}
}


class Example extends Component {
	constructor(props) {
		super(props);
		this.state = {
			visible: true
		}
	}

	bridge(visible) {
		this.setState({
			visible: visible
		})
	}

	render () {
		return (
			<Route
				render = { (() => 
					this.state.visible ? 
					<div>
						<Row className="companyProfile-header">
							<Col span={4} className="companyProfile-header-h1">典型案例</Col>
							<Col span={20} className="companyProfile-header-tab">
								<Button>编辑案例</Button>
							</Col>
						</Row>
						<div className="example-content-ct">
							<div className="example-ct">
								{ this.props.exampleData.map((example, index) => (
									<ExampleCard
										key={ index }
										example = { example} 
										bridge = { this.bridge.bind(this) }
										{ ...this.props }
									/>
								)) }
							</div>
						</div>
					</div> : 
					<Route path={ `${this.props.match.path}/:id` } component={ ExampleDetail } ></Route>
				).bind(this) }
			></Route>
		);

	}
}

export default Example;
