import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Protected(props) {
const { Component }= props;
const Navigate = useNavigate();

useEffect(() => {
    if(!localStorage.getItem('user-info')) {
        Navigate("/Login")
    }
}) ;

return (
    <div>
        <Component />
    </div>
)
}

export default Protected;