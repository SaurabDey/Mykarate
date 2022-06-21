function fn() {
  
  var config = 
     {
        baseURL: 'https://jsonplaceholder.typicode.com',
        name: '/users'
     }
     
  var env = karate.env; // get system property 'karate.env'
  karate.log('karate.env system property was:', env);
  
 if (env == 'dev') 
 {
   config.baseURL= 'https://dev.jsonplaceholder.typicode.com/dev'
  } 
  
 else if (env == 'qa') 
  {
   config.baseURL= 'https://qa.jsonplaceholder.typicode.com/qa'
  }

 else if (env == 'uat') 
  {
   
   config.baseURL= 'https://uat.jsonplaceholder.typicode.com/uat'
  }
  
else if (env == 'prod') 
  {
   config.baseURL= 'https://prod.jsonplaceholder.typicode.com/prod'
  }
  
  
  
  return config;
}