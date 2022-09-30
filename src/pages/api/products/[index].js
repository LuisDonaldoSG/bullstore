import product from '@models/product'
import { NextApiRequest, NextApiResponse } from 'next'

const getAllProducts = async(request = NextApiRequest ,response = NextApiResponse ) => {

    try {

        const index = parseInt(request.query.index)

        const productsPaginated = await product.find().skip(index).limit(50)
        const LengthproductsPaginated = await product.count()

        response.statusCode = 200
        response.setHeader('Content-type','aplication/json')
        response.end(JSON.stringify({length:LengthproductsPaginated ,data: productsPaginated}))

    } catch (error) {
        console.log(error);
    }

}

export default getAllProducts