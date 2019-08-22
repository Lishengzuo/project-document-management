import React, { Component } from "react";
import { connect } from 'react-redux';

import Container from '../../components/container';
import CompanyProfile from './CompanyProfile';

class CompanyProfileContainer extends Component{

    render(){
        return(
            <Container>
                <CompanyProfile { ...this.props } />
            </Container>
        );
    }
}

const mapStateToProps = (state) => {
    return ({
        companyProfileData: state.companyProfileData
    });
}

export default connect( mapStateToProps )(CompanyProfileContainer);