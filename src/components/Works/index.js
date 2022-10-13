import React from 'react'
import "./style.css"
import svg1 from "../../Assets/PNG/wedding-planning-svgrepo-com.svg"
import svg2 from "../../Assets/PNG/strategy-svgrepo-com.svg"
import svg3 from "../../Assets/PNG/planning.svg"
import process1 from "../../Assets/PNG/process1.png"
import iconimg from "../../Assets/PNG/iconimg.png"
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';

function Works() {
    return (
        <div className='works'>
            <div className='container-fluid work_detail'>
                <div className='container work_containt'>
                    <h2>How it Works</h2>
                    <div className='seticon'>----------&nbsp; &nbsp;<img src={iconimg} width={40} height={40}></img>&nbsp; &nbsp;----------</div>
                    <div className='pera'>
                        <p >In our process we always focus on quality, testing and want to deliver good software on time.

In order to support these requirements we use many different tools and have a special workflow for development tasks.</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-5 col-lg-5 col-sm-12 leftdata'>
                        <div className='row'>
                            <div className='col-sm-3 setsvgicon' id='container'>

                                <svg xmlns={svg1} viewBox="0 0 741.9 595.3"><g><path d="M341.658,6.227H83.455c-4.143,0-7.5,3.357-7.5,7.5V162.83H7.5c-4.143,0-7.5,3.357-7.5,7.5v127.123
			c0,25.076,20.4,45.479,45.477,45.479c0.646,0,258.203,0,258.203,0c25.076,0,45.479-20.402,45.479-45.479V13.727
			C349.158,9.584,345.801,6.227,341.658,6.227z M15,297.453V177.83h60.955v119.623c0,16.805-13.672,30.479-30.479,30.479
			C28.672,327.932,15,314.258,15,297.453z M334.158,297.453c0,16.805-13.672,30.479-30.479,30.479H79.203
			c7.299-8.07,11.752-18.766,11.752-30.479V21.227h243.203V297.453z"/><path d="M202.023,92.855h96.127c4.143,0,7.5-3.357,7.5-7.5c0-4.143-3.357-7.5-7.5-7.5h-96.127c-4.143,0-7.5,3.357-7.5,7.5
			C194.523,89.498,197.881,92.855,202.023,92.855z"/>
                                    <path d="M202.023,175.248h96.127c4.143,0,7.5-3.357,7.5-7.5c0-4.143-3.357-7.5-7.5-7.5h-96.127c-4.143,0-7.5,3.357-7.5,7.5
			C194.523,171.891,197.881,175.248,202.023,175.248z"/>
                                    <path d="M202.023,257.643h96.127c4.143,0,7.5-3.357,7.5-7.5c0-4.143-3.357-7.5-7.5-7.5h-96.127c-4.143,0-7.5,3.357-7.5,7.5
			C194.523,254.285,197.881,257.643,202.023,257.643z"/>
                                    <path d="M132.814,101.295c1.418,1.5,3.391,2.35,5.453,2.35c0.02,0,0.041,0,0.063,0c2.086-0.018,4.07-0.902,5.477-2.443
			l41.197-45.121c2.793-3.059,2.576-7.803-0.482-10.596c-3.059-2.791-7.803-2.576-10.596,0.482l-35.752,39.156l-11.129-11.785
			c-2.846-3.012-7.594-3.146-10.604-0.303c-3.012,2.844-3.146,7.59-0.303,10.602L132.814,101.295z"/>
                                    <path d="M173.926,131.941l-35.752,39.154l-11.131-11.783c-2.844-3.014-7.592-3.148-10.602-0.303
			c-3.012,2.844-3.146,7.59-0.303,10.602l16.676,17.656c1.418,1.5,3.391,2.35,5.453,2.35c0.02,0,0.041,0,0.063,0
			c2.086-0.018,4.07-0.902,5.477-2.443l41.197-45.119c2.791-3.059,2.576-7.803-0.482-10.596S176.719,128.881,173.926,131.941z"/>
                                    <path d="M173.926,217.914l-35.752,39.154l-11.131-11.783c-2.844-3.014-7.592-3.149-10.602-0.303
			c-3.012,2.844-3.146,7.59-0.303,10.602l16.676,17.656c1.418,1.5,3.391,2.35,5.453,2.35c0.02,0,0.041,0,0.063,0
			c2.086-0.018,4.07-0.902,5.477-2.443l41.197-45.119c2.791-3.059,2.576-7.803-0.482-10.596
			C181.463,214.639,176.719,214.855,173.926,217.914z"/></g></svg>
                            </div>
                            <div className='col-sm-9 datadetails'>
                                <h3>Analysis & Planning</h3>
                                <p>First, we analyse the customer’s requirements, and then we plan the whole project. It is performed by the senior members of the team.</p>

                            </div>


                        </div>
                        <svg x="0px" y="0px" width="312px" height="130px" className='othersvg'>
                            <path className="dashed1" fill="none" stroke="rgb(95, 93, 93)" stroke-width="1" stroke-dasharray="1300" stroke-dashoffset="0" d="M3.121,2.028 C3.121,2.028 1.003,124.928 99.352,81.226 C99.352,81.226 272.319,21.200 310.000,127.338"></path>
                            <path className="dashed2" fill="none" stroke="#ffffff" stroke-width="2" stroke-dasharray="6" stroke-dashoffset="1300" d="M3.121,2.028 C3.121,2.028 1.003,124.928 99.352,81.226 C99.352,81.226 272.319,21.200 310.000,127.338 "></path>
                        </svg>
                        <div className='row'>
                            <div className='col-sm-8 details2'>
                                <h3>Development </h3>
                                <p>At this stage, the actual development starts and the products are built.Developers must follow the coding guidelines defined by their organization,are used to generate the code</p>

                            </div>
                            <div className='col-sm-4 setsvgicon2'>

                                <svg xmlns={svg2} viewBox="0 0 841.9 595.3"><g>	<path d="M287.633,463.3c-3.337-3.337-8.73-3.337-12.066,0c-3.337,3.336-3.337,8.73,0,12.066L309.7,509.5
				c1.664,1.664,3.849,2.5,6.033,2.5c2.185,0,4.369-0.836,6.033-2.5c3.337-3.336,3.337-8.73,0-12.066L287.633,463.3z"/>
                                    <path d="M366.933,221.867c23.526,0,42.667-19.14,42.667-42.667s-19.14-42.667-42.667-42.667s-42.667,19.14-42.667,42.667
				S343.407,221.867,366.933,221.867z M366.933,153.6c14.114,0,25.6,11.486,25.6,25.6s-11.486,25.6-25.6,25.6
				s-25.6-11.486-25.6-25.6S352.819,153.6,366.933,153.6z"/>
                                    <path d="M256,409.6c-4.719,0-8.533,3.823-8.533,8.533v22.067l-57.233,57.233c-3.336,3.337-3.336,8.73,0,12.066
				c1.664,1.664,3.849,2.5,6.033,2.5c2.185,0,4.369-0.836,6.033-2.5l59.733-59.733c1.604-1.596,2.5-3.772,2.5-6.033v-25.6
				C264.533,413.423,260.719,409.6,256,409.6z"/>
                                    <path d="M503.467,17.067H264.533V8.533C264.533,3.823,260.719,0,256,0s-8.533,3.823-8.533,8.533v8.533H8.533
				C3.814,17.067,0,20.89,0,25.6v34.133c0,4.71,3.814,8.533,8.533,8.533h443.733c4.719,0,8.533-3.823,8.533-8.533
				s-3.814-8.533-8.533-8.533h-435.2V34.133h477.867V51.2H486.4c-4.719,0-8.533,3.823-8.533,8.533v290.133
				c0,14.114-11.486,25.6-25.6,25.6H59.733c-14.114,0-25.6-11.486-25.6-25.6v-256c0-4.71-3.814-8.533-8.533-8.533
				s-8.533,3.823-8.533,8.533v256c0,23.526,19.14,42.667,42.667,42.667h392.533c23.526,0,42.667-19.14,42.667-42.667v-281.6h8.533
				c4.719,0,8.533-3.823,8.533-8.533V25.6C512,20.89,508.186,17.067,503.467,17.067z"/>
                                    <path d="M304.7,275.567c-3.337-3.337-8.73-3.337-12.066,0c-3.337,3.336-3.337,8.73,0,12.066l11.034,11.034L292.634,309.7
				c-3.337,3.337-3.337,8.73,0,12.066c1.664,1.664,3.849,2.5,6.033,2.5c2.185,0,4.369-0.836,6.033-2.5l11.034-11.034l11.034,11.034
				c1.664,1.664,3.849,2.5,6.033,2.5c2.185,0,4.369-0.836,6.033-2.5c3.337-3.337,3.337-8.73,0-12.066l-11.034-11.034l11.034-11.034
				c3.337-3.337,3.337-8.73,0-12.066c-3.336-3.337-8.73-3.337-12.066,0l-11.034,11.034L304.7,275.567z"/>
                                    <path d="M119.825,274.526c-10.095,3.43-17.425,12.902-17.425,24.141c0,14.114,11.486,25.6,25.6,25.6s25.6-11.486,25.6-25.6
				c0-10.982-6.98-20.292-16.717-23.919c3.533-48.563,44.075-87.014,93.517-87.014h47.667L258.5,207.3
				c-3.336,3.337-3.336,8.73,0,12.066c1.664,1.664,3.849,2.5,6.033,2.5c2.185,0,4.369-0.836,6.033-2.5l34.125-34.125
				c0.794-0.794,1.417-1.732,1.852-2.782c0.862-2.082,0.862-4.437,0-6.519c-0.435-1.05-1.058-1.988-1.852-2.773l-34.125-34.133
				c-3.337-3.337-8.73-3.337-12.066,0c-3.336,3.336-3.336,8.73,0,12.066l19.567,19.567H230.4
				C171.614,170.667,123.503,216.653,119.825,274.526z M128,307.2c-4.71,0-8.533-3.831-8.533-8.533s3.823-8.533,8.533-8.533
				s8.533,3.831,8.533,8.533S132.71,307.2,128,307.2z"/>
                                    <path d="M87.834,168.166c1.664,1.664,3.849,2.5,6.033,2.5c2.185,0,4.369-0.836,6.033-2.5l11.034-11.034l11.034,11.034
				c1.664,1.664,3.849,2.5,6.033,2.5s4.369-0.836,6.033-2.5c3.337-3.337,3.337-8.73,0-12.066l-11.034-11.034l11.034-11.034
				c3.337-3.337,3.337-8.73,0-12.066c-3.337-3.336-8.73-3.336-12.066,0l-11.034,11.034L99.9,121.967
				c-3.336-3.336-8.73-3.336-12.066,0c-3.337,3.337-3.337,8.73,0,12.066l11.034,11.034L87.834,156.1
				C84.497,159.437,84.497,164.83,87.834,168.166z"/></g></svg>
                            </div>


                        </div>
                        <svg x="0px" y="0px" width="312px" height="130px" className='othersvg'>
                            <path class="dashed1" fill="none" stroke="rgb(95, 93, 93)" stroke-width="1" stroke-dasharray="1300" stroke-dashoffset="0" d="M311.000,0.997 C311.000,0.997 313.123,123.592 214.535,79.996 C214.535,79.996 41.149,20.122 3.377,125.996"></path>
                            <path class="dashed2" fill="none" stroke="#ffffff" stroke-width="2" stroke-dasharray="6" stroke-dashoffset="1300" d="M311.000,0.997 C311.000,0.997 313.123,123.592 214.535,79.996 C214.535,79.996 41.149,20.122 3.377,125.996"></path>
                        </svg>
                        <div className='row'>
                            <div className='col-sm-4 setsvgicon3'>
                                <svg xmlns={svg3} viewBox="0 0 841.9 595.3">	<g>
                                    <path d="M10,372.5h405c2.602-0.001,5.159-1.016,7.071-2.929l65-65c1.912-1.913,2.904-4.47,2.905-7.071H490v-245
				c0-5.522-4.477-10-10-10H10c-5.523,0-10,4.478-10,10v310C0,368.022,4.477,372.5,10,372.5z M425,338.357V307.5h30.858L425,338.357
				z M20,62.5h450v225h-55c-5.523,0-10,4.478-10,10v55H20V62.5z"/>
                                    <path d="M350,92.5H250c-5.523,0-10,4.478-10,10v15h-25c-5.523,0-10,4.478-10,10v75h-80v-35h55c5.523,0,10-4.478,10-10v-60
				c0-5.522-4.477-10-10-10H60c-5.523,0-10,4.478-10,10v60c0,5.522,4.477,10,10,10h45v45c0,5.522,4.477,10,10,10h90v70
				c0,5.522,4.477,10,10,10h25v10c0,5.522,4.477,10,10,10h100c5.523,0,10-4.478,10-10v-50c0-5.522-4.477-10-10-10H250
				c-5.523,0-10,4.478-10,10v20h-15v-60h15v10c0,5.522,4.477,10,10,10h100c5.523,0,10-4.478,10-10v-50c0-5.522-4.477-10-10-10H250
				c-5.523,0-10,4.478-10,10v20h-15v-65h15v15c0,5.522,4.477,10,10,10h100c5.523,0,10-4.478,10-10v-50
				C360,96.978,355.523,92.5,350,92.5z M70,147.5v-40h100v40H70z M260,272.5h80v30h-80V272.5z M260,192.5h80v30h-80V192.5z
				 M340,142.5h-80v-30h80V142.5z"/>
                                    <rect x="50" y="247.5" width="75" height="20" />
                                    <rect x="50" y="277.5" width="75" height="20" />
                                    <rect x="50" y="307.5" width="130" height="20" />
                                    <rect x="135" y="247.5" width="20" height="20" />
                                    <rect x="380" y="92.5" width="25" height="20" />
                                    <rect x="420" y="92.5" width="25" height="20" />
                                    <rect x="380" y="122.5" width="25" height="20" />
                                    <rect x="420" y="122.5" width="25" height="20" />
                                    <rect x="380" y="152.5" width="25" height="20" />
                                    <rect x="420" y="152.5" width="25" height="20" />
                                    <rect x="380" y="182.5" width="25" height="20" />
                                    <rect x="420" y="182.5" width="25" height="20" />
                                    <path d="M483.162,408.013l-60-20c-1.033-0.344-2.1-0.498-3.162-0.498V387.5H10c-5.523,0-10,4.478-10,10v40
				c0,5.522,4.477,10,10,10h410h0.001c1.061,0,2.129-0.169,3.161-0.513l60-20c4.083-1.361,6.838-5.183,6.838-9.487
				C490,413.196,487.246,409.374,483.162,408.013z M60,427.5H20v-20h40V427.5z M410,427.5H80v-20h330V427.5z M430,423.626v-12.252
				l18.377,6.126L430,423.626z"/>
                                </g></svg>


                            </div>
                            <div className='col-sm-8 datadetails2'>
                                <h3>Testing </h3>
                                <p>Testing is done before the software is delivered to the customer. The testing team is to test the system against the requirements.The tester aims to find out the gaps or defects within the system </p>

                            </div>


                        </div>


                        <div>
                        </div>
                    </div>
                   
                    <div className='col-lg-5 col-lg-5 col-sm-12 process'>
                        <div className="animated-bg translate-right-75 opacity-animation transition-150 transition-delay-200">
                            <svg width="993px" height="698px">
                                <path fill-rule="evenodd" opacity="0.502" fill="rgb(240, 246, 254)" d="M615.878,633.346 C421.616,682.785 207.128,731.954 63.989,573.875 C-94.294,399.069 67.235,87.796 264.299,20.945 C414.319,-29.945 599.731,16.820 724.612,108.132 C826.171,182.390 906.437,307.315 953.564,424.057 C964.863,452.047 974.424,490.636 972.447,520.765 C970.471,550.894 1010.875,682.567 983.375,694.964 C943.433,712.968 842.741,645.666 801.432,631.106 C744.184,610.931 681.174,616.728 615.878,633.346 Z"></path>
                            </svg>
                        </div>
                        <div className="processimg">
				<img width="598" height="552" src={process1}/>
                </div>

                    </div>

                </div>
            </div>

        </div>
    )
}
export default Works;