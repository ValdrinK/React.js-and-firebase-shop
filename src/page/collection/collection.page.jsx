import React from "react";
import { connect } from "react-redux";
import CollectionItem from "../../component/collection-item/collection-item.component";
import { createStructuredSelectors } from "reselect";
import { selectCollection } from "../../redux/shop/shop.selector";
import "./collection.page.styles.scss";
const CollectionsPage = ({ collections, match }) => {
  console.log(collections);
  const { title, items } = collections;
  return (
    <div className='collections'>
      <div className='title'>{title}</div>
      <div className='items'>
        {items.map(collection => (
          <CollectionItem key={collection.id} item={collection} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collections: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionsPage);
