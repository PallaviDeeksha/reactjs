import React from "react"

const Students=(props)=>{
    let data=props.data

    return(
        <div>
            <table border="2px"   style={{textAlign:"center", fontWeight:"bolder"}}>

            <tr>
                <th>studentname </th>
                <th>age </th>
                <th>gender</th>
                <th>dob</th>
                <th>course</th>
                <th>section</th>
                <th>photo</th>
                <th>phone</th>
            </tr>

            { data.map((x)=>{

                return<tr>

                    <td>{x.studentname}</td>
                    <td>{x.age}</td>
                    <td>{x.gender}</td>
                    <td>{x.dob}</td>
                    <td>{x.course}</td>
                    <td>{x.section}</td>
                    <td><img src={x.photo} alt=""  style={{height:"50px", width:"50px"}}/></td>
                    <td>
                        <ol>
                            {x.phone.map((x)=>{
                                return <li>{x}</li>
                                
                            })}
                        </ol>
                    </td>
                </tr>

            })}
            </table>
        </div>
    )
}

export default Students