import Style from "./navbar.module.css"
import Logo from "../../assets/PhoneFinderLogo.png"
import { Link } from "react-router-dom";


function Navbar(props){

    const linkWhite = "fw-bold fs-5 ps-1 pe-1 link-light";
    const linkGray = "fw-bold fs-5 ps-1 pe-1 link-secondary";

    return <>
        <div className={Style.navbar_container}>
            <div className={Style.navbar_main+" d-flex pt-2 pb-2 justify-content-center"}>
                    <img src={Logo} alt="" />
                    <input className={Style.navbar_searchBar+" fw-bold ms-4 ps-2 align-middle"} type="text" placeholder="Galaxy S21 Ultra..."/>
                    <button className={Style.navbar_searchBtn+" btn btn-primary"} type="button">Search</button>
            </div>
            <div className={Style.navbar_footer+" d-flex justify-content-center"}>
                <div className="m-0 mx-auto">
                    <Link className="text-decoration-none">
                        <span className={props.page == "catalog" ? linkWhite : linkGray}>Catalog</span>
                    </Link>
                    <span className={linkGray}>|</span>
                    <Link className="text-decoration-none">
                        <span className={props.page == "component filter" ? linkWhite : linkGray}>Component Filter</span>
                    </Link>
                    <span className={linkGray}>|</span>
                    <Link className="text-decoration-none">
                        <span className={props.page == "compare phones" ? linkWhite : linkGray}>Compare Phones</span>
                    </Link>
                </div>
            </div>
        </div>
    </>
}

export default Navbar;