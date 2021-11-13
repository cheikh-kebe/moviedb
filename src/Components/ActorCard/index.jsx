import React from "react";
import { Image, Text, Content, Wrapper } from "./ActorCard.styles";

export const ActorCard = ({ realName, bio, birth, imgURL }) => (
  
    <Wrapper>
      <Content>
        <Image src={imgURL} alt="actor thumb" />
        <Text>
          <h1>{realName}</h1>
          <h3>
            <small>Né le:</small> {birth}
          </h3>
          <p><b>Biographie:</b> {bio}</p>
        </Text>
      </Content>
    </Wrapper>
  
);
