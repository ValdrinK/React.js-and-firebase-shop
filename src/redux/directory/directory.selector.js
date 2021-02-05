import { createSelector } from "reselect";

const directorySelect = state => state.directory;

export const directorySections = createSelector(
  [directorySelect],
  directory => directory.sections
);
