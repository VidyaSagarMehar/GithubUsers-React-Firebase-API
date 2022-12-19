import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

//React router
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// Toastify stuff
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

//Firebase
import firebase from 'firebase/app';
import 'firebase/auth';

// Components
import Home from './Pages/Home';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import NotFound from './Pages/NotFound';
import { UserContext } from './Context/UserContext';
import Footer from './Layout/Footer';
import Header from './Layout/Header';

import { initializeApp } from 'firebase/app';
import firebaseConfig from './Config/firebaseConfig';
const app = initializeApp(firebaseConfig);

// import firebaseConfig from './Config/firebaseConfig';
// // Initializing firebase
// firebase.initializeApp(firebaseConfig);

const App = () => {
	const [user, setUser] = useState(null);

	return (
		<Router>
			<ToastContainer />
			<UserContext.Provider value={{ user, setUser }}>
				<Header />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/signin" component={SignIn} />
					<Route exact path="/signup" component={SignUp} />
					<Route exact path="*" component={NotFound} />
				</Switch>
				<Footer />
			</UserContext.Provider>
		</Router>
	);
};

export default App;
