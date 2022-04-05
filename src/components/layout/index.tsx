import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";
import dynamic from "next/dynamic";
import { useWindowSize } from "hooks";

import Footer from "./Footer";
const Header = dynamic(() => import("./Header"), { ssr: false });

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (<>
    <Header isMobile={useWindowSize().width as number > 800} />
    <Box as="main" mt="73px" minHeight="calc(100vh - 73px)" marginLeft={useWindowSize().width as number > 800 ? "320px" : 0} px={6} py={4}>
      {children}
      {useWindowSize().width as number > 800 && <Footer isMobile={false} />}
    </Box>
  </>
  );
};

export default Layout;
