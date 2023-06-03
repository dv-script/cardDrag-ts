import React, { useState } from 'react'
import { Rnd } from 'react-rnd'
import Menu from '../../components/MenuHeader'
import MenuMain from '../../components/MenuMain'
import { MainContainer, StaticColumnStyle } from './style'
import { FlexibleColumn } from '../../components/FlexibleColumn'
import { StaticColumn } from '../../components/StaticColumn'


export default function Home() {
  const [isFlexComponentVisible, setFlexComponentVisible] = useState(false)
  const [isStaticComponentVisible, setStaticComponentVisible] = useState(false)
  const [componentesFlex, setComponentesFlex] = useState<React.ReactNode[]>([])
  const [componentesStatic, setComponentesStatic] = useState<React.ReactNode[]>(
    []
  )

  const addFlexibleColumn = () => {
    setFlexComponentVisible(true)
    setComponentesFlex([...componentesFlex, <FlexibleColumn></FlexibleColumn>])
  }

  const addFixedColumn = () => {
    setStaticComponentVisible(true)
    setComponentesStatic([...componentesStatic, <StaticColumn></StaticColumn>])
  }

  return (
    <>
      <Menu></Menu>
      <MainContainer>
        <Rnd
          default={{ x: 50, y: 100, width: 60, height: 0 }}
          bounds={'parent'}
        >
          <MenuMain
            AddFlexibleColumn={addFlexibleColumn}
            addFixedColumn={addFixedColumn}
          />
        </Rnd>
        {isFlexComponentVisible &&
          componentesFlex.map((componente) => componente)}
        {isStaticComponentVisible && (
          <StaticColumnStyle>
            {componentesStatic.map((componente) => componente)}
          </StaticColumnStyle>
        )}

      </MainContainer>
    </>
  )
}
