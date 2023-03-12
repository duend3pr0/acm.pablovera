

class ProductManager {

                #autoId = 1;

            constructor()
                {
                    this.products = [];
                }

                getProducts()
                {
                return this.products;
                }
                addProduct(title,description, price, thumbnail, stock, code)
                {
                    if (!title || !description || !price || !thumbnail || !stock || !code){
                        return 'Se deben completar todos los campos'
                    }else
                    {
                 let existeCode = this.products.find((prod) => prod.code === code);
                 let msgError = "Ya existe un code con el valor ingresado, debes ingresar uno diferente"
                 if (!existeCode)
                    {

                    this.products.push(
                        {
                        title,
                        description,
                        price,
                        thumbnail,
                        stock,
                        code,
                        id: this.#autoId

                        })
                        } else
                            {
                            return msgError;
                            }
                        this.#autoId++
                    }
                }
                getProductById(id)
                {
                  let product = this.products.filter((prod) => prod.id === id);
                   if(!product){
                       return  `No hay ningun producto con el ID ${id}`
                   } else{
                       return product;
                   }



                }
            }






let manager1 = new ProductManager();
console.log(manager1.getProducts());
manager1.addProduct('Producto prueba1','Este es un producto de prueba', 100, 'Sin ruta de imagen',25, '2312');
manager1.addProduct('Producto prueba2','Este es un producto de prueba', 100, 'Sin ruta de imagen',25, '2313');
manager1.addProduct('Producto prueba3','Este es un producto de prueba', 100, 'Sin ruta de imagen',25, '2314');
console.log(manager1.getProducts());
console.log(manager1.addProduct('Producto prueba4','Este es un producto de prueba', 100, 'Sin ruta de imagen',25));
console.log(manager1.getProductById(2));
console.log(manager1.getProductById(100));



