﻿import React, { useState,useEffect } from 'react';
export function AdminHome() {
    const [listofvehicles, setVehicles] = useState([]);
    useEffect(() => {
        var vehicles = fetch('https://localhost:7275/api/ManageVehicles/vehicles/notapproved', {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then((response) => response.json())
            .then((json) => { setVehicles(json) });

    }, []);
    const IdForView = (x) => {
        sessionStorage.setItem("IdForView", x["_Id"]);
        sessionStorage.setItem("Name", x["name"]);
        sessionStorage.setItem("Selected", x["fuelType"]);
        sessionStorage.setItem("Rentperhour", x["rentPerHour"]);
        sessionStorage.setItem("Capacity", x["capacity"]);
        sessionStorage.setItem("RGnumber", x["rGnumber"]);
        sessionStorage.setItem("Image", x["image"]);
        sessionStorage.setItem("RCImage", x["rcImage"]);
        sessionStorage.setItem("Useremail", x["userEmailId"]);
        window.location.replace("https://localhost:44475/AdminViewVehicle");
    }
    return (
        <>
        <div>
            <h1>Welcome, Admin</h1>
            </div>
            <div>
      
                {listofvehicles.map(vehicle => {
                    return (<div class="card" style={{ width: '25rem' }}>
                        <div class="card-body" >
                            <img class="card-img-top" src={vehicle["image"]} height="300px" width="75px" alt="Card image cap" />
                            <div class="card-body">

                                <h5 class="card-title">{vehicle["name"].toString()}</h5>
                                <h6 class="card-title">{vehicle["rGnumber"]}</h6>
                                <a onClick={() => IdForView(vehicle)} class="btn btn-primary">View Vehicle</a>
                            </div>
                        </div>
                    </div>);
                })}
            </div>
        </>
        );
}