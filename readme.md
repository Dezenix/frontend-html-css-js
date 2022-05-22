# Deployed link
https://js-pig-game.herokuapp.com/

# GAME RULES

1. The game has 2 players, playing in rounds.
2. In each turn, a player rolls a dice as many times as he wishes. Each result get added to his ROUND score.
3. BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn.
4. The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn.
5. The first player to reach 100 points on GLOBAL score wins the game.

## Additional Rules

1. A player looses their ENTIRE score when he rolls two double 6 in row. After that, it's the next player's turn.
2. The player will loose their current score when one of the dice is a 1. After that, it's the next player's turn.
3. Players can change the score to win by entering a new number in the "INPUT SCORE".

# Run locally

Simply open index.html in your internet browser or enter the file path in the URL.

# Heroku deployment

Heroku allows web-hosting but what do you know? They do not host static websites straight up with HTML, CSS, and JS.

Initial attempt of trying to do so, I was hit with the following Build Log error:

```
!     No default language could be detected for this app.
HINT: This occurs when Heroku cannot detect the buildpack to use for this application automatically.
See https://devcenter.heroku.com/articles/buildpacks
!     Push failed
```

After the anticipated relief of deploying a day’s worth of hard work, the push failed log showed up. So what did we do wrong this time? What is a buildpack? Buildpacks are composed of a set of scripts depending on the programming language used. These scripts are responsible in transforming the deployed code to be excuted on a dyno manager. (The scripts gather the dependencies, which then outputs generated code. When pushing onto Heroku, the code is received by the slug compiler which transforms the repo into a slug and off to a dyno for execution).

Listed on the Heroku reference page, the supported buildpacks offered are: Ruby, Node.js, Clojure, Python, Java, Gradle, Grails, Scala, Play, PHP, Go. These buildpacks are searched within the deployed repo for the specified language mentioned. However, the typical HTML, CSS, Javascript repo does not consist of any of those languages mentioned above. Hence for the reason for the “no default language could be detected for this app” error.

Don’t worry, it’s an easy fix for your portfolio or personal blog. A small little trick to get Heroku to recognize the files of your static website is to trick it into being a PHP app. That’s right, PHP.

I’ll assume the Heroku app is all set up and the final step is the deployment process. Here’s the simple but yet “not going to argue with you” solution:

1. Head to root directory of the repo that contains index.html which dictates the main HTML page.
2. Run `touch composer.json` to create a file called composer.json.
3. Add the following line: `{}` inside.
4. Run `touch index.php` to create a file called index.php.
5. Add the line: `<?php include_once("index.html"); ?>` inside.
6. Now update the repo on Github if it’s connected to your account or Heroku command git push heroku master . Wait for the automatic deploy to work its magic and tada!

[src](https://medium.com/@winnieliang/how-to-run-a-simple-html-css-javascript-application-on-heroku-4e664c541b0b)
