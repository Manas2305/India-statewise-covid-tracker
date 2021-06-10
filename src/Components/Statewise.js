import React,{ useEffect, useState } from 'react';
import "./Statewise.css";

const Statewise = () => {

    const [data,setData] = useState([]);

    const getData=async()=>{
        const res = await fetch("https://api.covid19india.org/data.json");
        const actualData = await res.json();
        console.log(actualData.statewise);
        setData(actualData.statewise);
    }

    useEffect(() => {
        getData();
    }, [])
    return (
        <>
            <div className="container-fluid mt-3">
                <div className="text-center p-1 main_Heading">
                    <h4>🔴 LIVE</h4>
                    <h1 >INDIA COVID-19 DASHBOARD</h1> 
                </div>

                <div className="table_responsive">
                    <table className="table container-fluid p-5">
                        <thead className="table-dark">
                            <tr>
                                <th>State</th>
                                <th>Confirmed</th>
                                <th>Recovered</th>
                                <th>Deaths</th>
                                <th>Active</th>
                                <th>Updated</th>
                            </tr>
                        </thead>
                        <tbody className="table table-striped table-hover">
                            {
                                data.map((currEle,ind)=>{
                                    return(
                                        <tr key={ind}>
                                            <td className="state_hover">{currEle.state}</td>
                                            <td className="letter_hover">{currEle.confirmed}</td>
                                            <td className="letter_hover">{currEle.recovered}</td>
                                            <td className="deaths_hover">{currEle.deaths}</td>
                                            <td className="letter_hover">{currEle.active}</td>
                                            <td className="letter_hover">{currEle.lastupdatedtime}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Statewise
