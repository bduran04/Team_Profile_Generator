describe('inquirer', () => {
    it('should prompt the user to answer questions about their manager', () => {
        expect(true)
    })
})

describe('createHtml', () => {
    it('should return html', () => {
        let response = createHtml();
        expect(response).toEqual(` <!DOCTYPE html>
        // <html>
        //  <body>
        
        // <div id="container" class="Container"></div>
        
        
        // </body>
        // </html>`)
    })
})

describe('createCards', () => {
    it('should create the html for a card', () => {
        const person = [{
            role: 'manager',
            id: 1,
            name: 'Dolly'
        }]
        const card = createCardList(person)
        expect(card).toEqual(`div card
        // <div class="card">Dolly</div>  
        // <div>manager</div> 
        // /div`)
    });
})