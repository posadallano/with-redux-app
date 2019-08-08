import React, { Component } from "react";
import TextContent from './TextContent';

class TitleParagraph extends Component {
  render () {
    return (
        <TextContent>
            <h1>Lorem ipsum dolor sit amet</h1>
            <p className="description">Morbi ac felis. Nullam quis ante. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis. Nullam vel sem. Quisque malesuada placerat nisl.</p>
        </TextContent>
    );
  }
}

export default TitleParagraph;