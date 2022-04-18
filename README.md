# logoProject
Logo Project, Match the Dots


### Goal: Pure HTML/CSS/JS Project

### Plan
- Research Drag and Drop Approaches
- Create source and target divs
- Make the dots draggable and attach them to a target space
- Line up target spaces with appropriate dots to background target image
- Test repeatedly

### Challenges
- Two black dots
- Dot needs to stay in a target space
- Match the target spaces to the empty dot positions on background logo image.
- More than one dot cannot occupy a space
- Resetting the page so a user can start over

#### Resources
https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API
https://www.javascripttutorial.net/web-apis/javascript-drag-and-drop/
https://www.youtube.com/watch?v=C22hQKE_32c

#### Project Notes
- Read through the MDN on HTML Drag and Drop API.
- Watched a tutorial by Traversy Media.
- Starting with the layout of the HTML index page, adding the source and target divs.
- Adding CSS styles for the target div, with the logo background image.
- Added the button for resetting the logo.
- Adding image divs in the index.html page, with ids and classes.
- Adding event listeners to the blue dot image div for testing with any target space for now.
- Using console log statements to check the dragging process.
- Adding css borders with matching colors to test the target squares.
- Trouble getting the blue dot to stay in the target, and show up when dropped.
- Got the blue dots to stick, so added additional events for the rest of the dots.
- Added absolute positioning to line up the target spaces with the empty dot spaces.
- Troubleshooting the drag events, logging the ids of the dots to see why they are dropping.
- Working on the drop function, added a counter to keep track of how many dots are dropped.
- Playing around with the best way to add the H1 tag for a success message. Using a listener event on the H1 tag causes a definition error. Moved the H1 generation to innerHTML of the source div, in place of the circles, once they are all correctly placed. Show when counter equals 5.
- Adding logic to compare the source dot to the target space, checking for a match. Logging match or no match on drop. 
- Updated the drop function to only drop the dot if the source color matches the target, using a replace.
- Moved the h1 logic and the counter into the match if statement.
- Added click event listener to the button for resetting the logo, logging reset.
- Adding a reset function with a page reload to reset the page, since there is no data stored. Refresh works.
- Cleanup code. Adding loops for the dot classes, to assign the dots dynamically instead of hard-coding each one
- Cleaning up the console log statements. Removing commented out code.
- Additional testing and cleaning up the extra CSS styles that are commented out, and adding some comments to the JS file.