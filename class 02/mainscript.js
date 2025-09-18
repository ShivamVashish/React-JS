// Question Interview Purpose

// Create Element Using React Js //
// React Element : A React element is a plain JavaScript object. And it's a lightweight, and it 
// can take multiple attributes, type, props, and it's a blueprint of UI, not a DOM

// React Component : A React Component is a function or Class it main work is create a UI and its return a 
// react element and It takes props as input to receive data(child) from a parent component.

// Why $$typeof is Used : It is used for security purpose (koi bhi maleshish code api ke throw na bhej ske)
// $$typeof: Symbol.for('react.element'), symbol transfer hi nhi hone dega
// Create Element and Data Providing use React JS(Single)

// const h2 = React.createElement('h2',{className:'sub-heading',id:'Sub-title'},'Hello React JS')
// const root = ReactDOM.createRoot(document.querySelector('#root'))
// root.render(h2)

// Root ke andr ek container ke andr section or section ke andr paragraph(Child Parent)
//Array pass krege to hi key ki jarurat h vrna nhi

// const container = React.createElement('div',{className:'container',id:'main-container'},
// [React.createElement('section',{key:1},
// [React.createElement('p',{key:2},'Hello Shivam')]
// )])
// const root = ReactDOM.createRoot(document.querySelector('#root'))
// root.render(container)

// (Siblings)
// style set krne ke liye Object crete krkre key value pair m likheg
const BigContainer = React.createElement('div',{id:'main-contianer', style: { key:1,textAlign:'center'}},[
    React.createElement('h3',{key:1,id:'heading-3', style: {fontSize:'40px'}},'Form'),
    // React.createElement('p',{ style: {backgroundColor:"green", fontSize:'20px',fontWeight:'bold'}},'Hello smaller Brother'),
    React.createElement('img',{ key: 2,style : {width:'100%', maxWidth: '300px',backgroundColor:'Blue',padding:"10px",borderRadius:"20px"}, src:'https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F18h8oyjknd6q0tmkz383.png'}),
    React.createElement('div',{key:3,id:'input-container'},[
    React.createElement('label',{key:1, htmlFor: 'username',  },'Username : '),
    React.createElement('input',{key:2, id: 'username',type:'password', style:{margin: '10px'}}),
    ]) 
])
const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(BigContainer)

