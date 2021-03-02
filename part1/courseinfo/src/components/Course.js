import React from 'react'

const Title = (props) => {
    return(
        <div>
            <h1>{props.title}</h1>
        </div>
    )
}

const Header = (props) => {
 
    return (
      <div>
        {<h3>{props.item.name}</h3>}
      </div>
    )
  
  }
  
  const Part = (props) =>{
    return (
      <div>
        {props.item.map((value)=><p key={value.id}>{value.name} {value.exercises}</p>)}
      </div>
    )
  }
  const Content = (props) => {
    
    return (
      <div>
        <Part item={props.item.parts} />
      </div>
    )
  }
  
  const Total = (props) => {
    console.log(props)
    return (
      <div>
         <h4>Total of {props.item.reduce((sum, value)=> sum + value.exercises, 0 )} exercises</h4>
      </div>
    )
  }
  
  const Course = (props) => {
    
    return(
      <div>
       <Title title={props.title} />
       {props.courses.map((arrObject) => {
       return(
       <div key={arrObject.id} >
         <Header  item={arrObject}/> 
         <Content item={arrObject}/>
         <Total item={arrObject.parts}/>
       </div> )})} 
      </div>
    )
  }

  export default Course