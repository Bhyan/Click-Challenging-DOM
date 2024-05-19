# Click Challenging DOM

Desafio técnico para vaga de QA.

O desafio consistia na clicar no elementos web do [site](https://the-internet.herokuapp.com/) na página [Challenging DOM](https://the-internet.herokuapp.com/challenging_dom) utilizando qualquer ferramenta de automação.

# Ferramenta utilizada
- [Cypress](https://www.cypress.io/)

## Requisitos
- [Node](https://nodejs.org) >= v18.16.0
- [Git](https://git-scm.com/)

## Instalação
```
$ git clone https://github.com/Bhyan/Click-Challenging-DOM
$ cd Click-Challenging-DOM/
$ npm install
```

## Execução

### Headless
```
$ npx cypress run
```

### Visual
```
$ npx cypress open
```
- Ao abrir a janela do Cypress clique na opção E2E Testing;
- Selecione o navegador e clique no botão Start E2E Testing in <nome_do_navegador>;
- Ao abrir o navegador, clique no arquivo click.cy.js;
- A execução acontecera e mostrara o status do teste, clicando nos testes é possível ver a execução passo a passo passando o mouse pelos passos.

## Cenários automatizados
- [x] Sua automação deve efetuar u m clique em todos os 3 botões apresentados em tela.
- [x] Sua automação deve clicar em todos os botões edit e delete da grid apresentada.

## Ponto de melhoria
- Não consegui achar nenhum lógica na mudança das label dos botões ao ser clicado e os links de edit e delete, sendo assim, não consigo validar o clique por código, apenas olhando a execução ou o vídeo gerado ao final.
