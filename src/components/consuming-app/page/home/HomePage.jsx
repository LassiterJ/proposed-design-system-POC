import React from 'react'
import { HomeTemplate } from "../../template/home/HomeTemplate";
import {useWindowClass} from "../../smart/window-class/WindowClass";
import {MainLayout} from "../../template/main-layout/MainLayout";
export const HomePage = () => {
  const windowClassData = useWindowClass();
  console.log("windowClassData: ", windowClassData);
  const isTouchDevice = windowClassData.isPrimarilyATouchDevice? "true" : "false";
  
  return(
    <MainLayout>
      <HomeTemplate>
        <div>
          <p>The current window class is: {windowClassData.windowClass}</p>
          <p>The user's device is a touch device: {isTouchDevice}</p>
        </div>
      </HomeTemplate>
    </MainLayout>
  )
}
