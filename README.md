# url-shortner
This is a small NodeJS application thats creates shortened URL of the full URL provided as input.

I have utlizied an npm module "shortid" to create short URLs. 

I have used MongoDB as database to store the information of fullURL, its short URLs and clicks. 
The reason I chose MongoDb is:
 1.)Integrats well with NodeJS using Mongoose driver.
 2.)Each row in a MongoDB database is a document described in JSON.
 3.)The document data model is a powerful way to store and retrieve data and allows rapid development.
 4.)MongoDB Atlas is available on cloud.

In order to use this application:

Clone the repository
 git clone https://github.com/JaiKarvir/url-shortner.git
 
 Install npm modules:
 cd url-shortner
 npm init
 
 Run the application using following command:
 npm run devStart
 
 The application will run 5000 port number on localhost as follows:
 http://localhost:5000/
 
