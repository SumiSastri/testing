# test-jasmine-typescript

Set-up

How to set up your own webpack for jasmine useful up to 15 minutes
https://www.youtube.com/watch?v=aBYwNqiWYmU

(introduction upto 12 minutes - then good for Jest)
https://www.youtube.com/watch?v=r9HdJ8P6GQI

(good for the first simple test - jesse warden )
https://www.youtube.com/watch?v=eVpXkyN0zOE&t=999s


## Why test?
- Make sure that functions work
- Detect errors
- Understand complexity of logic in simple steps


### Unit tests
- tests are modular, small components each test checks one thing 
- tests that logic of a function works at every step
- therefore these tests can not depend on APIs for data
- data is tested in memory(browser)(mocking of data in lets/ vars) 


### Integration tests
 - functions that depend on other functions to execute
 - external integrations work with the app
 - how do all the moving parts integrate and work

### End-to-end testing
 - whole app testing
 - programatic testing
 - auto-tests/ continuous integration (CI)


Software dev cycle - business requirements/ discovery/ design/  tech spec / pseudo code/  component testing / integration testing, continuous integration testing 

Tests need - Test runner/ Test assertion library - expectations, methods, conditions (Jest-Jasmine - do both) -- Headless browser (Puppeteer does this)