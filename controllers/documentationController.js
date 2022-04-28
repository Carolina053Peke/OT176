


const doc = require('../doc/ONG.postman_collection.json')

const documentationController = {
    loginDoc: async (req,res) =>{
        try {
            
            res.json(doc)

        } catch (error) {
            console.log('error', error)
        }

    }
}


module.exports = documentationController