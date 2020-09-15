/* eslint-disable no-unused-vars */
const  Service = require('./Service');

/**
* Deletes the comment of the provided id.
*
* recipeId Integer 
* commentId Integer 
* no response value expected for this operation
* */
const deleteComment = ({ recipeId, commentId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        recipeId,
        commentId,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Delete a Recipe
*
* recipeId Integer 
* no response value expected for this operation
* */
const deleteRecipe = ({ recipeId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        recipeId,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Gets all the comments for the given recipe
*
* recipeId Integer 
* returns List
* */
const getRecipeComments = ({ recipeId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        recipeId,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Return all recipies
*
* returns List
* */
const getRecipies = () => new Promise(
  async (resolve, reject) => {
    try {
        let recipeList = [{
            id:1,
            isPublic: true,
            name: "kebab",
            chef: "Joao",
            steps:['put the vegtables on top of the wrap'],
            ingredients: [
                {
                name: 'tomato',
                amount: 1,
                },
                {name: 'lamb',
                amount: 23,
                }
            ]
        }]
      resolve(Service.successResponse(
          recipeList
      ,  200));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Creates a new comment
*
* recipeId Integer 
* comment Comment 
* no response value expected for this operation
* */
const postComment = ({ recipeId, comment }) => new Promise(
  async (resolve, reject) => {
      try {
          resolve(Service.successResponse({
              recipeId,
              comment,
          }));
      } catch (e) {
          reject(Service.rejectResponse(
              e.message || 'Invalid input',
              e.status || 405,
          ));
      }
  },
);
/**
* Create a new recipie
*
* body Recipe Recipie to add
* no response value expected for this operation
* */
const postRecipies = ({ body }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        body,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Updates The comment.
*
* recipeId Integer 
* commentId Integer 
* comment Comment 
* no response value expected for this operation
* */
const updateComment = ({ recipeId, commentId, comment }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        recipeId,
        commentId,
        comment,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Updates an Existing recipie with the given ID
*
* recipe Recipe 
* no response value expected for this operation
* */
const updateRecipe = ({ recipe }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        recipe,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

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
