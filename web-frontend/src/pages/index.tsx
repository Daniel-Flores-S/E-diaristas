import PageTitle from "ui/components/data-display/PageTitle";
import SafeEnvironment from "ui/components/feedback/SafeEnvironment";
import UserInformetion from "ui/components/data-display/UserInformetion";
import TextFieldMask from "ui/components/inputs/TextFieldMask";
import {
    Button,
    Typography,
    Container,
    CircularProgress,
} from "@material-ui/core";
import useIndex from "data/hooks/Pages/useIndex.Page";

import {
    FormElementsContainer,
    ProfissionaisPaper,
    ProfissionaisContainer,
} from "styles/pages/index.styled";

export default function Home() {
    const {
        cep,
        setCep,
        cepValido,
        buscarProfissionais,
        erro,
        diaristas,
        buscaFeita,
        carregando,
        diaristasRestantes,
    } = useIndex();
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
                    mask={"99.999-999"}
                    label={"Digite seu CEP"}
                    fullWidth
                    variant={"outlined"}
                    value={cep}
                    onChange={(event) => setCep(event.target.value)}
                />

                {erro && <Typography color={"error"}>{erro}</Typography>}

                <Button
                    variant={"contained"}
                    color={"secondary"}
                    sx={{ width: "220px" }}
                    disabled={!cepValido || carregando}
                    onClick={() => buscarProfissionais(cep)}
                >
                    {carregando ? <CircularProgress size={20} /> : "Buscar"}
                </Button>
            </FormElementsContainer>

            <Container>
                {buscaFeita &&
                    (diaristas.length > 0 ? (
                        <ProfissionaisPaper>
                            <ProfissionaisContainer>
                                {diaristas.map(
                                    (diarista, index) => {
                                    return(
                                         <UserInformetion
                                         key={index}
                                            picture={diarista.foto_usuario}
                                            name={diarista.nome_completo}
                                            rating={diarista.reputaçcao}
                                            description={diarista.cidade}
                                        />
                                    );
                                    }
                                )}


                            </ProfissionaisContainer>
                            <Container sx={{ textAlign: "center" }}>
                                {diaristasRestantes > 0 && (
                                    <Typography sx={{ mt: 5 }}>
                                        ...e mais {diaristasRestantes}{" "}
                                        {diaristasRestantes > 1
                                            ? "profissionais atendem"
                                            : "profissional atende"}{" "}
                                        ao seu endereço.
                                    </Typography>
                                )}

                                <Button
                                    variant={"contained"}
                                    color={"secondary"}
                                    sx={{ mt: 5 }}
                                >
                                    Contratar um profissional
                                </Button>
                            </Container>
                        </ProfissionaisPaper>
                    ) : (
                        <Typography align={"center"} color={"textPrimary"}>
                            Ainda não temos nenhuma diarista disponivel para sua
                            região
                        </Typography>
                    ))}
            </Container>
        </div>
    );
}
