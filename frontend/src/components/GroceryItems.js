import React, { Component } from 'react';
import { Grid } from '@material-ui/core'
import Product from './Product'
import { Link } from 'react-router-dom';

const GROCERY_ITEMS1 = [
    {store_id: 1, product_id: 3, stock: 52, unit_price: 4.00, product_name: "Bread Cranberry Foccacia", product_image: "https://www.applesfromny.com/wp-content/uploads/2020/05/Jonagold_NYAS-Apples2.png"},
    {store_id: 1, product_id: 20, stock: 68, unit_price: 1.75, product_name: "Ecolab - Hobart Washarm End Cap", product_image: "https://www.applesfromny.com/wp-content/uploads/2020/05/Jonagold_NYAS-Apples2.png"},
    {store_id: 1, product_id: 34, stock: 75, unit_price: 16.84, product_name: "Wine - Bouchard La Vignee Pinot", product_image: "https://www.applesfromny.com/wp-content/uploads/2020/05/Jonagold_NYAS-Apples2.png"},
    {store_id: 1, product_id: 53, stock: 9, unit_price: 9.98, product_name: "Sugar - Cubes", product_image: "https://www.applesfromny.com/wp-content/uploads/2020/05/Jonagold_NYAS-Apples2.png"},
    {store_id: 1, product_id: 56, stock: 17, unit_price: 3.97, product_name: "Roe - Flying Fish", product_image: "https://www.applesfromny.com/wp-content/uploads/2020/05/Jonagold_NYAS-Apples2.png"},
    {store_id: 1, product_id: 59, stock: 41, unit_price: 6.42, product_name: "Wine - Savigny - Les - Beaune", product_image: "https://www.applesfromny.com/wp-content/uploads/2020/05/Jonagold_NYAS-Apples2.png"},
    {store_id: 1, product_id: 60, stock: 3, unit_price: 9.81, product_name: "Pastry - Mini French Pastries", product_image: "https://www.applesfromny.com/wp-content/uploads/2020/05/Jonagold_NYAS-Apples2.png"},
    {store_id: 1, product_id: 64, stock: 82, unit_price: 8.34, product_name: "Potatoes - Pei 10 Oz", product_image: "https://www.applesfromny.com/wp-content/uploads/2020/05/Jonagold_NYAS-Apples2.png"},
    {store_id: 1, product_id: 66, stock: 16, unit_price: 6.37, product_name: "Cheese Cloth", product_image: "https://www.applesfromny.com/wp-content/uploads/2020/05/Jonagold_NYAS-Apples2.png"},
    {store_id: 1, product_id: 68, stock: 74, unit_price: 6.20, product_name: "Pasta - Fett Alfredo, Single Serve", product_image: "https://www.applesfromny.com/wp-content/uploads/2020/05/Jonagold_NYAS-Apples2.png"},
    {store_id: 1, product_id: 79, stock: 95, unit_price: 8.18, product_name: "Mussels - Frozen", product_image: "https://www.applesfromny.com/wp-content/uploads/2020/05/Jonagold_NYAS-Apples2.png"},
    {store_id: 1, product_id: 80, stock: 83, unit_price: 12.00, product_name: "Cod - Fillets", product_image: "https://www.applesfromny.com/wp-content/uploads/2020/05/Jonagold_NYAS-Apples2.png"},
    {store_id: 1, product_id: 93, stock: 13, unit_price: 4.93, product_name: "Beer - Rickards Red", product_image: "https://www.applesfromny.com/wp-content/uploads/2020/05/Jonagold_NYAS-Apples2.png"},
]

