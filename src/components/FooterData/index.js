import React from "react"

import Container from "../Container"

import * as S from "./styled"

const FooterData = () => {
  return (
    <S.FooterData>
      <Container>
        ©2020 danilocordeiro.dev
        <a className="link" href="/policies">
          Política de Privacidade
        </a>
      </Container>
    </S.FooterData>
  )
}

export default FooterData
