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