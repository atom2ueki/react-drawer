react-drawer (1.3.4)
==============

Simple HTML5 drawer menu for React.js.

[![NPM][npm-icon] ][npm-url]

[![Travis CI][travis-ci-image] ][travis-ci-url]
[![Quality][quality-badge] ][quality-url]
[![dependencies][dependencies-image] ][dependencies-url]
[![devdependencies][devdependencies-image] ][devdependencies-url]
[![semantic-release][semantic-release-image] ][semantic-release-url]

[npm-icon]: https://nodei.co/npm/react-drawer.png?downloads=true
[npm-url]: https://npmjs.org/package/react-drawer
[travis-ci-image]: https://travis-ci.org/atom2ueki/react-drawer.svg?branch=master
[travis-ci-url]: https://travis-ci.org/atom2ueki/react-drawer
[semantic-release-image]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-release-url]: https://github.com/semantic-release/semantic-release

[dependencies-image]: https://david-dm.org/atom2ueki/react-drawer/status.svg
[dependencies-url]: https://david-dm.org/atom2ueki/react-drawer
[devdependencies-image]: https://david-dm.org/atom2ueki/react-drawer/dev-status.svg
[devdependencies-url]: https://david-dm.org/atom2ueki/react-drawer#info=devDependencies

[quality-badge]: http://npm.packagequality.com/shield/react-drawer.svg
[quality-url]: http://packagequality.com/#?package=react-drawer

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

Demo
============
https://jmfrancois.github.io/react-drawer/

Run on your local & development
============
``` bash
// 1. keep monitor changes to /src/*
> npm run build:watch

// 2. open dev server
> npm start

// 3. visit http://localhost:3000/example/

```

Example
=====

```jsx

import React from 'react';
import ReactDOM from 'react-dom';
import ReactDrawer from 'react-drawer';

/* if you using webpack, should not apply identity to this css */
import 'react-drawer/lib/react-drawer.css';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false,
      position: 'right',
      noOverlay: false
    };
    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.closeDrawer = this.closeDrawer.bind(this);
    this.onDrawerClose = this.onDrawerClose.bind(this);
    this.setPosition = this.setPosition.bind(this);
    this.setNoOverlay = this.setNoOverlay.bind(this);
  }
  setPosition(e) {
    this.setState({position: e.target.value});
  }
  setNoOverlay(e) {
    this.setState({noOverlay: e.target.checked});
  }
  toggleDrawer() {
    this.setState({open: !this.state.open});
  }
  closeDrawer() {
    this.setState({open: false});
  }
  onDrawerClose() {
    this.setState({open: false});
  }
  render() {
    return (
      <div>
        <div style={{margin: 200}}>
          <h1>React Drawer configuration</h1>
          <div style={{margin: 20}}>
            <label>Position</label>
            <select value={this.state.position} onChange={this.setPosition}>
              <option value="top">top</option>
              <option value="bottom">bottom</option>
              <option value="left">left</option>
              <option value="right">right</option>
            </select>
          </div>
          <div style={{margin: 20}}>
            <input type="checkbox"
              checked={this.state.noOverlay}
              onChange={this.setNoOverlay}
            />
            <label>No overlay</label>
            <small>(The overlay lets you close the drawer on click)</small>
          </div>
          <button
            style={{margin: 20}}
            onClick={this.toggleDrawer}
            disabled={this.state.open && !this.state.noOverlay}
            >
            {!this.state.open ? <span>show drawer</span>: <span>close drawer</span>}
          </button>
        </div>
        <ReactDrawer
          open={this.state.open}
          position={this.state.position}
          onClose={this.onDrawerClose}
          noOverlay={this.state.noOverlay}>
          <i onClick={this.closeDrawer} className="icono-cross"></i>
          <h2>What a nice drawer !</h2>
        </ReactDrawer>
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById('app'));
```

Todo
========
- [x] basic features
- [x] open position option
- [x] drawer open method
- [ ] themes

License
=======

MIT
