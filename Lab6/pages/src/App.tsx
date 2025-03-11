import Header from "components/Header/Header.tsx";
import Breadcrumbs from "components/Breadcrumbs/Breadcrumbs.tsx";
import DevelopmentPage from "pages/DevelopmentPage/DevelopmentPage.tsx";
import DevelopmentsListPage from "pages/DevelopmentsListPage/DevelopmentsListPage.tsx";
import {Route, Routes} from "react-router-dom";
import {Container, Row} from "reactstrap";
import HomePage from "pages/HomePage/HomePage.tsx";
import {useState} from "react";
import {T_Development} from "modules/types.ts";

function App() {

    const [developments, setDevelopments] = useState<T_Development[]>([])

    const [selectedDevelopment, setSelectedDevelopment] = useState<T_Development | null>(null)

    const [isMock, setIsMock] = useState(false);

    return (
        <>
            <Header/>
            <Container className="pt-4">
                <Row className="mb-3">
                    <Breadcrumbs selectedDevelopment={selectedDevelopment}/>
                </Row>
                <Row>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/developments/" element={<DevelopmentsListPage developments={developments} setDevelopments={setDevelopments} isMock={isMock} setIsMock={setIsMock} />} />
                        <Route path="/developments/:id" element={<DevelopmentPage selectedDevelopment={selectedDevelopment} setSelectedDevelopment={setSelectedDevelopment} isMock={isMock} setIsMock={setIsMock} />} />
                    </Routes>
                </Row>
            </Container>
        </>
    )
}

export default App
