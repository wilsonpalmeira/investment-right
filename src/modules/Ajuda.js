import React from 'react';
import {
  Card, CardImg, CardText, CardTitle
} from 'reactstrap';

import Img3 from "../img/img3.png"
import Img4 from "../img/img4.png"
import Img20 from "../img/img20.png"
import Img21 from "../img/img21.png"
import Img22 from "../img/img22.png"
import Img63 from "../img/img63.png"
import Img64 from "../img/img64.png"
import Img65 from "../img/img65.png"
import Img67 from "../img/img67.png"
const Ajuda = (props) => {
  return (
<div class="container">

<Card body inverse style={{ backgroundColor: '#1c942c', borderColor: '#1c942c', alignItems: 'center' }}>
          <CardTitle tag="h3">Ajuda </CardTitle>
        </Card>
        <Card body inverse style={{ backgroundColor: '#1d2cd4', borderColor: '#1d2cd4', alignItems: 'center' }}>
          <CardTitle tag="h5"  inverse style={{ backgroundColor: '#1d2cd4', borderColor: '#1d2cd4', alignItems: 'center' }}> Use o juro a seu favor</CardTitle>
          </Card>
          <Card body inverse style={{ backgroundColor: '#1d2cd4', borderColor: '#1d2cd4'}}>
          <CardText>
          O aplicativo Right Investment determina o montante: Regimes de Juro simples, Juro composto; Sistemas de amortização: Sistema Price e Sistema de amortização constante (SAC). Fornece subsídios para que as pessoas possam analisar criticamente situações cotidianas envolvendo juro, investimentos.
          </CardText>
          <CardText>
          A entrada de dados é bastante simples: Nome do ativo ou produto (máximo 9 caracteres), Valor do capital (investimento), Onde vai investir, Taxa de juro (remuneração por esse investimento) e Tempo (período de tempo).
          </CardText>
          <CardText>
          Nota: Os regimes de Juro simples e Juro composto, para transações financeiras (aplicações em diversos tipos de investimento).
          </CardText>
          <CardText>
          Nota: Os Sistemas de amortização: Sistema Price é amplamente utilizado na compra a prazo de bens de consumo(eletrodoméstico, roupas, automóveis, pacotes de viagens, etc.). As prestações possuem um valor fixo.
Sistema de amortização constante (SAC) é amplamente utilizado em financiamento habitacional e imobiliário. O valor amortizado em cada prestação é constante e o valor das prestações diminui com o tempo.
A taxa de juro e o tempo de aplicação devem estar na mesma unidade de medida de tempo. A taxa de juro é representada na forma de número decimal. Os valores fracionários devem ser informados com ponto decimal.
          </CardText>
          <CardText>
          O aplicativo Right Investment, apresenta algumas aplicações práticas que o usuário pode incluir, para utilizar na comprensão de suas funções e utilidades das mesmas(Juro Simples, Juro Composto, Sistema Prime, SAC (Sistema de Amortização Constante).  Os valores salvados são armazenados no banco de dados local e poderá alterar ou excluir para simular casos práticos do seu interesse.
          </CardText>
        </Card>  
        <Card body inverse style={{ backgroundColor: '#1d2cd4', borderColor: '#1d2cd4', alignItems: 'center' }}>
          <CardTitle tag="h5"  inverse style={{ backgroundColor: '#1d2cd4', borderColor: '#1d2cd4', alignItems: 'center' }}> Leia os Casos Práticos para melhor entendimento.</CardTitle>
          </Card>        
 <div class="row">
 <div class="col-sm">
 Casos Práticos 2.) 
 <CardImg top src={Img20} alt="Card image cap" />
 Casos Práticos 5.) 
 <CardImg top src={Img63} alt="Card image cap" /> 
 Casos Práticos 6.)
 <CardImg top src={Img65} alt="Card image cap" />

 </div>
 <div class="col-sm">
 Casos Práticos 2.)
 <CardImg top src={Img21} alt="Card image cap" />
 Casos Práticos 5.) 
 <CardImg top src={Img64} alt="Card image cap" /> 
 Casos Práticos 6.)
 <CardImg top src={Img67} alt="Card image cap" />
 <div class="w-100"></div>
 </div>
 <div class="col-sm">
 Casos Práticos 2.)
 <CardImg top src={Img22} alt="Card image cap" />
 Lista de Investimentos
 <CardImg top src={Img4} alt="Card image cap" />
 Ajuda
 <CardImg top src={Img3} alt="Card image cap" />
 </div>
 </div>
</div>    


  );
}

export default Ajuda;