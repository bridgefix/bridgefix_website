import React, { useEffect, useState, useRef } from 'react'
import ReactToPrint from 'react-to-print';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import DescriptionIcon from '@mui/icons-material/Description';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import EngineeringIcon from '@mui/icons-material/Engineering';
import TerminalIcon from '@mui/icons-material/Terminal';
import LanguageIcon from '@mui/icons-material/Language';
import FitbitIcon from '@mui/icons-material/Fitbit';
import axios from 'axios';
import user from '../images/user.jpeg'
import { BASE_URL } from '../config';


export default function Resume4() {

    const config = { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }

    const componentRef = useRef();

    const [data1, setdata] = useState([])
    const [usrid, setUsrID] = useState()

    useEffect(() => {
        if (window.localStorage.getItem('id')) {
            setUsrID(parseInt(window.localStorage.getItem('id')))
        }
    })

    useEffect(() => {
        // console.log(id)

        let ngrok = "https://4d4f-2405-201-300b-7072-7568-f976-cbbf-7a4d.in.ngrok.io"
        let url = "http://127.0.0.1:8000"
        // http://127.0.0.1:8000/api/resume/1/
        axios.get(` ${BASE_URL}/api/resume/${parseInt(window.localStorage.getItem('id'))}/`, config).then((res) => {
            // axios.get(` ${ngrok}/api/resume/${id}/`, config).then((res) => {
            setdata([res.data])
        }).catch((err) => {
            console.log(err)
        })
    }, [])
    // debugger
    let getdata = JSON.parse(window.localStorage.getItem('data'))
    let getdata2 = JSON.parse(window.localStorage.getItem('data2'))
    let getdata3 = JSON.parse(window.localStorage.getItem('data3'))
    let getdata4 = JSON.parse(window.localStorage.getItem('data4'))
    let getdata5 = JSON.parse(window.localStorage.getItem('data5'))
    let getdata6 = JSON.parse(window.localStorage.getItem('data6'))
    let getdata7 = JSON.parse(window.localStorage.getItem('data7'))
    let getdata8 = JSON.parse(window.localStorage.getItem('data8'))
    let getdata9 = JSON.parse(window.localStorage.getItem('data9'))
    let getdata10 = JSON.parse(window.localStorage.getItem('data10'))
    let getdata11 = JSON.parse(window.localStorage.getItem('data11'))
    let getdata12 = JSON.parse(window.localStorage.getItem('data12'))

    return (
        <div>
            <div className='container resume4' ref={componentRef} style={{ width: "70%", border: "1px solid #018bb7", padding: "0px" }}>
                <div className='row'>
                    {
                        data1.map((items) => {
                            let image = items.profile_image
                            return (
                                <>
                                    <div className='d-flex '>

                                        <div style={{ backgroundColor: "#018bb7", width: "34%", color: "white", padding: "40px 20px", height: "auto" }}>
                                            <div>
                                                <h3 ><ContactMailIcon sx={{fontSize:"30px"}}/>&nbsp;&nbsp;Contact</h3>
                                                <div className='d-flex'>
                                                    <EmailIcon /> <p style={{ marginLeft: "10px" }}>{items.email}</p>
                                                </div>
                                                <div className='d-flex'>
                                                    <LocalPhoneIcon /> <p style={{ marginLeft: "10px" }}>{items.phone_number}</p>
                                                </div>
                                                <div className='d-flex'>
                                                    <LocationOnIcon /> <p style={{ marginLeft: "10px" }}>{items.city}, {items.country} {items.pin_code}</p>
                                                </div>
                                                {
                                                    items.social_links === '' ? "" :
                                                        <div className='d-flex'>
                                                            <LinkedInIcon /> <p style={{ marginLeft: "10px" }}>{items.social_links}</p>

                                                        </div>
                                                }
                                            </div>
                                            <div className='mt-4'>
                                                <h3><EngineeringIcon sx={{fontSize:"35px"}}/>&nbsp;&nbsp;Skills</h3>
                                                <ul>
                                                {
                                                    items.skills===undefined?"":
                                                    items.skills.map((skl)=>{
                                                        return(
                                                            <li>{skl}</li>
                                                        )
                                                    })
                                                }
                                                </ul>
                                            </div>
                                            
                                        
                                            

                                        </div>

                                        <div style={{ width: "66%", backgroundColor: "white", padding: "40px 20px" }}>
                                            <div className='d-flex' style={{ justifyContent: "space-between", paddingBottom: "20px" }}>

                                                <div>
                                                    <h1>{items.first_name} {items.last_name}</h1>
                                                    <h5>{items.profession}</h5>
                                                </div>
                                                <div className='userimg2' >
                                                    {
                                                        items.profile_image === null ? <img src={user} ></img> : <img src={` http://127.0.0.1:8000/${image}`}></img>
                                                    }
                                                </div>

                                            </div>
                                            <div className='col-sm-12' style={{ height: "2px", backgroundColor: "#018bb7" }}></div>
                                            <div>
                                                <div className='col-sm-12 mt-5' style={{ color: "#018bb7", fontWeight: "bold" }}>
                                                    <h4><DescriptionIcon sx={{fontSize:"35px"}}/>&nbsp;&nbsp;Professional Summary</h4>
                                                </div>
                                                <div className=' mt-3 pl-3'><p>{items.profile_summary}</p></div>
                                            </div>
                                            <div className='col-sm-12' style={{ height: "2px", backgroundColor: "#018bb7" }}></div>

                                            <div>
                                                <div className='col-sm-12 mt-5' style={{ color: "#018bb7", fontWeight: "bold" }}>
                                                    <h4><SchoolIcon sx={{fontSize:"35px"}}/>&nbsp;&nbsp;Education</h4>
                                                </div>
                                                {
                                                    items.Education===undefined?"":
                                                    items.Education.map((edu)=>{
                                                        return(
                                                            <div className='pl-3 pb-3'>
    
                                                                       <div className='d-flex pt-4' style={{ justifyContent: "space-between" }}>
                                                                           <div className=''>
            
                                                                               <p>{edu.degree}</p>
                                                                           </div>
                                                                           <div className=''>
                                                                               <p style={{ textAlign: "end", color: "#018bb7", fontWeight: "bold" }}>{edu.start_date} to {edu.end_date}</p>
            
                                                                           </div>
                                                                       </div>
                                                                       <p>{edu.field_of_study}</p>
                                                                       <h5>{edu.school_name},{edu.school_location}</h5>
                                                                   </div>
                                                        )
                                                    })
                                               
                                                }
                                            </div>
                                            {
                                                items.Experience[0] === undefined ? "" :
                                                    <>
                                                        <div className='col-sm-12' style={{ height: "2px", backgroundColor: "#018bb7" }}></div>
                                                        <div>
                                                            <div className='col-sm-12 mt-5' style={{ color: "#018bb7", fontWeight: "bold" }}>
                                                                <h4 ><WorkIcon sx={{fontSize:"30px"}}/>&nbsp;&nbsp;Experience</h4>
                                                            </div>
                                                            {
                                                                items.Experience[0] === undefined ? "" :
                                                                    <div className='pl-3'>

                                                                    <h5 className='mt-3' style={{ textTransform: "capitalize" }}>{items.Experience[0].Company_name} {items.Experience[0].city},{items.Experience[0].country}</h5>
                                                                        <div className='d-flex pt-2' style={{ justifyContent: "space-between" }}>


                                                                            <div className=''>
                                                                                <h5 style={{ textTransform: "capitalize" }}>{items.Experience[0].job_title}</h5>
                                                                            </div>
                                                                            <div className=''>
                                                                                <p style={{ textAlign: "end", color: "#018bb7", fontWeight: "bold" }}>{items.Experience[0].start_date} to {items.Experience[0].end_date}</p>

                                                                            </div>
                                                                        </div>
                                                                        <h5>{items.Experience[0].project_name}</h5>

                                                                        {

                                                                            getdata === null ? <p>{items.Experience[0].job_discription}</p> :
                                                                                getdata.map((item, key) => {
                                                                                    return (
                                                                                        <p> • {item.slice(1, item.length - 1)}</p>
                                                                                    )
                                                                                })
                                                                        }
                                                                        {
                                                                            items.Experience[0].project_urls === '' ? "" :
                                                                                <p><strong>Project_urls:-</strong> <a href={items.Experience[0].project_urls} target="_blank"> {items.Experience[0].project_urls} </a></p>
                                                                            }
                                                                            
                                                                            </div>
                                                                        }
                                                                        {
                                                                            items.Experience[1] === undefined ? "" :
                                                                            <div className='pl-3 mt-3'>
                                                                            
                                                                            <h5 className='mt-5' style={{ textTransform: "capitalize" }}>{items.Experience[1].Company_name} {items.Experience[1].city},{items.Experience[1].country}</h5>
                                                                            <div className='d-flex pt-2' style={{ justifyContent: "space-between" }}>
                                                                            <div className=''>
                                                                                <h5 style={{ textTransform: "capitalize" }}>{items.Experience[1].job_title}</h5>
                                                                            </div>
                                                                            <div className=''>
                                                                                <p style={{ textAlign: "end", color: "#018bb7", fontWeight: "bold" }}>{items.Experience[1].start_date} to {items.Experience[1].end_date}</p>

                                                                            </div>
                                                                        </div>
                                                                        <h5>{items.Experience[1].project_name}</h5>
                                                                        {
                                                                            getdata2 === null ?  <p>{items.Experience[1].job_discription}</p> :
                                                                                getdata2.map((item1, key) => {
                                                                                    return (
                                                                                        <p> • {item1.slice(1, item1.length - 1)}</p>
                                                                                    )
                                                                                })
                                                                        }
                                                                        {
                                                                            items.Experience[1].project_urls === '' ? "" :
                                                                                <p><strong>Project_urls:-</strong> <a href={items.Experience[1].project_urls} target="_blank"> {items.Experience[1].project_urls} </a></p>
                                                                        }
                                                                    </div>
                                                            }
                                                            {
                                                                items.Experience[2] === undefined ? "" :
                                                                <div className='pl-3 mt-3'>
                                                                
                                                                <h5 className='mt-5' style={{ textTransform: "capitalize" }}>{items.Experience[2].Company_name} {items.Experience[2].city},{items.Experience[2].country}</h5>
                                                                        <div className='d-flex pt-3' style={{ justifyContent: "space-between" }}>
                                                                            <div className=''>
                                                                                <h5 style={{ textTransform: "capitalize" }}>{items.Experience[2].job_title}</h5>
                                                                            </div>
                                                                            <div className=''>
                                                                                <p style={{ textAlign: "end", color: "#018bb7", fontWeight: "bold" }}>{items.Experience[2].start_date} to {items.Experience[2].end_date}</p>

                                                                                </div>
                                                                        </div>
                                                                        <h5>{items.Experience[2].project_name}</h5>

                                                                        {/* <p className='pt-3'>{items.Experience[1].job_discription}</p> */}

                                                                        {
                                                                            getdata3 === null ?  <p>{items.Experience[2].job_discription}</p> :
                                                                                getdata3.map((item2, key) => {
                                                                                    return (
                                                                                        <p>• {item2.slice(1, item2.length - 1)}</p>
                                                                                    )
                                                                                })
                                                                        }
                                                                        {
                                                                            items.Experience[2].project_urls === '' ? "" :
                                                                                <p><strong>Project_urls:-</strong> <a href={items.Experience[2].project_urls} target="_blank"> {items.Experience[2].project_urls} </a></p>
                                                                        }
                                                                    </div>
                                                            }
                                                            {
                                                                items.Experience[3] === undefined ? "" :
                                                                    <div className='pl-3'>

                                                                        <div className='d-flex pt-4' style={{ justifyContent: "space-between" }}>
                                                                            <div className=''>
                                                                                <h5 style={{ textTransform: "capitalize" }}>{items.Experience[3].job_title}</h5>
                                                                            </div>
                                                                            <div className=''>
                                                                                <p style={{ textAlign: "end", color: "#018bb7", fontWeight: "bold" }}>{items.Experience[3].start_date} to {items.Experience[3].end_date}</p>

                                                                            </div>
                                                                        </div>
                                                                        <h5>{items.Experience[3].project_name}</h5>

                                                                        {/* <p className='pt-3'>{items.Experience[3].job_discription}</p> */}

                                                                        {
                                                                           getdata4 === null ?  <p>{items.Experience[3].job_discription}</p> :
                                                                                getdata4.map((item3, key) => {
                                                                                    return (
                                                                                        <p> • {item3.slice(1, item3.length - 1)}</p>
                                                                                    )
                                                                                })
                                                                        }
                                                                        {
                                                                            items.Experience[3].project_urls === '' ? "" :
                                                                                <p><strong>Project_urls:-</strong> <a href={items.Experience[3].project_urls} target="_blank"> {items.Experience[3].project_urls} </a></p>
                                                                        }
                                                                        <h5 style={{ textTransform: "capitalize" }}>{items.Experience[3].Company_name} {items.Experience[3].city},{items.Experience[3].country}</h5>
                                                                    </div>
                                                            }
                                                            {
                                                                items.Experience[4] === undefined ? "" :
                                                                    <div className='pl-3'>

                                                                        <div className='d-flex pt-4' style={{ justifyContent: "space-between" }}>
                                                                            <div className=''>
                                                                                <h5 style={{ textTransform: "capitalize" }}>{items.Experience[4].job_title}</h5>
                                                                            </div>
                                                                            <div className=''>
                                                                                <p style={{ textAlign: "end", color: "#018bb7", fontWeight: "bold" }}>{items.Experience[4].start_date} to {items.Experience[4].end_date}</p>

                                                                            </div>
                                                                        </div>
                                                                        <h5>{items.Experience[4].project_name}</h5>

                                                                        {/* <p className='pt-3'>{items.Experience[4].job_discription}</p> */}
                                                                        {
                                                                            getdata5 === null ?  <p>{items.Experience[4].job_discription}</p> :
                                                                                getdata5.map((item4, key) => {
                                                                                    return (
                                                                                        <p> • {item4.slice(1, item4.length - 1)}</p>
                                                                                    )
                                                                                })
                                                                        }
                                                                        {
                                                                            items.Experience[4].project_urls === '' ? "" :
                                                                                <p><strong>Project_urls:-</strong> <a href={items.Experience[4].project_urls} target="_blank"> {items.Experience[4].project_urls} </a></p>
                                                                        }
                                                                        <h5 style={{ textTransform: "capitalize" }}>{items.Experience[4].Company_name} {items.Experience[4].city},{items.Experience[4].country}</h5>
                                                                    </div>
                                                            }
                                                            {
                                                                items.Experience[5] === undefined ? "" :
                                                                    <div className='pl-3'>

                                                                        <div className='d-flex pt-4' style={{ justifyContent: "space-between" }}>
                                                                            <div className=''>
                                                                                <h5 style={{ textTransform: "capitalize" }}>{items.Experience[5].job_title}</h5>
                                                                            </div>
                                                                            <div className=''>
                                                                                <p style={{ textAlign: "end", color: "#018bb7", fontWeight: "bold" }}>{items.Experience[5].start_date} to {items.Experience[5].end_date}</p>

                                                                            </div>
                                                                        </div>
                                                                        <h5>{items.Experience[5].project_name}</h5>

                                                                        {/* <p className='pt-3'>{items.Experience[5].job_discription}</p> */}
                                                                        {
                                                                            getdata6 === null ?  <p>{items.Experience[5].job_discription}</p> :
                                                                                getdata6.map((item5, key) => {
                                                                                    return (
                                                                                        <p> • {item5.slice(1, item5.length - 1)}</p>
                                                                                    )
                                                                                })
                                                                        }
                                                                        {
                                                                            items.Experience[5].project_urls === '' ? "" :
                                                                                <p><strong>Project_urls:-</strong> <a href={items.Experience[5].project_urls} target="_blank"> {items.Experience[5].project_urls} </a></p>
                                                                        }
                                                                        <h5 style={{ textTransform: "capitalize" }}>{items.Experience[5].Company_name} {items.Experience[5].city},{items.Experience[5].country}</h5>
                                                                    </div>
                                                            }
                                                            {
                                                                items.Experience[6] === undefined ? "" :
                                                                    <div className='pl-3'>

                                                                        <div className='d-flex pt-4' style={{ justifyContent: "space-between" }}>
                                                                            <div className=''>
                                                                                <h5 style={{ textTransform: "capitalize" }}>{items.Experience[6].job_title}</h5>
                                                                            </div>
                                                                            <div className=''>
                                                                                <p style={{ textAlign: "end", color: "#018bb7", fontWeight: "bold" }}>{items.Experience[6].start_date} to {items.Experience[6].end_date}</p>

                                                                            </div>
                                                                        </div>
                                                                        <h5>{items.Experience[6].project_name}</h5>

                                                                        {/* <p className='pt-3'>{items.Experience[6].job_discription}</p> */}

                                                                        {
                                                                            getdata7 === null ?  <p>{items.Experience[6].job_discription}</p> :
                                                                                getdata7.map((item6, key) => {
                                                                                    return (
                                                                                        <p> • {item6.slice(1, item6.length - 1)}</p>
                                                                                    )
                                                                                })
                                                                        }
                                                                        {

                                                                            items.Experience[6].project_urls === '' ? "" :
                                                                                <p><strong>Project_urls:-</strong> <a href={items.Experience[6].project_urls} target="_blank"> {items.Experience[6].project_urls} </a></p>
                                                                        }
                                                                        <h5 style={{ textTransform: "capitalize" }}>{items.Experience[6].Company_name} {items.Experience[6].city},{items.Experience[6].country}</h5>
                                                                    </div>
                                                            }
                                                            {
                                                                items.Experience[7] === undefined ? "" :
                                                                    <div className='pl-3'>

                                                                        <div className='d-flex pt-4' style={{ justifyContent: "space-between" }}>
                                                                            <div className=''>
                                                                                <h5 style={{ textTransform: "capitalize" }}>{items.Experience[7].job_title}</h5>
                                                                            </div>
                                                                            <div className=''>
                                                                                <p style={{ textAlign: "end", color: "#018bb7", fontWeight: "bold" }}>{items.Experience[7].start_date} to {items.Experience[7].end_date}</p>

                                                                            </div>
                                                                        </div>
                                                                        <h5>{items.Experience[7].project_name}</h5>

                                                                        {/* <p className='pt-3'>{items.Experience[7].job_discription}</p> */}
                                                                        {
                                                                            getdata8 === null ?  <p>{items.Experience[7].job_discription}</p> :
                                                                                getdata8.map((item7, key) => {
                                                                                    return (
                                                                                        <p> • {item7.slice(1, item7.length - 1)}</p>
                                                                                    )
                                                                                })
                                                                        }
                                                                        {
                                                                            items.Experience[7].project_urls === '' ? "" :
                                                                                <p><strong>Project_urls:-</strong> <a href={items.Experience[7].project_urls} target="_blank"> {items.Experience[7].project_urls} </a></p>
                                                                        }
                                                                        <h5 style={{ textTransform: "capitalize" }}>{items.Experience[7].Company_name} {items.Experience[7].city},{items.Experience[7].country}</h5>
                                                                    </div>
                                                            }
                                                            {
                                                                items.Experience[8] === undefined ? "" :
                                                                    <div className='pl-3'>

                                                                        <div className='d-flex pt-4' style={{ justifyContent: "space-between" }}>
                                                                            <div className=''>
                                                                                <h5 style={{ textTransform: "capitalize" }}>{items.Experience[8].job_title}</h5>
                                                                            </div>
                                                                            <div className=''>
                                                                                <p style={{ textAlign: "end", color: "#018bb7", fontWeight: "bold" }}>{items.Experience[8].start_date} to {items.Experience[8].end_date}</p>

                                                                            </div>
                                                                        </div>
                                                                        <h5>{items.Experience[8].project_name}</h5>

                                                                        {/* <p className='pt-3'>{items.Experience[8].job_discription}</p> */}
                                                                        {
                                                                            getdata9 === null ?  <p>{items.Experience[8].job_discription}</p> :
                                                                                getdata9.map((item8, key) => {
                                                                                    return (
                                                                                        <p> • {item8.slice(1, item8.length - 1)}</p>
                                                                                    )
                                                                                })
                                                                        }
                                                                        {

                                                                            items.Experience[8].project_urls === '' ? "" :
                                                                                <p><strong>Project_urls:-</strong> <a href={items.Experience[8].project_urls} target="_blank"> {items.Experience[8].project_urls} </a></p>
                                                                        }
                                                                        <h5 style={{ textTransform: "capitalize" }}>{items.Experience[8].Company_name} {items.Experience[8].city},{items.Experience[8].country}</h5>
                                                                    </div>
                                                            }
                                                            {
                                                                items.Experience[9] === undefined ? "" :
                                                                    <div className='pl-3'>

                                                                        <div className='d-flex pt-4' style={{ justifyContent: "space-between" }}>
                                                                            <div className=''>
                                                                                <h5 style={{ textTransform: "capitalize" }}>{items.Experience[9].job_title}</h5>
                                                                            </div>
                                                                            <div className=''>
                                                                                <p style={{ textAlign: "end", color: "#018bb7", fontWeight: "bold" }}>{items.Experience[9].start_date} to {items.Experience[9].end_date}</p>

                                                                            </div>
                                                                        </div>
                                                                        <h5>{items.Experience[9].project_name}</h5>

                                                                        {/* <p className='pt-3'>{items.Experience[9].job_discription}</p> */}
                                                                        {
                                                                           getdata10 === null ?  <p>{items.Experience[9].job_discription}</p> :
                                                                                getdata10.map((item9, key) => {
                                                                                    return (
                                                                                        <p> • {item9.slice(1, item9.length - 1)}</p>
                                                                                    )
                                                                                })
                                                                        }
                                                                        {
                                                                            items.Experience[9].project_urls === '' ? "" :
                                                                                <p><strong>Project_urls:-</strong> <a href={items.Experience[9].project_urls} target="_blank"> {items.Experience[9].project_urls} </a></p>
                                                                        }
                                                                        <h5 style={{ textTransform: "capitalize" }}>{items.Experience[9].Company_name} {items.Experience[9].city},{items.Experience[9].country}</h5>
                                                                    </div>
                                                            } {
                                                                items.Experience[10] === undefined ? "" :
                                                                    <div className='pl-3'>

                                                                        <div className='d-flex pt-4' style={{ justifyContent: "space-between" }}>
                                                                            <div className=''>
                                                                                <h5 style={{ textTransform: "capitalize" }}>{items.Experience[10].job_title}</h5>
                                                                            </div>
                                                                            <div className=''>
                                                                                <p style={{ textAlign: "end", color: "#018bb7", fontWeight: "bold" }}>{items.Experience[10].start_date} to {items.Experience[10].end_date}</p>

                                                                            </div>
                                                                        </div>
                                                                        <h5>{items.Experience[10].project_name}</h5>

                                                                        {/* <p className='pt-3'>{items.Experience[10].job_discription}</p> */}
                                                                        {
                                                                           getdata11 === null ?  <p>{items.Experience[10].job_discription}</p> :
                                                                                getdata11.map((item10, key) => {
                                                                                    return (
                                                                                        <p> • {item10.slice(1, item10.length - 1)}</p>
                                                                                    )
                                                                                })
                                                                        }
                                                                        {
                                                                            items.Experience[10].project_urls === '' ? "" :
                                                                                <p><strong>Project_urls:-</strong> <a href={items.Experience[10].project_urls} target="_blank"> {items.Experience[10].project_urls} </a></p>
                                                                        }
                                                                        <h5 style={{ textTransform: "capitalize" }}>{items.Experience[10].Company_name} {items.Experience[10].city},{items.Experience[10].country}</h5>
                                                                    </div>
                                                            } {
                                                                items.Experience[11] === undefined ? "" :
                                                                    <div className='pl-3'>

                                                                        <div className='d-flex pt-4' style={{ justifyContent: "space-between" }}>
                                                                            <div className=''>
                                                                                <h5 style={{ textTransform: "capitalize" }}>{items.Experience[11].job_title}</h5>
                                                                            </div>
                                                                            <div className=''>
                                                                                <p style={{ textAlign: "end", color: "#018bb7", fontWeight: "bold" }}>{items.Experience[11].start_date} to {items.Experience[11].end_date}</p>

                                                                            </div>
                                                                        </div>
                                                                        <h5>{items.Experience[11].project_name}</h5>

                                                                        {/* <p className='pt-3'>{items.Experience[11].job_discription}</p> */}
                                                                        {
                                                                            getdata12 === null ?  <p>{items.Experience[11].job_discription}</p> :
                                                                                getdata12.map((item11, key) => {
                                                                                    return (
                                                                                        <p> • {item11.slice(1, item11.length - 1)}</p>
                                                                                    )
                                                                                })
                                                                        }
                                                                        {
                                                                            items.Experience[11].project_urls === '' ? "" :
                                                                                <p><strong>Project_urls:-</strong> <a href={items.Experience[11].project_urls} target="_blank"> {items.Experience[11].project_urls} </a></p>
                                                                        }
                                                                        <h5 style={{ textTransform: "capitalize" }}>{items.Experience[11].Company_name} {items.Experience[11].city},{items.Experience[11].country}</h5>
                                                                    </div>
                                                            }
                                                            {/* {
                                                    items.Experience[12] === undefined ? "" :
                                                        <div className='pl-3'>

                                                            <div className='d-flex pt-4' style={{ justifyContent: "space-between" }}>
                                                                <div className=''>
                                                                    <h4 style={{ textTransform: "capitalize" }}>{items.Experience[12].job_title}</h4>
                                                                </div>
                                                                <div className=''>
                                                                    <p style={{ textAlign: "end", color: "#018bb7", fontWeight: "bold" }}>{items.Experience[12].start_date} to {items.Experience[12].end_date}</p>

                                                                </div>
                                                            </div>
                                                            <h5 style={{ textTransform: "capitalize" }}>{items.Experience[12].Company_name} {items.Experience[12].city},{items.Experience[12].country}</h5>
                                                            <p className='pt-3'>{items.Experience[12].job_discription}</p>
                                                            <p><strong>Project_urls:-</strong> <a href={items.Experience[12].project_urls} target="_blank"> {items.Experience[12].project_urls} </a></p>
                                                        </div>
                                                } */}
                                                        </div>
                                                    </>
                                            }

                                        </div>



                                    </div>
                                </>
                            )

                        })
                    }

                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center", margin: "50px 0px" }}>
                {/* <button onClick={datadownload} style={{ padding: "10px 10px", backgroundColor: "#243572", color: "white", border: "none" }}><CloudDownloadIcon />   Download</button> */}
                <ReactToPrint
                    trigger={() => <button style={{ padding: "10px 10px", backgroundColor: "#243572", color: "white", border: "none" }}><CloudDownloadIcon />   Download</button>}
                    content={() => componentRef.current}
                />
            </div>
        </div>
    )
}
