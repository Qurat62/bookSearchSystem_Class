import React, { Component } from "react";
import "./styles.css";
import SearchArea from "./SearchArea.js";

class FormSection extends Component {
  static defaultProperty = {
    suggestions: [],
  };
  constructor(props) {
    super(props);

    this.state = {
    
      userInput: "",
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      title: "",
      limitTo: 3,
      detail: "",
    };
  }

  // call service : Handle Api

  /********************************************************* */
  handleInput = (e) => {
  

    this.setState(
      {
        userInput: e.currentTarget.value,
      },
      () => {
        this.fetchApiData(this.state.userInput);
      }
    );
  };

  fetchApiData = (userInput) => {
  

    // state mae save userinput
    //make seperate function for fetch which accecpts user input
    //set state kae call back mae fetch function
    //remove extra states
    fetch("https://www.googleapis.com/books/v1/volumes?q=" + userInput)
      .then((response) => response.json())
      .then((response) => {
        if(response=="")
        {alert("no data")}
        else{
          this.setState(
            {
              filteredSuggestions: [...response.items],
            },
  
            () => {
              this.handleFilter(this.state.filteredSuggestions, userInput);
            }
          );
        }
     
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleFilter = (filteredSuggestions, userInput) => {
    
    if (filteredSuggestions === "") {
      alert("no data found");
    } else {
      this.setState({
        userInput: userInput,
        filteredSuggestions: filteredSuggestions,
        showSuggestions: true,
      });
    }
  };

  onLoadMore = (e) => {

    this.setState({ limitTo: this.state.limitTo + 3 });
  };

  updateInputValue = (e) => {
    
    this.setState({
      userInput: e.currentTarget.innerText,
      title: e.currentTarget.innerText,
      activeSuggestion: 0,
      showSuggestions: false,
    });
  };
  render() {
    const {
      handleInput,
      fetchApiData,
      handleFilter,

      clickme,
      state: {
        activeSuggestion,
        filteredSuggestions,
        showSuggestions,
        userInput,
        title,
        limitTo,
      },
    } = this;

    let suggestionsListComponent;
    if (showSuggestions && userInput) {
      if (this.state.filteredSuggestions.length>limitTo) {
        suggestionsListComponent = (
          <ul className="suggestions">
            {this.state.filteredSuggestions
              .slice(0, this.state.limitTo)
              .map((suggestion, index) => {
                let className;

                if (index === activeSuggestion) {
                  className = "";
                }

                return (
                  <div>
                    <li
                      key={suggestion.id}
                      title={suggestion.volumeInfo.title}
                      onClick={this.updateInputValue}
                    >
                      {suggestion.volumeInfo.title}
                    </li>
                  </div>
                );
              })}

            <a onClick={this.onLoadMore}>Load More</a>
          </ul>
        );
      } else {
        suggestionsListComponent = (

          <div className="suggestions">
            <em>No suggestions</em>
            
          </div>
          
        );
        
        setTimeout((function() {
          window.location.reload();
        }), 250);
      
        // {setTimeout(window.location.reload(), 5000)}
      }
    }

    return (
      <div className="grid-container">
        <SearchArea
          handleInput={this.handleInput}
          updateInputValue={this.state.userInput}
          detail={this.state.filteredSuggestions}
          title={this.state.title}
        />

        <div className="">{suggestionsListComponent}</div>
      </div>
    );
  }
}

export default FormSection;
