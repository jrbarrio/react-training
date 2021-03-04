const productos = [
    {
        id: 9,
        name: "Macbook Retina 12",
        description: "Intel Core m3 de doble núcleo a 1,2 GHz\n8 GB de memoria RAM\n256 GB SSD PCIe\nIntel HD Graphics 615",
        image: "https://tienda-first.com/168074-home_default/apple-macbook-pro-12-1-retina-intel-core-i5-5287u-2-9-ghz-8-gb-so-ddr3-ram-512-gb-ssd-m2-macos-catalina-retina-13-3-39-39-2k-16-.jpg",
        price: 1419,
        category: "macbook"
    },
    {
        id: 10,
        name: "MacBook Pro de 13 pulgadas 128GB",
        description: "Intel Core i5 de doble núcleo a 2,3 GHz\n8 GB de memoria RAM\n128 GB flash PCIe\nIntel Iris Plus Graphics 640",
        image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp13touch-space-select-202005_GEO_ES?wid=892&hei=820&&qlt=80&.v=1587460259145",
        price: 1399,
        category: "macbook"
    },
    {
        id: 11, name: "MacBook Pro de 13 pulgadas 256GB",
        description: "Intel Core i5 de doble núcleo a 2,3 GHz\n8 GB de memoria RAM\n256 GB flash PCIe\nIntel Iris Plus Graphics 640",
        image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp13touch-space-select-201807_GEO_ES?wid=1808&hei=1680&fmt=jpeg&qlt=80&.v=1531167630513",
        price: 1599,
        category: "macbook"
    },
    {
        id: 12, name: "MacBook Pro de 13 pulgadas con Touch Bar 256GB",
        description: "Intel Core i5 de doble núcleo a 3,1 GHz\n8 GB de memoria RAM\n256 GB flash PCIe\nIntel Iris Plus Graphics 650",
        image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp13touch-space-select-202005_GEO_ES?wid=892&hei=820&&qlt=80&.v=1587460259145",
        price: 1799,
        category: "macbook"
    },
    {
        id: 13, name: "MacBook Pro con pantalla Retina de 15 pulgadas",
        description: "Intel Core i7 de cuatro núcleos a 2,2 GHz\n16 GB de memoria RAM\n256 GB SSD PCIe\nIntel Iris Pro Graphics",
        image: "https://d1eh9yux7w8iql.cloudfront.net/product_images/1578065716.64.jpg",
        price: 1999,
        category: "macbook"
    },
    {
        id: 14, name: "MacBook Pro de 13 pulgadas con Touch Bar 512GB",
        description: "Intel Core i5 de doble núcleo a 3,1 GHz\n8 GB de memoria RAM\n512 GB flash PCIe\nIntel Iris Plus Graphics 650",
        image: "https://images-na.ssl-images-amazon.com/images/I/719OzmojJ3L._AC_SX466_.jpg",
        price: 2029,
        category: "macbook"
    },
    {
        id: 15, name: "MacBook Pro de 15 pulgadas con Touch Bar 256GB",
        description: "Intel Core i7 de cuatro núcleos a 2,8 GHz\n16 GB de memoria RAM\n256 GB flash PCIe\nRadeon Pro 555 con 2 GB de memoria GDDR5",
        image: "https://img.pccomponentes.com/articles/13/132954/art-apl-book-pro-r-mptr2ybardera-gs-1.jpg",
        price: 2525,
        category: "macbook"
    },
    {
        id: 16, name: "MacBook Pro de 15 pulgadas con Touch Bar 512GB",
        description: "Intel Core i7 de cuatro núcleos a 2,9 GHz\n16 GB de memoria RAM\n512 GB flash PCIe\nRadeon Pro 560 con 4 GB de memoria GDDR5",
        image: "https://i.pinimg.com/originals/60/49/50/6049509328edc1a6c706ae4646c7476d.jpg",
        price: 2939,
        category: "macbook"
    },
    {
        id: 17, name: "iMac de 21,5 pulgadas",
        description: "Intel Core i5 de doble núcleo a 2,3 GHz\nMemoria de 8 GB\nDisco duro de 1 TB\nIntel Iris Plus Graphics 640",
        image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/imac-215-config-hero-201706_FMT_WHH?wid=540&hei=470&fmt=jpeg&qlt=80&.v=1580160660327",
        price: 1199,
        category: "imac"
    },
    {
        id: 18, name: "iMac de 21,5 pulgadas con pantalla Retina 4K",
        description: "Intel Core i5 de cuatro núcleos a 3 GHz\nMemoria de 8 GB\nDisco duro de 1 TB\nRadeon Pro 555 con 2 GB de VRAM",
        image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/imac-21-cto-hero-201903?wid=1254&hei=1044&fmt=jpeg&qlt=80&.v=1553120926388",
        price: 1399,
        category: "imac"
    },
    {
        id: 19, name: "iMac de 27 pulgadas con pantalla Retina 5K",
        description: "Intel Core i5 de cuatro núcleos a 3,4 GHz\nMemoria de 8 GB\nFusion Drive de 1 TB\nRadeon Pro 570 con 4 GB de VRAM",
        image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/imac-27-cto-hero-201903?wid=1254&hei=1044&fmt=jpeg&qlt=80&.v=1553120926412",
        price: 1959,
        category: "imac"
    },
    {
        id: 20, name: "Mac Mini Core i5 a 1,4 GHz | 500 GB HDD",
        description: "Core i5 de Intel de doble núcleo a 1,4 GHz\n4 GB de memoria RAM\nDisco duro de 500 GB\nHD Graphics 5000 de Intel",
        image: "https://www.mresell.es/wp-content/uploads/attachments/refurbished_mac_mini_late_2014_intel_core_i5_1_4_ghz_4_gb_ram_500_gb_hdd_mresell_es_fdc6629-e1546957263707.jpg",
        price: 519,
        category: "macmini"
    },
    {
        id: 21, name: "Apple Mac Mini Core i5 a 2,6 GHz | 1 TB HDD",
        description: "Core i5 de Intel de doble núcleo a 2,6 GHz\n8 GB de memoria\nDisco duro de 1 TB\nIris Graphics de Intel",
        image: "https://www.mresell.es/wp-content/uploads/attachments/refurbished_mac_mini_late_2014_intel_core_i5_2_6_ghz_8_gb_ram_1_tb_hdd_mresell_es_04a6470-e1536939892380.jpg",
        price: 749,
        category: "macmini"
    },
    {
        id: 22, name: "Apple Mac Mini Core i5 a 2,8 GHz | 1 TB Fusion Drive",
        description: "Core i5 de Intel de doble núcleo a 2,8 GHz\n8 GB de memoria\nFusion Drive de 1 TB\nIris Graphics de Intel",
        image: "https://i.blogs.es/44f80b/31orv0-isbl/450_1000.jpg",
        price: 1029,
        category: "macmini"
    },
    {
        id: 23, name: "Apple iPhone X 64GB Gris Espacial",
        description: "Nuevo iPhone X 64GB libre",
        image: "https://images3.pricecheck.co.za/images/objects/hash/product/61c/d61/878/image_big_109172710.jpg?1513290248",
        price: 1099,
        category: "iphone"
    },
    {
        id: 24, name: "Apple iPhone X 256GB Gris Espacial ",
        description: "Nuevo iPhone X 256GB Libre",
        image: "https://www.electrocosto.com/516385-thickbox_default/apple-iphone-x-256gb-gris-espacial.jpg",
        price: 1292,
        category: "iphone"
    },
    {
        id: 25, name: "Apple iPhone X 256GB Plata ",
        description: "Nuevo iPhone X Plata",
        image: "https://es.static.webuy.com/product_images/M%C3%B3viles/Moviles%20-%20iPhone/SAPPIX256GPLLIBA_l.jpg",
        price: 1292,
        category: "iphone"
    },
    {
        id: 26, name: "Apple iPhone 8 Plus (PRODUCT)RED 64GB ",
        description: "iPhone 8 Plus RED",
        image: "https://www.neobyte.es/17455-large_default/movil-apple-iphone-8-plus-64gb-red.jpg",
        price: 889,
        category: "iphone"
    },
    {
        id: 27, name: "Apple iPhone 8 Plus 256GB Gris Espacial",
        description: "iPhone 8 Plus Gris",
        image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-iphone8plus-spacegray?wid=1144&hei=1144&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1564083513793",
        price: 1049,
        category: "iphone"
    },
    {
        id: 28, name: "Apple iPhone 8 Plus 256GB Oro ",
        description: "iPhone 8 Plus Oro",
        image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQlJsBF-_jA9lFqKXqRXJS6-XFuSHg6vjKH656hSeJTued0euMqYfIylEjcvQ5xx_qpxhbd1Jp-&usqp=CAc",
        price: 1049,
        category: "iphone"
    },
    {
        id: 29, name: "Apple iPhone 7 32GB Negro",
        description: "iPhone 7 Negro",
        image: "https://www.maxmovil.com/media/catalog/product/cache/1/thumbnail/600x/17f82f742ffe127f42dca9de82fb58b1/a/p/apple_iphone_7_jet_black.jpg",
        price: 619,
        category: "iphone"
    },
    {
        id: 30, name: "Apple iPhone 7 128GB Negro Brillante",
        description: "iPhone 7 Negro Brillante",
        image: "https://es.static.webuy.com/product_images/M%C3%B3viles/Moviles%20-%20iPhone/SAPPI7128GNBLIBB_l.jpg",
        price: 729,
        category: "iphone"
    },
    {
        id: 31, name: "Apple iPad mini 4 Wi-Fi + Cellular 128GB Gris Espacial",
        description: "iPad mini 4",
        image: "https://images-na.ssl-images-amazon.com/images/I/71AUB7rdonL._AC_SY445_.jpg",
        price: 546,
        category: "ipad"
    },
    {
        id: 32, name: "Apple iPad Pro 12.9\" Wi-Fi + Cellular 256GB Gris Espacial",
        description: "iPad Pro",
        image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-pro-12-select-cell-spacegray-202003_GEO_ES_FMT_WHH?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1583553689914",
        price: 1182,
        category: "ipad"
    },
    {
        id: 33, name: "Apple iPad Pro 10.5\" Wi-Fi 256GB Gris Espacial",
        description: "iPad Pro",
        image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/rfb-ipad-pro10in-spacegray-cellular-2017?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1582330397326",
        price: 864,
        category: "ipad"
    },
    {
        id: 34, name: "Apple iPad Pro 10.5\" Wi-Fi 512GB Gris Espacial",
        description: "iPad Pro",
        image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/rfb-ipad-pro10in-spacegray-cellular-2017?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1582330397326",
        price: 1064,
        category: "ipad"
    },
    {
        id: 35, name: "Apple iPad Pro 10.5\" Wi-Fi + Cellular 512GB Oro Rosa",
        description: "iPad Pro",
        image: "https://www.worten.es/i/7509e20925c9b23b8e3ded21f4df619bdbcb0de7.jpg",
        price: 1224,
        category: "ipad"
    },
    {
        id: 36, name: "Apple Watch Series 1 42mm Caja Aluminio Plata y Correa",
        description: "Watch",
        image: "https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/201809/13/00194611300065____1__640x640.jpg",
        price: 287,
        category: "watch"
    },
    {
        id: 37, name: "Apple Watch Series 3 GPS 38mm Caja Aluminio Plata",
        description: "Watch 38mm",
        image: "https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/201809/13/00194611300032____1__640x640.jpg",
        price: 355,
        category: "watch"
    },
    {
        id: 38, name: "Apple Watch Series 3 GPS 42mm Caja Aluminio Gris",
        description: "Watch 42mm",
        image: "https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/201809/13/00194611300016____1__640x640.jpg",
        price: 384,
        category: "watch"
    },
    {
        id: 39, name: "Apple Watch Nike+ GPS 38mm Caja Aluminio Plata",
        description: "Watch 38 mm Nike",
        image: "https://static.fnac-static.com/multimedia/Images/ES/NR/33/45/15/1393971/1540-1.jpg",
        price: 355,
        category: "watch"
    },
    {
        id: 40, name: "Apple Watch Nike+ GPS 42mm Caja Aluminio Plata",
        description: "Watch 42 mm Nike",
        image: "https://static.fnac-static.com/multimedia/Images/ES/NR/38/45/15/1393976/1540-1.jpg",
        price: 384,
        category: "watch"
    },
    {
        id: 41, name: "Apple Cable Thunderbolt 2m Blanco",
        description: "thunderbolt 2m",
        image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MD861_AV1?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=0",
        price: 43,
        category: "accesorios"
    },
    {
        id: 42, name: "Apple adaptador de corriente 12 W USB iPhone",
        description: "Adaptaador corriente 12v",
        image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MD836ZM?wid=1144&hei=1144&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1565069517492",
        price: 24,
        category: "accesorios"
    },
    {
        id: 43, name: "Apple MagSafe 2 60W cargador MacBook Pro ",
        description: "Magsafe 60W",
        image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MD565?wid=1144&hei=1144&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1575502706686",
        price: 85,
        category: "accesorios"
    },
    {
        id: 44, name: "Apple Magic Trackpad 2 Plata",
        description: "Magic Trackpad",
        image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MJ2R2_AV3?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=0",
        price: 139,
        category: "accesorios"
    },
    {
        id: 45, name: "Apple Smart Cover Funda iPad mini 4 Cacao ",
        description: "Smart Cover",
        image: "https://www.andorrafreemarket.com/media/catalog/product/cache/1/image/650x/040ec09b1e35df139433887a97daa66f/5/c/5c6fc1772792bb20060fae686207f85e05bf157a.jpg",
        price: 67,
        category: "accesorios"
    }
];

export { productos }