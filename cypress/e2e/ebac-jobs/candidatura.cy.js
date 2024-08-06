/// <reference types="cypress" />

describe('Testes para a página de candidatura', () => {
    beforeEach(() => {
        cy.visit('https://ebac-jobs-e2e.vercel.app/')
    })

    it('Deve levar o usuário até o formulário de inscrição', () => {
        cy.get('.Vaga_vagaLink__DeFkk').first().click()
        cy.get('input').should('have.length', 7)
    })

    it('Deve preencher o formulário de inscrição', () => {
        cy.get('.Vaga_vagaLink__DeFkk').first().click()
        cy.get('input[name="nome-completo"]').type('Ramon Silva')
        cy.get('input[name="email"]').type('ramonsilvab05@gmail.com')
        cy.get('input[name="telefone"]').type('28 99272-7751')
        cy.get('input[name="endereco"]').type('Rua Júlio da Silva Rocha nº 5 - IBC')
        cy.get('#linux').check()
        cy.get('select[name="escolaridade"]').select('Outros')
        cy.get('.Aplicacao_button__tw2AE').click()

        cy.on('window:alert', (conteudo) => {
            expect(conteudo).contain('Obrigado pela candidatura!')
        })
    })
})