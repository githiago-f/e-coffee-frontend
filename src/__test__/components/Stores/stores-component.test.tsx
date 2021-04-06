import React from 'react';
import { act, render, screen, waitFor } from '@testing-library/react';
import Stores from 'pages/Stores';
import * as storeApi from 'api/store.api';
import bffData from 'api/bff-data.json';
import { Store } from 'entities';

jest.mock('react-router-dom');

describe('#components/stores - UI', () => {

  let spyStoreApi: jest.SpyInstance;
  let spyStoreGetTotal: jest.SpyInstance;
  beforeEach(async () => {
    const promiseStoreApiGetAll = Promise.resolve(bffData.stores as Store[]);
    const promiseStoreApiGetTotal = Promise.resolve(bffData.stores.length);

    spyStoreApi = jest.spyOn(storeApi, 'storeApi').mockReturnValue({
      ...storeApi.storeApi(),
      getAll: jest.fn().mockReturnValue(promiseStoreApiGetAll),
      getTotal: jest.fn().mockReturnValue(promiseStoreApiGetTotal),
    });

      render(<Stores/>);
    await act(() => Promise.all([promiseStoreApiGetAll, promiseStoreApiGetTotal]).then());
  });

  it('should render', async () => {
    expect(screen.getByTestId('store-list-container')).toBeInTheDocument();
  });

  it('should have a list of product with same length of store in bffData json', () => {
    const screenNumber = screen.getAllByTestId('store-item');
    
    expect(screenNumber).toHaveLength(bffData.stores.length);
  });
});
