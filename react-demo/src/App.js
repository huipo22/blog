import React, { Component } from 'react';
import './App.css';
import CommentInput from './CommentInput'
import CommentList from './CommentList'

class App extends Component {
  constructor() {
    super()
    this.state = {
      comments: []
    }
  }
  handleSubmitComment(comment) {
    this.state.comments.push(comment)
    this.setState({
      comments: this.state.comments
    })
  }
  render() {
    return (
      <div className="App">
        <CommentInput onSubmit={this.handleSubmitComment.bind(this)} />
        <CommentList comments={this.state.comments} />
      </div>
    );
  }
}

export default App;
