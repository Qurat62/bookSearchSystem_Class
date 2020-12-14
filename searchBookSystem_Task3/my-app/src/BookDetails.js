import React from "react";
import "./App.css";
import "./styles.css";
import Menu from "./Menu.js";
import Footer from "./Footer.js";
import Section from "./Section.js";
import LastSection from "./LastSection.js";
import Heading from "./Heading.js";
import SearchArea from "./SearchArea.js";

// const { handle } = this.props.match.params
// const { fromNotifications } = this.props.location.state;
class BookDetails extends React.Component {
  componentDidMount() {
    const { SearchArea } = this.props.match.params;
    const { detail, title } = this.props.location.state;
  }
  render() {
    return (
      <div className="">
        <header className="BookDetails-header">
          <Menu></Menu>
        </header>

        <Section></Section>
        <Section></Section>

        <div className="card-container">
          <div>
            {this.props.location.state.detail
              .filter(
                (book) =>
                  book.volumeInfo.title === this.props.location.state.title
              )
              .map((filteredBook) => (
                <div>
                  <div className="grid-detail">
                    <img
                      src={
                        filteredBook.volumeInfo.imageLinks !== undefined
                          ? filteredBook.volumeInfo.imageLinks.thumbnail
                          : ""
                      }
                    ></img>
                  </div>
                  <div className="grid-detail">
                    <h3>Title: {filteredBook.volumeInfo.title}</h3>
                    <h4>Author: {filteredBook.volumeInfo.authors}</h4>
                    <h5>Publisher: {filteredBook.volumeInfo.publisher}</h5>
                    <h5>
                      Published Date: {filteredBook.volumeInfo.publishedDate}
                    </h5>
                  </div>

                  <p>Description: {filteredBook.volumeInfo.description}</p>
                </div>
              ))}
          </div>
        </div>
        <Section></Section>
        <Section></Section>
        <LastSection></LastSection>
        <Footer></Footer>
      </div>
    );
  }
}
export default BookDetails;
