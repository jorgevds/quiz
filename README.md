This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Quiz yourself

Simple quiz based on a React TypeScript tutorial published by freeCodeCamp (https://www.freecodecamp.org/news/how-to-build-a-quiz-app-using-react-and-typescript/). It makes a fetch call to the quiz API hosted by Open Trivia DB (https://opentdb.com/) and then gives those questions a little more structure. It's a very simple quiz app, in line with the tutorial, but provided for a fun and helpful way of making a TypeScript project. This repo holds my first ever use of TypeScript!

### Custom questions fetched and returned

As I was following along (on x2 speed, as one does), I felt I didn't quite like how the questions and difficulty were randomised every time. I wondered if it could prove useful to figure out this part of the functionality myself. So I set out to do a whole bunch of console.logging, making my own fetches to the API to really figure out how it worked. I then took quite a long time, admittedly, trying to return the expected results. Luckily, I pushed through and persevered, and all of those headaches are long behind me. The red squiggly lines/spaghetti still haunt me in my dreams some nights.

![No more spaghetti pasta](https://user-images.githubusercontent.com/54646908/104853950-786bbd00-5904-11eb-888b-631f47c5b9ba.png)
###### No more spaghetti pasta :spaghetti:

Above is the config code I settled on to enable this added functionality. My app now provides the user the option to specify the amount of questions thesemselves, as well as the options to select a category and/or a difficulty. And if one or the other is, or both are, left unspecified, the API will instead return a randomised set of questions. 

![Choose the form of the destroyer](https://user-images.githubusercontent.com/54646908/104853946-76096300-5904-11eb-9b9b-aac6688d8953.png)
###### Choose the form of the destroyer :ghost:

### CSS - styled-components

This app uses styled-components. I first made a separate stylesheet for each component, but finally refactored the CSS into just one stylesheet by extending the wrapper into their own specific wrappers. Some of these stylesheets use parameters and ternary operators in order to dynamically change the CSS, usually only the background color of a button. This is especially good feedback for getting an answer right or wrong.

![Another CSS tool under my belt](https://user-images.githubusercontent.com/54646908/104853949-786bbd00-5904-11eb-9e96-bf83de92a508.png)
###### Another CSS tool under my belt :construction_worker:

### Conclusion

All in all a very fun project. The length of the original tutorial pales in comparison to the time I spent learning more about fetch calls, TypeScript, styled components, and solving problems that I myself introduce. While my time watching the tutorial was mostly spent coding along, I really had to dive in once I wanted to introduce another feature into the app. Certainly a good exercise learning to read and understand other people's code. And questioning the code I was presented and asked to copy over provided me with lots of learning opportunities!

### What I can still do

There's lots of room for improvement on this one! Some are very minor fixes, others are pretty major. 

- [ ] First, the background could change depending on the selected topic, and begin with and return to a default/neutral/standard/inoffensive/house style background image at the start and end of the quiz. That would help set the mood of the quiz experience a little better than a seemingly random beach background. 

- [ ] Second, I think file structure is very off in this project. I made this app many moons ago, and looking back now, it's certainly a bit of a mess. I understand the tutorial was only an hour long, but this is something I could easily fix myself. 

- [ ] Third, I could change a lot about the loading state (i.e. make it a lot more presentable than just the word 'loading') and the selection criteria. The Quiz API only accepts a predetermined maximum amount of questions based on the category and/or difficulty, and currently my app just errors out in the console whenever a user requests too many questions. I laboriously tested how many questions you could ask in each category and simply added a note in the category selection to tell the user not to exceed the amount, but I have already received feedback from a user that they did not know that that was what it was for. My poor inexperienced brain thought long and hard before finishing (read: abandoning) the project about how the max value would change depending on the selected category, but couldn't quite figure it out then. I would still like to change this in future.

- [ ] Fourth, login functionality! It would make sense to allow for user login and then provide stats like: favorite category, percentage of correct answers vs total answers given. Sum of all the end scores users have received. And then throw that data into an old graph or two, why not? Maybe I could even orchestrate some kind of multiplayer sessions if I provided login functionality. Fun!

I'm sure there's lots more to learn from this project, and things I could do to improve it with what knowledge I have learned now. Best to not linger on the past! If I do end up revisiting this project some time in the future, I should hope to add at least all of these 4 features, and maybe even more. But until then, off to the next project!
