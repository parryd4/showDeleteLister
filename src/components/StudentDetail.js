import React from 'react'

export default function StudentDetail(props){

  return(
    <div className="single-student">

      <h2>{props.allStudents[props.singledOut -1].name}</h2>
      <button>Sacrifice to the state!</button>
    </div>
  )
}

// {this.state.students[props.match.params.id-1].name}
// <Route path='/students/:id' render={(props) => {
//   console.log()
//   return <h2></h2>
// }} />
