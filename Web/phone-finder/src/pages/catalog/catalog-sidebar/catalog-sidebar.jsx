import { useEffect, useState } from "react";
import Style from "./catalog-sidebar.module.css";



function CatalogSideBar(){

    const [performanceToggle, SetPerformanceToggle] = useState(false);
    const [chipsetToggle, SetChipsetToggle] = useState(false);
    const [cameraToggle, SetCameraToggle] = useState(false);
    const [featuresToggle, SetFeaturesToggle] = useState(false);
    const [brandData, setbrandData] = useState();
    const [brandLimit, setbrandLimit] = useState(9);

    useEffect(() => {
        console.log("Setting GridPage: "+brandLimit);
        fetch(`http://localhost:8081/brands?limit=${brandLimit}`)
        .then(res => res.json())
        .then(brandData => setbrandData(brandData))
        .then(err => console.log(err))
    }, [brandLimit]);

    return <>
    <div className="container">
        <div className="row border-bottom">
            <div className="mt-3 mb-3 d-flex">
                <h1 className="mx-auto my-auto">Filter</h1>
            </div>
        </div>
            <div className="row d-flex">
                <div className="border-bottom pt-2 pb-2">
                    <span className="fw-semibold fs-4 me-2">Brands</span>
                    <div className="row">

                    {
                        brandData?.map((d, i) => (
                            <span key={i} className={Style.brandItem}>{d.name}</span>
                    ))
                    }
                        <span className={Style.ellipsis}>...</span>
                        <button onClick={() => {setbrandLimit((brandLimit)+9)}} className={"mx-auto "+Style.brandItem}>Show More</button>
                    </div>
                </div>
            </div>
            <div className="row d-flex">
                <div className="border-bottom pt-2 pb-2">
                <a className="text-decoration-none text-black" href="#">
                    <div className="text-center" onClick={() => SetPerformanceToggle(!performanceToggle)}>
                        <span className="fw-semibold fs-5 me-2">Performance</span>
                        <i>{performanceToggle ? '▲' : '▼'}</i>
                    </div>
                </a>

                    {performanceToggle && (
                        <ul className="p-0">
                            <ul>
                                <a className="text-decoration-none text-black" href="#">
                                <div onClick={() => SetChipsetToggle(!chipsetToggle)}>
                                    <span className="fw-semibold fs-5 me-2">Chipset</span>
                                    <i>{chipsetToggle ? '▲' : '▼'}</i>
                                </div>
                                </a>
                            </ul>
                        {chipsetToggle && (
                            <ul>
                                <div className="row">
                                    <ul><input type="checkbox" className={"col-1 my-auto "+Style.sidebar} /><h6 className="col-11 d-inline"> Exynos 2100</h6></ul>
                                    <ul><input type="checkbox" className={"col-1 my-auto "+Style.sidebar} /><h6 className="col-11 d-inline"> Snapdragon 215</h6></ul>
                                    <ul><input type="checkbox" className={"col-1 my-auto "+Style.sidebar} /><h6 className="col-11 d-inline"> Helio A25</h6></ul>
                                </div>
                            </ul>
                        )}
                    </ul>)}
                </div>
            </div>

            <div className="row d-flex">
                <div className="border-bottom py-2 pb-2">
                <a className="text-decoration-none text-black" href="#">
                    <div className="text-center" onClick={() => SetCameraToggle(!cameraToggle)}>
                        <span className="fw-semibold fs-5 me-2">Camera</span>
                        <i>{cameraToggle ? '▲' : '▼'}</i>
                    </div>
                </a>

                    {cameraToggle && (
                    <ul className="p-0">
                        <ul>
                            <a className="text-decoration-none text-black" href="#">
                            <div onClick={() => SetChipsetToggle(true)}>
                                <span className="fw-semibold fs-5 me-2">Number of Cameras</span>
                                <i>{false ? '▲' : '▼'}</i>
                            </div>
                            </a>
                        </ul>
                        <ul>
                            <a className="text-decoration-none text-black" href="#">
                            <div onClick={() => SetChipsetToggle(true)}>
                                <span className="fw-semibold fs-5 me-2">Main Camera</span>
                                <i>{false ? '▲' : '▼'}</i>
                            </div>
                            </a>
                        </ul>
                        <ul>
                            <a className="text-decoration-none text-black" href="#">
                            <div onClick={() => SetChipsetToggle(true)}>
                                <span className="fw-semibold fs-5 me-2">Macro Camera</span>
                                <i>{false ? '▲' : '▼'}</i>
                            </div>
                            </a>
                        </ul>
                        <ul>
                            <a className="text-decoration-none text-black" href="#">
                            <div onClick={() => SetChipsetToggle(true)}>
                                <span className="fw-semibold fs-5 me-2">Ultra-Wide Camera</span>
                                <i>{false ? '▲' : '▼'}</i>
                            </div>
                            </a>
                        </ul>
                    </ul>
                    )}
                </div>
            </div>

            <div className="row d-flex">
                <div className="border-bottom py-2 pb-2">
                <a className="text-decoration-none text-black" href="#">
                    <div className="text-center" onClick={() => SetFeaturesToggle(!featuresToggle)}>
                        <span className="fw-semibold fs-5 me-2">Features</span>
                        <i>{featuresToggle ? '▲' : '▼'}</i>
                    </div>
                </a>

                    {featuresToggle && (
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                    </ul>
                    )}
                </div>
            </div>
    </div>
    </>
}

export default CatalogSideBar;  