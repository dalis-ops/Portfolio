import { createContext, Dispatch, useRef } from "react";

interface SharedState {
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
}

// Define the type for the context
export interface AppContextType {
  sharedState: SharedState;
  setSharedState: Dispatch<SharedState>;
}

const initialContextValue: AppContextType = {
  sharedState: {
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
    finishedLoading: false,
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
  },
  setSharedState: () => null,
};

const AppContext = createContext<AppContextType>(initialContextValue);

export default AppContext;
