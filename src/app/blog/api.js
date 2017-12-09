import { API } from './constants';

import { apiFetch } from '../../shared/utils/api';

class BlogApi {
  static getAllPosts(query = {}, fetchingFrom = 'client') {
    return apiFetch(API.BLOG.POSTS, { fetchingFrom }, query);
  }
}

export default BlogApi;
