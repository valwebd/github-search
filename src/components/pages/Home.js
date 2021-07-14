import React, { Fragment } from 'react';
import Search from '../users/Search.js';
import Users from '../users/Users.js';

const Home = () => (
  <Fragment>
    <Search />
    <Users />
  </Fragment>
);

export default Home;
