import { NavLink } from "react-router-dom"

const Research = () => {


    window.onscroll = function () { myFunction() };





    function myFunction() {
        var header = document.getElementById("navcontainer");


        var sticky = header.offsetTop;
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    }
    return (<>
        <div className="row">
            <div className="row">
                <div className="titulo"> Environment and Transportation Research Group</div>
            </div>
            <div className="row">
                <div id="navcontainer">
                    <ul>
                        <li><NavLink to="/"><a href="">ABOUT</a></NavLink></li>
                        <li><NavLink to="/Research"><a className="bold">RESEARCH</a></NavLink></li>
                        <li><NavLink to="/Team"><a href="">TEAM</a></NavLink></li>
                    </ul>
                </div>
            </div>
            <div className="row segundaParte">
                <div className="row horizontal">
                    <div className="col-1 overview">
                        Featured
                    </div>
                </div>
                <hr className="horizontal"></hr>
                <div className="row horizontal">
                    <div className="col-6">
                        <div className="card" style={{ width: 484 + 'px' }}>
                            <img className="card-img-top imagenCarros" src="./docs/muchoscarros.png" alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title cardTitulo">Traffic Congestion and Labor Supply: Evidence from Smartphone data in Mexico</h5>
                                <p className="card-text cardCuerpo">Does traffic congestion affect time allocation? I use highly granular smartphone data from Mexico City
                                    to study empirically how traffic congestion affects work- time allocation. I find that traffic increases hours worked. The effect is
                                    driven by workers leaving work later, not by changes in arrival time. There is modest evidence that labor income does not increase although total hours do.
                                    These results highlight an avoidance mechanism consistent with bottleneck models that has been overlooked when estimating the costs of congestion.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="card" style={{ width: 484 + 'px' }}>
                            <img className="card-img-top imagenCarros" src="./docs/Amazon.png" alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title cardTitulo">Nobody’s Watching: COVID-19, Monitoring, and the Amazon Rainforest</h5>
                                <p className="card-text cardCuerpo">How do pandemics may affect the Amazon rainforest? Using an event study design and a difference-in-differences approach,
                                    we find that COVID-19 increased deforestation by 35% across the Peruvian Amazon during the first pandemic year. This increased CO2 emissions by over 17 million tons,
                                    representing a social cost equivalent to 3 times the national budget for forest management. The main mechanism behind this was reduced monitoring investment and supervision,
                                    coupled with a rise in illicit activities tied to coca production and mining. These findings underscore the crucial role of monitoring and enforcement in averting forest loss
                                    in countries with weak forest governance.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row horizontal">
                    <div className="col-1 overview">
                        In progress
                    </div>
                </div>
                <hr className="horizontal"></hr>
                <div className="row horizontal">
                    <p className="soon"> Coming soon...</p>
                    <div className="espacioGrande"></div>
                </div>
                <div className="row horizontal">
                    <div className="col-1 overview">
                        Working papers
                    </div>
                </div>
                <hr className="horizontal"></hr>
                <div className="row horizontal">
                    <p className="soon"> Coming soon...</p>
                    <div className="espacioGrande"></div>
                </div>
                <div className="row horizontal">
                    <div className="col-1 overview">
                        Publications
                    </div>
                </div>
                <hr className="horizontal"></hr>
                <div className="row horizontal">
                    <p className="soon"> Coming soon...</p>
                    <div className="espacioGrande"></div>
                </div>
            </div>

        </div >
    </>
    )
}




export default Research;