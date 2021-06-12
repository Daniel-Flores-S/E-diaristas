import React from "react";

import {
    UserInformetionContainer,
    UserName,
    UserDescription,
    AvatarStyled,
    RatingStyled,
} from "./styles";

interface UserInformetionProps {
    picture: string;
    name: string;
    rating: number;
    description?: string;
}

const UserInformetion: React.FC<UserInformetionProps> = (props) => {
    return (
        <UserInformetionContainer>
            <AvatarStyled src={props.picture} />
            <UserName> {props.name}</UserName>
            <RatingStyled readOnly value={props.rating} />
            <UserDescription>{props.description}</UserDescription>
        </UserInformetionContainer>
    );
};

export default UserInformetion;
