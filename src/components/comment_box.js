import React, {Component} from 'react';

export default class CommentBox extends Component {
  render() {
    return (
      <div className='comment-box'>
        <textarea />
        <input value="Submit Comment" type='button' />
      </div>
    );
  }
}