// Question Interview Purpose

// Create Element Using React Js //
// React Element : A React element is a plain JavaScript object. And it's a lightweight, and it 
// can take multiple attributes, type, props, and it's a blueprint of UI, not a DOM

// React Component : A React Component is a function or Class it main work is create a UI and its return a react
// react element and It takes props as input to receive data(child) from a parent component.

// Why $$typeof is Used : It is used for security purpose hacking na ho
// $$typeof: Symbol.for('react.element'),
// Create Element and Data Providing use React JS
const h2 = React.createElement('h2',{className:'sub-heading',id:'Sub-title'},'Hello React JS')
const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(h2)