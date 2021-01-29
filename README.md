# Mr.Fluffy-Fluffs-Lite
Mr. Fluffy Fluffs is an online ordering system meant to achieve pristine balance between quality and cheapness alongside enhancing user experience by providing user friendly interface, interactive menus, and pictorial representations of the food being ordered.

<img src="https://imgur.com/Jfvg0L5.png" width="700">
<img src="https://imgur.com/ftkRSbz.png" width="700">
<img src="https://imgur.com/dLALDBo.png" width="700">
<img src="https://imgur.com/LHZYTy1.png" width="700">

This project uses the following technologies:
  1. <b>React</b> and <b>React Router</b> for Frontend
  2. <b>Express</b> and <b>Node</b> for the Backend
  3. <b>MongoDB</b> for the Database
  4. React Hooks and Redux for state management between React Components (Previously Context API was being used instead of Redux)

# Features
* Login and Registeration System
* Fetching Data from API to get MENU Items
* Fetching Data from API to get Toppings
* LogOut System
* Full featured shopping cart

# Features Under Development
* Checkout process (shipping, payment method, etc)
* User profile with orders
* Product reviews and ratings

# Instructions
Fork, then download or clone the repo.

> git clone https://github.com/ramzyraz/Mr.Fluffy-Fluffs-Lite.git          

Make sure MongoDB service is running. Be sure to replace the environment variables with your own. 

> mongoose.connect(process.env.CONNECTION_URL)

For the back-end, install the dependencies once via the terminal.

> npm install

Run the main server. It listens on port 5000.

> npm run dev

If you want to configure the front-end, go to the client branch using the git command.

> git checkout client

Install the dependencies required by React once.

> npm install

Run the development server for React. It listens on port 3000.

> npm start

To make a production build, simply run the following command in the client folder via the terminal.

> npm run build

It re-creates a folder named public on the root directory. This is where the production-ready front-end of the web application resides.



