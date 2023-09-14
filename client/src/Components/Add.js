import { useState } from "react"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Add = () => {

    const navigate = useNavigate()

    const [ data, setData ] = useState({
        name: "",
        status: "Incomplete"
    })

    const updateData = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const saveData = (name, status) => {
        axios
            .post("http://localhost:8080/save", {name: name, status: status})
            .then((res) => {
                console.log("Data saved")
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const submit = e => {
        e.preventDefault()
        saveData(data.name, data.status)
        navigate('/')
        console.log(data)
    }

    return(
        <>
            <form onSubmit={submit}>
                <div class="form-group">
                    <label for="name">Enter your to-do detail</label>
                    <br />
                    <input className="form-control my-3" autoFocus type="text" name="name" onChange={updateData} required />
                    <br />

                    <button  className="btn btn-outline-info">Add Data</button>
                </div>
            </form>
        </>
    )
}

export default Add