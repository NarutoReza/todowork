import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const View = () => {
    const navigate = useNavigate()

    const [ data, setData ] = useState([])

    useEffect(() => {
        axios
            .get("http://localhost:8080/view")
            .then(({ data }) => {
                setData(data)
            })
    }, [])

    return(
        <>
            <div class="table-responsive">
                <table class="table">
                    <thead>
                        <tr>
                            <th>Work To Do</th>
                            <th>Status</th>
                            <th>Change Status</th>
                            <th>Delete Work</th>
                        </tr>
                    </thead>

                    <tbody>
                        {data && data.map((item) => {
                            return(
                                <tr key={item._id}>
                                    <td>{item.name}</td>
                                    <td>{item.status}</td>
                                    <td>
                                        {(() => {
                                            if(item.status == "Complete"){
                                                return(
                                                    <button className="btn btn-outline-info" onClick={
                                                        (() => {
                                                            axios
                                                                .patch(`http://localhost:8080/update/${item._id}`, {status: "Incomplete"})
                                                                .then((res) => {
                                                                    console.log("Status changed")
                                                                    window.location.href="http://localhost:3000"
                                                                })
                                                                .catch((err) => {
                                                                    console.log(err)
                                                                })
                                                            console.log("Incomplete")
                                                        })
                                                    }>Mark as Incomplete</button>
                                                )
                                            }
                                            else if(item.status == "Incomplete"){
                                                return(
                                                    <button className="btn btn-outline-info" onClick={
                                                        (() => {
                                                            axios
                                                                .patch(`http://localhost:8080/update/${item._id}`, {status: "Complete"})
                                                                .then((res) => {
                                                                    console.log("Status changed")
                                                                    window.location.href="http://localhost:3000"
                                                                })
                                                                .catch((err) => {
                                                                    console.log(err)
                                                                })
                                                            console.log("Complete")
                                                        })
                                                    }>Mark as Complete</button>
                                                )
                                            }
                                        })()}
                                    </td>
                                    <td>
                                        <button className="btn btn-outline-info" onClick={
                                            (() => {
                                                axios
                                                    .delete(`http://localhost:8080/delete/${item._id}`)
                                                    .then((res) => {
                                                        console.log("Work Deleted")
                                                        window.location.href="http://localhost:3000"
                                                    })
                                                    .catch((err) => {
                                                        console.log(err)
                                                    })
                                            })
                                        }>Delete Work</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default View