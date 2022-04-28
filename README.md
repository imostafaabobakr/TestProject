# Class System Rest Api using mongodb

## Description Of Our project 
### 1- mongodb database 
--------------------------------------------------------
### 2- make an docker image 
--------------------------------------------
### 3- connect docker with heroku 
------------------------------------------------------------------------
### 1- mongodb database 
we have 4 entites in our API are listed below : 
1. courses 
2. students 
3. reviews 
4. books
<!-- -->
each entity is managed using the following method: 
- **get** method used to get all the elements of the entity  
- **get using specifed id** get the data about a specifc element
- **patch** update data of an entity 
- **post** insert new element in our database . 
- **delete** delete an element using it's ID . 
<!-- -->
We linked Our database with Mongodb using Mongodb compress 
![image](https://user-images.githubusercontent.com/47832007/165441631-40182654-231c-4160-a128-ff63e6ac7b61.png)
-------------------------------------------------------------------------------------
### 2- make an docker image
after creating our api we want to make it avaliable on every computer so we made an docker image  and it's avaliable by using this command on cmd after installing docker :

### pull the image :```    docker pull skyho1d/project ```
### run the image :```     docker run -p 3000:3000 skyho1d/project``` 

### prove that the docker is running :

![image](https://user-images.githubusercontent.com/47832007/165444317-6f1021b2-c666-4261-b342-c9db13696d01.png)
![image](https://user-images.githubusercontent.com/47832007/165444481-6ac00bdf-d7b0-4789-b959-0003fe437afb.png)
![image](https://user-images.githubusercontent.com/47832007/165444607-2a05a85a-ed02-4b05-b7ec-f90149266241.png)
![image](https://user-images.githubusercontent.com/47832007/165444617-40f52903-c0de-4b9f-b80b-3e5c0b0a80f6.png)
----------------------------------------------------------------------------------------------------
### 3- connect docker with heroku 
we used heroku (container-based cloud Platform) with the deroku image to deploy our app 

https://tes1-project.herokuapp.com/courses **courses**

https://tes1-project.herokuapp.com/books **books**

https://tes1-project.herokuapp.com/student **students**

https://tes1-project.herokuapp.com/reviews **reviews**






