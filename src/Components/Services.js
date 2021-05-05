import React from 'react';
import Card from './Card';
import Sdata from "./Data"

const Services = () => {
    return (
<>
<div className="my-5">
    <h1 className="text-center">Our Services</h1>
    <div className="container-fluid mb-5">
        <div className="row">
            <div className="col-10 mx-auto">
            <div className="row gy-4">
                    
            {
                Sdata.map((data,ind)=>{
                    return <Card img={data.image}
                    title={data.title}
                    />
                }) 
            }

            </div>  
            </div>
        </div>
    </div>
</div>
</>
    );
};

export default Services;