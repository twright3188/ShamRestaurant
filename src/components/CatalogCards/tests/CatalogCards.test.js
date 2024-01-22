import React from 'react';
import renderer from 'react-test-renderer';
import CatalogCardsItem from '../index';

it('catalog card renders correctly', () => {
    const tree = renderer.create(<CatalogCardsItem image='https://i.odealarose.com/12/images/produits/chloe-white-fall-bouquet-ode-a-la-rose-550x550-36857-1.jpg?_ga=2.193642541.1665858073.1572425823-1452047899.1572425823&_gac=1.188734938.1572426511.Cj0KCQjw6eTtBRDdARIsANZWjYaM6e1RrMtApYkqx8l0mvaOyCvPv4pEOu3HZNPca1zKIp2-tBHLj9UaArhrEALw_wcB'>test</CatalogCardsItem>).toJSON();
    expect(tree).toMatchSnapshot();
});