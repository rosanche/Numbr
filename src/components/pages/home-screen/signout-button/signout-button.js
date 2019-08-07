import React from 'react';

import { ReactComponent as Logout } from '../../../../images/logout.svg';
import { WithFirebase } from '../../../Firebase';

import './signout-button.scss';

const SignOutButton = ({ firebase }) => (
  <button type="button" className='logout' onClick={firebase.doSignOut}>
    <span className='name'>Déconnexion</span>
    <div className='orange-block'/>
    <Logout className='icon' />
  </button>
);

export default WithFirebase(SignOutButton);