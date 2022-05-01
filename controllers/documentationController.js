




const documentationController = {
    fetchDoc: async (req,res) =>{
        try {
            
            res.json(doc)

        } catch (error) {
            console.log('error', error)
        }

    }
}


module.exports = documentationController