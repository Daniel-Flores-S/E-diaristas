import PageTitle from "ui/components/data-display/PageTitle";
import SafeEnvironment from "ui/components/feedback/SafeEnvironment";
import UserInformetion from "ui/components/data-display/UserInformetion";
import TextFieldMask from "ui/components/inputs/TextFieldMask";
import { Button, Typography, Container } from "@material-ui/core";
import useIndex from "data/hooks/Pages/useIndex.Page";

import {
    FormElementsContainer,
    ProfissionaisPaper,
    ProfissionaisContainer,
} from "styles/pages/index.styled";

export default function Home() {
    const { cep, setCep, cepValido } = useIndex();
    return (
        <div>
            <SafeEnvironment />
            <PageTitle
                title={"Conheça nossos profissionais."}
                subtitle={
                    "Preencha seu Endereço é veja todos os proficionais da sua localidade"
                }
            />
            <FormElementsContainer>
                <TextFieldMask
                    mask={"99.999-99"}
                    label={"Digite seu CEP"}
                    fullWidth
                    variant={"outlined"}
                    value={cep}
                    onChange={(event) => setCep(event.target.value)}
                />

                <Typography color={"error"}>CEP Inválido</Typography>
                
                <Button
                    variant={"contained"}
                    color={"secondary"}
                    sx={{ width: "220px" }}
                >
                    Buscar
                </Button>
            </FormElementsContainer>
            <Container>
                <ProfissionaisPaper>
                    <ProfissionaisContainer>
                        <UserInformetion
                            picture={"https://github.com/Daniel-Flores-S.png"}
                            name={"Daniel"}
                            rating={4}
                            description={"Bahia"}
                        />
                        <UserInformetion
                            picture={"https://github.com/Daniel-Flores-S.png"}
                            name={"Daniel"}
                            rating={4}
                            description={"Bahia"}
                        />
                        <UserInformetion
                            picture={"https://github.com/Daniel-Flores-S.png"}
                            name={"Daniel"}
                            rating={4}
                            description={"Bahia"}
                        />
                        <UserInformetion
                            picture={"https://github.com/Daniel-Flores-S.png"}
                            name={"Daniel"}
                            rating={4}
                            description={"Bahia"}
                        />
                        <UserInformetion
                            picture={"https://github.com/Daniel-Flores-S.png"}
                            name={"Daniel"}
                            rating={4}
                            description={"Bahia"}
                        />
                        <UserInformetion
                            picture={"https://github.com/Daniel-Flores-S.png"}
                            name={"Daniel"}
                            rating={4}
                            description={"Bahia"}
                        />
                        <UserInformetion
                            picture={"https://github.com/Daniel-Flores-S.png"}
                            name={"Daniel"}
                            rating={4}
                            description={"Bahia"}
                        />
                        <UserInformetion
                            picture={"https://github.com/Daniel-Flores-S.png"}
                            name={"Daniel"}
                            rating={4}
                            description={"Bahia"}
                        />
                        <UserInformetion
                            picture={"https://github.com/Daniel-Flores-S.png"}
                            name={"Daniel"}
                            rating={4}
                            description={"Bahia"}
                        />
                        <UserInformetion
                            picture={"https://github.com/Daniel-Flores-S.png"}
                            name={"Daniel"}
                            rating={4}
                            description={"Bahia"}
                        />
                    </ProfissionaisContainer>
                </ProfissionaisPaper>
            </Container>
        </div>
    );
}
