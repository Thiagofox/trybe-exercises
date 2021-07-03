import { connect } from "react-redux"

function list({ tasks }) {
  return (
    <div>
      <ul>
        { tasks.map ((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>

       
  )
}

const mapStateToProps = (state) => ({
  tasks: state.todoReducer.tasks
})

export default connect(mapStateToProps)(list)

