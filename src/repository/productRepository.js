import Product from '../models/product.js'

const findAll = async () => {
    try {
        const result = await Product.findAll();
        console.log(result)
        return result;

    } catch(err) {
        console.error(err)

        return null;
    }
}

const create = async (product) => {
    try {

        const newProduct = await Product.create(product);

        return newProduct;

    } catch(err) {
        console.error(err)

        return null;
    }
}

const findOne = async (id) => {
    try {
        return await Product.findOne({
            where: {
                id
            }
        })
    }
    catch(err) {
        console.error(err)
        return null;
    }
}

const update = async (product) => {
    try {
        const foundProduct =  await Product.findOne({
            where: {
                id: product.id
            }
        })

        foundProduct.set(product)

        foundProduct.save()

        return foundProduct;

    }
    catch(err) {
        console.error(err)
        return null;
    }
}

const remove = async (id) => {
    try {
        await Product.destroy({
            where: {
                id
            }
        })

        return true;
    }
    catch(err) {
        console.error(err)
        return null;
    }        

}


const ProductRepository = { findAll, create, findOne,update, remove };

export default ProductRepository; 
