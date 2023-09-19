import { type AppType } from "next/app";
import "~/styles/globals.css";
import AppContext from "../components/AppContext";
import { useRef, useState } from "react";
import { Analytics } from '@vercel/analytics/react';
import { api } from "~/utils/api";

// Define the type for the shared state value
type SharedStateType = {
  portfolio: {
    NavBar: {
      IntervalEvent: any;
      scrolling: any;
      scrollSizeY: any;
    },
    Scrolling: {
      IntervalEvent: any;
    }
  },
  userdata: {
    timerCookieRef: any;
    windowSizeTracker: any;
    mousePositionTracker: any;
  },
  typing: {
    keyboardEvent: any;
    eventInputLostFocus: any;
  },
  finishedLoading: boolean;
};


const MyApp: AppType = ({ Component, pageProps }) => {
  const timerCookie = useRef(null);
  const windowSizeTrackerRef = useRef(null);
  const mousePositionRef = useRef(null);
  const [sharedState, setSharedState] = useState<SharedStateType>({
    portfolio: {
      NavBar: {
        IntervalEvent: null,
        scrolling: null,
        scrollSizeY: null,
      },
      Scrolling: {
        IntervalEvent: null
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

  const value: { sharedState: SharedStateType; setSharedState: React.Dispatch<React.SetStateAction<SharedStateType>> } = {
    sharedState,
    setSharedState,
  };

  return (
    <AppContext.Provider value={value}>
      <Component {...pageProps} />
      <Analytics />
    </AppContext.Provider>
  );
}

export default api.withTRPC(MyApp);
