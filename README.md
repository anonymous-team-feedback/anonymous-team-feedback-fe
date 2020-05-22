
# Incog
### You can find the deployed project at [Speakincog.com](https://speakincog.com/).
## Contributors
|Triston Armstrong:<br>Full stack| Dexter Lewis:<br>Back end| Kaiser Wu:<br>Full stack| William Soukkachang:<br>Front end|                                       
| :----------------------------: | :------------------------: | :---------------------: | :-------------------------------: |
|  <img src="https://bit.ly/2JVNj7l" width = "200" />|<img src="https://bit.ly/34AljxK" width = "200" />|<img src="https://bit.ly/2CkQu3W" width = "200" />|<img src="https://bit.ly/2WKGr1A" width = "200" />|
| [<img src="https://bit.ly/32ekkBW" width="15">](https://github.com/Tarmstrong95) [<img src="https://bit.ly/2NNTX0B" width="15">](https://www.linkedin.com/in/triston95strong)| [<img src="https://bit.ly/32ekkBW" width="15">](https://github.com/dxtrlws) [<img src="https://bit.ly/2NNTX0B" width="15"> ](https://www.linkedin.com/in/dexterlewis/) | [<img src="https://bit.ly/32ekkBW" width="15">](https://github.com/kaiserawu) [<img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15">](https://www.linkedin.com/in/kaiserwu) | [<img src="https://bit.ly/32ekkBW" width="15">](https://github.com/Wsoukkachang) [<img src="https://bit.ly/2NNTX0B" width="15">](https://www.linkedin.com/in/wsoukkachang)               

<br>

|Alyssa Saez:<br>Team lead|
|:-:|
|<img src="https://bit.ly/36F53xu" width="100"/>|
|[<img src="https://bit.ly/32ekkBW" width="15"/>](https://github.com/AlyssaSaez) [<img src="https://bit.ly/2NNTX0B" width="15"/>](https://www.linkedin.com/in/alyssasaez)|

<br>

### Other contributors
[Marcelo Laos](https://github.com/mlaos1997)<br>
[Christopher Harrison](https://github.com/cnharrison)<br>
[Kamal Mukkamala](https://github.com/Kamalnrf)

## Project Overview

[Trello Board](https://bit.ly/2Nisq8h)
<br>
[Product Canvas](https://bit.ly/2PQfpV7)

Problem we sought to solve:
- To make anonymous feedback as easy as possible in the workplace for managers, employees, and peers. 

### Key Features
- User On-Boarding
    - Join an organization/team
    - Create an organization/team
        - Organization/team roles—manager/employee
- Request/receive/send feedback
    - Provide default feedback prompt
    - Credit system to limit amount of feedback given
    - Public or private option for requesting feedback
    - Miscellaneous, on-demand feedback that requester did not necessarily request
    - Use requester/manager prompts for
        - subject of feedback—specific questions to prompt feedback
        - type of feedback—qualitative/quantitative
- Upvote/downvote system for public feedback
- Importance ranking for feedback in the context of the request
- User web dashboard (varies depending on role)
    - Chronological log of feedback
    - Action items and goal-setting in response to feedback
    - Some way to organize feedback into units  — time period, project
    - Notification system on web dashboard for feedback requests that is in sync with Slack
    - User has a field for their own notes
    - Special manager dashboard to see all feedback for all members of the team
    - Fancy visualization of some sort of the log in the dashboard
    - Manager and employee can agree on action items
- Slack Integration
    - Slack notifications
- Notifications
    - Email notifications for feedback/requests
    - Notification center
    - Amazon SQS


## Tech Stack
### [Front end](https://github.com/anonymous-team-feedback/anonymous-team-feedback-fe) built using:
- React
- Redux
#### Why did you choose this framework?
- Great support for server-side rendering, making it a powerful framework for content-focused applications.
- React implements Functional Programming concepts, creating easy-to-test and highly reusable code.
### Styling Considerations
- Styled Components
#### Why did you choose this framework?
- Styled-components allows you to create compartmentalized components that you can reuse over and over agin in other components. It also offers a global store that allows you to use Less/SASS type syntax to create your css file. 
#### Front end deployed to Netlify at [Incog](http://speakincog.com)
### [Back end](https://github.com/anonymous-team-feedback/anonymous-team-feedback-be) built using the following:
- NodeJS
- Express
- Knex
- MonogoDB
#### Why did you choose this framework?
- Schema-less
- Fewer relations
- Horizontal and vertical scaling is possible
- Great performance for mass read and write requests
### How do you plan on interacting with your APIs?
- REST API
#### Back end deployed to Heroku

# Environment Variables
In order for the app to function correctly, the user must set up their own environment variables on Heroku. There should be a .env file containing the following:
   
- PORT - the desired local port
- DB_ENV - for the database config file
- HOST url - yourHostingSite.com
- JWT_SECRET - any variable you choose, the secret for the token encryption that Passport JS uses
# Content Licenses
All photos used on Geograpics or in design files are royalty-free & attribution-free, requiring no licenses.  All headshots of developers are the property of their respective persons, no license, explicit or implied, is granted for use outside this readme file without the express permission of the owner/person in the headshot image.
# Testing
### What We Chose
- Jest
### Why We Chose
- Jest is a widely adopted testing framework used for testing React applications. It acts as a test runner, assertion library, mocking library, and comes bundled with Create-React-App for ease of use. It serves as an excellent test-runner which Enzyme utilizes to assert, manipulate, and traverse a React Components’ output. Enzyme is a JavaScript Testing utility for React that makes it easier to render a component (or multiple components), find elements, and interact with elements during testing. Its primary purpose when used in addition to Jest is to provide additional functionality.
# Installation Instructions
- Dependencies are listed in package.json and can be installed locally using:
    - `yarn install` can be used to install the required dependencies from the package.json on front end
    - `npm install` can be used to install the required dependencies from the package.json on back end; recommend installing nodemon as well for local dev dependencies
## Other Scripts
- `npm run server` - used to start local server using nodemon, "nodemon index.js"
- `npm run start` - used to start Heroku deployment, "node index.js"
- `yarn run test` - used to start front end testing
# Contributing
When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.
Please note we have a [code of conduct](./CODE_OF_CONDUCT.md). Please follow it in all your interactions with the project.
## Issue/Bug Request
   
 **If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**
 - Check first to see if your issue has already been reported.
 - Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
 - Create a live example of the problem.
 - Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes,  where you believe the issue is originating from, and any potential solutions you have considered.
### Feature Requests
We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.
### Pull Requests
If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.
Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.
#### Pull Request Guidelines
- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.
### Attribution
These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426).
## Documentation
See [Backend Documentation](https://bit.ly/2CdCycf) for details on the backend of our project...
