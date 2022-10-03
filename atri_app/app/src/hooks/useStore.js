import create from "zustand";

// unsafe merge state
// and mew properties will added or existing properties will be changed
// but the type of value of the property must not change
function mergeState(baseState, newState) {
  if (
    typeof newState === "object" &&
    !Array.isArray(newState) &&
    newState !== null
  ) {
    const keys = Object.keys(newState);
    keys.forEach((key) => {
      // create a new key in base if not exists
      if (!(key in baseState)) {
        baseState[key] = {};
      }
      if (typeof newState[key] === "object" && !Array.isArray(newState[key]))
        mergeState(baseState[key], newState[key]);
      else baseState[key] = newState[key];
    });
  }
}

const useStore = create((set) => {
  return {
    setPage: (pageName, newState) =>
      set((state) => {
        const pageState = JSON.parse(JSON.stringify(state[pageName]));
        mergeState(pageState, newState);
        return { [pageName]: pageState };
      }),
  };
});

export function updateStoreStateFromController(pageName, newState) {
  useStore.getState().setPage(pageName, newState);
}

const desktopModeProps = {
  ...{
  "Home": {
    "Flex1": {
      "styles": {
        "display": "flex",
        "justifyContent": "space-around",
        "alignItems": "center",
        "fontFamily": "DM Sans",
        "fontWeight": 500,
        "fontSize": "18px",
        "color": "#696969",
        "paddingTop": "20px",
        "paddingBottom": "30px"
      },
      "callbacks": {}
    },
    "Flex2": {
      "styles": {
        "display": "flex",
        "columnGap": "30px",
        "alignItems": "center"
      },
      "callbacks": {}
    },
    "Flex3": {
      "styles": {
        "display": "flex",
        "columnGap": "30px"
      },
      "callbacks": {}
    },
    "Button1": {
      "styles": {
        "color": "#000000",
        "backgroundColor": "#ffffff",
        "paddingTop": "10px",
        "paddingLeft": "25px",
        "paddingBottom": "10px",
        "paddingRight": "25px",
        "fontSize": "16px",
        "borderRadius": "50px",
        "outline": "none",
        "fontWeight": 500,
        "textAlign": "center",
        "borderWidth": "1px",
        "borderStyle": "solid",
        "borderColor": "#cccccc",
        "cursor": "pointer",
        "userSelect": "none",
        "fontFamily": "DM Sans"
      },
      "custom": {
        "text": "Order online"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button2": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#FF7629",
        "paddingTop": "10px",
        "paddingLeft": "25px",
        "paddingBottom": "10px",
        "paddingRight": "25px",
        "fontSize": "16px",
        "borderRadius": "50px",
        "outline": "none",
        "fontWeight": 500,
        "textAlign": "center",
        "borderWidth": "1px",
        "borderStyle": "none",
        "borderColor": "#1890ff",
        "cursor": "pointer",
        "userSelect": "none",
        "fontFamily": "DM Sans"
      },
      "custom": {
        "text": "Reservate"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox1": {
      "styles": {},
      "custom": {
        "text": "Home"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox2": {
      "styles": {},
      "custom": {
        "text": "About"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox3": {
      "styles": {},
      "custom": {
        "text": "Menu"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox4": {
      "styles": {},
      "custom": {
        "text": "Pages"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex4": {
      "styles": {
        "display": "flex"
      },
      "callbacks": {}
    },
    "Image2": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616da2c309aa0721dacedf0a_logo-restaurante-x-template.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox6": {
      "styles": {},
      "custom": {
        "text": "Cart"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex5": {
      "styles": {
        "display": "flex"
      },
      "callbacks": {}
    },
    "Flex6": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "fontFamily": "DM Sans",
        "fontWeight": 500,
        "fontSize": "40px",
        "width": "60%",
        "rowGap": "20px",
        "paddingLeft": "150px",
        "paddingRight": "60px",
        "paddingTop": "100px"
      },
      "callbacks": {}
    },
    "Flex7": {
      "styles": {
        "display": "flex",
        "backgroundColor": "#FF7629",
        "width": "40%"
      },
      "callbacks": {}
    },
    "TextBox7": {
      "styles": {
        "fontFamily": "DM Sans",
        "fontWeight": 700
      },
      "custom": {
        "text": "The best place to"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox8": {
      "styles": {
        "backgroundColor": "",
        "color": "#FF7629",
        "fontFamily": "DM Sans",
        "fontWeight": 700
      },
      "custom": {
        "text": "eat burgers in LA."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox9": {
      "styles": {
        "fontSize": "18px",
        "color": "#757575",
        "paddingRight": "",
        "width": "70%"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam vitae velit bibendum elementum eget non vivamus volutpat odio cras vestibulum purus aliquam."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex8": {
      "styles": {
        "display": "flex"
      },
      "callbacks": {}
    },
    "Button3": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#FF7629",
        "paddingTop": "10px",
        "paddingLeft": "25px",
        "paddingBottom": "10px",
        "paddingRight": "25px",
        "fontSize": "16px",
        "borderRadius": "50px",
        "outline": "none",
        "fontWeight": 500,
        "textAlign": "center",
        "borderWidth": "1px",
        "borderStyle": "none",
        "borderColor": "#1890ff",
        "cursor": "pointer",
        "userSelect": "none",
        "fontFamily": "DM Sans"
      },
      "custom": {
        "text": "Reservate"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button4": {
      "styles": {
        "color": "#000000",
        "backgroundColor": "#ffffff",
        "paddingTop": "10px",
        "paddingLeft": "25px",
        "paddingBottom": "10px",
        "paddingRight": "25px",
        "fontSize": "16px",
        "borderRadius": "50px",
        "outline": "none",
        "fontWeight": 500,
        "textAlign": "center",
        "borderWidth": "1px",
        "borderStyle": "solid",
        "borderColor": "#cccccc",
        "cursor": "pointer",
        "userSelect": "none",
        "fontFamily": "DM Sans"
      },
      "custom": {
        "text": "Order online"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex9": {
      "styles": {
        "display": "flex",
        "columnGap": "30px"
      },
      "callbacks": {}
    },
    "Flex10": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "fontSize": "50px"
      },
      "callbacks": {}
    },
    "Image5": {
      "styles": {
        "height": "400px",
        "width": "200%",
        "borderRadius": "50px",
        "paddingLeft": "40px",
        "paddingRight": "40px",
        "paddingTop": "40px",
        "paddingBottom": "40px",
        "position": "relative",
        "right": 200
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616d9a0b651769674022e7ba_home-hero-restaurante-x-template.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex11": {
      "styles": {
        "display": "flex",
        "justifyContent": "center",
        "paddingTop": "75px",
        "fontFamily": "DM Sans",
        "fontWeight": 700,
        "fontSize": "21px",
        "flexDirection": "column",
        "alignItems": "center",
        "rowGap": "20px"
      },
      "callbacks": {}
    },
    "TextBox10": {
      "styles": {},
      "custom": {
        "text": "Order from your favorite app today!"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex12": {
      "styles": {
        "display": "flex",
        "columnGap": "60px"
      },
      "callbacks": {}
    },
    "Image6": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616d9a0b63b4ee3fe71f5072_logo-doorash-restaurante-x-template.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image8": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616d9a0b5b82ce962fe1736b_logo-grubhub-restaurante-x-template.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image9": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616d9a0b326163db6497f05b_logo-rappi-restaurante-x-template.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image10": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616d9a0bded3b95d9731ecc4_logo-postmates-restaurante-x-template.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex13": {
      "styles": {
        "display": "flex",
        "paddingTop": "150px",
        "flexDirection": "column",
        "justifyContent": "flex-start",
        "alignItems": "center",
        "fontFamily": "DM Sans",
        "rowGap": "40px"
      },
      "callbacks": {}
    },
    "TextBox11": {
      "styles": {
        "fontFamily": "DM Sans",
        "fontWeight": 700,
        "fontSize": "25px"
      },
      "custom": {
        "text": "Browse our menu"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex14": {
      "styles": {
        "display": "flex",
        "columnGap": "30px"
      },
      "callbacks": {}
    },
    "Flex15": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "alignItems": "center",
        "rowGap": "20px",
        "borderRadius": "15px",
        "borderStyle": "solid",
        "borderColor": "#cecece",
        "paddingTop": "40px",
        "paddingBottom": "40px"
      },
      "callbacks": {}
    },
    "Image11": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616dcfaa447d37fed264e4ff_menu-breakfasts-restaurante-x-template.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox12": {
      "styles": {
        "fontFamily": "DM Sans",
        "fontWeight": 500,
        "fontSize": "17px",
        "color": "#FF7629"
      },
      "custom": {
        "text": "Explore Menu"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox13": {
      "styles": {
        "fontFamily": "DM Sans",
        "fontWeight": 700,
        "fontSize": "20px"
      },
      "custom": {
        "text": "Breakfast"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox14": {
      "styles": {
        "width": "200px",
        "paddingLeft": "30px",
        "paddingRight": "10px",
        "color": "#676767",
        "fontFamily": "DM Sans",
        "fontWeight": 500,
        "fontSize": "17px"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox27": {
      "styles": {
        "width": "200px",
        "paddingLeft": "30px",
        "paddingRight": "10px",
        "color": "#676767",
        "fontFamily": "DM Sans",
        "fontWeight": 500,
        "fontSize": "17px"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox28": {
      "styles": {
        "fontFamily": "DM Sans",
        "fontWeight": 700,
        "fontSize": "20px"
      },
      "custom": {
        "text": "Main Dishes"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox29": {
      "styles": {
        "fontFamily": "DM Sans",
        "fontWeight": 500,
        "fontSize": "17px",
        "color": "#FF7629"
      },
      "custom": {
        "text": "Explore Menu"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image16": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616dcfbb9e09be616e71d818_menu-main-dishes-restaurante-x-template.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex20": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "alignItems": "center",
        "rowGap": "20px",
        "borderRadius": "15px",
        "borderStyle": "solid",
        "borderColor": "#cecece",
        "paddingTop": "40px",
        "paddingBottom": "40px"
      },
      "callbacks": {}
    },
    "TextBox30": {
      "styles": {
        "width": "200px",
        "paddingLeft": "30px",
        "paddingRight": "10px",
        "color": "#676767",
        "fontFamily": "DM Sans",
        "fontWeight": 500,
        "fontSize": "17px"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox31": {
      "styles": {
        "fontFamily": "DM Sans",
        "fontWeight": 700,
        "fontSize": "20px"
      },
      "custom": {
        "text": "Drinks"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox32": {
      "styles": {
        "fontFamily": "DM Sans",
        "fontWeight": 500,
        "fontSize": "17px",
        "color": "#FF7629"
      },
      "custom": {
        "text": "Explore Menu"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image17": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616dcfb5dd3ca61a6dd0ae1c_menu-drinks-restaurante-x-template.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex21": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "alignItems": "center",
        "rowGap": "20px",
        "borderRadius": "15px",
        "borderStyle": "solid",
        "borderColor": "#cecece",
        "paddingTop": "40px",
        "paddingBottom": "40px"
      },
      "callbacks": {}
    },
    "TextBox33": {
      "styles": {
        "width": "200px",
        "paddingLeft": "30px",
        "paddingRight": "10px",
        "color": "#676767",
        "fontFamily": "DM Sans",
        "fontWeight": 500,
        "fontSize": "17px"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam "
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox34": {
      "styles": {
        "fontFamily": "DM Sans",
        "fontWeight": 700,
        "fontSize": "20px"
      },
      "custom": {
        "text": "Desserts"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox35": {
      "styles": {
        "fontFamily": "DM Sans",
        "fontWeight": 500,
        "fontSize": "17px",
        "color": "#FF7629"
      },
      "custom": {
        "text": "Explore Menu"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image18": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616dcfafe6321c66cb474f97_menu-desserts-restaurante-x-template.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex22": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "alignItems": "center",
        "rowGap": "20px",
        "borderRadius": "15px",
        "borderStyle": "solid",
        "borderColor": "#cecece",
        "paddingTop": "40px",
        "paddingBottom": "40px"
      },
      "callbacks": {}
    },
    "Button9": {
      "styles": {
        "color": "#fff",
        "backgroundColor": "#FF7629",
        "paddingTop": "10px",
        "paddingLeft": "25px",
        "paddingBottom": "10px",
        "paddingRight": "25px",
        "fontSize": "16px",
        "borderRadius": "50px",
        "outline": "none",
        "fontWeight": 500,
        "textAlign": "center",
        "borderWidth": "1px",
        "borderStyle": "none",
        "borderColor": "#1890ff",
        "cursor": "pointer",
        "userSelect": "none",
        "fontFamily": "DM Sans"
      },
      "custom": {
        "text": "Order online"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button10": {
      "styles": {
        "color": "#000000",
        "backgroundColor": "#ffffff",
        "paddingTop": "10px",
        "paddingLeft": "25px",
        "paddingBottom": "10px",
        "paddingRight": "25px",
        "fontSize": "16px",
        "borderRadius": "50px",
        "outline": "none",
        "fontWeight": 500,
        "textAlign": "center",
        "borderWidth": "1px",
        "borderStyle": "solid",
        "borderColor": "#cccccc",
        "cursor": "pointer",
        "userSelect": "none",
        "fontFamily": "DM Sans"
      },
      "custom": {
        "text": "Book a table"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex25": {
      "styles": {
        "display": "flex",
        "columnGap": "30px"
      },
      "callbacks": {}
    }
  }
}};

const breakpointProps = {
  ...{
  "Home": {}
}};

function getViewportDimension() {
  const width = Math.min(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );
  const height = Math.min(
    document.documentElement.clientHeight || 0,
    window.innerHeight || 0
  );
  return { width, height };
}

function getEffectiveBreakpointWidths(pageName, windowWidth) {
  if (breakpointProps[pageName] === undefined) {
    return [];
  }
  const widths = Object.keys(breakpointProps[pageName]);
  return widths
    .filter((curr) => {
      return parseInt(curr) >= windowWidth;
    })
    .sort((a, b) => {
      return parseInt(b) - parseInt(a);
    });
}

/**
 *
 * effective props is combination of
 */
function getEffectivePropsForPage(pageName) {
  const { width } = getViewportDimension();
  // effectiveProps initially has local changes
  let effectiveProps = JSON.parse(
    JSON.stringify(useStore.getState()[pageName])
  );
  const effectiveWidths = getEffectiveBreakpointWidths(pageName, width);
  effectiveWidths.forEach((effectiveWidth) => {
    const compAliases = Object.keys(breakpointProps[pageName][effectiveWidth]);
    compAliases.forEach((compAlias) => {
      const propNames = Object.keys(
        breakpointProps[pageName][effectiveWidth][compAlias]
      );
      propNames.forEach((propName) => {
        effectiveProps[compAlias][propName] = {
          ...useStore.getState()[pageName][compAlias][propName],
          ...breakpointProps[pageName][effectiveWidth][compAlias][propName],
        };
      });
    });
  });
  return effectiveProps;
}

export function setEffectivePropsForPage(pageName) {
  const effectiveProps = getEffectivePropsForPage(pageName);
  useStore.getState().setPage(pageName, effectiveProps);
}

useStore.setState(desktopModeProps);

export default useStore;
