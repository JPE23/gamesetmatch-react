/**
 * React modules
 */
import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import $ from "jquery";

/**
 * Prime React modules
 */
import { DataTable } from 'primereact/datatable';
import { Button } from 'primereact/button';

/**
 * Components
 */
import PostLoginNavbar from "./cpt-post-login-navbar";

/**
 * Stylesheets
 */
import "./search-page-hero.css"

/**
 * Primary function
 * @returns {JSX.Element}
 * @constructor
 */
export default function SearchPageHero() {

    const [results, setResults] = useState();

    const history = useHistory();

    const columns = [{field: 'first_name', header: 'Name'},];

    const listMembers = async (e) => {
        e.preventDefault()
        fetch("http://localhost:5000/players-list", {
            method: "POST",
            body: $("#countyOfResidence").serialize(),
            headers: {"Content-Type": "application/x-www-form-urlencoded"}
        }).then((res) => {
            res.json().then(r => {
                // for (let i in r) {
                //     let x = r[i];
                //     array.push(<ul key="{item}">{x.first_name + "\n"} </ul>);
                //     //array.push(<ul key="{item}">{x.county_of_residence  +
                //     // "\n"} </ul>);
                //     // array.push(x.first_name);
                //     // array.push(x.county_of_residence);
                // }
                setResults(r)
            });
        });
    }

    const goToProfilePage = async (e) =>{
        e.preventDefault();
        let path = '/profilepage';
        history.push(path);
    }
    const dynamicColumns = columns.map((col,i) => {
        return <DataTable.Column
            key={col.field}
            field={col.field}
            header={col.header}
        />
    });

    const actionBodyTemplate = () => {
        return(
            <Button
                type="button"
                icon="pi pi-cog"
                className="p-button-secondary"
                onClick={goToProfilePage}
            >View Profile</Button>
        );
    }

    /**
     * RENDERS PAGE HERO
     */
    return (
        <div className="hero-image">
            <PostLoginNavbar/>
            <div className="hero-container">
                <div className="title-container">
                    <h2>Select your county</h2>
                </div>
                <form id="countySelector" className="search-bar">
                    <select type="text"
                            name="countyOfResidence"
                            list="countyDropdown"
                            id="countyOfResidence"
                            defaultValue=""
                            required>
                        <option value="" disabled>County</option>
                        <option value="--England--">--England--</option>
                        <option value="Avon">Avon</option>
                        <option value="Bedfordshire">Bedfordshire</option>
                        <option value="Berkshire">Berkshire</option>
                        <option value="Bristol">Bristol</option>
                        <option value="Buckinghamshire">Buckinghamshire
                        </option>
                        <option value="Cambridgeshire">Cambridgeshire
                        </option>
                        <option value="Cheshire">Cheshire</option>
                        <option value="Cleveland">Cleveland</option>
                        <option value="Cornwall">Cornwall</option>
                        <option value="Cumbria">Cumbria</option>
                        <option value="Derbyshire">Derbyshire</option>
                        <option value="Devon">Devon</option>
                        <option value="Dorset">Dorset</option>
                        <option value="Durham">Durham</option>
                        <option value="East Riding of Yorkshire">East Riding
                            of Yorkshire
                        </option>
                        <option value="East Sussex">East Sussex</option>
                        <option value="Essex">Essex</option>
                        <option value="Gloucestershire">Gloucestershire
                        </option>
                        <option value="Greater Manchester">Greater
                            Manchester
                        </option>
                        <option value="Hampshire">Hampshire</option>
                        <option value="Herefordshire">Herefordshire</option>
                        <option value="Hertfordshire">Hertfordshire</option>
                        <option value="Humberside">Humberside</option>
                        <option value="Isle of Wight">Isle of Wight</option>
                        <option value="Isles of Scilly">Isles of Scilly
                        </option>
                        <option value="Kent">Kent</option>
                        <option value="Lancashire">Lancashire</option>
                        <option value="Leicestershire">Leicestershire
                        </option>
                        <option value="Lincolnshire">Lincolnshire</option>
                        <option value="London">London</option>
                        <option value="Merseyside">Merseyside</option>
                        <option value="Middlesex">Middlesex</option>
                        <option value="Norfolk">Norfolk</option>
                        <option value="North Yorkshire">North Yorkshire
                        </option>
                        <option value="Northamptonshire">Northamptonshire
                        </option>
                        <option value="Northumberland">Northumberland
                        </option>
                        <option value="Nottinghamshire">Nottinghamshire
                        </option>
                        <option value="Oxfordshire">Oxfordshire</option>
                        <option value="Rutland">Rutland</option>
                        <option value="Shropshire">Shropshire</option>
                        <option value="Somerset">Somerset</option>
                        <option value="South Yorkshire">South Yorkshire
                        </option>
                        <option value="Staffordshire">Staffordshire</option>
                        <option value="Suffolk">Suffolk</option>
                        <option value="Surrey">Surrey</option>
                        <option value="Tyne and Wear">Tyne and Wear</option>
                        <option value="Warwickshire">Warwickshire</option>
                        <option value="West Midlands">West Midlands</option>
                        <option value="West Sussex">West Sussex</option>
                        <option value="West Yorkshire">West Yorkshire
                        </option>
                        <option value="Wiltshire">Wiltshire</option>
                        <option value="Worcestershire">Worcestershire
                        </option>
                        <option value="">&nbsp</option>
                        <option value="--UK Offshore--">--UK Offshore--
                        </option>
                        <option value="Channel Islands">Channel Islands
                        </option>
                        <option value="Isle of Man">Isle of Man</option>
                        <option value="">&nbsp</option>
                        <option value="--Northern Ireland--">--Northern
                            Ireland--
                        </option>
                        <option value="Antrim">Antrim</option>
                        <option value="Armagh">Armagh</option>
                        <option value="Down">Down</option>
                        <option value="Fermanagh">Fermanagh</option>
                        <option value="Londonderry">Londonderry</option>
                        <option value="Tyrone">Tyrone</option>
                        <option value="">&nbsp</option>
                        <option value="--Scotland--">--Scotland--</option>
                        <option value="Aberdeen City">Aberdeen City</option>
                        <option value="Aberdeenshire">Aberdeenshire</option>
                        <option value="Angus">Angus</option>
                        <option value="Argyll and Bute">Argyll and Bute
                        </option>
                        <option value="Borders">Borders</option>
                        <option value="Clackmannan">Clackmannan</option>
                        <option value="Dumfries and Galloway">Dumfries and
                            Galloway
                        </option>
                        <option value="Dundee (City of)">Dundee (City of)
                        </option>
                        <option value="East Ayrshire">East Ayrshire</option>
                        <option value="East Dunbartonshire">East
                            Dunbartonshire
                        </option>
                        <option value="East Lothian">East Lothian</option>
                        <option value="East Renfrewshire">East
                            Renfrewshire
                        </option>
                        <option value="Edinburgh (City of)">Edinburgh (City
                            of)
                        </option>
                        <option value="Falkirk">Falkirk</option>
                        <option value="Fife">Fife</option>
                        <option value="Glasgow (City of)">Glasgow (City
                            of)
                        </option>
                        <option value="Highland">Highland</option>
                        <option value="Inverclyde">Inverclyde</option>
                        <option value="Midlothian">Midlothian</option>
                        <option value="Moray">Moray</option>
                        <option value="North Ayrshire">North Ayrshire
                        </option>
                        <option value="North Lanarkshire">North
                            Lanarkshire
                        </option>
                        <option value="Orkney">Orkney</option>
                        <option value="Perthshire and Kinross">Perthshire
                            and Kinross
                        </option>
                        <option value="Renfrewshire">Renfrewshire</option>
                        <option value="Shetland">Shetland</option>
                        <option value="South Ayrshire">South Ayrshire
                        </option>
                        <option value="South Lanarkshire">South
                            Lanarkshire
                        </option>
                        <option value="Stirling">Stirling</option>
                        <option value="West Dunbartonshire">West
                            Dunbartonshire
                        </option>
                        <option value="West Lothian">West Lothian</option>
                        <option value="Western Isles">Western Isles</option>
                        <option value="">&nbsp</option>
                        <option value="--Wales--">--Wales--</option>
                        <option value="Blaenau Gwent">Blaenau Gwent</option>
                        <option value="Bridgend">Bridgend</option>
                        <option value="Caerphilly">Caerphilly</option>
                        <option value="Cardiff">Cardiff</option>
                        <option value="Carmarthenshire">Carmarthenshire
                        </option>
                        <option value="Ceredigion">Ceredigion</option>
                        <option value="Conwy">Conwy</option>
                        <option value="Denbighshire">Denbighshire</option>
                        <option value="Flintshire">Flintshire</option>
                        <option value="Gwynedd">Gwynedd</option>
                        <option value="Isle of Anglesey">Isle of Anglesey
                        </option>
                        <option value="Merthyr Tydfil">Merthyr Tydfil
                        </option>
                        <option value="Monmouthshire">Monmouthshire</option>
                        <option value="Neath Port Talbot">Neath Port
                            Talbot
                        </option>
                        <option value="Newport">Newport</option>
                        <option value="Pembrokeshire">Pembrokeshire</option>
                        <option value="Powys">Powys</option>
                        <option value="Rhondda Cynon Taff">Rhondda Cynon
                            Taff
                        </option>
                        <option value="Swansea">Swansea</option>
                        <option value="Torfaen">Torfaen</option>
                        <option value="The Vale of Glamorgan">The Vale of
                            Glamorgan
                        </option>
                        <option value="Wrexham">Wrexham</option>
                    </select>
                    <button type="submit"
                            onClick={listMembers}>
                        <i className="fa fa-search"/>
                    </button>
                </form>
                {results ? <div className="results-container">
                    <DataTable value={results}>
                        {dynamicColumns}
                        <DataTable.Column
                            body={actionBodyTemplate}
                            headerStyle={{width: '8em', textAlign: 'center'}}
                            bodyStyle={{textAlign: 'center', overflow: 'visible'}}
                        />
                    </DataTable>
                </div> : null}
            </div>
        </div>
    );}

{/*{results}*/}
{/*<button type="submit" onClick={null}/>*/}