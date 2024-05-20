import React from 'react'
import { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
// import json from "../../db.json"
// import json from "../db.json"

const Favorite = () => {
//  json.inputCity
    const [show, setShow] = useState(true)
    const apiKey = "f56f24967aaf51182d1d4df628297c6d"
    const [data, setData] = useState({}) 

    const getWetherDetails = (cityName) => {
        if (!cityName) return
        const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey
        axios.get(apiURL).then((res) => {
          console.log("response", res.data)
          setData(res.data)
        }).catch((err) => {
          console.log("err", err)
        })
      }

    return (
        <div>
            <Navbar />
            <div className="col-md-12 text-center mt-5">
                <h1>Your Favorite City</h1>
                <div className="shadow rounded wetherResultBox">
                    <table class="table table-dark fev">
                        <thead>
                            <tr>
                                <th scope="col">City Name</th>
                                <th scope="col">{show ? "Temperature" : "Fahrenheit"}</th>
                                <th scope="col">Weather</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">Indore</th>
                                <td className="cel">{show ? `26°C` : `88°F`}</td>
                                <td>Clouds</td>
                            </tr>
                            <tr>
                                <th scope="row">Bhopal</th>
                                <td className="cel">{show ? `29°C` : `95°F`}</td>
                                <td>Clear</td>
                            </tr>
                        </tbody>
                    </table>
                    <button className="btn btn-primary" type="button"
                        onClick={() => setShow(!show)}
                    >{show ? "Show in Fahrenheit" : "Show in Temperature"}</button>
                </div>
            </div>    </div>
    )
}

export default Favorite
