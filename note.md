https://btholt.github.io/complete-intro-to-react-v4/

## Pure React

创建 app class 的实例挂载到 root 上
或者直接写标签

```
render(React.createElement(App), document.getElementById("root"));
render(<App />, document.getElementById("root"));
```

### class vs function component

### pass components props

### add a click handler

## Tool

### npm

1. npx
2. add addition para e.g. npm run lint -- --debug

### prettier

1. npx
2. pretier App.js --write
3. vscode prettier require config

### eslint

1. handle code styles (e.g.triple equal)
2. has some overlap with prettier but we use prettier to handle formatting stuff
3. extends: package of rules
4. prettier preset can turn off some config of eslint which means to handle formatting
5. eslint-config-prettier eslint-plugin-prettier
6. 3:10 error 'React' is not defined no-undef 'no-undef' is a rule name
7. eslint --debug eslint --fix
8. .eslintrc.json globals:{'react':true} can ignore 'React' is not defined no-undef
9. use babel-eslint to process jsx file
10. babel-eslint-import to help use import or export
11. eslint-plugin-jsx-ally check for accessiblity
12. eslint-plugin-react
13. eslintrc.json extends order is quite essential.prettier should be in the end so that it can disable something you don't want to check
14. parser:babel-eslint before eslint lint code it should use babel-eslint parser first.
15. in code if we want to ignore some check we can use 'eslint-disable-next-line';
16. in rules turn off or turn on the rule or set it to warning or error.

### parcelet

1. parcel can check the .env file and read them as process.env

## JSX

1. jsx will translate into 'render function', it just a shortcut make code more readable

```html
return (
<div id="my-id"><h1>{props.name}</h1></div>
)
```

```javascript
return React.createElement("div", { id: "my-id" }, [
  React.createElement("h1", {}, props.name)
]);
```

2. parcel built in babel for translate of jsx
3. in jsx we can't directly use 'class' and 'for' attribute instead we use 'className' for loop we use 'htmlFor' cause like 'label' has 'for' attribute
4. composed component in jsx must begin with uppercase.s
5. you have to push closing slash in jsx
6. return multiple top level tags with 'React.Fragment' tag;in jsx2 can use "<></>" shorthand of 'React.Fragment'

## rendering data

### state and life cycle

1. componentDidMount once the component is rendered into the dom. the component is visible now and then call
   componentDidMout. it's by far the most useful
2. state can change while props is immutable.props come from parent to child,while state stay in same level.
3. 'one way data flow' the data only from parent to child
4. super(props) React.component we have to do use super otherwise react can't track props
5. use setState to tell react need to re-render;add callback function you guareentee that the function will call after the setState
6. shouldComponentUpdate can do performance op.

```html
<pre>
    <code>{JSON.stringify(this.state, null, 4)}</code>
</pre>
```

### key prop

1. how react renders
   when react render an array. when order changes react does't know how things changed,it doesn't know index change,it just re-render.
2. key exist (unique)
   react check the key and know if the key same,it neec not to destroy that dom and just move the dom to the right position

### passing components data with props

1. don't like vue do not need to declare props in component just read props from this.props

## routing

### reach/router

1. react tools $r consolelog the highlight router. we can use$r.setState to set state
2. score system

## babel

1. babel-eslint
2. babel-core babel-preset-env
3. babel-plugin-transform-class-properties
4. babel-preset-react

## async ui

1. use top level state instead of constructor in now echo
2. getDerivedStateFromProps
3. static method and interior this

## form

1. when type in input,react catch it and know must re-render,and it will re-render the entire app.
2. two way data binding is not free in react
3. react bind **one event** lisner at the root element. when events bubble to this,react know to got to re-render.

## context

1. when a lot of props do not use spread operator {...} ,it make the component not explicit which prop it get.
2. context is universal data for your app. if you set in componentA you can access it wherever underneth the componentA.
3. createContext provide provider component and consumer component.
   provider like entrance of the data,and consumer like the exit of the data.
4. pattern in react called function as a child;function return markup is technically a component;
5. if you need to use context in lifecycle or methods you need wrap the current component and use props to transfer context

## portal

1. key and children are exceptions for passing to props;key like list's key;children children components,self closing tag has no children
2. event bubbling,despite modal and react root do not wrap each other;the detail component can catch the event;

## ref

1. ref some sort of dom element
2. ```javascript
   <h1 ref={el => (this.myH1 = el)}>{name}</h1>
   ```

3. it will calling on the first render past. so the first time in render function,it will be undefined.and the second time it will has value.

## test

1. react-test-rendered cause broswer render is always slow.
2. eslint env.jest true
3. snapshot test
   1. snapshot can update when run test again with arguments;
   2. This looked like this before and I expect this to continue looking like this until I don't and then I will update it
   3. low confidence test
   4. API response would be a perfect thing to write a snapshot test for
   5. should check the `__snapshot__` generated files
4. jest --watch
5. jest --coverage
6. Enzyme test framework
7. which to test(atypically)
   1. test modules that will live on for a long time e.g. API
   2. essential core code
   3. bug fixed

## css in js

emotion,react-emotion(@emotion/core,@emotion/styled)

javascript templates into css
