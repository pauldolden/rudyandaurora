import React from "react";
import { Helmet } from "react-helmet";

interface HeadProps {}

export const Head: React.FC<HeadProps> = ({}) => {
  return (
    <Helmet>
      <title>Rudy & Aurora</title>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Great+Vibes&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  );
};
