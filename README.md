# A simple nextjs toast component
This toast component can be used on nextjs projects or any other react project which uses style-jsx.

<h2><a href="https://ashwaniarya.github.io/react-nextjs-toast/">DEMO</a></h2>

## Installation

Using npm
```
npm install react-nextjs-toast
```

Using yarn 
```
yarn add react-nextjs-toast
```

## How to use

The component is very simple to use. Just follow the instructions.
### Add toast container component
```jsx
import { ToastContainer } from 'react-nextjs-toast'

//...
  <ToastContainer />
//...

```
### To show toast 
```jsx
toast.notify( msg, { options } )
```

*check option section to learn more* 
### To remove toast
```jsx
toast.remove()
```
Let's assume you have a react component where you want to use the toast component to notify a user about certain event.

```jsx
import React from 'react'

// import toast object and toast container from react-nextjs-toast
import { toast, ToastContainer } from 'react-nextjs-toast'

// Your react component
class Card extends React.Component {

  // something ...

  // call toast.notify() here
  onClickNotify = () => {
    toast.notify(`Hi, I am a toast!`)
  }

  render(){
    return (<div>
    
        {/** Add toast component **/}
        <ToastContainer />

        
        <button
          onClick={this.onClickNotify} {/** call on click handler **/}
        >Notify</button>
      </div>
    )
  }
}
```

## Toast container props

| props | description | Data Type |
|----------|-------------|-------|
| align    | left, center, right | *String* |
| position | top, bottom | *String*|
| id | Container id ( must be unique ) | *String* |

For example to show toast at the top right
```jsx
<ToastContainer align={"right"} position={"top"} id="toast-comp-3"/>
```

## Toast Options

The toast has 4 types of default events - info, success, error and warning and also supports custom duration.


| property | description | Data Type |
|----------|-------------|-------|
| duration | Number of seconds to show toast on screen | *Integer* |
| type     | Type of toast - info, error, success and warning | *String*|
| targetId | Target container id | *String* |
| position | top , bottom  | *String* | 
| | default value is bottom || 



For example, to show success toast that lasts for 5 seconds.
```
toast.notify('This is a success toast', {
  duration: 5,
  type: "success"
})
```

----

# Todo
* Custom desing
* Toast stacking

# Miscellaneous

