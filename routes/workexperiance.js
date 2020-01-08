var express = require('express');
var router = express.Router();
const Workexp = require('../models/workexp-schema');


router.put('/:id', function(req, res, next) {
    Workexp.update({_id: req.params.id}, function (err, data){ 
        if (err){
            return res.json({err: 434, message: 'Error'})
        }
        res.json(data)
})})

router.post('/', function (req, res, next) {
    Workexp.create(req.body, function (err, data){ 
        if (err){
            return res.json({err: 434, message: 'Error'})
        }
        res.json(data);
})})

router.delete('/:id', function(req, res, next) {
    Workexp.deleteOne({_id: req.params.id}, function(err, data){
        if (err){
            return handleError(err);
        }
        res.json(data);

})})

router.get('/', function(req, res, next) {
    Workexp.find({}, function (err, data){ 
        if (err){
            return res.json({err: 434, message: 'Error'})
        }   
        res.json(data)
})}) 
  
router.get('/:id', function(req, res, next) {
    Workexp.find({_id:id }, function (err, data){ 
        if (err){
            return res.json({err: 434, message: 'Error'})
        }
   res.json(data)
})})

    

module.exports = router;
