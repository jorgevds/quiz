This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Simple quiz based on a React TypeScript tutorial published by freecodecamp. I took the liberty to expand on its functionality: the original quiz app only provided the option to play a randomised quiz of 10 questions. My app now provides the user the option to specify the amount of questions thesemselves, as well as the options to select both a category and a difficulty. And if one or the other is, or both are, left unspecified, the API will instead return a randomised set of questions. 

This app uses styled-components. I first made a separate stylesheet for each component, but finally refactored the CSS into just one stylesheet by extending the wrapper into their own specific wrappers.
