import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app';
import { BrowserRouter } from 'react-router-dom'

class Index extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return <App />
  }
}

ReactDom.render(<BrowserRouter><Index/></BrowserRouter>, document.getElementById('root'));
