https://btholt.github.io/complete-intro-to-react-v4/

## Pure React

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

### parcel

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
5. use setState to tell react need to re-render
6. visilize the state

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
