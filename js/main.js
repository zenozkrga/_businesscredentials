import React from 'react';
import ReactDom from 'react-dom';
import ExampleWork from './example-work';

const myWork=[
  {
    'title': 'Example 1',
    'href': 'www.example.com' ,
    'desc' : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' ,
    'image' : {
      'src' : 'images/example1.png',
      'desc' : 'example screenshot of a project involving code'
    }
  },
  {
    'title': 'Example 2',
    'href': 'www.example.com' ,
    'desc' : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' ,
    'image' : {
      'src' : 'images/example2.png',
      'desc' : 'blurry fruit'
    }
  },
  {
    'title': 'Example 3',
    'href': 'www.example.com' ,
    'desc' : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' ,
    'image' : {
      'src' : 'images/example3.png',
      'desc' : 'cat'
    }
  }
]
ReactDom.render(<ExampleWork work={myWork} />, document.getElementById('example-work'));
