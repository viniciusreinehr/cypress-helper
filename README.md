<p align="center">
    <h1 
    style="color:black; background-color: white; font-weight: bold; text-shadow:2px 1px 10px rgba(0,0,0,1); border-radius:1vh;">
    <img src="https://icons-for-free.com/iconfiles/png/512/cypress-1324440144114984250.png"
    style="width: 4%" width="4%"
    >
    Cypress Helper
    </h1>
    <img src="https://img.shields.io/github/package-json/v/viniciusreinehr/cypress-helper">
    <img src="https://img.shields.io/github/last-commit/viniciusreinehr/cypress-helper">
    <img src="https://img.shields.io/github/languages/code-size/viniciusreinehr/cypress-helper">
</p><br>
    O Cypress helper é uma biblioteca que funciona em conjunto ao cypress e
    ao lighthouse,.<br><br>

<br><br>
Pré requisitos
=================
<ul>
    <li>Ter o Node JS instalado</li>
    <li>Ter o Cypress instalado</li>
</ul>
<br><br>

Instalação
=================
```bash
npm install cypress-helper cypress-audit
```
ou
```bash
yarn add cypress-helper cypress-audit
```
<br><br>

Configuração no Cypress
=================
No arquivo "cypress/plugins/index" inserir o seguinte código:
```javascript
const { lighthouse, prepareAudit } = require('cypress-audit')

import AuditPrinter from 'cypress-helper/dist/audit-printer'

module.exports = (on, config) => {
  on('before:browser:launch', (browser, launchOptions) => {
    prepareAudit(launchOptions)
    if (browser.name === 'chrome' && browser.isHeadless) {
      launchOptions.args.push('--disable-gpu')
      return launchOptions
    }
  })

  on('task', {
    lighthouse: lighthouse(item => {
      const audit = new AuditPrinter(item)
      audit.print()
    }),
  })
}
```
<br><br>
Utilizando o Lighthouse
=================

<br>
No arquivo cypress/support/commands importar a lib do audit:<br><br>

```javascript
require('cypress-audit/commands') ou import 'cypress-audit/commands'

Cypress.Commands.add("lighthouseOptions", (opts) => {
    const customThresholds = {
      performance: 1,
      accessibility: 1,
      seo: 1,
      'best-practices': 1,
      pwa: 1,
      'server-response-time': 1500,
    }
    cy.lighthouse(customThresholds, opts)
})

```
<br>
Nos testes cypress/integration chamar o command:<br><br>

```javascript
describe('Test', () => {
  it('Lighthouse - test', () => {
      cy.visit('URL do site')
    cy.lighthouseOptions({ blockedUrlPatterns: ['.firestore.'] })
  })
})

```

<p>Pronto, agora é só rodar o teste que o lighthouse vai trazer todas as notas e oportunidades de ajuste.</p>

```bash
npx cypress run ou yarn cypress run
```
<br><br>
Utilizando o upload de foto
=================
Dentro da pasta integration, crie um teste e insira o código:

```javascript
describe("test", () => {
    it("upload test", () => {
        cy.get('input file').attachFile('caminho_da_foto', {
            subjectType: 'drag-n-drop', // caso o upload seja drag-n-drop
            force: true,// força o envio
            allowEmpty: true, // não pode ser empty
        })
    })
})
```

<p>Pronto, agora é só rodar o teste que o upload será feito.</p>

```bash
npx cypress run ou yarn cypress run
```

