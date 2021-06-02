import React, {Component} from 'react';
import {Search} from './components/Search/search.component';
import { CardList } from './components/card-list/card-list.component';
import { connect } from "react-redux";
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state={
      searchFields: ''
            }
      }
      
  render(){
    const { searchFields} = this.state;
    const page1 = this.props.page1["content-items"].content;
    const page2 = this.props.page2["content-items"].content;
    const page3 = this.props.page3["content-items"].content;
    const page = [...page1,...page2,...page3];
    console.log(page);
     const filteredShows = page && page.filter(show =>
      (show.name.toLowerCase().includes(searchFields.toLowerCase()))
      );   

     return(
      <div className='App'>
          <div>
            <h1>{this.props.page1.title}</h1>
            <Search 
              placeholder='search'
              handleChange={e =>this.setState({searchFields:e.target.value})}
              />
          </div>
         
          <CardList page1 = {filteredShows}/>
        
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    page1:state.page1,
    page2:state.page2,
    page3:state.page3
  };
};

export default connect(mapStateToProps, null)(App);

