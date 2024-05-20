import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import './App.css';

function Home() {

  const apiKey = "f56f24967aaf51182d1d4df628297c6d"
  const [inputCity, setInputCity] = useState("")
  const [data, setData] = useState({})
  const [show, setShow] = useState(true)
  const [name, namechange] = useState("");



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

  const handleChangeInput = (e) => {
    // console.log("value", e.target.value)
    setInputCity(e.target.value)
  }

  const handleSearch = () => {
    getWetherDetails(inputCity)
  }

  const navigate = useNavigate();

  const handlefev = (e) => {
    e.preventDefault();
    let regobj = { inputCity };
    console.log(JSON.stringify(regobj), "CityName");
    // if (IsValidate()) {
    console.log(regobj);
    try {
    fetch("http://localhost:8000/city", {
        method: "POST",
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(regobj)
    }).then((res) => {
        console.log(res);
        navigate('/Favorite');
    }).catch((err) => {
        console.log(err);
    });
} catch (err) {
    console.log(err);
}

}


  return (
    <>
      <Navbar />

      <div className="col-md-12">
        <div className="wetherBg">
          <h1 className="heading">Weather App</h1>

          <div className="d-grid gap-3 col-4 mt-4">
            <input type="text" className="form-control"
              value={inputCity}
              onChange={handleChangeInput} />
            <button className="btn btn-primary" type="button"
              onClick={handleSearch}
            >Search</button>
          </div>
        </div>

        {Object.keys(data).length > 0 &&
          <div className="col-md-12 text-center mt-5">
            <div className="shadow rounded wetherResultBox">
              <table className="table table-dark">
                <thead>
                  <tr>
                    <th scope="col">City Name</th>
                    <th scope="col">{show ? "Temperature" : "Fahrenheit"}</th>
                    <th scope="col">Weather</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody> 
                  <tr>
                    <th scope="row" value={data?.name} onChange={e => namechange(e.target.value)}>{data?.name}</th>
                    <td className="cel">{show ? `${((data?.main?.temp) - 273.15).toFixed(2)}°C` : `${((((data?.main?.temp) - 273.15) * 9 / 5) + 32).toFixed(2)}°F`}</td>
                    <td>{data?.weather[0].main}</td>
                    <td>
                      <button className="btn btn-primary" type="button"
                        onClick={handlefev}
                      >Add to Favorite</button>
                    </td>                    
                  </tr>
                </tbody>                 
              </table>
              <button className="btn btn-primary" type="button"
                      onClick={ () => setShow(!show) }
                    >{show ? "Show in Fahrenheit" : "Show in Temperature"}</button>
            </div>
          </div>
        }


      </div>
    </>
  );
}

export default Home;
