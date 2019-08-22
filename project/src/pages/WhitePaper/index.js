import React, { Component } from 'react';

import Container from '../../components/container';
import WhitePaperCont from './WhitePaper';

class WhitePaper extends Component {
	render() {
		return (
			<Container>
				<WhitePaperCont { ...this.props } />
			</Container>
		);
	}
}

export default WhitePaper