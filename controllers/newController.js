<<<<<<< HEAD
const db = require('../models')

const newController = {

}



module.exports = newController;
=======
const db = require("../models");

const newController = {
    //Find all news
	list: async (req, res, next) => {
		try {
			const news = await db.New.findAll({
				
			});

			return res.status(200).json({
				success: true,
				count: news.length,
				data: news,
			});
		} catch (err) {
			return res.status(500).json({
				success: false,
				error: 'Server Error',
			});
		}
	},
    //Store news

	store: async (req, res, next) => {
		try {
			const news = await db.New.create({
				name: req.body.name,
				content: req.body.content,
				image: req.body.image,
				userId: req.body.userId,
				categoryId: req.body.categoryId,
			});
			return res.status(201).json({
				success: true,
				data: news,
			});
		} catch (err) {
			return res.status(500).json({
				success: false,
				error: 'Server Error',
			});
		}
	},
    //Update News

	update: async (req, res, next) => {
		try {
			const news = await db.New.update(req.body, {
				where: { id: req.params.id },
			});

			if (!news) {
				return res.status(404).json({
					success: false,
					error: 'No news found',
				});
			}

			return res.status(201).json({
				success: true,
				data: {},
			});
		} catch (err) {
			return res.status(500).json({
				success: false,
				error: 'Server Error',
			});
		}
	},

    // Delete

	delete: async (req, res, next) => {
		try{
            const news = await db.New.findByPk(req.params.id);
    
            if(!news)  {
                return res.status(404).json({
                    success: false,
                    error: 'No data found'
                });
            }    
            await news.destroy();
    
            return res.status(200).json({
                success: true,
                data:{}
            });
            }   
            catch (err){
            return res.status(500).json({
                success: false,
                error: 'Server Error'
            });
            }	},

    // find news detail

	detail: async (req, res, next) => {
		try {
			const news = await db.New.findByPk(req.params.id);

			if (!news) {
				return res.status(404).json({
					success: false,
					error: 'No news found',
				});
			}

			return res.status(200).json({
				success: true,
				data: news,
			});
		} catch (err) {
			return res.status(500).json({
				success: false,
				error: 'Server Error',
			});
		}
	},
};

module.exports = newController;
>>>>>>> 84c923b6da09d0b38b8cb54cc117b293381f54e9
