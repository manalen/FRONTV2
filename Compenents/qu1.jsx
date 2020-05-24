import React, {Component} from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import u132 from './u132.png'
import u136 from './u136.png'
import u3 from './u3.png'
import u4 from './u4.svg'
import u5 from './u5.svg'
import u7 from './u7.png'
import u8 from './u8.svg'
import u9 from './u9.png'
import u10 from './u10.png'
import u11 from './u11.png'
import u12 from './u12.png'
class qu1  extends Component{
    connexion(){
        this.props.history.push(`/login`)
    }
    render(){
        return (
            <div>
                <div id="u128" className="ax_default" data-label="Menu" data-left="0" data-top="0" data-width="0" data-height="0">
                    <div id="u129" className="ax_default" data-label="Menu">
                        <div id="u129_state0" className="panel_state" data-label="State1" >
                            <div id="u129_state0_content" className="panel_state_content">
                                <div id="u130" className="ax_default box_2">
                                    <div id="u130_div" className=""></div>
                                    <div id="u130_text" className="text " style={{display:"none", visibility: "hidden"}}>
                                        <p></p>
                                    </div>
                                </div>
                                <div id="u131" className="ax_default link_button">
                                    <div id="u131_div" className=""></div>
                                    <div id="u131_text" className="text ">
                                        <p><span><a href="#u0">Contact</a></span></p>
                                    </div>
                                </div>
                                <div id="u132" className="ax_default image">
                                    <img id="u132_img" className="img " src={u132}/>
                                    <div id="u132_text" className="text " style={{display:"none", visibility: "hidden"}}>
                                        <p></p>
                                    </div>
                                </div>
                                <div id="u133" className="ax_default link_button">
                                    <div id="u133_div" className=""></div>
                                    <div id="u133_text" className="text ">
                                        <p><span><a href="#u115">Présentation</a></span></p>
                                    </div>
                                </div>
                                <div id="u134" className="ax_default link_button">
                                    <div id="u134_div" className=""></div>
                                    <div id="u134_text" className="text ">
                                        <p><span><a href="#u13">Equipe</a></span></p>
                                    </div>
                                </div>
                                <div id="u135" className="ax_default link_button ax_default_hidden" >
                                        <div id="u135_div" className=""></div>
                                        <button id="u135_text" className="btn btn-success text " onClick={() => this.connexion() } style={{backgroundColor:"#D7D7D7",font:"arial",fontSize:"22px",color:"#4997D4"}}>Se connecter</button>
                                </div>
                                <div id="u136" className="ax_default image">
                                    <img id="u136_img" className="img " src={u136}/>
                                    <div id="u136_text" className="text " style={{display:"none", visibility: "hidden"}}>
                                        <p></p>
                                    </div>
                                </div>
                                <div id="u137" className="ax_default link_button">
                                    <div id="u137_div" className=""></div>
                                    <div id="u137_text" className="text ">
                                        <p><span><a href="#u97">Spécialités</a></span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="u0" className="ax_default" data-label="Contact" data-left="-58" data-top="2918" data-width="1289" data-height="444">
                    <div id="u1" className="ax_default box_1">
                        <div id="u1_div" className=""></div>
                        <div id="u1_text" className="text " style={{display:"none", visibility: "hidden"}}>
                            <p></p>
                        </div>
                    </div>
                    
                    <div id="u2" className="ax_default">
                        <iframe id="u2_imput" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.870676642131!2d-6.853160685574081!3d33.99585538062138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda76c91ffaabd59%3A0xccc90d07ffea3f63!2sClinique%20Agdal!5e0!3m2!1sfr!2sma!4v1587415991254!5m2!1sfr!2sma"></iframe>
                    </div>

                    <div id="u3" className="ax_default image">
                    <img id="u3_img" className="img " src={u3}/>
                    <div id="u3_text" className="text " style={{display:"none", visibility: "hidden"}}>
                        <p></p>
                    </div>
                    </div>

                    <div id="u4" className="ax_default label">
                        <img id="u4_img" className="img " src={u4}/>
                        <div id="u4_text" className="text ">
                            <p><span>medicare@gmail.com</span></p>
                        </div>
                    </div>

                    
                    <div id="u5" className="ax_default label">
                        <img id="u5_img" className="img " src={u5}/>
                        <div id="u5_text" className="text ">
                            <p><span>05 35 12 34 56</span></p>
                        </div>
                    </div>

                    <div id="u6" className="ax_default label">
                        <img id="u6_img" className="img " src={u5}/>
                        <div id="u6_text" className="text ">
                            <p><span>05 35 23 45 76</span></p>
                        </div>
                    </div>

                    <div id="u7" className="ax_default image">
                        <img id="u7_img" className="img " src={u7}/>
                        <div id="u7_text" className="text " style={{display:"none", visibility: "hidden"}}>
                            <p></p>
                        </div>
                    </div>

                    <div id="u8" className="ax_default label">
                        <img id="u8_img" className="img " src={u8}/>
                        <div id="u8_text" className="text ">
                            <p><span>FAQ</span></p>
                        </div>
                    </div>
                    <div id="u9" className="ax_default image">
                        <img id="u9_img" className="img " src={u9}/>
                        <div id="u9_text" className="text " style={{display:"none", visibility: "hidden"}}>
                            <p></p>
                        </div>
                    </div>

                    <div id="u10" className="ax_default image">
                    <img id="u10_img" className="img " src={u10}/>
                    <div id="u10_text" className="text " style={{display:"none", visibility: "hidden"}}>
                        <p></p>
                    </div>
                    </div>

                    <div id="u11" className="ax_default image">
                        <img id="u11_img" className="img " src={u11}/>
                        <div id="u11_text" className="text " style={{display:"none", visibility: "hidden"}}>
                            <p></p>
                        </div>
                    </div>

                    <div id="u12" class="ax_default image">
                        <img id="u12_img" class="img " src={u12}/>
                        <div id="u12_text" class="text " style={{display:"none", visibility: "hidden"}}>
                            <p></p>
                        </div>
                    </div>
                </div>
                <div className="container-fluid cadre" style={{borderRadius:"10px",padding:"30px",marginTop: "40px",width: "700px",height:"400px",position: "absolute", left:"280px",top: "80px", marginRight: "310px",borderStyle: "ridge",borderColor: "#D7D7D7", boxShadow:"10px 10px 5px grey"}}>
                    <p><h4 style={{color:"#4997D4"}}>Medicare est une clinique multi-spécialités. Les services disponibles sont:</h4><br/>
                        -La cardiologie<br/>
                        -La radiologie<br/>
                        -La gastrologie<br/>
                        -L'endocrinologie<br/>
                        -La pédiatrie<br/>
                        -La traumatologie<br/>
                        -L'ophtalmologie<br/>
                        -La chirurgie vicérale<br/>
                    </p>
                </div>
            </div>
        )
    }
}
export default qu1