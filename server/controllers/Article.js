const Article = require('../models/Article')

class ArticleController {

   static create(req, res, next) {

      const inputs = {
         title: req.body.title,
         content: req.body.content,
         image: (req.body.image) ? req.body.image : ''
      }

      Article
      .create(inputs)
      .then(article => {
         res.status(201).json({message: 'Article creation success'})
      })
      .catch(next)
   }

   static readAll(req, res, next) {
      console.log('in read all')
      Article
      .find({user: req.decoded.userId})
      .then(articles => {
         res.status(200).json({articles})
      })
      .catch(next)
   }

   static readOne(req, res, next) {
      console.log('in read one')
      Article
      .find({_id: req.decoded.userId})
      .then(article => {
         res.status(200).json({article})
      })
      .catch(next)
   }


   static update(req, res, next) {
      
      Article
      .find(req.body)
      .then(() => {
         res.status(200).json({message: 'Article update success'})
      })
      .catch(next)
   }

   static delete(req, res, next) {

      Article
      .deleteOne({_id: req.params.id})
      .then(results => {
         console.log(results)
         res.status(200).json({message: 'Article deletion successful'})
      })
      .catch(next)
   }


   static uploadImage(req, res, next) {}
}


module.exports = ArticleController