const express = require('express')
const router = express.Router()
const workouts = require('../models/Workout')

router.get('/',(req,res)=>{
    res.json({
        message:'get all workouts'
    })
})

//get single outcome
router.get('/:id',(req,res)=>{
    res.json('get single workout')
})

router.post('/',async (req,res)=>{

    const {title,load, reps} = req.body
    try{
        const workout = await workouts.create({title, load, reps})
        res.status(200).json(workout)
    }catch(err){
        res.status(400).json({error:err.message})
    }
    
})

//delete a workout
router.delete('/:id',(req,res)=>{
    res.json('remove')
})

router.patch('/:id',(req,res)=>{

})




module.exports = router