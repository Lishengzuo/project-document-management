import React, { Component } from "react";
import { connect } from 'react-redux';

import Container from '../../components/container';
import Example from './Example';


class ExampleContainer extends Component{

    render(){
        return(
            <Container>
                <Example { ...this.props } />
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return ({
        exampleData: state.exampleData
    });
}

export default connect( mapStateToProps )(ExampleContainer);
