/**
 * The DefaultController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic reoutes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/DefaultService');
const deleteComment = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteComment);
};

const deleteRecipe = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteRecipe);
};

const getRecipeComments = async (request, response) => {
  await Controller.handleRequest(request, response, service.getRecipeComments);
};

const getRecipies = async (request, response) => {
  await Controller.handleRequest(request, response, service.getRecipies);
};

const postComment = async (request, response) => {
  await Controller.handleRequest(request, response, service.postComment);
};

const postRecipies = async (request, response) => {
  await Controller.handleRequest(request, response, service.postRecipies);
};

const updateComment = async (request, response) => {
  await Controller.handleRequest(request, response, service.updateComment);
};

const updateRecipe = async (request, response) => {
  await Controller.handleRequest(request, response, service.updateRecipe);
};


module.exports = {
  deleteComment,
  deleteRecipe,
  getRecipeComments,
  getRecipies,
  postComment,
  postRecipies,
  updateComment,
  updateRecipe,
};
