import { useState, useMemo } from "react";
import UserShotInterface from "data/@types/UserInterface";
import { ValidationService } from "data/services/ValidetionService";

export default function useIndex() {
    const [cep, setCep] = useState("");

    const cepValido = useMemo(() => {
        return ValidationService.cep(cep);
    }, [cep]);

    const [error, setError] = useState("");
    const [buscaFeita, setBuscarFeita] = useState(false);
    const [carregando, setCarregando] = useState(false);
    const [diaristas, setDiaristas] = useState([] as UserShotInterface[]);
    const [diaristasRestantes, setDiaristasRestantes] = useState(0);

    return {
        cep,
        setCep,
        cepValido,
    };
}
