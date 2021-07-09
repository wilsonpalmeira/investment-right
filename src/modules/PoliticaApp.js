import React from 'react';
import { Card, CardTitle, CardText } from 'reactstrap';

const PoliticaApp = (props) => {
  return (
    <div>
      <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333', alignItems: 'center' }}>
        <CardTitle tag="h3">POLÍTICA DE PRIVACIDADE </CardTitle>
      </Card>
      <Card body inverse color="primary">
        <CardTitle tag="h5">Este aplicativo é mantido e operado por Right Investment.</CardTitle>
        <CardText>
        Nós não coletamos dados pessoais que pertencem àqueles que utilizam nosso aplicativo. Portanto, estamos isentos às disposições da Lei Federal n. 13.709/2018(Lei Geral de Proteção de Dados Pessoais - LGPD).
Nós cuidamos para que este aplicativo seja utilizado de maneira adequada e pessoas que tenham interesse em aplicar conceitos básicos de matemática financeira e por isso disponibilizamos esta política de privacidade, que contém informações importantes sobre:
  1.) Qual a finalidade do aplicativo Right Investment
  2.) Quem deve utilizar nosso aplicativo;
	3.) Quais dados são gravados no seu dispositivo móvel (Celular ou Tablet);
	4.) Medidas de segurança;
  5.) Aterações nesta política, e
  6.) Como entrar em contato conosco.
        </CardText>
      </Card>
      <Card body inverse color="success">
        <CardTitle tag="h5">1.) Qual a finalidade do aplicativo Right Investment</CardTitle>
        <CardText>
        O aplicativo Right Investment aplica conceitos básicos de Matemática Financeira; é muito importante para tomar decisões financeiras corretas.
O investimento pode ser um depósito em sua conta poupança, um empréstimo, compra a prazo de bens de consumo (eletrodoméstico, roupas, automóveis, pacotes de viagens, etc.), na compra de um imóvel, aplicações em diversos tipos de investimento (títulos públicos, fundos de investimento, clubes de investimento, ações, CDB's e RDB's, etc.).
O aplicativo Right Investment, determina o montante:
Regime de:
  Juro simples, 
  Juro composto.
e Sistemas de amortização:
	Sistema Price e
	Sistema de amortização constante (SAC).
        </CardText>
      </Card>
      <Card body inverse color="info">
        <CardTitle tag="h5">2.) Quem deve utilizar nosso aplicativo</CardTitle>
        <CardText>
        Nosso aplicativo somente deve ser utiizado por pessoas que tenham, pelo menos, 13 (treze) anos de idade, sendo que a utilização por pessoa com menos de 18 (dezoito) anos somente deverá ser mediante o consentimento de pelo menos um de seus pais ou responsável.          
        </CardText>
      </Card>
      <Card body inverse color="warning">
        <CardTitle tag="h5">3.) Quais dados são gravados no seu dispositivo móvel (Celular ou Tablet)</CardTitle>
        <CardText>
        Os cálculos realizados são à partir de informações gravadas pelo usuário e podem ser deletados ou alterados conforme a necessidade do usuário. São os seguintes dados:
- Nome do ativo 
- Valor do capital (investimento)
- Taxa de juro (remuneração por esse investimento)
- Tempo (período de tempo)
       </CardText>
      </Card>
      <Card body inverse color="danger">
        <CardTitle tag="h5">4.) Medidas de segurança</CardTitle>
        <CardText>
        O App Right Investment é educativo, não contém propaganda, não coleta dados pessoais do usuário, somente executa cálculos básicos de matemática financeira.
        </CardText>
      </Card>
      <Card body inverse color="danger">
        <CardTitle tag="h5">5.) Aterações nesta política</CardTitle>
        <CardText>
        A presente versão desta Política de Privacidade foi atualizada pela última vez em 20/06/2021.

Reservamo-nos o direito de modificar, a qualquer momento, as presentes normas, especialmente para adaptá-las às eventuais alterações feitas em nosso aplicativo, seja pela disponibilização de novas funcionlidades,seja pela supressão ou modificação daquelas já existentes.
Sempre que houver uma modificação, nossos usuários serão notificados na atualização do aplicativo e neste site.
        </CardText>
      </Card>    
      <Card body inverse color="secondary">
        <CardTitle tag="h5">6.) Como entrar em contato conosco</CardTitle>
        <CardText>
        Para esclarecer quaisquer dúvidas sobre esta Política de Privacidade ou sobre os dados que são tratados, conforme descrito no item n. 3 (Quais dados são gravados), entre e contato conosco por e-mail: wilson_palmeira@hotmail.com.
        </CardText>
      </Card>        
    </div>
  );
};

export default PoliticaApp;