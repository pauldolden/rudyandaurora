import React from "react";
import { Helmet } from "react-helmet";

interface HeadProps {}

export const Head: React.FC<HeadProps> = ({}) => {
  return (
    <Helmet>
      <title>Rudy & Aurora</title>
      <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Great+Vibes&family=Merriweather:wght@300;400;700;900&display=swap"
        rel="stylesheet"
      ></link>
      <script id="mcjs" type="text/javascript">
        {`
          !function(c,h,i,m,p) {
            m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)
          }
          (document,"script","https://chimpstatic.com/mcjs-connected/js/users/f4a0aff6b728cb2ee606c5453/ff52cfa324d5baa976d75aa10.js");
        `}
      </script>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-XX4SVQ653M"
      ></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-XX4SVQ653M');
          `}
      </script>
    </Helmet>
  );
};
