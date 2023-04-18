const express = require('express');
const {
    protect, 
    adminProtect,
    organizationProtect,
    studentProtect,
    attendeeProtect, 
    financialManagerProtect, 
    venueManagerProtect ,
    resourceManagerProtect,
    staffProtect} = require('../middleware/authMiddleware.js');

const { createOrganization,
    getAllOrganizations,
    deleteOrganization,
    updateOrganization,
    loginOrganization,
    resetPassword } = require('../controllers/organization.js');


const organizationRouter = express.Router();//create router

organizationRouter.post('/register',protect,adminProtect,createOrganization); //create organization
organizationRouter.post('/login',loginOrganization);//login organization
organizationRouter.get('/',protect,adminProtect,getAllOrganizations);//get all organizations
organizationRouter.delete('/:id',protect,adminProtect,deleteOrganization);//delete organization
organizationRouter.put('/:id',protect,adminProtect,organizationProtect,updateOrganization);//update organization
organizationRouter.put('/reset/:id',protect,adminProtect,organizationProtect,resetPassword);//reset password


module.exports = organizationRouter;