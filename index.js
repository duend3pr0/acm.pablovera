

class ProductManager {

                autoId = 1;
            constructor() {
                {
                    this.products = [];
                }
            }
                getProducts()
                {
                  console.log(this.products);

                }
                addProduct(title,description, price, thumbnail, code, stock)
                {
                    this.products.push({
                        title,
                        description,
                        price,
                        thumbnail,
                        code,
                        stock,
                        id : this.autoId

                    })
                    this.autoId++
                }
                getProductById(id){
                let productoEncontrado = this.products.filter(id=> )
                }



        }


let product1 = new ProductManager();

product1.addProduct('Producto prueba','Este es un producto de prueba', 100, 'Sin ruta de imagen', 'abc123', 25);
product1.addProduct('Producto prueba2','Este es un producto de prueba', 100, 'Sin ruta de imagen', 'abc123', 25);
product1.addProduct('Producto prueba3','Este es un producto de prueba', 100, 'Sin ruta de imagen', 'abc123', 25);
product1.getProducts();


//product1.addProduct('Original Juan Herer', 'Sativa', 1000, 'Sin ruta', 'abcd1234', 30);
//product1.getProducts();
