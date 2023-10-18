This project was created as a test assignment for Schiphol. I made this in less than 4 hours. It was built using React (with create-react-app), but I didn't use any other external libraries.

Because I strictly adhered to the time limit and technical restrictions, I had to make concessions. As a result, the UI implementation is minimal.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

# Assignment

Please create a page that contains an input field.
When the user enters _at least_ three characters into this input field,
you should display all flight information from the `flights.json` file where the destination airport matches the entered input.
Limit the search result to a maximum of 5 flights.

Please implement it using React. Try to keep it simple.

We think 4 hours should be enough to spend on this assignment.
Please don't spend more than that unless you're having fun and want to show off :)

## Requirements:

- Use React. Create your app with React but try to limit the use of third party UI libraries.
- Use Typescript. Make sure your app is typed correctly.
- Make it look nice. Make use of the provided colors. How you want to implement them is entirely your choice ;)
- Your application should treat the contents of `flights.json` as the output of an API endpoint.
  It should load this asynchronously using XHR or Fetch API and should not require a page reload when the user changes their input.
- Make sure the results are sortable. The filtered flight data should be sortable on date and (expected) time. Initial expected sorting is early to late.

## Submission:

- Create a clone of this repository locally.
  Then push it to **your GitHub account** and continue working from there.
  Once you have finished, please send us the URL of the repository you have created.

### Some things to consider:

- We like DRY and KISS
- We like tested code
- We like readable code
- We like using the latest features of ES6 where applicable
- Last but not least, have fun!
