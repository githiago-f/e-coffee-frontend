import React from 'react';
import { act, render, screen, waitFor } from '@testing-library/react';
import Stores from 'pages/Stores';
import * as storeApi from 'api/store.api';
import bffData from 'api/bff-data.json';
import { Store } from 'entities';
import { MemoryRouter } from 'react-router';

describe('#components/stores - UI', () => {
  console.warn = jest.fn();
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

    render(
      <MemoryRouter>
        <Stores/>
      </MemoryRouter>
    );
    await act(() => Promise.all([promiseStoreApiGetAll, promiseStoreApiGetTotal]).then());
  });

  it('should render', async () => {
    expect(screen.getByTestId('store-list-container')).toBeInTheDocument();
  });

  it('should have a list of product with same length of store in bffData json', () => {
    expect(screen.getAllByTestId('store-item')).toHaveLength(bffData.stores.length);
  });

  // Test if the coffee rating and the title are the same.
  it('should have the quantity of active bedges equal of attribute title', async () => {
    const ratingBoxList = await screen.findAllByTestId('rating-container');
    const activeDatatestid = '[data-testid="rating-badge-true"]';

    ratingBoxList.forEach(ratingBox => {
      const title = ratingBox.getAttribute('title');

      const rateBadgeList = ratingBox.querySelectorAll(activeDatatestid);
      const activeBadgeLength = rateBadgeList.length;
      if (!title) fail('Title is not found');
      //Replace the letters
      const rateNumberInTitle = Number(title.replace(/[A-z]/g, ''));
      //Match the rounded value of rate number in title (to integger) with activeBadgeLength (integger)
      expect(activeBadgeLength).toEqual(Math.round(rateNumberInTitle));
      fail();
    });
  });
});
