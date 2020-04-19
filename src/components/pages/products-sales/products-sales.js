import React, { Component, lazy, Suspense } from 'react';
import products from '../../../config/products';
import InfiniteScroll from 'react-infinite-scroll-component';

import Filter from './filter/filter.js'
import * as ROUTES from '../../../constants/routes';
import { Link } from 'react-router-dom';
import { ReactComponent as ArrowBack } from '../../../images/arrow-back.svg';
import CircularProgress from '@material-ui/core/CircularProgress';

import { withAuthorization } from '../../session';
import { withRouter } from 'react-router-dom';
import { WithFirebase } from '../../Firebase';
import { compose } from 'recompose';

import './products-sales.scss'

class ProductsSalesCompo extends Component {

    state = { 
        nb_lign: Array.from({ length: 200 }), 
        products: products,

        date_sort: false,
        segment_sort: false,
        title_sort: false,
        id_sort: false,
        product_sort: false,
        reference_sort: false,
        fournisseur_sort: false,
        amount_sort: false,
        income_sort: false,
        cost_sort: false,
        margin_sort: false,
        price_sort: false
    }

    wordSort = (word, state) => {
        this.setState({ products: this.state.products.sort(
            (a, b) => {
                if (this.state[state]) {
                    return (!a[word] ? 1 : (!b[word] ? -1 : a[word].toString().localeCompare(b[word])));
                } 
                else {
                    return (!a[word] ? 1 : (!b[word] ? -1 : b[word].toString().localeCompare(a[word])));
                }
            }), [state]: !this.state[state]});
    }

    dateSort = () => {
        this.setState({ products: this.state.products.sort(
            (a, b) => {
                if (this.state.date_sort) {
                    if (a.Annee === b.Annee) {
                        return (a.Mois - b.Mois);
                    }
                    else if (!a.Annee || !b.Annee) {
                        return (1)
                    }
                    else {
                        return (a.Annee - b.Annee);
                    }
                }
                else {
                    if (a.Annee === b.Annee) {
                        return (b.Mois - a.Mois);
                    }
                    else if (!a.Annee || !b.Annee) {
                        return (1)
                    }
                    else {
                        return (b.Annee - a.Annee);
                    } 
                }
            }), date_sort: !this.state.date_sort})
    }

    dateFilter = (from_year) => {
        console.log(from_year);
        this.setState({ products: this.state.products.filter((product) => {
            if (from_year.length === 4) {
                return (from_year <= product.Annee)
            }
            else {
                return product.Annee
            }
        })})
    }

    loadLigns = () => {
        setTimeout(() => {
            this.setState({
              nb_lign: this.state.nb_lign.concat(Array.from({ length: 20 }))
            });
        }, 1000);
    }

    render() {
        const Lign = lazy(() => import('./intersection-observer/lign/lign.js'));

        return(
            <div className="products-sales">
                <div className="title-back">
                    <Link to={{pathname: ROUTES.HOME}}>
                        <ArrowBack className='icon-back'/>
                    </Link>
                    <span className='title'>Produits et Ventes</span>
                </div>
                <div className='cases'>
                    <div className='case-product'>
                        <div className='title-information-products'>
                            <button onClick={() => this.dateSort()} className='date'>
                                Date
                                <span className={this.state.date_sort ? "arrow active" : "arrow"}>
                                    <span></span>                        
                                    <span></span>
                                </span>
                            </button>
                            <button onClick={() => this.wordSort('sous_segment', 'segment_sort')} className='sous-segment'>
                                Sous-segment
                                <span className={this.state.segment_sort ? "arrow active" : "arrow"}>
                                    <span></span>                        
                                    <span></span>
                                </span>
                            </button>
                            <button onClick={() => this.wordSort('sale_title', 'title_sort')} className='sale-title'>
                                Titre de la vente
                                <span className={this.state.title_sort ? "arrow active" : "arrow"}>
                                    <span></span>                        
                                    <span></span>
                                </span>
                            </button>
                            <button onClick={() => this.wordSort('sale_title', 'id_sort')} className='id-product'>
                                ID <br/> Produit
                                <span className={this.state.id_sort ? "arrow active" : "arrow"}>
                                    <span></span>                        
                                    <span></span>
                                </span>
                            </button>
                            <button onClick={() => this.wordSort('sale_title', 'title_sort')} className='name-product'>
                                Nom produit
                                <span className={this.state.title_sort ? "arrow active" : "arrow"}>
                                    <span></span>                        
                                    <span></span>
                                </span>
                            </button>
                            <button onClick={() => this.wordSort('sale_title', 'reference_sort')} className='reference'>
                                Réf.
                                <span className={this.state.reference_sort ? "arrow active" : "arrow"}>
                                    <span></span>                        
                                    <span></span>
                                </span>
                            </button>
                            <button onClick={() => this.wordSort('sale_title', 'fournisseur_sort')} className='fournisseur'>
                                Fournisseur
                                <span className={this.state.fournisseur_sort ? "arrow active" : "arrow"}>
                                    <span></span>                        
                                    <span></span>
                                </span>
                            </button>
                            <button onClick={() => this.wordSort('sale_title', 'amount_sort')} className='amount-products'>Nb<br/> 
                                Produits 
                                <span className={this.state.amount_sort ? "arrow active" : "arrow"}>
                                    <span></span>                        
                                    <span></span>
                                </span>
                            </button>
                            <button onClick={() => this.wordSort('sale_title', 'income_sort')}  className='income-ht'>
                                Revenue<br/> HT 
                                <span className={this.state.income_sort ? "arrow active" : "arrow"}>
                                    <span></span>                        
                                    <span></span>
                                </span>
                            </button>
                            <button onClick={() => this.wordSort('sale_title', 'cost_sort')}  className='cost-ht'>
                                Coût<br/> HT 
                                <span className={this.state.cost_sort ? "arrow active" : "arrow"}>
                                    <span></span>                        
                                    <span></span>
                                </span>
                            </button>
                            <button onClick={() => this.wordSort('sale_title', 'margin_sort')}  className='margin'>
                                Marge<br/> en € 
                                <span className={this.state.margin_sort ? "arrow active" : "arrow"}>
                                    <span></span>                        
                                    <span></span>
                                </span>
                            </button>
                            <button onClick={() => this.wordSort('sale_title', 'price_sort')} className='price-buy'>
                                Prix<br/> u. 
                                <span className={this.state.price_sort ? "arrow active" : "arrow"}>
                                    <span></span>                        
                                    <span></span>
                                </span>
                            </button>
                        </div>
                        <Suspense fallback={
                            <div>
                                <CircularProgress 
                                    color='#4A90E2' 
                                    size={30} 
                                    thickness={6}
                                />
                            </div>}
                        >
                            <InfiniteScroll 
                                className='ligns'
                                dataLength={this.state.nb_lign.length}
                                hasMore={true}
                                loader={<div className="loading-spinner"><CircularProgress color='#4A90E2' size={30} thickness={6}className='spinner' /></div>}
                                next={this.loadLigns}
                                height={780}
                                >
                                    {this.state.products.slice(0, this.state.nb_lign.length).map((product) => {
                                        return(
                                            <div>
                                                <Lign product={product} />
                                            </div>
                                        )
                                    })}
                            </InfiniteScroll>
                            <Filter products={this.state.products} dateFilter={this.dateFilter} />
                        </Suspense>
                    </div>
                </div>
            </div>
        )
    }
}

const ProductsSales = compose(
    withRouter,
    WithFirebase
) (ProductsSalesCompo)

const condition = authUser => !!authUser;

export default withAuthorization(condition)(ProductsSales);