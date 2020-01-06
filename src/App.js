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
        
    render() {
        const { selected_product } = this.state;

        return (
            <div>
                Hello my name is Tex
            </div>
        )
    }
}

export default App;
