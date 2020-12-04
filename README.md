My README:

My application closely follows the architecture recommended by the gearup slides. Accordingly, the following is my organization:
- App.js file which contains the product list and passes it to FilteredList component, and contains the cart list and passes it to the Cart component. This class also handles the cart functions like add and remove, and renders the cart, it's scrollbar and its items.
- FilteredList.js which contains the filtering and sorting methods.
- DisplayList.js which maps each product from App.js to an HTML element or Component for render. This class uses the Clothing component which is stored in its own class.
- Clothing.js which sets state in the add to cart function and renders each product in the product list, along with all its attributes, and the associated add to cart button.
- Cart.js which has functions to handle scrolling of the cart, and renders each product in the cart (or an empty cart), and also the total aggregator.
- App.css takes care of the styling for all the components in the app.

In essence, App renders the product list and cart list (using FilteredList which in turn uses DisplayList which in turn uses Clothing, and Cart). The filtering, and sorting logic lies in FilteredList, while the aggregator logic lies in App. The logic for add and remove items also lies in App.  

State is primarily changed when the user adds to cart, removes from cart, or when the total quantity or price of the cart changes. State also changes when the user filters or sorts the product data.

--------------
React README:

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
