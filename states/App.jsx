import React, {Component} from "react"
import JSON from "./students.json"
import Students from "./Students.jsx"

class App extends Component{
    constructor(){
        super()
        this.state={
            json:JSON
        }
    }
    render()
    {
        return(
            <div>
                <Students data={this.state.json}/>
            
            </div>
        )
    }
}
export default  App