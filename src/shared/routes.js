import Home from '../app/home/components/Home';
import About from '../app/about/components/About';

import Blog from '../app/blog';

const routes = [
  {
    path: '/',
    component: Home,
    exact: true
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/blog',
    component: Blog
  }
];

export default routes;
