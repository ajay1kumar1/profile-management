const mongoose = require('mongoose')
const User = require("./../models/userModel")
const jwt = require('jsonwebtoken')

const createToken= (_id) =>{
    return jwt.sign({_id},process.env.SCRET,{expiresIn:'3d'});
}

//Admin dashboard
const dashboard = async (req, res) => {

    
    try {
        message = "comming from dashboard"

        res.status(200).json({message})
    } catch (error) {
        res.status(400).json({error: error.message})
    }

}

//Stock dashboard
const stock = async (req, res) => {

    
    try {
        message = "comming from stock dashboard"

        res.status(200).json({message})
    } catch (error) {
        res.status(400).json({error: error.message})
    }

}




module.exports = {dashboard,stock}