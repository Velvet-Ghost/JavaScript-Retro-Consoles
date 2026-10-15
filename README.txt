https://github.com/Velvet-Ghost/JavaScript-Retro-Consoles.git
*Claude was used to add minimal styles and their classes to the HTML tags

The request works by creating a XMLHttpRequest object, then using the provided url in the open() method.
Then it will use the onreadystatechange method to run the state changes, and running send() when it's done.
If readyState == 4 and there's no other status issues, the rest of the program will run.

The summary is calculated by setting an oldest and newest variable to the first console object in the array.
Then it will compare each console in the array to the oldest/newest, setting the oldest/newest to the current
position if it's older/newer than the starting position.

