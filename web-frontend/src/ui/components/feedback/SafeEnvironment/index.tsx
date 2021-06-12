import React from "react";
import { SafeEnvironmentContainer } from "./style";
import { Container } from '@material-ui/core';


const SafeEnvironment = () => {
    return (
        <SafeEnvironmentContainer>
            <Container>
                Ambiente Seguro <i className={"twf-lock"} />
            </Container>
        </SafeEnvironmentContainer>
    );
}

export default SafeEnvironment;
