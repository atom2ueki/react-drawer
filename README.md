react-drawer
==============

Simple HTML5 drawer menu for React.js.

Installation
============

The easiest way to use react-drawer is to install it from npm and include it in your React build process (using [Webpack](http://webpack.github.io/), [Browserify](http://browserify.org/), etc).

```
npm install --save react-drawer
```

Create a standalone module using *WebPack*:
```
> npm install
> webpack
```

Example
=====

```jsx

"use strict";
import './app.css'

import React from 'react';
import ReactDOM from 'react-dom';
import ReactDrawer from 'react-drawer';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false
    };
    this.manpulate = this.manpulate.bind(this);
  }

  render() {
    return (
      <div>
        <div className="button" onClick={this.manpulate}>this is a button</div>
        <ReactDrawer
          open={this.state.open}>
          <i onClick={this.manpulate} className="icono-cross"></i>
          <h2>djoisajdioas</h2>
        </ReactDrawer>
      </div>
    )
  }

  manpulate() {
    this.setState({open: !this.state.open});
  }
};

ReactDOM.render(<Main />, document.getElementById('app'));
```

Todo
========
- [x] basic features
- [ ] open position option
- [ ] drawer size option
- [x] drawer open method
- [ ] responsive design

License
=======

MIT
