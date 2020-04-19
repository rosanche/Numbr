import React, { Component } from 'react';

import { ReactComponent as FilterIcon } from '../../../../images/filter.svg';

import './filter.scss'

export default class Filter extends Component {

    state = { 
        filter_clicked: false,
        from_month: '',
        from_year: '',
        to_month: '',
        to_year: '',
        products: this.props.products
    }

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        }, () => {
            if (this.state.from_year.length === 4) {
                this.props.dateFilter(this.state.from_year)
            }
        });
    }

    toggleFilter = () => {
        this.setState({ filter_clicked: !this.state.filter_clicked })
        console.log(this.state.filter_clicked);
    }

    focusNextField(nextField) {
        this.refs[nextField].focus();
    }

    render() {
        return(
            <div className={ this.state.filter_clicked ? "clicked filter" : "filter" }>
                <button onClick={() => this.toggleFilter()} className="title">
                    <FilterIcon />
                    <span className="title-name">Filtre</span>
                </button>
                <div className="options">
                    <div className="date">
                        <span className="blue-title">Date : </span>
                        &nbsp;du 
                        <div className="input-date">
                            <input ref="1" className="input-style-month" maxlength="2" name="from_month" value={this.state.from_month} placeholder="MM" onChange={this.handleInputChange} onSubmitEditing={() => this.focusNextField('2')} />
                            /
                            <input ref="2" className="input-style" maxlength="4" name="from_year" value={this.state.from_year} placeholder="AAAA" onChange={this.handleInputChange}/>
                        </div>
                        au
                        <div className="input-date">
                            <input className="input-style-month" maxlength="2" name="to_month" value={this.state.to_month} placeholder="MM" onChange={this.handleInputChange}/>
                            /
                            <input className="input-style" maxlength="4" name="to_year" value={this.state.to_year} placeholder="AAAA" onChange={this.handleInputChange}/>
                        </div>
                    </div>
                    <div className="segment">
                        <span className="blue-title">Sous-segment</span>
                        <span className="arrow">
                            <span></span>                        
                            <span></span>
                        </span>
                    </div>
                    <div className="fournisseur">
                        <span className="blue-title">Fournisseur</span>
                        <span className="arrow">
                            <span></span>                        
                            <span></span>
                        </span>
                    </div>
                    <div className="date">
                        <span className="blue-title">Nb produits :</span>
                        &nbsp;de 
                        <div className="input">
                            <input ref="1" className="input-style-month" maxlength="2" name="from_month" value={this.state.from_month} onChange={this.handleInputChange} onSubmitEditing={() => this.focusNextField('2')} />
                        </div>
                        à
                        <div className="input">
                        <input ref="1" className="input-style-month" maxlength="2" name="from_month" value={this.state.from_month} onChange={this.handleInputChange} onSubmitEditing={() => this.focusNextField('2')} />
                        </div>
                    </div>
                    <div className="date">
                        <span className="blue-title">Revenue HT :</span>
                        &nbsp;de 
                        <div className="input">
                            <input ref="1" className="input-style-month" maxlength="2" name="from_month" value={this.state.from_month} onChange={this.handleInputChange} onSubmitEditing={() => this.focusNextField('2')} />
                        </div>
                        à
                        <div className="input">
                            <input ref="1" className="input-style-month" maxlength="2" name="from_month" value={this.state.from_month} onChange={this.handleInputChange} onSubmitEditing={() => this.focusNextField('2')} />   
                        </div>
                    </div>
                    <div className="date">
                        <span className="blue-title">Coût HT :</span>
                        &nbsp;de 
                        <div className="input">
                            <input ref="1" className="input-style-month" maxlength="2" name="from_month" value={this.state.from_month} onChange={this.handleInputChange} onSubmitEditing={() => this.focusNextField('2')} />
                        </div>
                        à
                        <div className="input">
                            <input ref="1" className="input-style-month" maxlength="2" name="from_month" value={this.state.from_month} onChange={this.handleInputChange} onSubmitEditing={() => this.focusNextField('2')} />
                        </div>
                    </div>
                    <div className="date">
                        <span className="blue-title">Marge en € :</span>
                        &nbsp;de 
                        <div className="input">
                            <input ref="1" className="input-style-month" maxlength="2" name="from_month" value={this.state.from_month} onChange={this.handleInputChange} onSubmitEditing={() => this.focusNextField('2')} />
                        </div>
                        à
                        <div className="input">
                            <input ref="1" className="input-style-month" maxlength="2" name="from_month" value={this.state.from_month} onChange={this.handleInputChange} onSubmitEditing={() => this.focusNextField('2')} />
                        </div>
                    </div>
                    <div className="date">
                        <span className="blue-title">Prix achat u. :</span>
                        &nbsp;de 
                        <div className="input">
                            <input ref="1" className="input-style-month" maxlength="2" name="from_month" value={this.state.from_month} onChange={this.handleInputChange} onSubmitEditing={() => this.focusNextField('2')} />
                        </div>
                        à
                        <div className="input">
                            <input ref="1" className="input-style-month" maxlength="2" name="from_month" value={this.state.from_month} onChange={this.handleInputChange} onSubmitEditing={() => this.focusNextField('2')} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}