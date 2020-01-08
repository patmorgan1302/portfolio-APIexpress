let express = require('express');
let router = express.Router();
const Info = require('../models/info-schema');


router.put('/:id', function(req, res, next) {
    Info.update({_id: req.params.id}, function (err, data){ 
        if (err){
            return res.json({err: 434, message: 'Error'})
        }
        res.json(data)
})})

router.post('/', function (req, res, next) {
    Info.create(req.body, function (err, data){ 
        if (err){
            return res.json({err: 434, message: 'Error'})
        }
        res.json(data);
})})

router.delete('/:id', function(req, res, next) {
    Info.deleteOne({_id: req.params.id}, function(err, data){
        if (err){
            return handleError(err);
        }
        res.json(data);

})})

router.get('/', function(req, res, next) {
    Info.find({}, function (err, data){ 
        if (err){
            return res.json({err: 434, message: 'Error'})
        }   
        res.json(data)
})}) 
  

router.get('/:id', function(req, res, next) {
    Info.find({_id:id }, function (err, data){ 
        if (err){
            return res.json({err: 434, message: 'Error'})
        }
   res.json(data)
})})

    


module.exports = router
