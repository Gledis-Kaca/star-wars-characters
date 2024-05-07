Eurostep Challenge

Star Wars character app:
Description:
Using the endpoints of the following public API(https://swapi.dev), create a page that displays a list of all the Star Wars characters.
Implement pagination and a loader for fetching/refetching data as well as handling for error states(if the API server is down or for other errors that might occur).
Color each character card based on their species color and add an animation on hover for the cards. Clicking a card opens a modal that displays more information about the character.
In the character details modal display the following information: name as the header of the modal, height displayed in meters, mass in kg, date person was added to the API (in dd-MM-yyyy format), number of films the person appears in and their birth year. You should also display the information about the person’s homeworld such as its name, terrain, climate, and amount of residents.
Implement searching and filtering. To search, the user should enter a character name (partial or complete) and have all matching results returned. For filtration, the user should be able to select either the homeworld, film, or species of any character and see results. You should also combine the search with filters.
Extra request(not obligatory): Implement JWT authentication (with silent refresh when the token expires) with a UI for logging in and out of the app (with a fake username and password). The API itself does not require authentication, so this would have to be mocked.

The app should be done in React with the create-react-app boilerplate. UI is at your choice but make sure to keep it up to recent standards in terms of look(don’t spend a lot of time on it, functionality will be more important when checking the code). Use of external libraries isn’t suggested but will be accepted in case you specify a valid reason for using it. The app is estimated to be completed in 16-24 hours(2-3 working days). When working create a GitHub repo and commit your work regularly. Commit history will be noted when checking the code. 
