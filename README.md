# Dooper - Technical Test

Hi!

Thanks for opportunity to show my job as a developer.

## Challenge

You will be creating a Movie Awards Ballot with the following requirements:

- Display a list of movies grouped by categories ordered alphabetically
- Search for a movie title
- Select a movie per category and show a "selected" state
- Upon submission, display a modal box showing your votes
- When the modal is closed, the ballot resets and you can vote again.

## Obtained Result
### Main Page
![Wireframe](src/ReadmeImages/obtained_result.png?raw=true 'Wireframe')
## Notifications implemented
![Wireframe](src/ReadmeImages/succes.png?raw=true 'Wireframe')
![Wireframe](src/ReadmeImages/warning.png?raw=true 'Wireframe')
![Wireframe](src/ReadmeImages/removed.png?raw=true 'Wireframe')
## Modal after submit selected movies
![Wireframe](src/ReadmeImages/modal.png?raw=true 'Wireframe')
### Responsive designs
![Wireframe](src/ReadmeImages/main_mobile.png?raw=true 'Wireframe')
![Wireframe](src/ReadmeImages/notifications.png?raw=true 'Wireframe')
![Wireframe](src/ReadmeImages/modal_mobile.png?raw=true 'Wireframe')

Note: I choose a minimalist design for the modal in mobile view because in another way it has too much information in a little space.

### Used Technologies

1.- React.js

2.- Express.js

3.- React-context

4.- React-query (query and mutations)

5.- Styled components

6.- Axios

7.- ES (async-await to handle asyncronus code)

8.- React hooks

9.- Jest to test.

10.- Typescript to frontend and JavaScript to backend developments

11.- Git flow to code versioning

11.- Use of externed libraries

### Instructions

### `yarn install`

Install dependencies

### `yarn start`

Runs the app in [http://localhost:3000]

### `yarn api`

Runs the server on [http://localhost:8080/]

### `yarn test`

To run frontend tests

### `yarn test-api`

To run backend tests

## Brief explanation

All the application was developed using React (typescript) to frontend and Express (javascript) to backend.

Backend: I've created a Movies folder where are route related to movies (if the app will be expanded), data generator (usually we use data from a database but in this case, we are using hardcoded data) and controllers (there are two, one per each endpoint).

Frontend: I've created a client to consume the api and make the http request. Personalized hooks to use the client and finally components where I use the hooks to obtain data using axios, react-query and async-await to manage the asyncronus code. 

To styling I've used styled components. To have a responsive design I've used media queries to a screen with less than 540px. To make 100% responsive I would have to follow a standard in screens (phone, tablet, desktop, etc).

Finally to test my components I've created a TestProvider in the front. Always using axios to mock requests and jest to make assertions.
