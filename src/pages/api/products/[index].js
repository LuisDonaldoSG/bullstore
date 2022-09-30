//import product from '@models/product'
import { NextApiRequest, NextApiResponse } from 'next'
import data from './localData.json';

const getAllProducts = async(request = NextApiRequest ,response = NextApiResponse ) => {

    try {

        const index = parseInt(request.query.index)

        //const productsPaginated = await product.find().skip(index).limit(50)
        //const LengthproductsPaginated = await product.count()
        let productsPaginated = data.slice(index, index+50)


        response.statusCode = 200
        response.setHeader('Content-type','aplication/json')
        response.end(JSON.stringify({length: data.length,data: productsPaginated}))




    } catch (error) {
        console.log(error);
    }

}

export default getAllProducts