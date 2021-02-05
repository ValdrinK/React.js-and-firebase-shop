import React from "react";

import CollectionPreview from "../collection-preview/collection-preview.component";
import { connect } from "react-redux";
import { selectCollectionForPreview } from "../../redux/shop/shop.selector.js";
import { createStructuredSelector } from "reselect";

const CollectionOveriew = ({ collections }) => (
  <div className='collection-overview'>
    {collections.map(({ id, ...otherCollectionsProps }) => (
      <CollectionPreview key={id} {...otherCollectionsProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionForPreview
});
export default connect(mapStateToProps)(CollectionOveriew);
