const chai = require('chai');
const chaiHttp = require('chai-http');
const db = require('../../db/db_interactions');

// const should = chai.should();
// Tests can also be written with 'expect' rather than 'should' if desired
const expect = chai.expect;

chai.use(chaiHttp);

// describe('GET example', () => {
//   it('it should GET sample data', () => {
//     chai
//       .request(`http://localhost:8000`)
//       .get('/api/example')
//       .then((err, res) => {
//         should.not.exist(err);
//         should.exist(res);
//         res.should.have.status(200);
//         res.body.should.be.a('object');
//         done();
//       })
//       .catch(err => err);
//   });
// });

describe("Create a Post route", () => {
  let insertionId;
  it("it should receive a postId as a response", (done) => {
    chai
      .request("http://localhost:8000")
      .post("/api/issue")
      .send({
        categoryName: "Construction",
        creatorId: 1,
        headline: "Dead Body in Zilker Park",
        description: "There's a dead body in Zilker Park",
        lat: 30.2656,
        lng: -97.7497
      })
      .then((response) => {
        expect(response).to.have.status(200);
        expect(response.body).to.be.a("object");
        expect(response.body.insertId).to.be.a("Number");
        insertionId = response.body.insertId;
        console.log(insertionId);
        return db.helpers.getRow("posts", insertionId)
      })
      .then((result) => {
        expect(result[0].id).to.equal(insertionId);
        expect(result[0].id).to.equal(insertionId);
        expect(result[0].categoryId).to.equal(1);
        expect(result[0].headline).to.equal('Dead Body in Zilker Park');
        expect(result[0].description).to.equal('There\'s a dead body in Zilker Park');
        expect(result[0].upvotes).to.equal(0);
        expect(result[0].creatorId).to.equal(1);
        expect(result[0].status).to.equal('open');
        expect(result[0].disputed).to.equal(0);
        expect(result[0].resolved).to.equal(0);
        expect(result[0].otherFlag).to.equal(null);
        expect(result[0].lat).to.equal(30.2656);
        expect(result[0].lng).to.equal(-97.7497);
        expect(result[0].address).to.equal('119 Nueces St, Austin, TX 78701, USA');
        expect(result[0].eventDate).to.equal(null);
        return db.helpers.deleteRow('posts', insertionId)
      })
      .then((result) => {
        console.log(result);
        done();
      })
      .catch(err => done(err));
  })
})
