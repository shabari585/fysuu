const express = require('express');
const router = express.Router();
const passport = require('passport');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');
const Order = require('../models/order');
const bcrypt = require('bcryptjs');

// Register
router.post('/register', (req, res, next) => {
    let newUser = new User({
        email: req.body.email,
        mobile: req.body.mobile,
        name: req.body.name,
        password: req.body.password,
        address: req.body.address,
        rewardPoints: req.body.rewardPoints
    });

    User.addUser(newUser, (er, user) => {
        if (er) {
            res.json({ success: false, msg: 'Failed to Register' })
        } else {
            res.json({ success: true, msg: user });

        }
    });
});

// Update User
router.post('/update-user', (req, res, next) => {

        id = req.body.id;
        email= req.body.email;
        mobile= req.body.mobile;
        name= req.body.name;

    User.findOneAndUpdate({_id:id},{$set:{email : email , mobile : mobile , name : name}}).exec((err,us)=>{
        if(err){
            res.json({success:false,msg:err});
        }else{
            res.json({success:true,msg:us});
            // if(us.length > 0){
            // }else{
            //     res.json({success:false,msg:'Something went wrong'});
            // }
        }
    });
});

router.post('/delete-address',(req,res,next)=>{

    user_id = req.body.user_id;
    address = req.body.address;

    User.update({_id:user_id},{$pullAll:{address:[address]}}).exec((err,user)=>{
        if(err){
            res.json({success:false,msg:err});
        }else{
            if(user){
                res.json({success:true,msg:user});
            }
        }
    });
    
});
// Save address
router.post('/save-address', (req, res, next) => {

        user_id = req.body.user_id;
        address = req.body.address;

    User.find({_id:user_id},(err,us)=>{
        if(err){
            res.json({success:false,msg:err});
        }
        if(us){
            // user exists on the sent id
            // check if address already exists
            let add = us.address;
            if(add == null){
                // insert
                User.findOneAndUpdate({ _id: user_id }, { $addToSet: {address : address} }).exec((err, us) => {
                    if (err) {
                        res.json({ success: false, msg: err });
                    } else {
                        res.json({ success: true, msg: us });
                        // if(us.length > 0){
                        // }else{
                        //     res.json({success:false,msg:'Something went wrong'});
                        // }
                    }
                });
            }
        }
    });
});

router.post('/update-pwd',(req,res,next)=>{
    user_id = req.body.u_id;
    password = req.body.password;

    User.find({_id:user_id},(err,user)=>{
        // res.json({success:false,msg:user[0].email});
        if(user){
            User.comparePassword(password, user[0].password, (err, isMatch) => {
                if (err) throw err;
                if (isMatch) {
                // Password matched
                    bcrypt.genSalt(10, (err, salt) => {
                        bcrypt.hash(password, salt, (err, hash) => {
                            if (err) throw err;
                            user[0].password = hash;
                            user[0].save((err,saved)=>{
                                if(err){
                                    res.json({ success: false, msg: err });   
                                }else{
                                    res.json({ success: true, msg: saved });   
                                    // if(saved.length > 0){
                                    // }
                                }
                            });
                        })
                    })
                } else {
                    res.json({ success: false, msg: 'Wrong Password' });
                }
            })
        }
    });

});

// Find Email
router.get('/find-email/:email', (req, res, next) => {
    e = req.params.email;

    User.find({email: e},(err,re)=>{
        if(re){
            if(re.length>0){
                res.json({success:true, msg:'User Found'});
            }else{
                res.json({succcess:false, msg:'No user found'});
            }
        }else{
            res.json({succcess:false, msg:'No user found'});
        }
    });
});

// Find Mobile
router.get('/find-mobile/:mobile', (req, res, next) => {

    m = req.params.mobile;

    User.find({mobile: m},(err,re)=>{
        if (re) {
            if (re.length > 0) {
                res.json({ success: true, msg: 'User Found' });
            } else {
                res.json({ succcess: false, msg: 'No user found' });
            }
        } else {
            res.json({ succcess: false, msg: 'No user found' });
        }
    });
});

// Authenticate
router.post('/authenticate', (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;

    User.getUserByEmail(email, (err, user) => {
        if (err) throw err;
        if (!user) {
            res.json({ success: false, msg: 'User not found' });
        }
        User.comparePassword(password, user.password, (err, isMatch) => {
            if (err) throw err;
            if (isMatch) {
                const token = jwt.sign({ data: user }, config.secret, {
                    expiresIn: 604800 //A week in seconds
                });

                res.json({
                    success: true,
                    token: 'JWT ' + token,
                    user: {
                        id: user._id,
                        name: user.name,
                        username: user.username,
                        email: user.email,
                        mobile: user.mobile
                    }
                })
            } else {
                res.json({ success: false, msg: 'Wrong Password' });
            }
        })
    })
});
// Find Email
router.get('/get-address/:user_id', (req, res, next) => {
    id = req.params.user_id;

    User.find({ _id: id }, (err, re) => {
        if (re) {
            if (re.length > 0) {
                res.json({ success: true, msg: re });
            } else {
                res.json({ succcess: false, msg: 'No user found' });
            }
        } else {
            res.json({ succcess: false, msg: 'No user found' });
        }
    });
});

// Get user's reward points
router.get('/get-user-rewards/:user_id', (req, res, next) => {
    id = req.params.user_id;

    User.find({ _id: id }, (err, re) => {
        if (re) {
            if (re.length > 0) {
                res.json({ success: true, msg: re[0].rewardPoints });
            } else {
                res.json({ succcess: false, msg: 'No user found' });
            }
        } else {
            res.json({ succcess: false, msg: 'No user found' });
        }
    });
});

// Post order
router.post('/post-order', (req, res, next) => {
    order = req.body.order_dets;

    let newOrder = new Order({
        order: order
    });
    newOrder.save((err,or)=>{
        if(err){
            res.json({success:false,msg:err});
        }else{
            res.json({success:true,msg:or});
        }
    });
});

router.get('/get-user-orders/:user_id', (req, res, next) => {

    user_id = req.params.user_id;
    user.find({ _id: user_id }, (err, user) => {
        if (err) {
            res.json({ success: false, msg: err });
        } else {
            return res.json({ success: true, msg: user });
        }
    });
});


module.exports = router;