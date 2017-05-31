import React from 'react';
import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';

const Post = (props) =>
  (
    <div className="post">
      <h2 className="post__heading">{props.title}</h2>
      <div className="post__content">
        <ReactMarkdown source={props.content} />
      </div>
    </div>
  );

Post.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
}

export default Post;
