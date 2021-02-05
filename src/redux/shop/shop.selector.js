import { createSelector } from "reselect";

const shopSelect = state => state.shop;

export const selectCollections = createSelector(
  [shopSelect],

  shop => shop.collections
);

export const selectCollectionForPreview = createSelector(
  [selectCollections],

  collections =>
    collections ? Object.keys(collections).map(keys => collections[keys]) : []
);

export const selectCollection = urlParams =>
  createSelector(
    [selectCollections],

    collections => (collections ? collections[urlParams] : null)
  );

export const selectIsFetching = createSelector(
  [shopSelect],

  shop => shop.isFetching
);

export const selectIsCollectionFetching = createSelector(
  [shopSelect],

  shop => !!shop.collections
);
