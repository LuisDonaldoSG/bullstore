import product from '@models/product'
import { IncomingMessage, ServerResponse } from 'http'

const getAllProducts = async(request = IncomingMessage ,response = ServerResponse ) => {

    try {

        const index = parseInt(request.query.index)

        const productsPaginated = await product.find().skip(index).limit(50)

        response.statusCode = 200
        response.setHeader('Content-type','aplication/json')
        response.end(JSON.stringify(productsPaginated))

    } catch (error) {
        console.log(error);
    }

}

export default getAllProducts