let express = require('express');
let router = express.Router();
const Education = require('../models/education-schema')


router.put('/:id', function(req, res, next) {
    Education.update({_id: req.params.id}, function (err, data){ 
        if (err){
            return res.json({err: 434, message: 'Error'})
        }
        res.json(data)
})})

router.post('/', function (req, res, next) {
    Education.create(req.body, function (err, data){ 
        if (err){
            return res.json({err: 434, message: 'Error'})
        }
        res.json(data)
        console.log(request);
})})

router.delete('/:id', function(req, res, next) {
    Education.deleteOne({_id: req.params.id}, function(err, data){
        if (err){
            return handleError(err);
        }
        res.json(data);

})})

router.get('/', function(req, res, next) {
    Education.find({}, function (err, data){ 
        if (err){
            return res.json({err: 434, message: 'Error'})
        }   
        res.json(data)
})}) 
  

router.get('/:id', function(req, res, next) {
    Education.find({_id:id }, function (err, data){ 
        if (err){
            return res.json({err: 434, message: 'Error'})
        }
   res.json(data)
})})

    


module.exports = router
