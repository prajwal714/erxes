// test passed
import { mount, shallow } from 'enzyme';
import ProductSection from 'modules/deals/components/ProductSection';
import { IProductData } from 'modules/deals/types';
import { IProduct } from 'modules/settings/productService/types';
import * as React from 'react';

describe('ProductSection component', () => {
  const testProducts: IProduct[] = [
    {
      _id: 'pro123',
      name: 'qwe',
      type: 's1',
      description: 'blabla',
      sku: 'sku1',
      createdAt: new Date()
    },
    {
      _id: 'pro23',
      name: 'qe',
      type: 's2',
      description: 'blablabla',
      sku: 'sku2',
      createdAt: new Date()
    }
  ];

  const testProductDatas: IProductData[] = [
    {
      _id: 'pd12',
      quantity: 2,
      unitPrice: 1000,
      taxPercent: 5,
      tax: 345,
      discountPercent: 10,
      discount: 20,
      amount: 5
    },
    {
      _id: 'pd11',
      quantity: 3,
      unitPrice: 2000,
      taxPercent: 6,
      tax: 347,
      discountPercent: 11,
      discount: 25,
      amount: 9
    }
  ];

  const defaultProps = {
    productsData: testProductDatas,
    products: testProducts,
    onChangeProductsData: (productsData: IProductData[]) => null,
    onChangeProducts: (prs: IProduct[]) => null,
    saveProductsData: () => null
  };

  test('renders shallow successfully', () => {
    shallow(<ProductSection {...defaultProps} />);
  });

  test('renders mount with default props', () => {
    const control = mount(<ProductSection {...defaultProps} />);
    const props = control.props();

    expect(props).toMatchObject(defaultProps);
  });
});
