/**
 * @swagger
 * /all/users:
 *  get:
 *          summary: This api is used for get all the users
 *          description: This api is used for get all the users
 *          responses:
 *              200:
 *                  description: Get all users
 *                  content:
 *                      application/json:
 *                              type: array
 *
 */

/**
 * @swagger
 * /all/community:
 *  get:
 *          summary: This api is used for get all the communities
 *          description: This api is used for get all the communities
 *          responses:
 *              200:
 *                  description: Get all communities
 *                  content:
 *                      application/json:
 *                              type: array
 */

/**
 * @swagger
 * /get/singleCommunityMessage:
 *  get:
 *          summary: This api is used for get the chat from a community
 *          description: This api is used for get chat from a community
 *          parameters:
 *              - in: query
 *                name: id
 *                schema:
 *                   type: alphanumeric
 *                   required: true
 *                description: Id of a community
 *          responses:
 *              200:
 *                  description: Get community chat
 *                  content:
 *                      application/json:
 *                              type: array
 *
 */

/**
 * @swagger
 *  components:
 *      schema:
 *          Siginup:
 *               type: object
 *               properties:
 *                      name:
 *                          description: UserName
 *                          type: string
 *                      email:
 *                          description: Email Id
 *                          type: string
 *                      password:
 *                          description: Email Id
 *                          type: string
 *                          format: password
 */

/**
 * @swagger
 * /signup:
 *  post:
 *      summary: This api is used to Signup
 *      description: For adding new users
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schema/Siginup'
 *      responses:
 *            200:
 *                 description: Added successfully
 *
 *
 */

/**
 * @swagger
 *  components:
 *      schema:
 *          Login:
 *               type: object
 *               properties:
 *                      email:
 *                          description: Email Id
 *                          type: string
 *                      password:
 *                          description: Email Id
 *                          type: string
 *                          format: password
 */

/**
 * @swagger
 *  /login:
 *  post:
 *      summary: This api is used to Login
 *      description: For login using Email and Password
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schema/Login'
 *      responses:
 *            200:
 *                 description: Login successfully
 *
 */

/**
 * @swagger
 *  components:
 *      schema:
 *          newcommunity:
 *               type: object
 *               properties:
 *                      Name:
 *                          description: CommunityName
 *                          type: string
 *                      Topic:
 *                          description: Topic
 *                          type: string
 *                          format: string
 *                      Description:
 *                          description: Description
 *                          type: string
 *                          format: string
 *                                            
 */

/**
 * @swagger
 *  /new/community:
 *  post:
 *      summary: For Creating New Community
 *      description: For Creating New Community after a user logedin
 *      parameters:
 *            - in: header
 *              name: token
 *              type: string
 *              format: uuid
 *              required: true    
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#components/schema/newcommunity'
 *      responses:
 *            200:
 *                 description: Created successfully
 *
 */

/**
 * @swagger
 *  /follow/user:
 *  post:
 *      summary: Follow a User
 *      description: For following users
 *      parameters:
 *            - in: header
 *              name: token
 *              type: string
 *              format: uuid
 *              required: true    
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                            UserName:
 *                                description: UserName of that person who we want to follow
 *                                type: string
 *                            uid:
 *                              description: Id of that user
 *                              type: string
 *                            
 *                      
 *      responses:
 *            200:
 *                 description: successfull
 */



/**
 * @swagger
 *  /un/follow:
 *  post:
 *      summary: Unfollow a User
 *      description: For unfollowing users
 *      parameters:
 *            - in: header
 *              name: token
 *              type: string
 *              format: uuid
 *              required: true    
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                            _id:
 *                              description: Id of that user
 *                              type: string
 *                            
 *                      
 *      responses:
 *            200:
 *                 description: successfull
 */


/**
 * @swagger
 *  /my/friends:
 *  get:
 *      summary: All followers
 *      description: Get all the friends
 *      parameters:
 *            - in: header
 *              name: token
 *              type: string
 *              format: uuid
 *              required: true    
 *                            
 *                      
 *      responses:
 *            200:
 *                 description: successfull
 */

