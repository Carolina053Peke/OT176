const chai = require('chai');
const chaiHttp = require('chai-http');
const { describe } = require('mocha');
const server = require('../app');

const admin = { email: 'test@test.com', password: process.env.ADMIN_PASSWORD };
const user = { email: 'user@test.com', name: 'Test user' };
const unkonwnUser = { email: '', name: '' };

let token
let name
let id

const organization = {
  name: "Brubank",
  image: "logo.png",
  address: "Av Libertador 12453",
  phone: "114346425346",
  email: "brubank@gmail.com",
  welcomeText: "Bienvenidos!",
  aboutUsText: "Somos Brubank",
  facebook: "facebook.com/brubank",
  instagram: "instagram.com/brubank",
  linkedin: "linkedin.com/brubank"
};
const updatedOrganization = {
  name: "Brubank2",
  image: "logo.png",
  address: "Av Libertador 12453",
  phone: "114346425346",
  email: "brubank@gmail.com",
  welcomeText: "Bienvenidos!",
  aboutUsText: "Somos Brubank",
  facebook: "facebook.com/brubank",
  instagram: "instagram.com/brubank",
  linkedin: "linkedin.com/brubank"
}

describe('ong', () => {
  describe('/get token', () => {
    it('It should get token', () => {
      beforeEach((done) => {
        chai
          .request(server)
          .post('/users/auth/login')
          .send(admin)
          .end((err, res) => {
            token = res.body.token;
            res.should.have.status(200);
            done();
          });
      });
    });
  });
  describe('/post an organization', () => {
    it('should create an organization', (done) => {
      chai
        .request(server)
        .post('/organization/newOrg')
        .set({
          Authorization: `Bearer ${token}`,
        })
        .send(organization)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('Organization');
          name = res.body.Organization.name;
          id = res.body.Organization.id;
          console.log(name);
          done();
        });
    });
  });
  describe('/get an ong', () => {
    it('should fetch the ong with the query name', (done) => {
      chai
      .request(server)
      .get(`/organization/public?name=${name}`)
      .set({
        Authorization: `Bearer ${token}`,
      })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('name');
        res.body.should.have.property('image');
        res.body.should.have.property('phone');
        res.body.should.have.property('address');
        res.body.should.have.property('facebook');
        res.body.should.have.property('instagram');
        res.body.should.have.property('linkedin');
        res.body.should.have.property('slides');
        res.body.name.should.be.a('string');
        res.body.image.should.be.a('string');
        res.body.phone.should.be.a('number');
        res.body.address.should.be.a('string');
        res.body.facebook.should.be.a('string');
        res.body.instagram.should.be.a('string');
        res.body.linkedin.should.be.a('string');
        res.body.slides.should.be.a('array');
        done();
      });
    });
  });
})