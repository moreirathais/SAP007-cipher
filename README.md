# Cifra de César

![logo](src/img/MB.png)

**Solução de Cifrar e Decifrar para garantir a segurança de sua mensagem**

## Índice

- [1. Prefácio](#1-prefácio)
- [2. Resumo do projeto](#2-resumo-do-projeto)
- [3. Interface](#3-interface)
- [4. Considerações Gerais](#4-considerações-gerais)

## 1. Prefácio

Cifrar significa codificar. A [cifra de César](https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar)
é um dos primeiros tipos de criptografias conhecidas na história.
O imperador romano Júlio César utilizava essa cifra para enviar
ordens secretas aos seus generais no campo de batalha.

![caeser-cipher](https://user-images.githubusercontent.com/11894994/60990999-07ffdb00-a320-11e9-87d0-b7c291bc4cd1.png)

A cifra de César é uma das técnicas mais simples de cifrar uma mensagem. É um
tipo de cifra por substituição, em que cada letra do texto original é
substituida por outra que se encontra há um número fixo de posições
(deslocamento) mais a frente do mesmo alfabeto.

Por exemplo se usarmos o deslocamento (_offset_) de 3 posições:

- Alfabeto sem cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
- Alfabeto com cifra: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C
- A letra A será D
- A palavra CASA será FDVD

Atualmente todas as cifras de substituição alfabética simples, são decifradas
com facilidade e não oferecem muita segurança na comunicação por si mesma,
mas a cifra de César muitas vezes pode fazer parte de um sistema
mais complexo de criptografia, como
a cifra de Vigenère, e tem aplicação no sistema ROT13.

## 2. Resumo do projeto

Principais usuárias são mulheres em situação de perigo de violência doméstica, abuso sexual e/ou psicológico.
A aplicação permite enviar uma mensagem codificada para a comunidade de apoio, sem que se saibam o teor do assunto.
O produto será a comunicação direta da usuária, para obtenção de ajuda e apoio.Mascarado como se fosse uma página E-commerce para que se mantenha o sigilo dessa comunicação.

Foi decidido utilizar uma interface como uma página de cosméticos, para que a aplicação não chame atenção, no caso de acesso do agressor.
Ao procurar ajuda a usuária terá acesso a página e aprenderá o contexto da cifra de cesar e como navegar na página.Que basicamente é escolher uma chave de deslocamento (Campo Quantidade), digitar a mensagem e Enviar.

O produto soluciona o problema de uma usuária para que envie um pedido de socorro ou qualquer tipo de ajuda.

## 3.Interface

A página tem fácil utilização por parte da usuário, são aceitas letras maiúscula e minúsculas, offset negativo.Só não abrange caractéres especiais.
A paleta de cor escolhida foi a lilás, para fugir da tendência que o que é relacionado a mulher é na cor rosa.
Primeiramente pensada em ter dois blocos, o layout teve que ser alterado para que houvesse funcionalidade.A pretensão é que na atualização do projeto a mensagem seja encaminhada para outra página.

![prototipo1](src/img/prototipo.jpg.jfif "Primeiro protótipo")
![prototipo2](src/img/Slide1.jpg "Segundo protótipo")
![prototipo3](src/img/Slide2.jpg "Segundo protótipo")


## 4. Considerações Gerais

Com a execução desse projeto , estudei e apliquei:
1. HTML
2. CSS
3. Manipulação DOM
4. Git/GitHub
5. Planejamento/Organização

Agradeço a equipe Laboratória, meu squad 3 e todas as colegas que contribuiram direta/indiretamente para execução desse projeto.




