let express = require('express');
let router = express.Router();
const User = require('../models/users-shcema')


router.put('/:id', function(req, res, next) {
    User.update({_id: req.params.id}, function (err, data){ 
        if (err){
            return res.json({err: 434, message: 'Error'})
        }
        res.json(data)
})})

router.post('/', function (req, res, next) {
    User.create(req.body, function (err, data){ 
        if (err){
            return res.json({err: 434, message: 'Error'})
        }
        res.json(data);
})})

router.delete('/:id', function(req, res, next) {
    User.deleteOne({_id: req.params.id}, function(err, data){
        if (err){
            return handleError(err);
        }
        res.json(data);

})})

router.get('/', function(req, res, next) {
    User.find({}, function (err, data){ 
        if (err){
            return res.json({err: 434, message: 'Error'})
        }   
        res.json(data)
})}) 
  

router.get('/:id', function(req, res, next) {
    User.find({_id:id }, function (err, data){ 
        if (err){
            return res.json({err: 434, message: 'Error'})
        }
   res.json(data)
})})

    


module.exports = router
