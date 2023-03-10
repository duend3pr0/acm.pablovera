

class ProductManager {

                autoId = 1;
                code = 'abc123';
            constructor() {
                {
                    this.products = [];
                }
            }
                getProducts()
                {
                  console.log(this.products);

                }
                addProduct(title,description, price, thumbnail, stock)
                {
                    let existeCode = this.products.filter(product => product.code === this.code);
                    

                    if(existeCode)
                    this.products.push({
                        title,
                        description,
                        price,
                        thumbnail,
                        stock,
                        code: this.code,
                        id : this.autoId

                    })
                    this.autoId++
                    this.code = this.code+this.autoId;
                }
               


        }


let product1 = new ProductManager();

product1.addProduct('Producto prueba','Este es un producto de prueba', 100, 'Sin ruta de imagen', 25);
product1.addProduct('Producto prueba2','Este es un producto de prueba', 100, 'Sin ruta de imagen', 25);
product1.addProduct('Producto prueba3','Este es un producto de prueba', 100, 'Sin ruta de imagen', 25);
product1.getProducts();


