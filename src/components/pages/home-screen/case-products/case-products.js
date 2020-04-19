import React, { Component } from 'react';
import * as ROUTES from '../../../../constants/routes';
import { Link } from 'react-router-dom';

import './case-products.scss';
import products from '../../../../config/products';
import sales from '../../../../config/sales';
//import console = require('console');

export default class CaseProducts extends Component {
    state = { 
        position_selector: 0, 
        case_sales: '-100%', 
        case_products: '0%', 
        products_on: true, 
        font_color: true, 
    };

    /*componentDidMount = () => {
        requestAnimationFrame(()=> {
            console.log(this.props);
            if (!this.props.products_on) {
                console.log('product: off');
                console.log(this.state.position_selector)
                this.setState({ position_selector: -106, case_sales: 0, case_products: '-100%' }, 
                () => console.log(this.state.position_selector))
            } else {
                console.log('product: on');
                this.setState({ position_selector: 0, case_sales: '-100%', case_products: '0%' },
                () => console.log(this.state.position_selector))
            }
        })
    }*/

    /*static getDerivedStateFromProps(nextProps) {
        //requestAnimationFrame(()=> {
            if (!nextProps.products_on) {
            return ({
                position_selector: -106,
                case_sales: 0,
                case_products: '-100%'
            });
            } else {
            return ({
                position_selector: 0,
                case_sales: '-100%',
                case_products: '0%'
            });
            }
      //  })
    }*/

    updateDatas = () => {
        console.log(this.state.products_on);
        this.setState({products_on: !this.state.products_on, font_color: !this.state.font_color}, () => {
            if (!this.state.products_on) {
                console.log('bonjourrr');
                this.setState({
                    position_selector: -120,
                    case_sales: 0,
                    case_products: '-100%'
                });
                console.log(this.state.position_selector);
            } else {
                this.setState({
                    position_selector: 0,
                    case_sales: '-100%',
                    case_products: '0%'
                });
                console.log(this.state.position_selector);
            }
        })
    }