const GROCERY_ITEMS2 = [
    {store_id: 2, product_id: 8, stock: 73, unit_price: 11.30, product_name: "Muffin Hinge Container 6", product_image: "https://images-na.ssl-images-amazon.com/images/I/911YhTNSHbL._AC_SL1500_.jpg"},
    {store_id: 2, product_id: 10, stock: 66, unit_price: 18.62, product_name: "Tomatoes - Cherry, Yellow", product_image: "https://cdn.shopify.com/s/files/1/1575/0603/products/CherryTomatoYellow_Approx.250g_800x.jpg?v=15996"},
    {store_id: 2, product_id: 28, stock: 60, unit_price: 4.68, product_name: "Ham - Cooked Italian", product_image: "https://sc04.alicdn.com/kf/He6b7eb8e66e44bcfa88a41730cadcec3D.jpg"},
    {store_id: 2, product_id: 33, stock: 63, unit_price: 2.65, product_name: "Cabbage - Savoy", product_image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBQVFBcTFRQYFxcYHBgcGhoZGh4iFx0cISAeGiMjG"},
    {store_id: 2, product_id: 42, stock: 66, unit_price: 14.22, product_name: "Lobster", product_image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdH"},
    {store_id: 2, product_id: 47, stock: 47, unit_price: 18.17, product_name: "Vinegar - White Wine", },
    {store_id: 2, product_id: 55, stock: 24, unit_price: 8.35, product_name: "Maruchan Chicken Flavor", product_image: "https://images.albertsons-media.com/is/image/ABS/960042051?$ecom-pdp-desktop$&defaultImage=Not_Avail"},
    {store_id: 2, product_id: 56, stock: 35, unit_price: 2.51, product_name: "Sushi", product_image: "https://i.pinimg.com/originals/a4/e8/e4/a4e8e46f99aad141e5032f3b43c31fc6.jpg"},
    {store_id: 2, product_id: 67, stock: 48, unit_price: 1.76, product_name: "Wine - Red, Gamay Noir", },
    {store_id: 2, product_id: 79, stock: 51, unit_price: 7.12, product_name: "Mussels - Frozen", },
    {store_id: 2, product_id: 97, stock: 7, unit_price: 2.74, product_name: "Tart Shells - Sweet, 4", },
]

const GROCERY_ITEMS3 = [
    {store_id: 3, product_id: 52, stock: 35, unit_price: 2.96, product_name: "Water - Green Tea Refresher", product_image: "https://images-na.ssl-images-amazon.com/images/I/71r4769%2B3mL._SL1500_.jpg"},
    {store_id: 3, product_id: 54, stock: 15, unit_price: 16.39, product_name: "Doritos", product_image: "https://images-na.ssl-images-amazon.com/images/I/71MQeIS7FAL._SL1500_.jpg"},
    {store_id: 3, product_id: 59, stock: 5, unit_price: 3.07, product_name: "Wine - Savigny - Les - Beaune", product_image: "https://cdn.shoplightspeed.com/shops/603808/files/24704766/savigny-les-beaune-les-pimentiers-2017-pe"},
    {store_id: 3, product_id: 66, stock: 16, unit_price: 10.11, product_name: "Cheese Cloth", product_image: "https://www.applesfromny.com/wp-content/uploads/2020/05/Jonagold_NYAS-Apples2.png"},
    {store_id: 3, product_id: 86, stock: 6, unit_price: 7.00, product_name: "Avocado", product_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTQZlhpmXNYw997OAvhZOgSIAq1Tv5VTWAeO-YSppMShFs"},
]

const GROCERY_ITEMS4 = [
    {store_id: 4, product_id: 6, stock: 40, unit_price: 9.47, product_name: "Peach - Halves", product_image: "https://cdn.powered-by-nitrosell.com/product_images/23/5695/large-livadapeachesinlightsyrup.png"},
    {store_id: 4, product_id: 10, stock: 10, unit_price: 18.09, product_name: "Tomatoes - Cherry, Yellow", product_image: "https://cdn.shopify.com/s/files/1/1575/0603/products/CherryTomatoYellow_Approx.250g_800x.jpg?v=15996"},
    {store_id: 4, product_id: 19, stock: 1, unit_price: 7.83, product_name: "Ecolab - Lime - A - Way 4/4 L", product_image: "https://catalog.nationalew.com/images/prdimgs/ECO/450/ECO6101131.JPG"},
    {store_id: 4, product_id: 27, stock: 79, unit_price: 18.00, product_name: "Beyon Beef", product_image: "https://images-na.ssl-images-amazon.com/images/I/71nsPK88NwL._SL1298_.jpg"},
    {store_id: 4, product_id: 35, stock: 84, unit_price: 16.14, product_name: "Arctic Char - Fresh, Whole", product_image: "https://images-na.ssl-images-amazon.com/images/I/81--CVLzgIL._SX522_.jpg"},
    {store_id: 4, product_id: 38, stock: 83, unit_price: 3.98, product_name: "Ham - Cooked Bayonne Tinned", product_image: "https://www.gourmetsleuth.com/images/default-source/dictionary/boneless-canned-ham.jpg?sfvrsn=2"},
    {store_id: 4, product_id: 44, stock: 2, unit_price: 12.03, product_name: "Veal - Slab Bacon", product_image: "https://schallerweber.com/wp-content/uploads/2017/06/50210-slab-bacon-in-package.jpg"},
    {store_id: 4, product_id: 61, stock: 23, unit_price: 11.02, product_name: "Bread - Sour Batard", product_image: "https://goodeggs4.imgix.net/54791441-326e-4efe-8edc-c1c974a9a062.jpg?w=840&h=525&fm=jpg&q=80&fit=cro"},
    {store_id: 4, product_id: 68, stock: 69, unit_price: 4.34, product_name: "Alfredo Sauce", product_image: "https://images.heb.com/is/image/HEBGrocery/000956878"},
    {store_id: 4, product_id: 76, stock: 74, unit_price: 11.25, product_name: "Hand Soap ", product_image: "https://cdn.shopify.com/s/files/1/0015/0683/6582/products/sku_120140_size_12floz_01.png?v=1617126495"},

]

const GROCERY_ITEMS5 = [
    {store_id: 5, product_id: 11, stock: 9, unit_price: 19.81, product_name: "Bologna", product_image: "https://images-na.ssl-images-amazon.com/images/I/51%2BPRp9JzFL.jpg"},
    {store_id: 5, product_id: 16, stock: 87, unit_price: 11.37, product_name: "Flour - Semolina", product_image: "https://images-na.ssl-images-amazon.com/images/I/71vSzj0b7JL._SL1500_.jpg"},
    {store_id: 5, product_id: 26, stock: 73, unit_price: 6.52, product_name: "Bacardi Raspberry", product_image: "https://mahanliquor.com/wp-content/uploads/2019/07/bacardi-raspberry-rum-1L-600x600.jpeg"},
    {store_id: 5, product_id: 32, stock: 61, unit_price: 9.49, product_name: "Wine - White, Riesling, Semi - Dry", product_image: "https://cdn.shopify.com/s/files/1/0098/8613/8419/products/230703_d7acd9dc-64a5-4e8b-9d0a-5f46c4a4e3f"},
    {store_id: 5, product_id: 37, stock: 18, unit_price: 7.11, product_name: "Cocoa Powder - Natural", product_image: "https://www.savoryspiceshop.com/content/mercury_modules/cart/items/2/7/7/2776/cocoa-powder-natural-1"},
    {store_id: 5, product_id: 46, stock: 79, unit_price: 11.33, product_name: "Peas - Frozen", product_image: "https://i5.walmartimages.com/asr/5c808a27-a556-4bd0-bf33-5aa6358071df_4.7467591f04edc7663cb20a230d58"},
    {store_id: 5, product_id: 55, stock: 38, unit_price: 4.35, product_name: "Maruchan Chicken Flavor", product_image: "https://images.albertsons-media.com/is/image/ABS/960042051?$ecom-pdp-desktop$&defaultImage=Not_Avail"},
    {store_id: 5, product_id: 58, stock: 59, unit_price: 14.53, product_name: "Coffee - Decafenated", product_image: "https://images-na.ssl-images-amazon.com/images/I/91p%2BZ4woz9L._SL1500_.jpg"},
    {store_id: 5, product_id: 92, stock: 52, unit_price: 5.13, product_name: "Shrimp - 31/40", product_image: "https://images-na.ssl-images-amazon.com/images/I/61oxhQYC%2BjL._SL1500_.jpg"},
    {store_id: 5, product_id: 97, stock: 5, unit_price: 2.34, product_name: "Tart Shells - Sweet, 4", product_image: "https://gfwcdn.azureedge.net/images/Product/medium/tatin-round-tart-shells-sweet-1S-1177.jpg"},
]

const GROCERY_ITEMS6 = [
    {store_id: 6, product_id: 9, stock: 34, unit_price: 2.09, product_name: "Initation Crab Meat", product_image: "https://images.heb.com/is/image/HEBGrocery/001405713"},
    {store_id: 6, product_id: 13, stock: 100, unit_price: 13.20, product_name: "Wine - Cahors Ac 2000, Clos", product_image: "http://www.astorwines.com/images/items/30367_hr.jpg"},
    {store_id: 6, product_id: 45, stock: 23, unit_price: 4.28, product_name: "Cheese Cloth 60", product_image: "https://m.media-amazon.com/images/I/71JtdCwE1DL._AC_SS450_.jpg"},
    {store_id: 6, product_id: 54, stock: 57, unit_price: 11.27, product_name: "Doritos", product_image: "https://images-na.ssl-images-amazon.com/images/I/71MQeIS7FAL._SL1500_.jpg"},
    {store_id: 6, product_id: 89, stock: 60, unit_price: 7.29, product_name: "Lychee - Canned", product_image: "https://m.media-amazon.com/images/I/81WQW5T8CYL._SL1500_.jpg"},
    {store_id: 6, product_id: 98, stock: 53, unit_price: 14.92, product_name: "Mango", product_image: "https://images.albertsons-media.com/is/image/ABS/184150300?$ecom-pdp-desktop$&defaultImage=Not_Avail"},
]

const GROCERY_ITEMS7 = [
    {store_id: 7, product_id: 5, stock: 5, unit_price: 2.32, product_name: "Pasta - Orecchiette", product_image: "https://images-na.ssl-images-amazon.com/images/I/81VHlJkvf6L._SL1500_.jpg"},
    {store_id: 7, product_id: 12, stock: 6, unit_price: 12.59, product_name: "Sobe - Orange Carrot", product_image: "https://www.kroger.com/product/images/xlarge/front/0073951040000"},
    {store_id: 7, product_id: 17, stock: 62, unit_price: 9.05, product_name: "Longos - Assorted Sandwich", product_image: "https://media.istockphoto.com/photos/sandwich-catering-platter-picture-id140463189"},
    {store_id: 7, product_id: 19, stock: 85, unit_price: 3.22, product_name: "Ecolab - Lime - A - Way 4/4 L", product_image: "https://catalog.nationalew.com/images/prdimgs/ECO/450/ECO6101131.JPG"},
    {store_id: 7, product_id: 34, stock: 8, unit_price: 10.85, product_name: "Wine - Bouchard La Vignee Pinot", product_image: "https://images.vivino.com/thumbs/oxnHoubBSvqsVIIl54E8aw_pb_600x600.png"},
    {store_id: 7, product_id: 37, stock: 73, unit_price: 2.45, product_name: "Cocoa Powder - Natural", product_image: "https://www.savoryspiceshop.com/content/mercury_modules/cart/items/2/7/7/2776/cocoa-powder-natural-1"},
    {store_id: 7, product_id: 76, stock: 98, unit_price: 13.75, product_name: "Hand Soap ", product_image: "https://cdn.shopify.com/s/files/1/0015/0683/6582/products/sku_120140_size_12floz_01.png?v=1617126495"},
    {store_id: 7, product_id: 79, stock: 36, unit_price: 14.03, product_name: "Mussels - Frozen", product_image: "https://www.meijer.com/content/dam/meijer/product/0070/88/2014/88/0070882014884_1_A1C1_1200.png"},
]

const GROCERY_ITEMS8 = [
    {store_id: 8, product_id: 2, stock: 37, unit_price: 6.69, product_name: "Mushroom - Portebello", product_image: "https://cdn.shopify.com/s/files/1/0131/5055/2123/products/PEACHES-HALVES_1400x1400.jpg?v=1573980156"},
    {store_id: 8, product_id: 10, stock: 31, unit_price: 1.48, product_name: "Tomatoes - Cherry, Yellow", product_image: "https://cdn.shopify.com/s/files/1/1575/0603/products/CherryTomatoYellow_Approx.250g_800x.jpg?v=15996"},
    {store_id: 8, product_id: 18, stock: 93, unit_price: 5.74, product_name: "Kellogs All Bran Bars Chocolate", product_image: "https://store.belgianshop.com/5500-large_default/kellogg-s-all-bran-6x40g.jpg"},
    {store_id: 8, product_id: 22, stock: 32, unit_price: 16.95, product_name: "Cheese - Brick With Pepper", product_image: "https://www.meijer.com/content/dam/meijer/product/0071/92/8366/24/0071928366248_1_A1C1_1200.png"},
    {store_id: 8, product_id: 27, stock: 69, unit_price: 3.19, product_name: "Beyond Beef", product_image: "https://images-na.ssl-images-amazon.com/images/I/71nsPK88NwL._SL1298_.jpg"},
    {store_id: 8, product_id: 31, stock: 80, unit_price: 1.02, product_name: "Wine - Pinot Noir Pond Haddock", product_image: "https://www.totalwine.com/dynamic/490x/media/sys_master/twmmedia/hce/h73/12205797802014.png"},
    {store_id: 8, product_id: 34, stock: 27, unit_price: 16.31, product_name: "Wine - Bouchard La Vignee Pinot", product_image: "https://images.vivino.com/thumbs/oxnHoubBSvqsVIIl54E8aw_pb_600x600.png"},
    {store_id: 8, product_id: 36, stock: 50, unit_price: 11.28, product_name: "Original Pringles", product_image: "https://target.scene7.com/is/image/Target/GUEST_c0f84587-a4cb-4c6f-ad4b-d7630dda858c?wid=488&hei=488"},
    {store_id: 8, product_id: 69, stock: 57, unit_price: 4.93, product_name: "Cheese - Cream Cheese", product_image: "https://sbfcdn.azureedge.net/media/0001523_philadelphia-cream-cheese-8-oz_600.jpeg"},
]

const GROCERY_ITEMS9 = [
    {store_id: 9, product_id: 5, stock: 45, unit_price: 11.47, product_name: "Pasta - Orecchiette", product_image: "https://images-na.ssl-images-amazon.com/images/I/81VHlJkvf6L._SL1500_.jpg"},
    {store_id: 9, product_id: 19, stock: 44, unit_price: 7.38, product_name: "Ecolab - Lime - A - Way 4/4 L", product_image: "https://catalog.nationalew.com/images/prdimgs/ECO/450/ECO6101131.JPG"},
    {store_id: 9, product_id: 26, stock: 40, unit_price: 1.73, product_name: "Bacardi Raspberry", product_image: "https://mahanliquor.com/wp-content/uploads/2019/07/bacardi-raspberry-rum-1L-600x600.jpeg"},
    {store_id: 9, product_id: 36, stock: 5, unit_price: 14.87, product_name: "Original Pringles", product_image: "https://target.scene7.com/is/image/Target/GUEST_c0f84587-a4cb-4c6f-ad4b-d7630dda858c?wid=488&hei=488"},
    {store_id: 9, product_id: 53, stock: 28, unit_price: 15.00, product_name: "Pure Cane Sugar Cubes", product_image: "https://www.kroger.com/product/images/large/right/0001580005012"},
    {store_id: 9, product_id: 55, stock: 91, unit_price: 13.50, product_name: "Maruchan Chicken Flavor", product_image: "https://images.albertsons-media.com/is/image/ABS/960042051?$ecom-pdp-desktop$&defaultImage=Not_Avail"},
    {store_id: 9, product_id: 57, stock: 40, unit_price: 19.90, product_name: "Dog Chow", product_image: "https://media.tractorsupply.com/is/image/TractorSupplyCompany/5048134?$456$"},
    {store_id: 9, product_id: 60, stock: 78, unit_price: 13.85, product_name: "Pastry - Mini French Pastries", product_image: "https://www.pastriesbyrandolph.com/wp-content/uploads/2019/06/small-mini-french-pastry-platter.jpg"},
    {store_id: 9, product_id: 68, stock: 49, unit_price: 18.20, product_name: "Alfredo Sauce", product_image: "https://images.heb.com/is/image/HEBGrocery/000956878"},
    {store_id: 9, product_id: 77, stock: 2, unit_price: 6.73, product_name: "Grenadine", product_image: "https://images-na.ssl-images-amazon.com/images/I/71cJvvR82nL._SL1500_.jpg"},
    {store_id: 9, product_id: 79, stock: 23, unit_price: 7.90, product_name: "Mussels - Frozen", product_image: "https://www.meijer.com/content/dam/meijer/product/0070/88/2014/88/0070882014884_1_A1C1_1200.png"},
    {store_id: 9, product_id: 82, stock: 38, unit_price: 4.68, product_name: "Cheese - Brie", product_image: "https://images.albertsons-media.com/is/image/ABS/137700155?$ecom-pdp-desktop$&defaultImage=Not_Avail"},
]

const GROCERY_ITEMS10 = [
    {store_id: 10, product_id: 3, stock: 4, unit_price: 1.62, product_name: "Bread Loafs", product_image: "https://assets.bonappetit.com/photos/5f84743360f032defe1f5376/3:2/w_1857,h_1238,c_limit/Pullman-Loaf"},
    {store_id: 10, product_id: 15, stock: 52, unit_price: 3.90, product_name: "Nut - Hazelnut, Whole", product_image: "https://www.mounthopewholesale.com/wp-content/uploads/2015/04/NFIL2.jpg"},
    {store_id: 10, product_id: 17, stock: 54, unit_price: 17.99, product_name: "Longos - Assorted Sandwich", product_image: "https://media.istockphoto.com/photos/sandwich-catering-platter-picture-id140463189"},
    {store_id: 10, product_id: 33, stock: 95, unit_price: 1.47, product_name: "Cabbage - Savoy", product_image: "https://www.rochs.com/store/west-greenwich/wp-content/uploads/sites/2/2020/06/GR1111.jpg"},
    {store_id: 10, product_id: 47, stock: 48, unit_price: 19.10, product_name: "Vinegar - White Wine", product_image: "https://images-na.ssl-images-amazon.com/images/I/61fcCV9TzoL._SL1500_.jpg"},
    {store_id: 10, product_id: 50, stock: 71, unit_price: 13.74, product_name: "Rolled Oats", product_image: "https://www.bobsredmill.com/media/catalog/product/cache/8646dbe0b50cb9bce8e481734e0f2ffe/1/3/1360s14"},
    {store_id: 10, product_id: 59, stock: 59, unit_price: 9.50, product_name: "Wine - Savigny - Les - Beaune", product_image: "https://cdn.shoplightspeed.com/shops/603808/files/24704766/savigny-les-beaune-les-pimentiers-2017-pe"},
    {store_id: 10, product_id: 64, stock: 86, unit_price: 18.19, product_name: "Potatoes - Pei 10 Oz", product_image: "https://www.peipotato.org/sites/default/files/2019-07/pic.jpg"},
    {store_id: 10, product_id: 89, stock: 24, unit_price: 12.03, product_name: "Lychee - Canned", product_image: "https://m.media-amazon.com/images/I/81WQW5T8CYL._SL1500_.jpg"},
    {store_id: 10, product_id: 94, stock: 84, unit_price: 17.40, product_name: "Brownies - Two Bite, Chocolate", product_image: "https://i5.peapod.com/c/5V/5VO4R.jpg"},
    {store_id: 10, product_id: 95, stock: 79, unit_price: 15.22, product_name: "Turnip - White", product_image: "https://media.ecotierra.es/product/nabo-blanco-ecologico-1-kg-800x800.jpg"},
]

export default class GroceryItems extends Component {
    render() {
        return <div id = "grocery-items">
            <>
                <Grid container justify='left' style={{
                    backgroundColor: '#EE6590', marginTop: '11vh'
                }}>
                    {GROCERY_ITEMS7.map((product) => (
                        <Grid item key={product.product_id} xs={12} sm={6} md={4} lg={3} style={{ border: '6px solid #EE6590' }}>
                            <Product product={product} />
                            <button onClick={()=>this.props.addToCart(product)}>
                                Add To Cart
                            </button>
                        </Grid>
                    ))}
                </Grid>
            </>
        </div>
    }
}