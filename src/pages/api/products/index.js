import product from '@models/product'
import { IncomingMessage, ServerResponse } from 'http'

const getAllProducts = async(request = IncomingMessage ,response = ServerResponse ) => {

    try {
        const products = await product.find()

        console.log(request.query);

        response.statusCode = 200
        response.setHeader('Content-type','aplication/json')
        response.end(JSON.stringify(products))

    } catch (error) {
        console.log(error);
    }

}

export default getAllProducts