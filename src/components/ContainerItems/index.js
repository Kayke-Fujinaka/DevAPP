import React from "react";

import { ContainerItems as Container } from "./styles";

function ContainerItems({children,isHeight}) {
    return <Container isHeight={isHeight}>{children}</Container>
}

export default ContainerItems