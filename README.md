 <img src=assets/images/display.png>

My project can be found [here](https://dwain-daniel.github.io/Javascript-Milestone-Project-/)
 
 <h1>Milestone Project</h1>

This project will be used to display all that I have learned so far during the Full Stack Developer Course with Code Institute.  
I will be using HTML, CSS and Javascript to build a memory game. The idea is to flip the cards
to find matching pairs of images. It is designed to be responsive on a wide range of devices and is a clean and simple site to navigate around for users of all ages to enjoy

<h3>UX</h3>

I want my site to be quite minimalistic and simple whilst remaining effective. I have used bright colours and an attractive font to show the fun nature of the game.
The game is quite self explanatory, with only one clickable button outside of the game board. This is the reset button, this initialises the reshuffling of cards and the game begins again. 

<h3>User Stories</h3> 

As a site user:

<li>I want a site that is easy to navigate through and to play a game that is fun and interactive</li>
<li>To be able to change the level of the game (easy, medium hard)</li>
<li>To be able to track my progress as I play with a running number of moves taken</li>
<li>To be able to see my results post game and how long I took to complete it and how many moves it took to complete the game</li>
<li>To easily be able to restart the game if I made too many mistakes or the time has reached too high a number</li>
<li>To easily understand how to start the game</li>


As the site developer I would like the site to include:

<li>A timer for the user to see how long they are taking</li>
<li>A move counter for the user to track the amount of moves taken so far</li>
<li>An overlay to appear upon creation of the game giving the user feedback of the their game</li>

<h3>Design Process</h3>

<img src=assets/wireframes/mobile.png>
<img src=assets/wireframes/tablet.JPG>
<img src=assets/wireframes/website.png>

The colours i have chosen are lawngreen, red and yellow. I have used these to make the page bright and attractive. The font I have used is 
Gloria Hallelujah, again this is in keeping with the fun and bright design I wanted to achieve.


<h3>Features</h3>

Upon the page loading the user will see the page title 'Flip or Flop' in large letters at the top of the screen.
below this a subtitle instructing the user to click a card to begin the game.

The cards will flash briefly so the user can see where each card is before they are hidden from their sight again.

Once the user has attempted their first match (initiated by clicking their second card) the timer will begin. 
Also the timer will begin at the same time.
The user will see a running total of the amount of moves made with each click. The timer will also start from the second click on the screen. 
Should the user want to restart the timer and the game they can click the restart button at the bottom of the page. 
This will reshuffle the cards and the reset both the move counter and the timer.
Should the user complete the game, a game over overlay will appear which will detail the amount of moves taken and the time taken to complete the game.


<h3>Features left to implement</h3>

I would like to add a number of features going forward such as: <br>
<li>Increased difficulty levels - this could be the board increasing in size from a 4x4 grid to a 5x5 and a 6x6</li>
<li>Customisable colour schemes</li>
<li>I would have liked to implement a leaderboard showing the quickest times taken and the least amount of moves taken</li>
<li>At the higher difficulty levels the timer could be set to count down instead, to increase the pressure on the user.</li>


<h3> Technologies Used </h3>

I have built my site using: 

[<h3>CSS</h3>](https://en.wikipedia.org/wiki/CSS) 
I have used CSS to style my website/game

[<h3>HTML</h3>](https://en.wikipedia.org/wiki/HTML) 
I have used HTML as the main language to create my website.

[<h3>JavaScript</h3>](https://en.wikipedia.org/wiki/JavaScript)
Javascript has been used to apply functionality to the game.

[<h3>Balsamiq</h3>](https://balsamiq.com/#)
I used Balsamiq to help create my template and design a quality game. 

[<h3>Google Fonts</h3>](https://fonts.google.com/)
Google fonts were used to import the 'Gloria Hallelujah' font into the style.css file which is used throughout the project.

[<h3>GitHub</h3>](https://github.com/)
I have used Github as the hosting site for my code and GitPages to deploy my game.

<h3>Git</h3>
Git is used as version control software to commit and push code to the GitHub repository where the source code is stored.

[<h3>Techsini</h3>](http://techsini.com/multi-mockup/index.php)
I have used this to create a mock up of the site on different devices


<h3>Testing</h3> 

I have tested my code and my functionality of the page thoroughly

[JS Hint](https://jshint.com/)
The only issues that showed in the JShint report was the use of 'let' which is only available in ES6, this didnt causing any major concern. 
There were a number missing semi-colons in the code which I later added.
<img src=assets/testing/java.PNG>

[Google Mobile Friendly Test](https://search.google.com/test/mobile-friendly)
<img src=assets/testing/mobile-testing.PNG>

[Lighthouse Report](https://developers.google.com/web/tools/lighthouse)
<img src=assets/testing/lighthouse.PNG>

[CSS Validator](https://jigsaw.w3.org/css-validator/)
<img src=assets/testing/css.PNG>

[HTML Validator](https://validator.w3.org/)
<img src=assets/testing/html.PNG>

My HTML received a warning for the lack of labelling on my 'section' section. Overall this was not a major issue.

[Browserling](https://www.browserling.com/)
<img src=assets/testing/browser.PNG>

I have used Browserling as a tool to test my site was responsive across a variety of broswers

<h3>Deployment</h3>

I have used GitHub Pages to deploy the page using the following steps:

<li>All code was written on GitPod, once finished I committed and pushed my code to GitHub</li>
<li>I logged in to GitHub and located the GitHub Repository Milestone Project 1</li>
<li>I then clicked the Settings button on the menu.</li>
<li>I scrolled down the Settings page to the "GitHub Pages" Section.</li>
<li>Under "Source" I selected "Master Branch".</li>
<li>The URL was was then published in the "GitHub Pages" section.</li>

<h3>Credits</h3>

Media - I found my images used for the card faces on https://pixabay.com/illustrations/smiley-faces-emoji-emoticons-5889752/

<h3>Acknowledgements</h3> 

I received my initial inspiration for my game on [Youtube](https://www.youtube.com/watch?v=3uuQ3g92oPQ).

I also used the game design found [here](https://scotch.io/tutorials/how-to-build-a-memory-matching-game-in-javascript#toc-1-shuffing-cards) this is what my game has been based upon

[Wikipedia](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle) was also used for further information on the Fisher-Yates shuffle

I used further learning resources to aid me with the skills required.
1. https://www.ci-resources.online/js.html
2. https://www.udemy.com/course/the-complete-javascript-course/
3. https://www.codecademy.com/learn/introduction-to-javascript

Also I thank my mentor Spencer Barriball for helping me and providing the guidance I needed during our Milestone Project meetings, his help has been invaluable.
