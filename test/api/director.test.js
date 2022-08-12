const chai = require("chai")
const chaiHttp = require("chai-http")
const should = chai.should()
const server = require('../../app')

chai.use(chaiHttp)

let token, directorId

describe('/api/directors tests', () => {
    before((done) => {
        chai.request(server)
        .post('/authenticate')
        .send({ username: "ali", password: "asd123" })
        .end((err, res) => {
            token = res.body.token
            done()
        })
    })
    describe('/GET directors', () => {
        it('it should GET all the directors', (done) => {
            chai.request(server)
            .get('/api/directors')
            .set('x-access-token', token)
            .end((err, res) => {
                res.should.have.status(200)
                res.body.should.be.a('array')
                done()
            })
        })
    })
    describe('/POST director', () =>{
        it('it should post a director', (done) => {
            const director = {
                name: 'Test',
                surname: "Director",
                bio: "lorem ipsum dolor"
            }
            chai.request(server)
            .post('/api/directors')
            .send(director)
            .set('x-access-token', token)
            .end((err, res) => {
                res.should.have.status(200)
                res.body.should.be.a('object')
                res.body.should.have.property('name')
                res.body.should.have.property('surname')
                res.body.should.have.property('bio')
                directorId = res.body._id
                done()
            })
        })
    })
    describe('/GET /:director_id', () => {
        it('it should GET a director by the given id', (done) => {
            chai.request(server)
            .get('/api/directors/' + directorId)
            .set('x-access-token', token)
            .end((err, res) => {
                res.should.have.status(200)
                res.body.should.be.a('object')
                res.body.should.have.property('name')
                res.body.should.have.property('surname')
                res.body.should.have.property('bio')
                done()
            })
        })
    })
    describe('/PUT/:director_id', () =>{
        it('it should UPDATE a director by given id', (done) => {
            const director = {
                name: 'Test 2',
                surname: "Director 2",
                bio: "lorem ipsum dolor amet"
            }
            chai.request(server)
            .put('/api/directors/' + directorId)
            .send(director)
            .set('x-access-token', token)
            .end((err, res) => {
                res.should.have.status(200)
                res.body.should.be.a('object')
                res.body.should.have.property('name').eql(director.name)
                res.body.should.have.property('surname').eql(director.surname)
                res.body.should.have.property('bio').eql(director.bio)
                done()
            })
        })
    })
    describe('/DELETE/:director_id', () =>{
        it('it should DELETE a director by given id', (done) => {
            chai.request(server)
            .delete('/api/directors/' + directorId)
            .set('x-access-token', token)
            .end((err, res) => {
                res.should.have.status(200)
                res.body.should.be.a('object')
                res.body.should.have.property('status').eql(1)
                done()
            })
        })
    })
})