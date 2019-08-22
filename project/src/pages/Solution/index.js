import React, { Component } from "react";
import { connect } from 'react-redux';

import Container from '../../components/container';
import Solution from './Solution';

class SolutionContainer extends Component{
    render(){
        return(
            <Container>
                <Solution { ...this.props } />
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return ({
        solutionData: state.solutionData
    });
}

export default connect( mapStateToProps )(SolutionContainer);
