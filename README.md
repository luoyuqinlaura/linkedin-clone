# LinkedIn Clone

## Set up firebase

firebase database + deploy
https://www.youtube.com/watch?v=QaYts9sPmcY

## Header section

1. devide the header into left and right parts
2. for the left search part, using <b>MaterialUI</b>
3. command + p for search file in the vscode

4. add avatar now

## Feed section

1. search: generate the template of html, adjust the input style with flex:1 & border:none is cute.
2. reusable component: InputOption, using props(Icon, title, color)
   <img src="">
3. Post area:
   we used reusable components again. (InputOption)
   - useState hook: when we need to store and update new posts
   - paste firebase config file and in the terminal install firebase -> import firebase -> initializeApp function sets everything up.
   - useEffect hook: every time the component using this hook is updated or rerendered, if we dont pass a second argument.
   - Key is important when redering out a list in React, because we only want react to render the last thing we put in, we need to use key to recognize it, instead of rerendering the whole list.
4. Redux: control data flow inside app, preventing from 'prop driling'.
   <img src=""/>
