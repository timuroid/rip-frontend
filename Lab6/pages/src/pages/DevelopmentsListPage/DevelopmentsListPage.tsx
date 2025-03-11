import {Button, Col, Container, Form, Input, Row} from "reactstrap";
import DevelopmentCard from "components/DevelopmentCard/DevelopmentCard.tsx";
import {ChangeEvent, FormEvent, useEffect} from "react";
import * as React from "react";
import {useAppSelector} from "src/store/store.ts";
import {updateDevelopmentName} from "src/store/slices/developmentsSlice.ts";
import {T_Development} from "modules/types.ts";
import {DevelopmentMocks} from "modules/mocks.ts";
import {useDispatch} from "react-redux";
import "./styles.css"

type Props = {
    developments: T_Development[],
    setDevelopments: React.Dispatch<React.SetStateAction<T_Development[]>>
    isMock: boolean,
    setIsMock: React.Dispatch<React.SetStateAction<boolean>>
}

const DevelopmentsListPage = ({developments, setDevelopments, isMock, setIsMock}:Props) => {

    const dispatch = useDispatch()

    const {development_name} = useAppSelector((state) => state.developments)

    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        dispatch(updateDevelopmentName(e.target.value))
    }

    const createMocks = () => {
        setIsMock(true)
        setDevelopments(DevelopmentMocks.filter(development => development.name.toLowerCase().includes(development_name.toLowerCase())))
    }

    const handleSubmit = async (e:FormEvent) => {
        e.preventDefault()
        await fetchDevelopments()
    }

    const fetchDevelopments = async () => {
        try {
            const response = await fetch(`http://localhost:8000/api/developments/?development_name=${development_name.toLowerCase()}`)
            const data = await response.json()
            setDevelopments(data.developments)
            setIsMock(false)
        } catch {
            createMocks()
        }
    }

    useEffect(() => {
        fetchDevelopments()
    }, []);

    return (
        <Container>
            <Row className="mb-5">
                <Col md="6">
                    <Form onSubmit={handleSubmit}>
                        <Row>
                            <Col xs="8">
                                <Input value={development_name} onChange={handleChange} placeholder="Поиск..."></Input>
                            </Col>
                            <Col>
                                <Button color="primary" className="w-100 search-btn">Поиск</Button>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
            <Row>
                {developments?.map(development => (
                    <Col key={development.id} sm="12" md="6" lg="4">
                        <DevelopmentCard development={development} isMock={isMock} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default DevelopmentsListPage