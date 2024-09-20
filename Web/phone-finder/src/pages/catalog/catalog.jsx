import { useEffect, useState } from "react";
import Navbar from "../../components/navbar/navbar.jsx";
import PhoneDisplayItem from "../../components/phone-display-item/phone-display-item.jsx";
import CatalogSideBar from "./catalog-sidebar/catalog-sidebar.jsx";
import Style from "./catalog.module.css";



function Catalog(){

    const [deviceData, setdeviceData] = useState();
    const [brandData, setbrandData] = useState();
    const [gridPage, setGridPage] = useState(9);

    useEffect(() => {
        // setGridPage(1);
        console.log("Setting GridPage: "+gridPage);
        fetch(`http://localhost:8081/devices?limit=${gridPage}`)
        .then(res => res.json())
        .then(deviceData => setdeviceData(deviceData))
        .then(err => console.log(err))
    }, [gridPage]);

    useEffect(() => {
        // setGridPage(1);
        console.log("Setting GridPage: "+gridPage);
        fetch(`http://localhost:8081/devices?limit=${gridPage}`)
        .then(res => res.json())
        .then(brandData => setbrandData(brandData))
        .then(err => console.log(err))
    }, [gridPage]);

    return <>
        <Navbar page="catalog"/>
        <div className="container">
            <div className="row ">
                <div className="d-inline col-3">
                    <CatalogSideBar />
                </div>
                <div className={Style.catalog_body+" d-inline col-9"}>
                    <div className="d-flex">
                        <h1 className="mx-auto mt-3 fw-bold">Smartphone Catalog</h1>
                    </div>
                    <div className={"row d-flex mt-3 p-2 "+Style.catalog_grid}>
                    {
                        deviceData?.map((d, i) => (
                            <PhoneDisplayItem key={i} name={d.name} released_at={d.released_at} ram={d.ram} picture={d.picture} chipset={d.chipset} resolution={d.display_resolution} battery={d.battery_type+" "+d.battery_size} />
                        ))
                    }
                    </div>
                    <div className="row d-flex justify-content-center mb-4">
                        <button onClick={() => {setGridPage((gridPage)+9)}} className={"btn col-2 "+Style.catalog_showMoreBtn}>Show more...</button>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Catalog;