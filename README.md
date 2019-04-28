# Installation
- Install node.js and run 
`npm install express --save`

# API
- /update
The task will update the degree and distance measurement, called when the device updated the value from each sensors. And contained two parameters, degree and distance.
  ###### Example
  `/update?degree=60&distance=15`

- /assign
The task will switch the state which has 3 states; first measurement, second measurement and calculating the result of distance. No parameter required.
