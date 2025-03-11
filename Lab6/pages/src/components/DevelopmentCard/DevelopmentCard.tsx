import {Button, Card, CardBody, CardImg, CardText, CardTitle} from "reactstrap";
import mockImage from "assets/mock.png";
import {Link} from "react-router-dom";
import {T_Development} from "modules/types.ts";

interface DevelopmentCardProps {
    development: T_Development,
    isMock: boolean
}

const DevelopmentCard = ({development, isMock}: DevelopmentCardProps) => {
    return (
        <Card key={development.id} style={{width: '18rem', margin: "0 auto 50px" }}>
            <CardImg
                src={isMock ? mockImage as string : development.image}
                style={{"height": "200px"}}
            />
            <CardBody>
                <CardTitle tag="h5">
                    {development.name}
                </CardTitle>
                <CardText>
                    Цена: {development.price} руб.
                </CardText>
                <Link to={`/developments/${development.id}`}>
                    <Button color="primary">
                        Открыть
                    </Button>
                </Link>
            </CardBody>
        </Card>
    );
};

export default DevelopmentCard