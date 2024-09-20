import Style from "./phone.display-item.module.css"



function PhoneDisplayItem(props){
    return <>
        <div className={"col d-block pd-2 m-2 mb-4 "+Style.pdi_main}>
            <div className="">
                <div className={Style.pdi_body+" row bg-light d-flex"}>
                    <div className="col-3 p-0 d-flex">
                        <img className={"ms-3 mt-3 mb-3 me-0 "+Style.pdi_coverImage} src={props.picture} height="80px" width="60px" alt="" />
                    </div>
                    <div className="col-9 mt-3 ps-1">
                        <div className="row">
                            <span className={Style.pdi_title}>{props.name}</span>
                        </div>
                        <div className="row">
                            <span className={Style.pdi_subTitle}>{props.released_at.replace('Released','')}</span>
                        </div>
                        <div className="row">
                            <span className={Style.pdi_subTitle}>{props.ram}</span>
                        </div>
                    </div>
                </div>
                <div className={Style.pdi_footer+" row rounded-4"}>
                    <li className="mt-1">Chipset: {props.chipset}</li>
                    <li>Battery: {props.battery}</li>
                    <li className="mb-1">Resolution: {props.resolution}</li>
                    <button className={"btn "+Style.pdi_btn}>More Info</button>
                </div>
            </div>
        </div>
    </>
}

export default PhoneDisplayItem;