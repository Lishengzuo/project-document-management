import React, { Component } from 'react';// React虽然未使用到，但是不可删除，否则会报错，Component作为所有组件的基类,提供了很多组件共有的功能,下面会创建一个组件类,这个组件类的的父类就是Component
import { Row, Col } from 'antd';
import './style.css';
import arrow from './arrow.jpg';
import structure from './structure.jpg';
import friends from './friends.jpg';


const Chunk = (props)=>{
	const {year, text} = props;
	return (
		<div className={"companyProfile-content-chunk"}>
			<div className="year">{year}</div>
			<div className="text">{text}</div>
		</div>
	)
};

const PersonCard = (props)=>{
	const {position, avatar, name, detailPosition, workYears, workContent} = props;
	return (
		<div className="person-card-ct">
			<span className="card-position">{position}</span>
			<div className="avatar-ct">
			</div>
			<div className="name">
				{name}
			</div>
			<div className="detailPosition">
				{detailPosition}
			</div>
			<div className="workYears">
				{workYears}
			</div>
			<div className="workContent">
				{workContent}
			</div>
		</div>
	)
};

class CompanyProfile extends Component {
	constructor (){
		super();
		this.state = {
			tabs: "develop"
		}
	}

	visibleComponent = (text)=>{
		return this.state.tabs === text ? "block" : "none";
	};

	activeTab = (text)=>{
		return this.state.tabs === text ? "active" : "";
	}

  render() {
		return (
			<div>
				<Row className="companyProfile-header">
					<Col span={4} className="companyProfile-header-h1">公司介绍</Col>
					<Col span={20} className="companyProfile-header-tab">
						<div onClick={()=>{this.setState({tabs: "develop"})}} className={this.activeTab("develop")}>发展历程</div>
						<div onClick={()=>{this.setState({tabs: "structure"})}} className={this.activeTab("structure")}>组织架构</div>
						<div onClick={()=>{this.setState({tabs: "friends"})}} className={this.activeTab("friends")}>合作伙伴</div>
						<div onClick={()=>{this.setState({tabs: "worker"})}} className={this.activeTab("worker")}>团队介绍</div>
					</Col>
				</Row>
				<div className="companyProfile-content-ct">
					<div className="companyProfile-content-develop" style={{display: this.visibleComponent("develop")}}>
						<div className="image-ct">
							<img src={arrow} style={{width: "100%"}}/>
						</div>
						<h4 style={{ padding: "20px"}}>详细事件</h4>
						<div className="companyProfile-content-chunk-ct">
							{
								this.props.companyProfileData.developMessages.map((message, index)=>(
									<Chunk text={message.text} year={message.year} key={index}/>
								))
							}
						</div>
					</div>

					<div className="companyProfile-content-structure" style={{display: this.visibleComponent("structure")}}>
						<div className="image-ct">
							<img src={structure} style={{width: "100%"}}/>
						</div>
					</div>

					<div className="companyProfile-content-friends" style={{display: this.visibleComponent("friends")}}>
						<div className="image-ct">
							<img src={friends} style={{width: "100%"}}/>
						</div>
					</div>

					<div className="companyProfile-content-worker" style={{display: this.visibleComponent("worker")}}>
						<div className="description">
							我司致力于研发我司致力于研发我司致力于研发我司致力于研发我司致力于研发我司致力于研发我司致力于研发我司致力于研发我司致力于研发我司致力于研发我司致力于研发我司致力于研发我司致力于研发我司致力于研发我司致力于研发我司致力于研发我司致力于研发我司致力于研发我司致力于研发我司致力于研发我司致力于研发我司致力于研发我司致力于研发我司致力于研发我司致力于研发我司致力于研发我司致力于研发我司致力于研发我司致力于研发我司致力于研发我司致力于研发我司致力于研发我司致力于研发我司致力于研发我司致力于研发我司致力于研发我司致力于研发我司致力于研发我司致力于研发我司致力于研发我司致力于研发我司致力于研发我司致力于研发我司致力于研发我司致力于研发
						</div>
							<div className="personMessage-ct">
								{
									this.props.companyProfileData.personMessages.map((person, index)=>(
										<PersonCard key={index} position={person.position} name={person.name} detailPosition={person.detailPosition} workYears={person.workYears} workContent={person.workContent}/>
									))
								}
						</div>
					</div>
				</div>

			</div>
		);

  }
}

export default CompanyProfile;
