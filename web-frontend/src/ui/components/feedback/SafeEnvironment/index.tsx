import React from "react";
import { SafeEnvironmentContainer } from "./style";
import { Container } from '@material-ui/core';


const SafeEnvironment = () => {
    return (
        <SafeEnvironmentContainer>
            <Container>
                Safe Environment
            </Container>
        </SafeEnvironmentContainer>
    );
}

export default SafeEnvironment;