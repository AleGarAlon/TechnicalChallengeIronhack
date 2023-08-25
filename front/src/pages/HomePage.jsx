import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css"


const HomePage  = () => {
const [phones,setPhones] = useState([])

    const fetchPhones = async () => {
        try {
            const response = await fetch("http://localhost:5005/phones")
            if (response.status === 200) {
                const parsed = await response.json();
                setPhones(parsed)
            }
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchPhones()
    }, []) ;   
    
        return (
            <div>
                <h1>Welcome to our store</h1>
                <h2>Our devices</h2>
                
                {phones.map(phone =>(
                    <div className="mobiles" key={phone.id}>
                   <Link  to={`/phones/${phone.id}`}>
                    <img className="mobileImg" src={`/src/assets/images/${phone.imageFileName}`} alt={phone.imageFileName} />
                    <h3>Name: {phone.name}</h3>
                    </Link>
                    <Link to="/"> Go back
                    </Link>
                    </div>
                ))}
                
            </div>
        )
}

export default HomePage;