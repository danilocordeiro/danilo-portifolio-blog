import React from "react"
import PropTypes from "prop-types"
import AniLink from "gatsby-plugin-transition-link/AniLink"

import { getActiveTheme } from "../../utils/themes"

import Avatar from "../Avatar"
import Menu from "../Menu"
import Container from "../Container"
import LightButton from "../LightButton"
import * as R from "../Responsive"

import * as S from "./styled"

const Header = ({ site: { author } }) => {
  return (
    <S.Header>
      <Container>
        <S.Main>
          <AniLink
            cover
            bg={getActiveTheme()}
            direction="down"
            duration={1}
            to="/"
            title="Voltar para home"
          >
            <S.Brand>
              <Avatar />
              <R.LessThanSmallMobile>
                <S.Title>FFialho</S.Title>
              </R.LessThanSmallMobile>
              <R.GreaterThanSmallMobile>
                <S.Title>{author}</S.Title>
              </R.GreaterThanSmallMobile>
            </S.Brand>
          </AniLink>
          <S.Menu>
            <Menu />
            <LightButton />
          </S.Menu>
        </S.Main>
      </Container>
    </S.Header>
  )
}

Header.propTypes = {
  site: PropTypes.shape({
    author: PropTypes.string.isRequired,
  }),
}

export default Header
