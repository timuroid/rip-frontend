import {Breadcrumb, BreadcrumbItem} from "reactstrap";
import {Link, useLocation} from "react-router-dom";
import {T_Development} from "modules/types.ts";
import "./styles.css"

type Props = {
    selectedDevelopment: T_Development | null
}

const Breadcrumbs = ({selectedDevelopment}:Props) => {

    const location = useLocation()

    return (
        <Breadcrumb className="fs-5">
			{location.pathname == "/" &&
				<BreadcrumbItem>
					<Link to="/">
						Главная
					</Link>
				</BreadcrumbItem>
			}
			{location.pathname.includes("/developments") &&
                <BreadcrumbItem active>
                    <Link to="/developments">
						Разработка
                    </Link>
                </BreadcrumbItem>
			}
            {selectedDevelopment &&
                <BreadcrumbItem active>
                    <Link to={location.pathname}>
                        { selectedDevelopment.name }
                    </Link>
                </BreadcrumbItem>
            }
			<BreadcrumbItem />
        </Breadcrumb>
    );
};

export default Breadcrumbs