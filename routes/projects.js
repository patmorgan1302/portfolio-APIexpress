let express = require('express');
let router = express.Router();
const Projects = require('../models/projects-schema')


router.put('/:id', function(req, res, next) {
    Projects.update({_id: req.params.id}, function (err, data){ 
        if (err){
            return res.json({err: 434, message: 'Error'})
        }
        res.json(data)
})})

router.post('/', function (req, res, next) {
    Projects.create(req.body, function (err, data){ 
        if (err){
            return res.json({err: 434, message: 'Error'})
        }
        res.json(data);
})})

router.delete('/:id', function(req, res, next) {
    Projects.deleteOne({_id: req.params.id}, function(err, data){
        if (err){
            return handleError(err);
        }
        res.json(data);

})})

router.get('/', function(req, res, next) {
    Projects.find({}, function (err, data){ 
        if (err){
            return res.json({err: 434, message: 'Error'})
        }   
        res.json(data)
})}) 
  

router.get('/:id', function(req, res, next) {
    Projects.find({_id:id }, function (err, data){ 
        if (err){
            return res.json({err: 434, message: 'Error'})
        }
   res.json(data)
})})

    


module.exports = router
