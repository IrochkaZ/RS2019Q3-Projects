## Piskel-clone

#### Task - https://github.com/rolling-scopes-school/tasks/blob/master/tasks/piskel-clone.md#piskel-clone
#### Results - https://simple-piskel-clone-irochkaz.netlify.com/landing_page/

#### Screenshots

- [screen desktop](http://prntscr.com/qlh3ba)
- [screen mobile](http://prntscr.com/qlh3pa)

#### Deadline - 08.01.2020 / 09.01.2020

## Terms of Reference

**REQUIRED FUNCTIONALITY**

### Score criteria:
Basic (80) + Normal (180) + Extra (160) + Impossible (30) - +450

##### Basic scope
Max - +80

 Usage of Webpack and required project structure: +10 points. **[DONE]**
 Custom canvas size (32x32 / 64x64 / 128x128) - +10

##### Tools

 - Pen. Required size is 1 unit. (+5) **[DONE]**
-  Pen. Other unit sizes (2, 3, 4) .(+10) **[DONE]**
-  Color select (color picker) (+5) **[DONE]**
-  Paint bucket (+5) **[DONE]**
-  Eraser (+10) **[DONE]**
-  Paint all pixels of the same color +5  **[DONE]**
-  Stroke (to draw straight lines) +5

#####Unit tests
Setup Jest + cover couple functions with at least 2 tests (utilities / pure functions for example) +15

##### Normal scope
Max - +180

 - Landing Page is presented will all needed information: +20 points. **[DONE]**
 - Frames functionality
- add frame - +15 **[DONE]**
- delete a frame - +15 **[DONE]**
- drag & drop (move) frame - +20 **[DONE]**
- duplicate frame - +20 **[DONE]**

-  Preview functionality
 - Ability to animate the created frames - +20 **[DONE]**
 - Ability to change FPS rate from 1 to 24 per second - 20 **[DONE]**
 - Ability to run the animation in Full screen mode - +10 **[DONE]**

- Keyboard shotcuts
 -   All actions should be available via keyboard shortcuts +10 **[DONE]**
 -   Modal window to change keyboard shortcuts +10
 -   Save user session in localstorage +10
 
- Unit tests
 - write 20 unit tests for utils functions and ui components +10


#####Extra (additional) scope
Max - +160

-  Login with one of the oAuth providers - Google / Facebook / VK / Twitter (+20)
- Export the final result
   - As .apng to file system +15
   -  As .gif to file system +15

- Unit tests
 -  Achieve good coverage +1 for every percent of coverage (max - +100)
      -  it needs to measure number of covered lines for all js app files in the project
 -  Achieve at least 40% coverage (for utilitiess / pure functions) +10
 
 ####Impossible scope
Max - +30

- Unit tests
   - Achieve at least 80% coverage (for utilitiess / pure functions & ui components) +30

  #### Fines
-  General stage 2 requirements violation or inappropriate quality of the code: -50 points and more depending on the decision of the mentor.
-  -10 very bad / ugly design of landing page / app itself
-  -30 if there is no a worklog.
-  -30 big & "spaghetti style" modules
-  -20 eslint is not configured or there is a lot of errors
-  -20 magic number

