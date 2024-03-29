import { AspectRatio } from '@radix-ui/react-aspect-ratio';
import styles from './Header.module.scss';
import useUpdateElementSize from '../../../../hooks/useUpdateElementSize';
export const HeaderLayoutExample = () => {
  const headerRef = useUpdateElementSize("header");
  return(
    <header ref={headerRef} className={styles.headerLayoutExample}>
      <div className={styles.mainBar}>
        <div className={styles.linksAndLogosContainer}>
          <div className={styles.logoContainer} style={{ height: "2rem", width: "2rem", backgroundColor: 'indianred' }}></div>
          <div className={styles.links} style={{
            height: '2rem',
            width: '100%',
            backgroundColor: 'maroon'
          }}> {/*TODO: Replace with Base implementation of Radix's Navigation Menu Component*/}
          </div>
        </div>
        <div className={styles.locationSearchContainer}
             style={{ height: "2rem", width: "100%", backgroundColor: 'aqua' }}>
        </div>
      </div>
    {/*  Banners can be added here using portal for dynamic header content*/}
    </header>
)};


