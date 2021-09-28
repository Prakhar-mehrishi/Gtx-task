import React,{useState} from 'react';
import "./home.css";
import Card from '../Card';
import dataList from "../../data/dataList";

const Home = () => {
    const [items, setItems] = useState(dataList)
    return (
        <div className="container ">
        <div className="row ">
                {
                    items.map((data)=>{
                        const {id, image, Rent, size ,situation,location } = data
                        return(
                            <div className="col-12 col-sm-12 col-md-4  col-lg-4  parent" key={id}>
                            <li className="listStyle">
                                 <Card 
                                 id={id}
                                 image={image}
                                 rent={Rent}
                                 size={size}
                                 situation={situation}
                                 location={location}
                                 />
                            </li>
                            </div>
                         
                        )
                    })
                }
           

            </div>
        </div>
    )
}

export default Home;
