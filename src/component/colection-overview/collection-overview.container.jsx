import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import WithSpinner from "../with-spiner/with-spiner.component";
import { selectIsFetching } from "../../redux/shop/shop.selector";
import CollectionOveriew from "./colection-overview.component";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsFetching
});

const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOveriew);

export default CollectionOverviewContainer;
