import { Link, useLocation } from "react-router-dom";
import Home from '@mui/icons-material/Home';
import Path from '@mui/icons-material/ArrowForwardIos';
import { colors } from "./styles";

const Breadcrumb = () => {
    const url = useLocation().pathname.substring(1).split("/");

    return <>
        <nav className="p-2 flex text-sm" aria-label="Breadcrumb" style={{ color: colors.bgCol }}>
            <ul className="inline-flex">
                <Link to={"/dashboard/users"} className="inline-flex items-center">
                    <Home /><Path fontSize="small" />
                </Link>
                {url.map(p => {
                    return (
                        <Link to={p} className="inline-flex items-center" key={p}>
                            <span>{p}</span>
                            <Path fontSize="small" />
                        </Link>
                    );
                })}
            </ul>
        </nav>
    </>
}

export default Breadcrumb;