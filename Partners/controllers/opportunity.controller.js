const OpportunityServices = require('../services/opportunities.service.js');
const makeResponse = require('../utils/response.js');

//get all opportunities for a specific event
const getOpportunities = async (req, res) => {
  const eventID = req.params.id;
  const result = await OpportunityServices.getOpportunities(eventID);
  return makeResponse({
    res,
    ...result,
  });
};

//add an opportunity
const createAnOpportunity = async (req, res) => {
  const result = await OpportunityServices.createOpportunity(req.body);

  return makeResponse({
    res,
    ...result,
  });
};

//get details about an opportunities
const getDetails = async (req, res) => {
  const result = await OpportunityServices.getDetails(req.params.id);
  return makeResponse({
    res,
    ...result,
  });
};

//add an opportunity
const updateAnOpportunity = async (req, res) => {
  const result = await OpportunityServices.updateAnOpportunity(
    req.params.id,
    req.body
  );

  return makeResponse({
    res,
    ...result,
  });
};

//add an opportunity
const deleteAnOpportunity = async (req, res) => {
  const result = await OpportunityServices.deleteAnOpportunity(req.params.id);

  return makeResponse({
    res,
    ...result,
  });
};

module.exports = {
  getOpportunities,
  createAnOpportunity,
  getDetails,
  updateAnOpportunity,
  deleteAnOpportunity,
};