    render() {

        //console.log(this.props);

        return (
            <div className='case-products' >
                <span className='title'>Produits et Ventes</span>
                
                <Link to={{
                        pathname: ROUTES.PRODUCTS_SALES,
                        state: {product: this.props.product_on}
                    }} 
                    className='cases' style={{ textDecoration: 'none' }}
                >
                    <div className='case' style={{ left: this.state.case_products }}>
                        <div className='title-information-products'>
                            <div className='date'>Date</div>
                            <div className='sous-segment'>Sous-segment</div>
                            <div className='sale-title'>Titre de la vente</div>
                            <div className='id-product'>ID <br/> Produit</div>
                            <div className='name-product'>Nom produit</div>
                            <div className='reference'>Réf.</div>
                            <div className='fournisseur'>Fournisseur</div>
                            <div className='amount-products'>Nb<br/> Produits</div>
                            <div className='income-ht'>Revenue<br/> HT</div>
                            <div className='cost-ht'>Coût<br/> HT</div>
                            <div className='margin'>Marge<br/> en €</div>
                            <div className='price-buy'>Prix<br/> u.</div>
                        </div>
                        <div className='first-lign'>
                            <div className='date'>{products[0].Mois}/{products[0].Annee}</div>
                            <div className='sous-segment'>{products[0].sous_segment}</div>
                            <div className='sale-title'>{products[0].sale_title}</div>
                            <div className='id-product'>{products[0].id_product}</div>
                            <div className='name-product'>{products[0].product_name}</div>
                            <div className='reference'>{products[0].reference}</div>
                            <div className='fournisseur'>{products[0].fournisseur}</div>
                            <div className='amount-products'>{products[0].NbProduits}</div>
                            <div className='income-ht'>{products[0].RevenuHT}</div>
                            <div className='cost-ht'>{products[0].CoutsHT}</div>
                            <div className='margin'>{products[0]['Marge €']}</div>
                            <div className='price-buy'>{products[0]['Prix achat unitaire']}</div>
                        </div>
                        <div className='separation' />
                        <div className='first-lign'>
                            <div className='date'>{products[1].Mois}/{products[1].Annee}</div>
                            <div className='sous-segment'>{products[1].sous_segment}</div>
                            <div className='sale-title'>{products[1].sale_title}</div>
                            <div className='id-product'>{products[1].id_product}</div>
                            <div className='name-product'>{products[1].product_name}</div>
                            <div className='reference'>{products[1].reference}</div>
                            <div className='fournisseur'>{products[1].fournisseur}</div>
                            <div className='amount-products'>{products[1].NbProduits}</div>
                            <div className='income-ht'>{products[1].RevenuHT}</div>
                            <div className='cost-ht'>{products[1].CoutsHT}</div>
                            <div className='margin'>{products[1]['Marge €']}</div>
                            <div className='price-buy'>{products[1]['Prix achat unitaire']}</div>
                        </div>
                        <div className='separation' />
                        <div className='first-lign'>
                            <div className='date'>{products[2].Mois}/{products[2].Annee}</div>
                            <div className='sous-segment'>{products[2].sous_segment}</div>
                            <div className='sale-title'>{products[2].sale_title}</div>
                            <div className='id-product'>{products[2].id_product}</div>
                            <div className='name-product'>{products[2].product_name}</div>
                            <div className='reference'>{products[2].reference}</div>
                            <div className='fournisseur'>{products[2].fournisseur}</div>
                            <div className='amount-products'>{products[2].NbProduits}</div>
                            <div className='income-ht'>{products[2].RevenuHT}</div>
                            <div className='cost-ht'>{products[2].CoutsHT}</div>
                            <div className='margin'>{products[2]['Marge €']}</div>
                            <div className='price-buy'>{products[2]['Prix achat unitaire']}</div>
                        </div>
                        <div className='separation' />
                        <div className='first-lign'>
                            <div className='date'>{products[3].Mois}/{products[3].Annee}</div>
                            <div className='sous-segment'>{products[3].sous_segment}</div>
                            <div className='sale-title'>{products[3].sale_title}</div>
                            <div className='id-product'>{products[3].id_product}</div>
                            <div className='name-product'>{products[3].product_name}</div>
                            <div className='reference'>{products[3].reference}</div>
                            <div className='fournisseur'>{products[3].fournisseur}</div>
                            <div className='amount-products'>{products[3].NbProduits}</div>
                            <div className='income-ht'>{products[3].RevenuHT}</div>
                            <div className='cost-ht'>{products[3].CoutsHT}</div>
                            <div className='margin'>{products[3]['Marge €']}</div>
                            <div className='price-buy'>{products[3]['Prix achat unitaire']}</div>
                        </div>
                        <div className='separation' />
                        <div className='first-lign'>
                            <div className='date'>{products[4].Mois}/{products[4].Annee}</div>
                            <div className='sous-segment'>{products[4].sous_segment}</div>
                            <div className='sale-title'>{products[4].sale_title}</div>
                            <div className='id-product'>{products[4].id_product}</div>
                            <div className='name-product'>{products[4].product_name}</div>
                            <div className='reference'>{products[4].reference}</div>
                            <div className='fournisseur'>{products[4].fournisseur}</div>
                            <div className='amount-products'>{products[4].NbProduits}</div>
                            <div className='income-ht'>{products[4].RevenuHT}</div>
                            <div className='cost-ht'>{products[4].CoutsHT}</div>
                            <div className='margin'>{products[4]['Marge €']}</div>
                            <div className='price-buy'>{products[4]['Prix achat unitaire']}</div>
                        </div>
                        <div className='separation' />
                        <div className='first-lign'>
                            <div className='date'>{products[5].Mois}/{products[5].Annee}</div>
                            <div className='sous-segment'>{products[5].sous_segment}</div>
                            <div className='sale-title'>{products[5].sale_title}</div>
                            <div className='id-product'>{products[5].id_product}</div>
                            <div className='name-product'>{products[5].product_name}</div>
                            <div className='reference'>{products[5].reference}</div>
                            <div className='fournisseur'>{products[5].fournisseur}</div>
                            <div className='amount-products'>{products[5].NbProduits}</div>
                            <div className='income-ht'>{products[5].RevenuHT}</div>
                            <div className='cost-ht'>{products[5].CoutsHT}</div>
                            <div className='margin'>{products[5]['Marge €']}</div>
                            <div className='price-buy'>{products[5]['Prix achat unitaire']}</div>
                        </div>                      
                    </div>

                    <div className='case-sales' style={{ right: this.state.case_sales }} >
                        <div className='title-information-sales'>
                            <div className='date'>Date</div>
                            <div className='sous-segment'>Sous-segment</div>
                            <div className='sale-title'>Titre de la vente</div>
                            <div className='amount-sales'>Nb <br/> Produits</div>
                            <div className='income-ht'>Revenue <br/> HT</div>
                            <div className='cost-ht'>Coût <br/> HT</div>
                            <div className='margin'>Marge <br/> en €</div>
                        </div>
                        <div className='first-lign'>
                            <div className='date'>{sales[0].Mois}/{sales[0].Annee}</div>
                            <div className='sous-segment'>{sales[0].sous_segment}</div>
                            <div className='sale-title'>{sales[0].sale_title}</div>
                            <div className='amount-sales'>{sales[0].NbProduits}</div>
                            <div className='income-ht'>{sales[0].RevenuHT}</div>
                            <div className='cost-ht'>{sales[0].CoutsHT}</div>
                            <div className='margin'>{sales[0]['Marge €']}</div>
                        </div>
                        <div className='separation' />
                        <div className='first-lign'>
                            <div className='date'>{sales[1].Mois}/{sales[1].Annee}</div>
                            <div className='sous-segment'>{sales[1].sous_segment}</div>
                            <div className='sale-title'>{sales[1].sale_title}</div>
                            <div className='amount-sales'>{sales[1].NbProduits}</div>
                            <div className='income-ht'>{sales[1].RevenuHT}</div>
                            <div className='cost-ht'>{sales[1].CoutsHT}</div>
                            <div className='margin'>{sales[1]['Marge €']}</div>
                        </div>
                        <div className='separation' />
                        <div className='first-lign'>
                            <div className='date'>{sales[2].Mois}/{sales[2].Annee}</div>
                            <div className='sous-segment'>{sales[2].sous_segment}</div>
                            <div className='sale-title'>{sales[2].sale_title}</div>
                            <div className='amount-sales'>{sales[2].NbProduits}</div>
                            <div className='income-ht'>{sales[2].RevenuHT}</div>
                            <div className='cost-ht'>{sales[2].CoutsHT}</div>
                            <div className='margin'>{sales[2]['Marge €']}</div>
                        </div>
                        <div className='separation' />
                        <div className='first-lign'>
                            <div className='date'>{sales[3].Mois}/{sales[3].Annee}</div>
                            <div className='sous-segment'>{sales[3].sous_segment}</div>
                            <div className='sale-title'>{sales[3].sale_title}</div>
                            <div className='amount-sales'>{sales[3].NbProduits}</div>
                            <div className='income-ht'>{sales[3].RevenuHT}</div>
                            <div className='cost-ht'>{sales[3].CoutsHT}</div>
                            <div className='margin'>{sales[3]['Marge €']}</div>
                        </div>
                        <div className='separation' />
                        <div className='first-lign'>
                            <div className='date'>{sales[4].Mois}/{sales[4].Annee}</div>
                            <div className='sous-segment'>{sales[4].sous_segment}</div>
                            <div className='sale-title'>{sales[4].sale_title}</div>
                            <div className='amount-sales'>{sales[4].NbProduits}</div>
                            <div className='income-ht'>{sales[4].RevenuHT}</div>
                            <div className='cost-ht'>{sales[4].CoutsHT}</div>
                            <div className='margin'>{sales[4]['Marge €']}</div>
                        </div>
                        <div className='separation' />
                        <div className='first-lign'>
                            <div className='date'>{sales[5].Mois}/{sales[5].Annee}</div>
                            <div className='sous-segment'>{sales[5].sous_segment}</div>
                            <div className='sale-title'>{sales[5].sale_title}</div>
                            <div className='amount-sales'>{sales[5].NbProduits}</div>
                            <div className='income-ht'>{sales[5].RevenuHT}</div>
                            <div className='cost-ht'>{sales[5].CoutsHT}</div>
                            <div className='margin'>{sales[5]['Marge €']}</div>
                        </div>
                    </div>
                </Link>
                <div className='button-category'>
                    {/*<div className='blue-button' style={{ right: this.state.position_selector }}>
                        {/*<text className='position-selector-products'>Produits</text>
                        <text className='position-selector-sales'>Ventes</text>
                    </div>*/}
                    <button className='change-button-sales' style={{ color : this.state.font_color ? '#4A90E2' : '#FFFFFF' }} onClick={this.state.products_on ? () => {this.updateDatas()} : null }>
                        Ventes
                    </button>
                    <button className='change-button-products' style={{ color : this.state.font_color ? '#FFFFFF' : '#4A90E2' }} onClick={!this.state.products_on ? () => {this.updateDatas()} : null }>
                        Produits
                    </button>
                    <div className='blue-button' style={{ right: this.state.position_selector }}
                    ></div>
                </div>  
            </div>
        )
    }
}