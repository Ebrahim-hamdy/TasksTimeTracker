## Tasks Time Tracker
Never miss a thing in Life. Organize and keep track of all your tasks.

 ### Demo: 
	https://tasks-timer-tracker.herokuapp.com

## Screenshots
Include logo/demo screenshot etc.

## Tech/framework used
* Angular 
* TypeScript
* Karma/Jasmine
* Codelyzer & TSLint
* SASS/SCSS
* Webpack 3
* Express
* MongoDB

## Features
	- The ability to book time directly from the tracker.
	- The ability to book time without the tracker.
	- Listing of all the tracked time booked in the past.
	- Search functionality that searches/filters all the descriptions of every time log.

## Commands
	* `npm start` - start the development webpack server (access via http://localhost:3000/)
	* `npm run coverage` - run the project unit tests one time and print out a coverage report, generated under **/coverage/index.html**
	* `npm run lint` - run the project linting (will be run every time `npm test` is run)
	* `npm run build` - generate a production build for the project, which will be inserted into dist/
	* `npm run server` - run a live-server instance off of the **dist/** directory (generated from the `build` command)

## API Reference
	https://api-timer.herokuapp.com/tasks/

## Tests
	* `npm test` - run the project unit tests (*.spec.ts files)
