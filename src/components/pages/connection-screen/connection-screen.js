import React, { Component } from 'react';
import { ReactComponent as Logo } from '../../../images/logo.svg';
import SubmitFormBase from './submit-form/submit-form';
import { withRouter } from 'react-router-dom';
import { WithFirebase } from '../../Firebase';
import { compose } from 'recompose';
import { alreadySigned } from '../../session';

import './connection-screen.scss';

class ConnectScreen extends Component {
    render() {
        return ( 
            <div className='connect-screen' >
                <div className='title' >
                    <h1 className='name'>Numbr </h1> 
                    <Logo className='logo'/>
                </div>
                <SubmitForm />
            </div>
        );
    }
}

const SubmitForm = compose(
    withRouter,
    WithFirebase,
)(SubmitFormBase);;

const condition = authUser => !!authUser;

export default alreadySigned(condition)(ConnectScreen);

//export default ConnectScreen;