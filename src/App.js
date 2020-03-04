import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Loading from './components/loading/Loading'

const Home = React.lazy(() => import('./views/home/Home'))
const Login = React.lazy(() => import('./views/login/Login'))
const NotFound = React.lazy(() => import('./views/notFound/NotFound'))

class App extends React.Component {
	constructor (props) {
		super(props)

		this.state = {
			test: false,
		}

		// theme

		// bind this to functions

		// functions

	}

	render () {
		return (
			<div className="App">
				<Router>
					<Header/>
					<main className="App-content">

						<React.Suspense fallback={<Loading/>}>
							<Switch>
								<Route exact path="/" component={Home}/>
								<Route exact path="/login" component={Login}/>
								<Route component={NotFound}/>
							</Switch>
						</React.Suspense>

					</main>
					<Footer/>
				</Router>
			</div>
		)
	}
}

export default App
