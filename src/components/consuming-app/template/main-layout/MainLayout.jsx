import React from "react";
import { Header } from "../../concrete/header/Header";
import { Footer } from "../../concrete/footer/Footer";
import styles from "./MainLayout.module.scss";
import { HeaderLayoutExample } from '../../concrete/header/HeaderLayoutExample';
import { WeatherBanner } from '../../concrete/weather-banner/WeatherBanner';
import * as Portal from '@radix-ui/react-portal';
import { useAppData } from '../../smart/app-state/AppStateProvider';
export const MainLayout = ({ children, displayHeader }) => {
const {appData} = useAppData();
const headerRef = appData?.header?.elementRef?.current;
  return (
    <div className={styles.mainLayout}>
      {/*<Header />*/}
      <HeaderLayoutExample />
      <Portal.Root container={headerRef}>
        <WeatherBanner />
      </Portal.Root>
      <main className={styles.mainContent}>{children}</main>
      <Footer />
    </div>
      )
}
