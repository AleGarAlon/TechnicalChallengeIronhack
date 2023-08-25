import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./HomePage.css"



const PhonesDetailsPage  = () => {
    const [phone, setPhone] = useState("")
    const {id} = useParams()
    

    const fetchPhone = async ()=> {
        const response = await fetch(`http://localhost:5005/phones/${id}`)
        
        if (response.status === 200) {
            const parsed = await response.json()
            setPhone(parsed)
        }
    }

    useEffect (() => {
        fetchPhone()
    },[])
    return (
        <>
        <div className="mobiles">
            <img className="mobileImg" src={`/src/assets/images/${phone.imageFileName}`} alt={phone.imageFileName} />
            <h3>Name: {phone.name}</h3>
            <p>Manufacturer: {phone.manufacturer}</p>
            <p>Description:{phone.description}</p>
            <p>Color: {phone.color}</p>
            <p>Price{phone.price}</p>
            <p>Screen:{phone.screen}</p>
            <p>Processor:{phone.processor}</p>
            <p>Ram{phone.ram}</p>
            
        </div>
            <Link className="backBtn" to="/"> Go back
            </Link>
        </>
    )
}

export default PhonesDetailsPage;