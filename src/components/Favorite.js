import React from 'react'
import Navbar from './Navbar'

const Favorite = () => {
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
                  <th scope="col">Temperature</th>
                  <th scope="col">Weather</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Indore</th>
                  <td>26.10°C</td>
                  <td>Clouds</td>
                </tr>
                <tr>
                  <th scope="row">Bhopal</th>
                  <td>29.88°C</td>
                  <td>Clear</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>    </div>
  )
}

export default Favorite
