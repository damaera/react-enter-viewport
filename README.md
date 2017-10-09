# React Enter Viewport
React Component that get notified when entering and exit viewport

## Demo
[![Edit y7q6z81r49](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/y7q6z81r49)

## Installation
```
yarn add react-enter-viewport
```

## Usage
```jsx
import React from "react";
import EnterViewport from "react-enter-viewport";

const App = () => 
  <EnterViewport
    style={{
      transition: "all .4s",
      position: "relative",
      left: 0,
      background: "#444",
      width: 200,
      height: 100,
      marginTop: 100,
      opacity: 1
    }}
    onEnter={el => {
      el.style.left = "200px";
      el.style.opacity = 1;
    }}
    onExit={el => {
      el.style.left = "0";
      el.style.opacity = 0.2;
    }}
  />
)
```

## Props
| Prop | Value |
| ---- | -- |
| `style` | Component style |
| `onEnter` | Event when component entering viewport with element callback |
| `onExit` | Event when component exit viewport with element callback |
