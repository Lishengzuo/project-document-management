import React, { Component } from 'react';// React虽然未使用到，但是不可删除，否则会报错，Component作为所有组件的基类,提供了很多组件共有的功能,下面会创建一个组件类,这个组件类的的父类就是Component
import pdf from "./pdf.jpg";
import {Row, Col, Button} from 'antd';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import WhitePaperDetail from './WhitePaperDetail/WhitePaperDetail.js';

import './style.css';

class WhitePaperCard extends Component {
	constructor(props ) {
		super(props);
		this.state = {
			visibel: false
		}
	}
	
	bridgeChild(visibel) {
		this.props.bridge(visibel);
		const { id, match } = this.props;
		const pathValue = {
			pathname: `${match.path}/${id}`,
			query: {
				bridge: this.props.bridge,
				dataDetail: {
					whitePaperTitle: this.props.whitePaperTitle,
					whitePaperContent: this.props.content
				}
			}
		};
		this.props.history.push(pathValue);
	}

	render() {
		const { solutionImg, whitePaperTitle } = this.props;
		return (
			<div className="whitePaper-card-ct" onClick={this.bridgeChild.bind(this, this.state.visibel)}>
				<div className="img-ct" id="white-paper">
					<img src={ solutionImg } alt="" style={ {width: "100%"} } />
				</div>
				<div className="whitePaper-text-ct">
					{ whitePaperTitle }
				</div>
			</div>
		);
	}
}


class WhitePaper extends Component {
	constructor(props) {
		super(props);
		this.state = {
			visibel: true
		}
	}

	bridge(visibel) {
		this.setState({
			visibel: visibel
		});
	}

	componentDidMount() {
		console.log(this.props.location.query);
	}

	render () {
		const { path } = this.props.match;
		return (
			<div>
				{
					this.state.visibel ? <div>
						<Row className="companyProfile-header">
							<Col span={4} className="companyProfile-header-h1">白皮书</Col>
							<Col span={20} className="companyProfile-header-tab">
								<Button>编辑案例</Button>
							</Col>
						</Row>
						<div className="companyProfile-content-ct">
							<div className="example-ct">
								{
									this.props.whitePaperCont.map((whitePaper, index) => (
										<WhitePaperCard
											key={ index }
											{...whitePaper}
											{...this.props}
											bridge = { this.bridge.bind(this) }
										/>
									))
								}
							</div>
						</div>
					</div> :
					<Route path={`/pages/baipishu/:id`} component={ WhitePaperDetail }></Route>
				}
			</div>
		);

	}
}

const mapStateToProps = (state) => {
	return ({
		whitePaperCont: state.whitePaperCont
	});
}

export default connect( mapStateToProps )(WhitePaper);
