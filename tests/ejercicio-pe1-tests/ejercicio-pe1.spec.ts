import "mocha";
import { expect } from "chai";
import { NumericSearchableCollection } from "../../src/ejercicio-pe1/numeric_searchable_collecion";
import { StringSearchableCollection } from "../../src/ejercicio-pe1/string_searchable_collection";


describe('Test de clases NumericSearchableCollection y StringSearchableCollection', () => {

  it('Metodo addItem funciona para Numeric', () => {
    const mycollection = new NumericSearchableCollection([]);
    mycollection.addItem(25);
    expect(mycollection.collection).to.be.deep.equal([25]);
    mycollection.addItem(36);
    mycollection.addItem(-8);
    mycollection.addItem(0);
    expect(mycollection.collection).to.be.deep.equal([25, 36, -8, 0]);
  });

  it('Metodo getItem() funciona para Numeric', () => {
    const mycollection = new NumericSearchableCollection([]);
    mycollection.addItem(25);
    mycollection.addItem(36);
    mycollection.addItem(-8);
    mycollection.addItem(0);
    expect(mycollection.getItem(0)).to.be.equal(25);
    expect(mycollection.getItem(1)).to.be.equal(36);
    expect(mycollection.getItem(2)).to.be.equal(-8);
    expect(mycollection.getItem(3)).to.be.equal(0);
  });

  it('Metodo removeItem funciona para numeric', () => {
    const mycollection = new NumericSearchableCollection([25, 36, -8, 0]);
    expect(mycollection.collection.length).to.be.equal(4)
    mycollection.removeItem();
    expect(mycollection.collection.length).to.be.equal(3)
    mycollection.removeItem();
    expect(mycollection.collection.length).to.be.equal(2)
    mycollection.removeItem();
    expect(mycollection.collection.length).to.be.equal(1)
    mycollection.removeItem();
    expect(mycollection.collection.length).to.be.equal(0)
    mycollection.removeItem();
    expect(mycollection.collection.length).to.be.equal(0)
  });

  it('Metodo getNumberOfItems funciona para numeric', () => {
    const mycollection = new NumericSearchableCollection([25, 36, -8, 0]);
    expect(mycollection.getNumberOfItems()).to.be.equal(mycollection.collection.length);
  });

  it('Metodo search funciona para Numeric', () => {
    const mycollection = new NumericSearchableCollection([25, 36, -8, 25, 0, 25]);
    expect(mycollection.search(25)).to.be.deep.equal([25, 25, 25]);
    expect(mycollection.search(-8)).to.be.deep.equal([-8]);
  });

  it('Metodo addItem funciona para String', () => {
    const mycollection = new StringSearchableCollection([]);
    mycollection.addItem('uno');
    expect(mycollection.collection).to.be.deep.equal(['uno']);
    mycollection.addItem('dos');
    mycollection.addItem('tres');
    mycollection.addItem('cuatro');
    expect(mycollection.collection).to.be.deep.equal(['uno', 'dos', 'tres', 'cuatro']);
  });

  it('Metodo getItem() funciona para String', () => {
    const mycollection = new StringSearchableCollection(['uno', 'dos', 'tres', 'cuatro']);
    expect(mycollection.getItem(0)).to.be.equal('uno');
    expect(mycollection.getItem(1)).to.be.equal('dos');
    expect(mycollection.getItem(2)).to.be.equal('tres');
    expect(mycollection.getItem(3)).to.be.equal('cuatro');
  });

  it('Metodo removeItem funciona para String', () => {
    const mycollection = new StringSearchableCollection(['uno', 'dos', 'tres', 'cuatro']);
    expect(mycollection.collection.length).to.be.equal(4)
    mycollection.removeItem();
    expect(mycollection.collection.length).to.be.equal(3)
    mycollection.removeItem();
    expect(mycollection.collection.length).to.be.equal(2)
    mycollection.removeItem();
    expect(mycollection.collection.length).to.be.equal(1)
    mycollection.removeItem();
    expect(mycollection.collection.length).to.be.equal(0)
    mycollection.removeItem();
    expect(mycollection.collection.length).to.be.equal(0)
  });

  it('Metodo getNumberOfItems funciona para String', () => {
    const mycollection = new StringSearchableCollection(['uno', 'dos', 'tres', 'cuatro']);
    expect(mycollection.getNumberOfItems()).to.be.equal(mycollection.collection.length);
  });

  it('Metodo search funciona para String', () => {
    const mycollection = new StringSearchableCollection(['uno', 'adrianmateo', 'adriana', 'albadrianico', 'microsoft', 'software']);
    expect(mycollection.search('adrian')).to.be.deep.equal(['adrianmateo', 'adriana', 'albadrianico']);
    expect(mycollection.search('soft')).to.be.deep.equal(['microsoft', 'software']);
  });

});