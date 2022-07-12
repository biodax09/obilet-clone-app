import React from "react";
import ContentLoader from "react-content-loader";

const JourneySkeleton = (props) => (
  <ContentLoader
    speed={2}
    width="100%"
    height={72}
    viewBox="0 0 359 72"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="261" y="10" rx="4" ry="4" width="90" height="30" />
    <rect x="8" y="56" rx="4" ry="4" width="176" height="12" />
    <rect x="12" y="10" rx="4" ry="4" width="47" height="10" />
    <rect x="8" y="23" rx="4" ry="4" width="56" height="14" />
    <rect x="90" y="10" rx="4" ry="4" width="47" height="10" />
    <rect x="86" y="23" rx="4" ry="4" width="56" height="14" />
  </ContentLoader>
);

export default JourneySkeleton;
