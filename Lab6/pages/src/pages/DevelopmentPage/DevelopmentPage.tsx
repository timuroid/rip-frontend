import * as React from 'react';
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {CardImg, Col, Container, Row} from "reactstrap";
import mockImage from "assets/mock.png";
import {T_Development} from "modules/types.ts";
import {DevelopmentMocks} from "modules/mocks.ts";

type Props = {
    selectedDevelopment: T_Development | null,
    setSelectedDevelopment: React.Dispatch<React.SetStateAction<T_Development | null>>,
    isMock: boolean,
    setIsMock: React.Dispatch<React.SetStateAction<boolean>>
}

const DevelopmentPage = ({selectedDevelopment, setSelectedDevelopment, isMock, setIsMock}: Props) => {
    const { id } = useParams<{id: string}>();

    const fetchData = async () => {
        try {
            const response = await fetch(`http://localhost:8000/api/developments/${id}`)
            const data = await response.json()
            setSelectedDevelopment(data)
        } catch {
            createMock()
        }
    }

    const createMock = () => {
        setIsMock(true)
        setSelectedDevelopment(DevelopmentMocks.find(development => development?.id == parseInt(id as string)) as T_Development)
    }

    useEffect(() => {
        if (!isMock) {
            fetchData()
        } else {
            createMock()
        }

        return () => setSelectedDevelopment(null)
    }, []);

    if (!selectedDevelopment) {
        return (
            <div>

            </div>
        )
    }

    return (
        <Container>
            <Row>
                <Col md="6">
                    <CardImg src={isMock ? mockImage as string : selectedDevelopment.image} className="mb-3" />
                </Col>
                <Col md="6">
                    <h1 className="mb-3">{selectedDevelopment.name}</h1>
                    <p className="fs-5">Описание: {selectedDevelopment.description}</p>
                    <p className="fs-5">Цена: {selectedDevelopment.price} руб.</p>
                </Col>
            </Row>
        </Container>
    );
};

export default DevelopmentPage