import React from "react";
import { Route } from "react-router-dom";

import CollectionOverviewContainer from "../../component/colection-overview/collection-overview.container";
import CollectionsPageContainer from "../collection/collection.page.container";

import { connect } from "react-redux";

import { fetchingStart } from "../../redux/shop/shop.action";

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionStart } = this.props;

    fetchCollectionStart();
  }

  render() {
    const { match, isFetching, isCollectionFetching } = this.props;
    return (
      <div>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionsPageContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionStart: () => dispatch(fetchingStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);
