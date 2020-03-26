import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


const PageOne = React.lazy(()=>import('./components/pageOne'))
const PageTwo = React.lazy(()=>import('./components/pageTwo'))
const PageThree = React.lazy(()=>import('./components/pageThree'))
const Error = React.lazy(()=>import('./components/error'))

const loading=()=><div className="animated fadeIn pt-3 text-center">Still Loading...</div>

export default class Routing extends React.Component{
  render(){
    return(
      <>
        <Router>
          <React.Suspense fallback={loading()}>
            <Switch>
              <Route exact path="/" component={PageOne}/>
              <Route path="/pageTwo" component={PageTwo}/>
              <Route path="/pageThree" component={PageThree}/>
              <Route component={Error}/>
            </Switch>
          </React.Suspense>
        </Router>
      </>
    )
  }
}
