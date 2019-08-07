import React, { Component } from 'react';
import { ReactComponent as User } from '../../../../images/user.svg';
import { ReactComponent as Password } from '../../../../images/password.svg';
import { ReactComponent as Connect } from '../../../../images/connect.svg';
import CircularProgress from '@material-ui/core/CircularProgress';
import * as ROUTES from '../../../../constants/routes';

import './submit-form.scss';

const INITIAL_STATE = {
    username: '', 
    password: '',
    loading: false, 
    error: false   
}

export default class SubmitFormBase extends Component {
    
    state = {...INITIAL_STATE};

    handleChangeUsername = (event) => {
        this.setState({ username: event.target.value })
    }

    handleChangePassword = (event) => {
        this.setState({ password: event.target.value})
    }

    clickConnect = event => {
        this.setState({loading: true})

        this.props.firebase
            .doSignInWithEmailAndPassword(this.state.username, this.state.password)
            .then(() => {
                this.setState({ ...INITIAL_STATE, loading: false })
                this.props.history.push(ROUTES.HOME)
            })
            .catch(() => {
                this.setState({ error: true, loading: false })
            });

            event.preventDefault();
    }

    buttonCompo = () => {
        if (!this.state.loading) {
            return (
            <div>
                <Connect className='connect-icon' />
                <span className='title-button'>Se connecter</span> 
            </div>
            )
        }
        return (
        <CircularProgress 
            color='white' 
            size={30} 
            thickness={5}
            className='spinner' 
        />)
    }

    render() {

        const state = this.state;

        return ( 
            <form className='submit-form' onSubmit={this.clickConnect}>
                <div className='user-name'>
                    <User className='user-icon'/>
                    <input 
                        type='text' 
                        value={this.state.username} 
                        placeholder='E-mail' 
                        onChange={this.handleChangeUsername}
                    />
                </div>
                { this.state.error ? 
                    <span className='error-message'>Email ou mot de passe incorrect: si le problème persiste contacte ton superieur</span> 
                    : null      
                }
                <div className='password'>
                    <Password className='password-icon'/>
                    <input 
                        type='password' 
                        value={state.password} 
                        placeholder='Mot de passe' 
                        onChange={this.handleChangePassword} 
                    />
                </div>
                <button className='button-connect' /*onClick={this.clickConnect}*/>
                    {this.buttonCompo()}
                </button>
            </form>
        );
    }
}