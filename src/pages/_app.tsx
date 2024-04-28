import { type AppType } from "next/app";
import "~/styles/globals.css";
import AppContext from "../components/AppContext";
import { Dispatch, SetStateAction, useRef, useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import { api } from "~/utils/api";

// Define the type for the shared state value
type SharedStateType = {
  portfolio: {
    NavBar: {
      IntervalEvent: () => void;
      scrolling: boolean;
      scrollSizeY: object;
    };
    Scrolling: {
      IntervalEvent: any;
    };
  };
  userdata: {
    timerCookieRef: {
      current: string;
    };
    windowSizeTracker: {
      current: string;
    };
    mousePositionTracker: {
      current: string;
    };
  };
  typing: {
    keyboardEvent: any;
    eventInputLostFocus: any;
  };
  finishedLoading: boolean;
};

const MyApp: AppType = ({ Component, pageProps }) => {
  // const windowSizeTrackerRef = useRef(null);
  // const mousePositionRef = useRef(null);
  const [sharedState, setSharedState] = useState<SharedStateType>({
    portfolio: {
      NavBar: {
        IntervalEvent: () => null,
        scrolling: false,
        scrollSizeY: [],
      },
      Scrolling: {
        IntervalEvent: null,
      },
    },
    userdata: {
      timerCookieRef: {
        current: "",
      },
      windowSizeTracker: {
        current: "",
      },
      mousePositionTracker: {
        current: "",
      },
    },
    typing: {
      keyboardEvent: null,
      eventInputLostFocus: null,
    },
    finishedLoading: false,
  });

  const value: {
    sharedState: SharedStateType;
    setSharedState: Dispatch<SetStateAction<SharedStateType>>;
  } = {
    sharedState,
    setSharedState,
  };

  return (
    <AppContext.Provider value={value}>
      <Component {...pageProps} />
      <Analytics />
    </AppContext.Provider>
  );
};

export default api.withTRPC(MyApp);
