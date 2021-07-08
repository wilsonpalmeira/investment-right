  import React from 'react';
  import { Card, Button, CardTitle, CardText } from 'reactstrap';
/*
  import styles from '../css/styles.css';
  import Img1 from "../img/img1.png"
  import Img2 from "../img/img2.png"
  import Img3 from "../img/img3.png"
  import Img4 from "../img/img4.png"
  import Img5 from "../img/img5.png"
  import Img6 from "../img/img6.png"  
*/ 
  const CasosPraticos = (props) => {
    return (
      <div>
        <Card body inverse style={{ backgroundColor: '#1c942c', borderColor: '#1c942c', alignItems: 'center' }}>
          <CardTitle tag="h3">Casos Práticos </CardTitle>
        </Card>
        <Card body inverse style={{ backgroundColor: '#1d2cd4', borderColor: '#1d2cd4', alignItems: 'center' }}>
        <CardText>
        Para incluir, toque Investir, digite os dados conforme os exemplos abaixo e toque em Salvar.
        </CardText>
        </Card>
        <Card body inverse style={{ backgroundColor: '#1d2cd4', borderColor: '#1d2cd4', alignItems: 'center' }}>
          <CardTitle tag="h5">1.) Regime de Juro Composto</CardTitle>
          <CardText>
          Sob o regime de juro composto um capital de R$ 1.200,00 foi investido a uma taxa de 3% ao mês pelo prazo de 3 anos. Calcule o montante? Sabendo que 3 anos equivalem a 36 meses Resultado: R$ 3.477,93
          </CardText>
          <CardText  tag="h5">
                ativo: "InvestiJc", capital: 1200, onde: "Bank", taxa: 30, tempo: 36
          </CardText>
        </Card>
        <Card body inverse style={{ backgroundColor: '#1d2cd4', borderColor: '#1d2cd4', alignItems: 'center' }}>
          <CardTitle tag="h5">2.) Regimes de juro simples e juro composto</CardTitle>
          <CardText>
          Após um período de 3 meses e a uma taxa de 4% de juro ao mês, um capital de um empréstimo era de R$ 500,00.  Determine o montante de um empréstimo no caso em que o regime seja de: a) juro simples  b) juro composto Resultados: R$ 560,00(juro simples) e R$ 562,43(juro composto)
          </CardText>
          <CardText  tag="h5">
                ativo: "EmpreJcJs", capital: 500, onde: "Bank", taxa: 4, tempo: 3
          </CardText>
        </Card>
        <Card body inverse style={{ backgroundColor: '#1d2cd4', borderColor: '#1d2cd4', alignItems: 'center' }}>
          <CardTitle tag="h5">3.) Regime de juro simples</CardTitle>
          <CardText>
          Se uma pessoa investe R$ 3.457,00 a juro simples, qual deve ser o montante após:  3.1) 3 anos a uma taxa de 5% ao ano?  Sabendo que 3 anos equivalem a 36 meses e a uma taxa de 5% ao ano equivalem a 5/12 = 0.416 ao mês.  Resultado:  R$ 3.975,00
          </CardText>
          <CardText  tag="h5">
                ativo: "InvestiJs", capital: 3457, onde: "Finan", taxa: 0.416, tempo: 36
          </CardText>
        </Card>
        <Card body inverse style={{ backgroundColor: '#1d2cd4', borderColor: '#1d2cd4', alignItems: 'center' }}>
          <CardTitle tag="h5">4.) Regime de juro composto</CardTitle>
          <CardText>
          Andre abriu uma conta poupança na qual depositou R$ 320,00. Esse investimento lhe rende juro composto. Depois de 24 meses a uma taxa de 0.5% de juro ao mês. Qual o montante?   Resultado: R$ 360,69
         </CardText>
         <CardText  tag="h5">
               ativo: "PoupaJc", capital: 320, onde: "Bank", taxa: 0.5, tempo: 24
         </CardText>
        </Card>
        <Card body inverse style={{ backgroundColor: '#1d2cd4', borderColor: '#1d2cd4', alignItems: 'center' }}>
          <CardTitle tag="h5">5.) Sistema de Amortização Price</CardTitle>
          <CardText>
          Sara pretende realizar a compra de um refrigerador de duas (2) portas: valor a vista 2.980,00 ou em 12 parcelas fixas com juros de 1.69% ao mês.  4.1) Supondo que o parcelamento seja realizado pelo sistema Price, determine?  a) o valor de cada parcela;  b) o valor total pago ao longo do financiamento;  Resultado: Valor de cada parcela: R$ 276,45 e o Valor Total: R$ 3.317,40 (12 vezes R$ 276,45).
          </CardText>
          <CardText  tag="h5">
                ativo: "RefrPrime", capital: 2980, onde: "CB", taxa: 1.69, tempo: 12 
          </CardText>
        </Card>
        <Card body inverse style={{ backgroundColor: '#1d2cd4', borderColor: '#1d2cd4', alignItems: 'center' }}>
          <CardTitle tag="h5">6.) Sistema de Amortização Constante (SAC)</CardTitle>
          <CardText>
          Suponha um empréstimo no valor de R$ 25.000,00 a uma taxa de juro de 6% ao mês, com o pagamento em 5 prestações.  Supondo que o parcelamento seja realizado pelo sistema de amortização constante (SAC), determine?  a) o valor de cada prestação e a prestação ao longo do financiamento;
          </CardText>
          <CardText  tag="h5">
                ativo: "FinanSAC", capital: 25000, onde: "Finan", taxa: 6, tempo: 5
          </CardText>
        </Card>    
        <Card body inverse style={{ backgroundColor: '#1d2cd4', borderColor: '#1d2cd4', alignItems: 'center' }}>
          <CardTitle tag="h5">7.) Regime de juro composto (aplicação)</CardTitle>
          <CardText>
          Angélica pretende quadruplicar seu dinheiro, aplicando R$ 320,00 em um fundo de investimento que lhe rende juro composto de 6.3% ao mês. Depois de 23 meses, qual o montante?  Resultado: R$ 1.304,41.
          </CardText>
          <CardText>
          Nota: Fundo de Investimento é um tipo de investimento coletivo, organizado por instituições financeiras, no qual você compra uma cota do fundo e recebe a valorização dela no período em que você investir nele. Uma cota é a menor parcela de participação em um fundo.
          </CardText>
          <CardText  tag="h5">
                ativo: "FundosIv", capital: 320, onde: "Agora", taxa: 6.3, tempo: 23
          </CardText>
        </Card>        
      </div>
    );
  };
  
  export default CasosPraticos;