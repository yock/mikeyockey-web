import { connect } from 'react-redux';
import Post from './Post';

const mapStateToProps = (state) => {
  const defaults = { title: 'No Post', content: 'There are no posts yet.' }
  const post = state.posts[0] || {};
  const props = Object.assign({}, defaults, { title: post.title, content: post.content});
  console.log(props);
  return props;
}

const LatestPost = connect(
    mapStateToProps,
    null
)(Post);

export default LatestPost;
