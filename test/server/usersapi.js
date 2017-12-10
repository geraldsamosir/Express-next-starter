const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();

chai.use(chaiHttp);

module.exports = describe(' users api', () =>{
    it('should get message  ok from api/users GET', function(done) {
        chai.request("http://localhost:3000")
            .get('/api/users')
            .end((err,res)=>{
                chai.expect(res).to.have.status(200)
                chai.expect(res).to.be.an("object")
                chai.expect(res.body).to.have.property("message")
                chai.expect(res.body.message).to.equal('ok')
                chai.assert.isObject(res.body)
                done()
                
            })
    })
    
})
