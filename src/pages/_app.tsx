import { type AppType } from "next/app";
import "~/styles/globals.css";
import AppContext from "~/components/AppContext";
import { useRef, useState } from "react";
import { Analytics } from '@vercel/analytics/react';
import { api } from "~/utils/api";

const MyApp: AppType = ({ Component, pageProps }) => {
  const timerCookie = useRef(null);
  const windowSizeTrackerRef = useRef(null);
  const mousePositionRef = useRef(null);
  const [sharedState, setSharedState] = useState({
    portfolio: {
      NavBar: {
        IntervalEvent: null,
        scrolling: null,
        scrollSizeY: null,
      },
      Scrolling:{
        IntervalEvent:null
      }
    },
    userdata: {
      timerCookieRef: timerCookie,
      windowSizeTracker: windowSizeTrackerRef,
      mousePositionTracker: mousePositionRef,
    },
    typing: {
      keyboardEvent: null,
      eventInputLostFocus: null,
    },
    finishedLoading: false,
  });
  return (
    <AppContext.Provider value={{ sharedState, setSharedState }}>
      <Component {...pageProps} />
      <Analytics />
    </AppContext.Provider>
  );
  }

export default api.withTRPC(MyApp);
