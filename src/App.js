import React, { Component } from 'react';


class App extends Component {
    state = {
        products: [
            {
                "id": 1,
                "product_name": "ORIGINALE PEPPERONI",
                "product_details": "Sauce tomate, mozzarella, saucisson pepperoni.",
                "product_picture": "product_20180713121113_AW6V79000001.png",
                "category_id": 2,
                "price": 21830,
                "status": 1,
                "created_at": "2018-07-13 12:11:13",
                "updated_at": "2018-07-13 12:11:13"
            },
            {
                "id": 2,
                "product_name": "PEPPINA",
                "product_details": "Sauce tomate, mozzarella, champignons, oignons, poivrons mélangés, olives noires, tomates fraîches, origan.",
                "product_picture": "product_20180713121436_TP6T60000002.jpg",
                "category_id": 2,
                "price": 29600,
                "status": 1,
                "created_at": "2018-07-13 12:14:36",
                "updated_at": "2018-07-13 12:14:36"
            },
            {
                "id": 3,
                "product_name": "MEXICAINE",
                "product_details": "Sauce tomate, mozzarella, boulettes de bœuf assaisonnées, merguez, maïs, oignons, assaisonnement mexicain.",
                "product_picture": "product_20180713121630_E61K7R000003.png",
                "category_id": 2,
                "price": 37000,
                "status": 1,
                "created_at": "2018-07-13 12:16:30",
                "updated_at": "2018-07-13 12:16:31"
            },
            {
                "id": 4,
                "product_name": "SUBLIME CURRY",
                "product_details": "Crème fraîche légère, mozzarella, poulet rôti, poivrons mélangés, oignons, sauce au curry.",
                "product_picture": "product_20180713121830_G7B7G6000004.png",
                "category_id": 2,
                "price": 39500,
                "status": 1,
                "created_at": "2018-07-13 12:18:30",
                "updated_at": "2018-07-20 14:28:40"
            },
            {
                "id": 5,
                "product_name": "CHEESY BREAD",
                "product_details": "Bâtonnets de pâte à pizza, mozzarella, Emmental, assaisonnement à l’ail.",
                "product_picture": "product_20180713122140_LZJ5TL000005.png",
                "category_id": 6,
                "price": 18130,
                "status": 1,
                "created_at": "2018-07-13 12:21:40",
                "updated_at": "2018-07-20 15:50:46"
            },
            {
                "id": 6,
                "product_name": "CHEESY CRUNCH",
                "product_details": "6 bouchées panées aux fromages fondants.",
                "product_picture": "product_20180713123601_V92Z88000006.png",
                "category_id": 6,
                "price": 18130,
                "status": 1,
                "created_at": "2018-07-13 12:36:01",
                "updated_at": "2018-07-13 12:36:02"
            },
            {
                "id": 7,
                "product_name": "DOMINO'S BOX CHICKEN",
                "product_details": "6 Kick’n Chicken, 6 Chickenito’s, 6 Buffalo wings. Servi avec deux sauces au choix.",
                "product_picture": "product_20180713140829_V638CR000007.png",
                "category_id": 6,
                "price": 40330,
                "status": 1,
                "created_at": "2018-07-13 14:08:29",
                "updated_at": "2018-07-13 14:08:29"
            },
            {
                "id": 8,
                "product_name": "KICK'N CHICKEN",
                "product_details": "Morceaux de blancs de poulet marinés au poivre et piment doux. Servi avec une sauce au choix. Disponible en 4 et 8 pièces.",
                "product_picture": "product_20180713140932_D9W9VL000008.png",
                "category_id": 6,
                "price": 18135,
                "status": 1,
                "created_at": "2018-07-13 14:09:32",
                "updated_at": "2018-07-20 12:25:53"
            }
        ],
        orders: [],
        selected_product: null
    }

    showDetail = (selected_product) => {
        this.setState ({
            selected_product: selected_product
        })
    }

    addOrder = (product) => {
        let orders = this.state.orders;
        orders.push(product);
        this.setState ({
            orders:orders
        })
    }

    addQuantity = (event, index) => {
        let products = this.state.products;
        products[index].quantity = event.target.value;
        this.setState ({
            products:products
        })
    }

   calculerTotal = () => {
       let orders = this.state.orders;
       let total = 0;
       orders.map(order => {
           return total = total + (order.quantity * order.price);
       })
       return total;
   }

   calculerTVA = () => {
       return this.calculerTotal() * 0.2;
   }
        
    render() {
        const { selected_product } = this.state;

        return (
            <div>
                <div className="app-title">Fast Food</div>
                <div className="row content">
                    <div className="col-md-9">
                        <div className="products">
                            
                            <div className="row">
                            {this.state.products.map((product, index) => {
                                return(
                                <div className="col-md-4">
                                    <div className="product">
                                        <div className="price">{product.price}</div>
                                        <img src={"./images/" + product.product_picture }/>
                                        <div className="title">{product.product_name}</div>
                                        <div className="product-view">
                                            {/* <button className="btn btn-primary" disabled={!product.quantity} onClick={()=> this.addOrder(product)}>Commander</button>
                                            <input type="text" className="form-control" value={product.quantity} onChange={(event)=> this.addQuantity(event, index)}></input> */}
                                        <button className="btn btn-primary" onClick={()=> this.showDetail(product)}><strong>SHOW DETAILS</strong></button>
                                        </div>
                                    </div>
                                </div>
                                    )
                                })
                            }
                            </div>
                        </div>
                    </div>


                    <div className="col-md-3">
                        <div className="orders">
                            <div className="order-padding">
                                <div className="title">Your Order</div>
                                {this.state.orders.map(order => {
                                    return (
                                    <div className="order-item">
                                    <div>
                                        <div>
                                            <img src={"./images/" + order.product_picture}/>
                                        </div>

                                        <div className="order-info">
                                            x
                                        </div>
                                        <div className="order-info">
                                            {order.quantity}
                                        </div>
                                        <div className="order-info">
                                        {order.price}
                                        </div>
                                    </div>
                                    </div>
                                    )
                                })
                            }   
                            </div>
                            
                            <div className="order-summary">
                                <div style={{display: 'flex'}}>
                                    <div>Subtotal : </div><div style={{flex: 'auto', textAlign: 'right'}}>{this.calculerTotal()} Ar</div>
                                </div>
                                <div style={{fontStyle: "italic", display: 'flex'}}>
                                    <div>TVA : </div><div style={{flex: 'auto', textAlign: 'right'}}>{this.calculerTVA()} Ar</div>
                                </div>
                               <div style={{display: 'flex'}}>
                                    <div><strong>Total : </strong></div><div style={{flex: 'auto', textAlign: 'right'}}>{this.calculerTotal() + this.calculerTVA()} Ar</div>
                               </div>
                                <button>Checkout</button>
                            </div>
                        </div>
                    </div>
                </div> 

                
                    { selected_product ? (
                        <div className="product-detail">
                            <h1>{selected_product.product_name}</h1>
                            <img src={"./images/" + selected_product.product_picture }/>
                            <h3>{selected_product.price}</h3>
                            <h6>{selected_product.product_details}</h6>
                        </div>
                    ) : null }
            </div>
        )
    }
}

export default App;
