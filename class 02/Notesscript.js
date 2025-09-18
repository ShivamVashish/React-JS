// React Import : Ye hme ek React name se object create krke deta h Jo hmari react liabrary h
// React DOM : Ye hme ek react dom nm se object create krke deti h (Inka use krke hm react element create 
// kr skte h) or React Dom ka use krke hm usko render krva skte h apne page pr
// React.createElement se iske element ko crete krte h

// React.createElement(attributes,text,props,type)ye sb iske andr hi set kr skte h
// example (React Element)
const h2 = React.createElement('h2',{className:'sub-heading',id:'Sub-title'},'Hello React JS') // ye hme ek object return krke dega(Simple)
// class set krne ke liye className use krege
// props (isme do chez show ho rhi h ek to children:'hello react js or className:sub-heading)
// page pr show krane ke liye (iske liye React DOM use krege react m koi trika nhi hota)
// phle hme html m div create krke id="root" dete h

// const root = ReactDOM.createRoot(document.querySelector('#root'))//ye btana hota h ki iske andr create krdo 
// root.render(h2)

//  // Render is a presentation tool to show the output your data in your display and render is
//used to create dom element and interconnected to each other

// React.createElement krte h to object create hota or phir uss object ko hm render ko de dete h render method
// ye dom ka element create kr rha or append kr rha h


// Javascript (DOM Element)
// const h3 = document.createElement('h3') /// ye bht sari properties h isme or bht space leta h 
// h3.innerText = 'Hello Js'
// document.querySelector('#root').append(h3) // ye h javascript ki help se create krna ek element ko 

// ek ke andr ek element create krna 
// const container = React.createElement('div',{className:'container',id:'main-container'},
// [React.createElement('section',{key:1'},
// [React.createElement('p',{key:2},'Hello Shivam')]
// )]
// )
// const root = ReactDOM.createRoot(document.querySelector('#root'))
// root.render(container)

// Javascript se ye code h pure or nahi isme id de rkhi h but usme id class content ek sath de skte h 

// const rootdiv =  document.querySelector('#root')
// const innerdiv = document.createElement('div')
// const section = document.createElement('section')
// const p = document.createElement('p')
// p.innerText = 'Hello Coder Army'
// section.append(p)
// innerdiv.append(section)
// rootdiv.append(innerdiv)