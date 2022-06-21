 
 Feature: studing 
 
    
 Scenario: create a user and then get it by id
    
    * def user = read ('classpath:examples/test.json')
    
    Given url baseURL + name
    And request user
    When method post
    Then status 201

    * def id = response.id
    * print 'created id is: ', id