import React, { Component } from 'react';
import timeAgo from 'node-time-ago';

import { isFirstRender } from '../../../shared/utils/data';

class Posts extends Component {
  render() {
    const { posts } = this.props;

    if (isFirstRender(posts)) {
      return null;
    }

    return (
      <div>
        <div>
          <h1>Blog</h1>
        </div>

        {posts &&
          posts.map(post => (
            <div key={post.id}>
              <p>
                {post.id} - {post.title} by {post.author}
              </p>

              <p>{timeAgo(post.date)}</p>
            </div>
          ))}
      </div>
    );
  }
}

export default Posts;
