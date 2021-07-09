import React from 'react'
import {
  Card, CardText, 
  CardTitle, CardSubtitle
} from 'reactstrap';

export default function Sobre() {
  return (
        <div>
          <Card body inverse style={{ backgroundColor: '#1c942c', borderColor: '#1c942c', alignItems: 'center' }}>
          <CardTitle tag="h3">Sobre </CardTitle>
        </Card>
        <Card body inverse style={{ backgroundColor: '#1d2cd4', borderColor: '#1d2cd4', alignItems: 'center' }}>
          <CardTitle tag="h4">Right Investment</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Aplicativo desenvolvido para smartphone e tablet (Android e Apple).</CardSubtitle>
          <CardText tag="h5">
          Wilson Palmeira Junior
          </CardText>
          <CardText  tag="h6">
          Bacharel em Administração
          </CardText>
          <CardText  tag="h6">
          Analista Desenvolvedor Mobile
          </CardText>     
          <CardText  tag="h6">
          wilson_palmeira@hotmail.com
          </CardText>                 
        </Card>        
        <Card body inverse style={{ backgroundColor: '#1d2cd4', borderColor: '#1d2cd4', alignItems: 'center' }}>
          <CardTitle tag="h4">Tecnologias de desenvolvimento</CardTitle>
          <CardText tag="h5">
          React Native
          </CardText>
          <CardText  tag="h6">
          React Native é multiplataforma (Android e iOS).
          </CardText>
          <CardText  tag="h6">
          JavaScript
          </CardText>          
          <CardText  tag="h6">
          Banco de dados: @react-native-async-storage/async-storage
          </CardText>     
        </Card>          
            {/* <CardImg top width="500px" height="500px " src={Img1} alt="Card image cap" /> */}

        </div>
  )
}
