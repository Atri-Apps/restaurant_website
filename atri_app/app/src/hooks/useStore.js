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
        "rowGap": "40px",
        "paddingBottom": "100px"
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
    },
    "Flex26": {
      "styles": {
        "display": "flex",
        "backgroundColor": "#FFF9F3",
        "paddingTop": "150px",
        "paddingLeft": "",
        "paddingRight": ""
      },
      "callbacks": {}
    },
    "Flex27": {
      "styles": {
        "display": "flex",
        "alignItems": "center",
        "paddingBottom": "200px",
        "paddingLeft": "150px",
        "width": "50%"
      },
      "callbacks": {}
    },
    "Flex28": {
      "styles": {
        "display": "flex",
        "flexGrow": 1,
        "alignItems": "flex-start",
        "paddingTop": "100px",
        "flexDirection": "column",
        "paddingLeft": "",
        "paddingBottom": "",
        "paddingRight": "",
        "rowGap": "25px",
        "width": "50%"
      },
      "callbacks": {}
    },
    "Image19": {
      "styles": {
        "width": "460px",
        "borderRadius": "30px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616d9a0bdba0fb13cfd32fc0_about-home-restaurante-x-template-p-1080.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex29": {
      "styles": {
        "display": "flex",
        "backgroundColor": "#ffffff",
        "flexDirection": "column",
        "paddingLeft": "50px",
        "paddingRight": "20px",
        "paddingTop": "50px",
        "paddingBottom": "50px",
        "position": "relative",
        "borderRadius": "25px",
        "rowGap": "20px",
        "fontFamily": "DM Sans",
        "fontWeight": 500,
        "left": null,
        "top": 200,
        "bottom": null,
        "right": 300
      },
      "callbacks": {}
    },
    "TextBox36": {
      "styles": {
        "fontFamily": "DM Sans",
        "fontWeight": 500,
        "fontSize": "20px"
      },
      "custom": {
        "text": "Come and visit us"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex30": {
      "styles": {
        "display": "flex",
        "columnGap": "20px",
        "width": "350px"
      },
      "callbacks": {}
    },
    "Image20": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616da2c3a1718503bfe60f49_location-icon-restaurante-x-template.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox38": {
      "styles": {
        "width": "50%",
        "color": "#8d8d8d"
      },
      "custom": {
        "text": "837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox40": {
      "styles": {
        "color": "#8d8d8d"
      },
      "custom": {
        "text": "losangeles@restaurantex.com"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image22": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616da2c3400864a9087440a4_email-icon-restaurante-x-template.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex32": {
      "styles": {
        "display": "flex",
        "columnGap": "20px",
        "width": "300px"
      },
      "callbacks": {}
    },
    "TextBox41": {
      "styles": {},
      "custom": {
        "text": "Your text Here!"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image23": {
      "styles": {},
      "custom": {
        "alt": "No preview available"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox43": {
      "styles": {
        "color": "#8d8d8d"
      },
      "custom": {
        "text": "(414) 857 - 0107"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image25": {
      "styles": {},
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616da2c36165d583fe91702b_phone-icon-restaurante-x-template.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex35": {
      "styles": {
        "display": "flex",
        "columnGap": "20px",
        "width": "300px"
      },
      "callbacks": {}
    },
    "TextBox44": {
      "styles": {
        "fontFamily": "DM Sans",
        "fontWeight": 700,
        "fontSize": "32px",
        "paddingLeft": ""
      },
      "custom": {
        "text": "About us"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox45": {
      "styles": {
        "fontFamily": "DM Sans",
        "fontWeight": 500,
        "color": "#8d8d8d",
        "width": "80%"
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
    "TextBox46": {
      "styles": {
        "fontFamily": "DM Sans",
        "fontWeight": 500,
        "color": "#8d8d8d",
        "width": "80%"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit enim bibendum sed et aliquet aliquet risus tempor semper odio egestas id pulvinar consectetur elit tortor non hac pellentesque lacus donec accumsan quisque ultricies adipiscing mauris tortor cras est eu accumsan mauris."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button11": {
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
        "text": "Join our team"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button12": {
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
        "text": "About us"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex37": {
      "styles": {
        "display": "flex",
        "columnGap": "30px"
      },
      "callbacks": {}
    },
    "Flex38": {
      "styles": {
        "display": "flex",
        "paddingTop": "150px",
        "flexDirection": "column",
        "justifyContent": "center",
        "alignItems": "center",
        "rowGap": "20px"
      },
      "callbacks": {}
    },
    "TextBox47": {
      "styles": {
        "fontFamily": "DM Sans",
        "fontWeight": 700,
        "fontSize": "32px"
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
    "TextBox48": {
      "styles": {
        "width": "50%",
        "fontFamily": "DM Sans",
        "fontWeight": 500,
        "color": "#727272"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam vitae velit bibendum elementum."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex39": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "rowGap": "30px"
      },
      "callbacks": {}
    },
    "Flex40": {
      "styles": {
        "display": "flex",
        "rowGap": "px",
        "columnGap": "25px"
      },
      "callbacks": {}
    },
    "Flex41": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "alignItems": "center",
        "rowGap": "10px"
      },
      "callbacks": {}
    },
    "Image26": {
      "styles": {
        "width": "250px",
        "height": "250px",
        "borderRadius": "30px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616dca333c0bd679a77bec56_classic-burger-restaurante-x-template-p-500.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox49": {
      "styles": {
        "fontFamily": "DM Sans",
        "fontWeight": 700,
        "fontSize": "24px"
      },
      "custom": {
        "text": "Classic Burger"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox50": {
      "styles": {
        "width": "250px",
        "height": "50px",
        "maxHeight": "100px",
        "fontFamily": "DM Sans",
        "fontWeight": 500,
        "color": "#686868",
        "fontSize": "16px",
        "textAlign": "center"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet dolor consectetur adipiscing elit"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex42": {
      "styles": {
        "display": "flex",
        "paddingLeft": "10px",
        "paddingRight": "10px",
        "backgroundColor": "#fffbfb",
        "position": "relative",
        "borderRadius": "15px",
        "paddingTop": "10px",
        "paddingBottom": "10px",
        "left": 60,
        "right": null,
        "top": 60,
        "bottom": null
      },
      "callbacks": {}
    },
    "TextBox51": {
      "styles": {
        "fontFamily": "DM Sans",
        "fontWeight": 700,
        "fontSize": "16px"
      },
      "custom": {
        "text": "$ 10.99 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox52": {
      "styles": {
        "fontFamily": "DM Sans",
        "fontWeight": 700,
        "fontSize": "16px"
      },
      "custom": {
        "text": "$ 6.99 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex43": {
      "styles": {
        "display": "flex",
        "paddingLeft": "10px",
        "paddingRight": "10px",
        "backgroundColor": "#fffbfb",
        "position": "relative",
        "borderRadius": "15px",
        "paddingTop": "10px",
        "paddingBottom": "10px",
        "left": 60,
        "right": null,
        "top": 60,
        "bottom": null
      },
      "callbacks": {}
    },
    "TextBox53": {
      "styles": {
        "width": "250px",
        "height": "50px",
        "maxHeight": "100px",
        "fontFamily": "DM Sans",
        "fontWeight": 500,
        "color": "#686868",
        "fontSize": "16px",
        "textAlign": "center"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet dolor consectetur adipiscing elit"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox54": {
      "styles": {
        "fontFamily": "DM Sans",
        "fontWeight": 700,
        "fontSize": "24px"
      },
      "custom": {
        "text": "Choclate Milkshake"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image27": {
      "styles": {
        "width": "250px",
        "height": "250px",
        "borderRadius": "30px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616dc9ba43f4163d5f7b436e_chocolate-milkshake-restaurante-x-template-p-500.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex44": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "alignItems": "center",
        "rowGap": "10px"
      },
      "callbacks": {}
    },
    "TextBox55": {
      "styles": {
        "fontFamily": "DM Sans",
        "fontWeight": 700,
        "fontSize": "16px"
      },
      "custom": {
        "text": "$ 5.99 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex45": {
      "styles": {
        "display": "flex",
        "paddingLeft": "10px",
        "paddingRight": "10px",
        "backgroundColor": "#fffbfb",
        "position": "relative",
        "borderRadius": "15px",
        "paddingTop": "10px",
        "paddingBottom": "10px",
        "left": 60,
        "right": null,
        "top": 60,
        "bottom": null
      },
      "callbacks": {}
    },
    "TextBox56": {
      "styles": {
        "width": "250px",
        "height": "50px",
        "maxHeight": "100px",
        "fontFamily": "DM Sans",
        "fontWeight": 500,
        "color": "#686868",
        "fontSize": "16px",
        "textAlign": "center"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet dolor consectetur adipiscing elit"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox57": {
      "styles": {
        "fontFamily": "DM Sans",
        "fontWeight": 700,
        "fontSize": "24px"
      },
      "custom": {
        "text": "Classic Fries"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image28": {
      "styles": {
        "width": "250px",
        "height": "250px",
        "borderRadius": "30px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616dc9aac480169bcc819e69_classic-fries-restaurante-x-template-p-500.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex46": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "alignItems": "center",
        "rowGap": "10px"
      },
      "callbacks": {}
    },
    "TextBox58": {
      "styles": {
        "fontFamily": "DM Sans",
        "fontWeight": 700,
        "fontSize": "16px"
      },
      "custom": {
        "text": "$ 8.99 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex47": {
      "styles": {
        "display": "flex",
        "paddingLeft": "10px",
        "paddingRight": "10px",
        "backgroundColor": "#fffbfb",
        "position": "relative",
        "borderRadius": "15px",
        "paddingTop": "10px",
        "paddingBottom": "10px",
        "left": 60,
        "right": null,
        "top": 60,
        "bottom": null
      },
      "callbacks": {}
    },
    "TextBox59": {
      "styles": {
        "width": "250px",
        "height": "50px",
        "maxHeight": "100px",
        "fontFamily": "DM Sans",
        "fontWeight": 500,
        "color": "#686868",
        "fontSize": "16px",
        "textAlign": "center"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet dolor consectetur adipiscing elit"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox60": {
      "styles": {
        "fontFamily": "DM Sans",
        "fontWeight": 700,
        "fontSize": "24px"
      },
      "custom": {
        "text": "Pancakes"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image29": {
      "styles": {
        "width": "250px",
        "height": "250px",
        "borderRadius": "30px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616dc56043f416c4db7b3322_pancakes-restaurante-x-template-p-500.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex48": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "alignItems": "center",
        "rowGap": "10px"
      },
      "callbacks": {}
    },
    "TextBox61": {
      "styles": {
        "fontFamily": "DM Sans",
        "fontWeight": 700,
        "fontSize": "16px"
      },
      "custom": {
        "text": "$ 1.99 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox62": {
      "styles": {
        "fontFamily": "DM Sans",
        "fontWeight": 700,
        "fontSize": "16px"
      },
      "custom": {
        "text": "$ 6.99 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox63": {
      "styles": {
        "fontFamily": "DM Sans",
        "fontWeight": 700,
        "fontSize": "16px"
      },
      "custom": {
        "text": "$ 9.99 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox64": {
      "styles": {
        "fontFamily": "DM Sans",
        "fontWeight": 700,
        "fontSize": "16px"
      },
      "custom": {
        "text": "$ 3.99 USD"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image30": {
      "styles": {
        "width": "250px",
        "height": "250px",
        "borderRadius": "30px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616dc414d54d4e45ccac841f_regular-soda-restaurante-x-template-p-500.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox65": {
      "styles": {
        "fontFamily": "DM Sans",
        "fontWeight": 700,
        "fontSize": "24px"
      },
      "custom": {
        "text": "Regular Soda"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox66": {
      "styles": {
        "width": "250px",
        "height": "50px",
        "maxHeight": "100px",
        "fontFamily": "DM Sans",
        "fontWeight": 500,
        "color": "#686868",
        "fontSize": "16px",
        "textAlign": "center"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet dolor consectetur adipiscing elit"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex49": {
      "styles": {
        "display": "flex",
        "paddingLeft": "10px",
        "paddingRight": "10px",
        "backgroundColor": "#fffbfb",
        "position": "relative",
        "borderRadius": "15px",
        "paddingTop": "10px",
        "paddingBottom": "10px",
        "left": 60,
        "right": null,
        "top": 60,
        "bottom": null
      },
      "callbacks": {}
    },
    "Image31": {
      "styles": {
        "width": "250px",
        "height": "250px",
        "borderRadius": "30px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616dc4908009251d2f5ac06b_egg-toast-restaurante-x-template-p-500.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox67": {
      "styles": {
        "fontFamily": "DM Sans",
        "fontWeight": 700,
        "fontSize": "24px"
      },
      "custom": {
        "text": "Egg toast"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox68": {
      "styles": {
        "width": "250px",
        "height": "50px",
        "maxHeight": "100px",
        "fontFamily": "DM Sans",
        "fontWeight": 500,
        "color": "#686868",
        "fontSize": "16px",
        "textAlign": "center"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet dolor consectetur adipiscing elit"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex50": {
      "styles": {
        "display": "flex",
        "paddingLeft": "10px",
        "paddingRight": "10px",
        "backgroundColor": "#fffbfb",
        "position": "relative",
        "borderRadius": "15px",
        "paddingTop": "10px",
        "paddingBottom": "10px",
        "left": 60,
        "right": null,
        "top": 60,
        "bottom": null
      },
      "callbacks": {}
    },
    "Image32": {
      "styles": {
        "width": "250px",
        "height": "250px",
        "borderRadius": "30px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616dc4d28ae55806547e5dba_chicken-burger-restaurante-x-template-p-500.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox69": {
      "styles": {
        "fontFamily": "DM Sans",
        "fontWeight": 700,
        "fontSize": "24px"
      },
      "custom": {
        "text": "Chicken Burger"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox70": {
      "styles": {
        "width": "250px",
        "height": "50px",
        "maxHeight": "100px",
        "fontFamily": "DM Sans",
        "fontWeight": 500,
        "color": "#686868",
        "fontSize": "16px",
        "textAlign": "center"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet dolor consectetur adipiscing elit"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex51": {
      "styles": {
        "display": "flex",
        "paddingLeft": "10px",
        "paddingRight": "10px",
        "backgroundColor": "#fffbfb",
        "position": "relative",
        "borderRadius": "15px",
        "paddingTop": "10px",
        "paddingBottom": "10px",
        "left": 60,
        "right": null,
        "top": 60,
        "bottom": null
      },
      "callbacks": {}
    },
    "Flex52": {
      "styles": {
        "display": "flex",
        "paddingLeft": "10px",
        "paddingRight": "10px",
        "backgroundColor": "#fffbfb",
        "position": "relative",
        "borderRadius": "15px",
        "paddingTop": "10px",
        "paddingBottom": "10px",
        "left": 60,
        "right": null,
        "top": 60,
        "bottom": null
      },
      "callbacks": {}
    },
    "TextBox71": {
      "styles": {
        "width": "250px",
        "height": "50px",
        "maxHeight": "100px",
        "fontFamily": "DM Sans",
        "fontWeight": 500,
        "color": "#686868",
        "fontSize": "16px",
        "textAlign": "center"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet dolor consectetur adipiscing elit"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox72": {
      "styles": {
        "fontFamily": "DM Sans",
        "fontWeight": 700,
        "fontSize": "24px"
      },
      "custom": {
        "text": "Ice Cream"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image33": {
      "styles": {
        "width": "250px",
        "height": "250px",
        "borderRadius": "30px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616dc50743f41639377b2fd8_ice-cream-restaurante-x-template-p-500.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex53": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "alignItems": "center",
        "rowGap": "10px"
      },
      "callbacks": {}
    },
    "Flex54": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "alignItems": "center",
        "rowGap": "10px"
      },
      "callbacks": {}
    },
    "Flex55": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "alignItems": "center",
        "rowGap": "10px"
      },
      "callbacks": {}
    },
    "Flex56": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "alignItems": "center",
        "rowGap": "10px"
      },
      "callbacks": {}
    },
    "Flex57": {
      "styles": {
        "display": "flex",
        "columnGap": "25px"
      },
      "callbacks": {}
    },
    "Button13": {
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
    "Button14": {
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
    "Flex58": {
      "styles": {
        "display": "flex",
        "columnGap": "30px",
        "justifyContent": "center",
        "paddingTop": "",
        "paddingBottom": "200px"
      },
      "callbacks": {}
    },
    "Flex59": {
      "styles": {
        "display": "flex",
        "justifyContent": "flex-start",
        "alignItems": "stretch"
      },
      "callbacks": {}
    },
    "Flex60": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "width": "50%",
        "backgroundColor": "#FF7629",
        "alignItems": "flex-start",
        "justifyContent": "center",
        "paddingTop": "90px",
        "paddingBottom": "100px",
        "rowGap": "33px",
        "paddingLeft": "150px",
        "paddingRight": "",
        "boxSizing": "border-box"
      },
      "callbacks": {}
    },
    "Flex61": {
      "styles": {
        "display": "flex",
        "width": "50%"
      },
      "callbacks": {}
    },
    "Image34": {
      "styles": {
        "width": "100%"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616da2c364b456b93fb50d6d_cta-restaurante-x-template.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox73": {
      "styles": {
        "fontFamily": "DM Sans",
        "fontWeight": 700,
        "fontSize": "38px",
        "color": "#ffffff",
        "maxWidth": "80%"
      },
      "custom": {
        "text": "Taste the most delicious burger in Los Angeles, CA"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox74": {
      "styles": {
        "fontFamily": "DM Sans",
        "fontWeight": 500,
        "fontSize": "16px",
        "color": "#fffafa",
        "maxWidth": "80%"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam vitae velit bibendum elementum.  Order online"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button15": {
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
        "borderStyle": "solid",
        "borderColor": "#ffffff",
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
    "Button16": {
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
    "Flex62": {
      "styles": {
        "display": "flex",
        "columnGap": "30px"
      },
      "callbacks": {}
    },
    "Flex63": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "alignItems": "center",
        "paddingTop": "150px",
        "paddingBottom": "150px",
        "rowGap": "20px"
      },
      "callbacks": {}
    },
    "TextBox75": {
      "styles": {
        "fontFamily": "DM Sans",
        "fontWeight": 700,
        "fontSize": "32px"
      },
      "custom": {
        "text": "What our clients say"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox76": {
      "styles": {
        "width": "50%",
        "fontFamily": "DM Sans",
        "fontWeight": 500,
        "color": "#727272"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam vitae velit bibendum elementum."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Carousel1": {
      "styles": {},
      "custom": {
        "items": [],
        "startTile": 0,
        "imageItems": []
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Carousel2": {
      "styles": {
        "width": "100%",
        "height": "100%"
      },
      "custom": {
        "items": [],
        "startTile": 0,
        "imageItems": []
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Carousel3": {
      "styles": {},
      "custom": {
        "items": [],
        "startTile": 0,
        "imageItems": []
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex64": {
      "styles": {
        "display": "flex",
        "paddingBottom": "40px",
        "flexDirection": "column",
        "width": "50%",
        "paddingLeft": "50px",
        "paddingTop": "50px",
        "paddingRight": "50px",
        "boxSizing": "border-box",
        "rowGap": "10px",
        "borderRadius": "25px",
        "borderStyle": "solid",
        "borderColor": "#d5d5d5"
      },
      "callbacks": {}
    },
    "Flex65": {
      "styles": {
        "display": "flex",
        "paddingBottom": "",
        "flexDirection": "row",
        "columnGap": "8px"
      },
      "callbacks": {}
    },
    "TextBox78": {
      "styles": {
        "fontFamily": "DM Sans",
        "fontWeight": 500,
        "fontSize": "24px"
      },
      "custom": {
        "text": "“You must try these burgers”"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox79": {
      "styles": {
        "fontFamily": "DM Sans",
        "fontWeight": 500,
        "fontSize": "14px",
        "color": "#716f6f"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elitilmim semper adipiscing massa gravida nisi cras enim quis nibholm varius amet gravida ut facilisis neque egestas."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex67": {
      "styles": {
        "display": "flex",
        "paddingTop": "10px",
        "columnGap": "25px",
        "alignItems": "center"
      },
      "callbacks": {}
    },
    "Image40": {
      "styles": {
        "width": "50px",
        "height": "50px",
        "borderRadius": "50%"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/face1.jpg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex68": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "rowGap": "2px"
      },
      "callbacks": {}
    },
    "TextBox80": {
      "styles": {
        "fontFamily": "DM Sans",
        "fontWeight": 500,
        "color": "#595858"
      },
      "custom": {
        "text": "San Diego, CA"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox81": {
      "styles": {
        "fontFamily": "DM Sans",
        "fontWeight": 500
      },
      "custom": {
        "text": "Matt Cannon"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image44": {
      "styles": {
        "width": "30px",
        "height": "30px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/star-svgrepo-com.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Button17": {
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
    "Button18": {
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
    "Flex69": {
      "styles": {
        "display": "flex",
        "columnGap": "30px"
      },
      "callbacks": {}
    },
    "Flex71": {
      "styles": {
        "display": "flex",
        "paddingTop": "150px",
        "backgroundColor": "#FFF9F3",
        "paddingLeft": "100px",
        "paddingRight": "100px",
        "flexDirection": "column",
        "width": "100%",
        "boxSizing": "border-box",
        "paddingBottom": "100px"
      },
      "callbacks": {}
    },
    "Flex72": {
      "styles": {
        "display": "flex",
        "width": "100%",
        "alignItems": "center",
        "justifyContent": "space-between",
        "paddingTop": "",
        "paddingBottom": "30px"
      },
      "callbacks": {}
    },
    "TextBox82": {
      "styles": {
        "fontFamily": "DM Sans",
        "fontWeight": 700,
        "fontSize": "32px"
      },
      "custom": {
        "text": "Our articles"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex73": {
      "styles": {
        "display": "flex",
        "paddingTop": "20px",
        "paddingBottom": "20px",
        "paddingLeft": "20px",
        "paddingRight": "20px",
        "borderRadius": "35px",
        "backgroundColor": "#ffffff"
      },
      "callbacks": {}
    },
    "TextBox83": {
      "styles": {},
      "custom": {
        "text": "Browse our articles"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex74": {
      "styles": {
        "display": "flex",
        "columnGap": "30px"
      },
      "callbacks": {}
    },
    "Flex75": {
      "styles": {
        "display": "flex",
        "width": "50%",
        "flexDirection": "column",
        "backgroundColor": "#fffefe",
        "rowGap": "10px",
        "borderRadius": "35px"
      },
      "callbacks": {}
    },
    "Flex76": {
      "styles": {
        "display": "flex",
        "width": "60%",
        "flexDirection": "column",
        "rowGap": "30px"
      },
      "callbacks": {}
    },
    "Image45": {
      "styles": {
        "width": "100%",
        "borderTopLeftRadius": "35px",
        "borderTopRightRadius": "35px",
        "height": "70%"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616dbe9e3823ad75e50cfc8d_blog-post-featured-image-01-restaurante-x-template.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox84": {
      "styles": {
        "fontFamily": "DM Sans",
        "fontWeight": 500,
        "fontSize": "15px",
        "color": "#8f8f8f",
        "paddingLeft": "20px",
        "paddingBottom": "30px",
        "paddingRight": "10px"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elitilmim semper adipisc"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox85": {
      "styles": {
        "fontFamily": "DM Sans",
        "fontWeight": 500,
        "fontSize": "15px",
        "color": "#737373",
        "paddingLeft": "20px",
        "paddingTop": "20px",
        "paddingRight": "10px"
      },
      "custom": {
        "text": "September 1, 2022"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox86": {
      "styles": {
        "fontFamily": "DM Sans",
        "fontWeight": 700,
        "fontSize": "26px",
        "paddingLeft": "20px",
        "paddingRight": "10px"
      },
      "custom": {
        "text": "The secret trick to prepare a perfect burger"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex77": {
      "styles": {
        "display": "flex",
        "columnGap": "30px",
        "alignItems": "center",
        "justifyContent": "center"
      },
      "callbacks": {}
    },
    "TextBox96": {
      "styles": {
        "fontFamily": "DM Sans",
        "fontWeight": 700,
        "fontSize": "16px",
        "paddingLeft": "20px",
        "paddingRight": "10px"
      },
      "custom": {
        "text": "The secret trick to prepare a perfect burger"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox97": {
      "styles": {
        "fontFamily": "DM Sans",
        "fontWeight": 500,
        "fontSize": "15px",
        "color": "#737373",
        "paddingLeft": "20px",
        "paddingTop": "20px",
        "paddingRight": "10px"
      },
      "custom": {
        "text": "September 1, 2022"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image49": {
      "styles": {
        "width": "100%",
        "borderTopLeftRadius": "35px",
        "borderTopRightRadius": "35px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616dbcaac6330b375d0f90ca_blog-post-featured-image-03-restaurante-x-template-p-500.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex81": {
      "styles": {
        "display": "flex",
        "width": "40%",
        "flexDirection": "column",
        "backgroundColor": "#fffefe",
        "rowGap": "10px",
        "borderRadius": "35px",
        "paddingBottom": "20px"
      },
      "callbacks": {}
    },
    "Image51": {
      "styles": {
        "width": "100%",
        "borderTopLeftRadius": "35px",
        "borderTopRightRadius": "35px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616dbc8ef398638f6395578f_blog-post-featured-image-04-restaurante-x-template-p-500.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox99": {
      "styles": {
        "fontFamily": "DM Sans",
        "fontWeight": 500,
        "fontSize": "15px",
        "color": "#737373",
        "paddingLeft": "20px",
        "paddingTop": "20px",
        "paddingRight": "10px"
      },
      "custom": {
        "text": "September 1, 2022"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox100": {
      "styles": {
        "fontFamily": "DM Sans",
        "fontWeight": 700,
        "fontSize": "16px",
        "paddingLeft": "20px",
        "paddingRight": "10px"
      },
      "custom": {
        "text": "The secret trick to prepare a perfect burger"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex82": {
      "styles": {
        "display": "flex",
        "width": "40%",
        "flexDirection": "column",
        "backgroundColor": "#fffefe",
        "rowGap": "10px",
        "borderRadius": "35px",
        "paddingBottom": "20px"
      },
      "callbacks": {}
    },
    "TextBox101": {
      "styles": {
        "fontFamily": "DM Sans",
        "fontWeight": 700,
        "fontSize": "16px",
        "paddingLeft": "20px",
        "paddingRight": "10px"
      },
      "custom": {
        "text": "The secret trick to prepare a perfect burger"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox102": {
      "styles": {
        "fontFamily": "DM Sans",
        "fontWeight": 500,
        "fontSize": "15px",
        "color": "#737373",
        "paddingLeft": "20px",
        "paddingTop": "20px",
        "paddingRight": "10px"
      },
      "custom": {
        "text": "September 1, 2022"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image52": {
      "styles": {
        "width": "100%",
        "borderTopLeftRadius": "35px",
        "borderTopRightRadius": "35px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616dbb79aa873fb79780189b_blog-post-featured-image-06-restaurante-x-template-p-500.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image53": {
      "styles": {
        "width": "100%",
        "borderTopLeftRadius": "35px",
        "borderTopRightRadius": "35px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616dbc58e6083f444f1883f5_blog-post-featured-image-05-restaurante-x-template-p-500.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox103": {
      "styles": {
        "fontFamily": "DM Sans",
        "fontWeight": 500,
        "fontSize": "15px",
        "color": "#737373",
        "paddingLeft": "20px",
        "paddingTop": "20px",
        "paddingRight": "10px"
      },
      "custom": {
        "text": "September 1, 2022"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox104": {
      "styles": {
        "fontFamily": "DM Sans",
        "fontWeight": 700,
        "fontSize": "16px",
        "paddingLeft": "20px",
        "paddingRight": "10px"
      },
      "custom": {
        "text": "The secret trick to prepare a perfect burger"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex83": {
      "styles": {
        "display": "flex",
        "width": "40%",
        "flexDirection": "column",
        "backgroundColor": "#fffefe",
        "rowGap": "10px",
        "borderRadius": "35px",
        "paddingTop": "",
        "paddingBottom": "20px"
      },
      "callbacks": {}
    },
    "Flex84": {
      "styles": {
        "display": "flex",
        "width": "40%",
        "flexDirection": "column",
        "backgroundColor": "#fffefe",
        "rowGap": "10px",
        "borderRadius": "35px",
        "paddingBottom": "20px",
        "alignItems": "flex-start"
      },
      "callbacks": {}
    },
    "Flex85": {
      "styles": {
        "display": "flex",
        "columnGap": "30px",
        "justifyContent": "center",
        "alignItems": "center"
      },
      "callbacks": {}
    },
    "Flex89": {
      "styles": {
        "display": "flex",
        "alignItems": "center",
        "justifyContent": "center",
        "columnGap": "50px"
      },
      "callbacks": {}
    },
    "Flex90": {
      "styles": {
        "display": "flex",
        "paddingTop": ""
      },
      "callbacks": {}
    },
    "Flex91": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "alignItems": "flex-start",
        "justifyContent": "center",
        "rowGap": "20px",
        "paddingTop": "100px",
        "paddingLeft": "150px",
        "paddingBottom": "100px",
        "width": "50%"
      },
      "callbacks": {}
    },
    "Flex92": {
      "styles": {
        "display": "flex",
        "backgroundColor": "#FF7629",
        "flexGrow": null,
        "alignItems": "flex-start",
        "paddingTop": "100px",
        "paddingBottom": "100px",
        "width": "50%"
      },
      "callbacks": {}
    },
    "TextBox105": {
      "styles": {
        "fontFamily": "DM Sans",
        "fontWeight": 700,
        "fontSize": "34px",
        "alignSelf": "auto"
      },
      "custom": {
        "text": "Book your table now"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox106": {
      "styles": {
        "width": "50%",
        "fontFamily": "DM Sans",
        "fontWeight": 500,
        "fontSize": "16px",
        "color": "#727171"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam vitae velit bibendum elementum."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex93": {
      "styles": {
        "display": "flex",
        "justifyContent": "center",
        "alignItems": "center",
        "width": "50%",
        "columnGap": "25px"
      },
      "callbacks": {}
    },
    "Image54": {
      "styles": {
        "width": "30px",
        "height": "30px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616da2c3a1718503bfe60f49_location-icon-restaurante-x-template.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox107": {
      "styles": {
        "fontFamily": "DM Sans",
        "fontWeight": 500,
        "color": "#717070"
      },
      "custom": {
        "text": "837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image55": {
      "styles": {
        "width": "30px",
        "height": "30px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616da2c36165d583fe91702b_phone-icon-restaurante-x-template.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex94": {
      "styles": {
        "display": "flex",
        "alignItems": "center",
        "width": "50%",
        "columnGap": "19px"
      },
      "callbacks": {}
    },
    "Image56": {
      "styles": {
        "width": "30px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616da2c3400864a9087440a4_email-icon-restaurante-x-template.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex95": {
      "styles": {
        "display": "flex",
        "alignItems": "center",
        "width": "50%",
        "columnGap": "21px"
      },
      "callbacks": {}
    },
    "TextBox111": {
      "styles": {
        "fontFamily": "DM Sans",
        "fontWeight": 500,
        "color": "#717070"
      },
      "custom": {
        "text": "(414) 857 - 0107"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox112": {
      "styles": {
        "fontFamily": "DM Sans",
        "fontWeight": 500,
        "color": "#717070"
      },
      "custom": {
        "text": "losangeles@restaurentex.com"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex98": {
      "styles": {
        "display": "flex",
        "backgroundColor": "#ffffff",
        "flexDirection": "column",
        "paddingLeft": "50px",
        "paddingRight": "50px",
        "paddingTop": "80px",
        "rowGap": "30px",
        "fontFamily": "DM Sans",
        "fontWeight": 500,
        "fontSize": "18px",
        "marginBottom": "",
        "paddingBottom": "30px",
        "position": "relative",
        "right": 140,
        "borderRadius": "40px",
        "borderStyle": "solid",
        "borderColor": "#d9d4d4"
      },
      "callbacks": {}
    },
    "Flex99": {
      "styles": {
        "display": "flex",
        "columnGap": "20px"
      },
      "callbacks": {}
    },
    "Flex100": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "rowGap": "20px"
      },
      "callbacks": {}
    },
    "TextBox113": {
      "styles": {
        "paddingLeft": ""
      },
      "custom": {
        "text": "Name"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Input1": {
      "styles": {
        "boxSizing": "border-box",
        "fontVariant": "tabular-nums",
        "fontFeatureSettings": "tnum",
        "paddingTop": "11px",
        "paddingLeft": "15px",
        "paddingBottom": "11px",
        "paddingRight": "15px",
        "color": "#000000d9",
        "fontSize": "14px",
        "backgroundColor": "#fff",
        "backgroundImage": "none",
        "borderWidth": "1px",
        "borderStyle": "solid",
        "borderColor": "#d9d9d9",
        "borderRadius": "20px"
      },
      "custom": {
        "value": "",
        "placeholder": "John Carter"
      },
      "callbacks": {}
    },
    "Input2": {
      "styles": {
        "boxSizing": "border-box",
        "fontVariant": "tabular-nums",
        "fontFeatureSettings": "tnum",
        "paddingTop": "11px",
        "paddingLeft": "15px",
        "paddingBottom": "11px",
        "paddingRight": "15px",
        "color": "#000000d9",
        "fontSize": "14px",
        "backgroundColor": "#fff",
        "backgroundImage": "none",
        "borderWidth": "1px",
        "borderStyle": "solid",
        "borderColor": "#d9d9d9",
        "borderRadius": "20px"
      },
      "custom": {
        "value": "",
        "placeholder": "example@email.com"
      },
      "callbacks": {}
    },
    "TextBox114": {
      "styles": {},
      "custom": {
        "text": "Email Address"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex101": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "rowGap": "20px"
      },
      "callbacks": {}
    },
    "TextBox115": {
      "styles": {},
      "custom": {
        "text": "Location"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Input3": {
      "styles": {
        "boxSizing": "border-box",
        "fontVariant": "tabular-nums",
        "fontFeatureSettings": "tnum",
        "paddingTop": "11px",
        "paddingLeft": "15px",
        "paddingBottom": "11px",
        "paddingRight": "15px",
        "color": "#000000d9",
        "fontSize": "14px",
        "backgroundColor": "#fff",
        "backgroundImage": "none",
        "borderWidth": "1px",
        "borderStyle": "solid",
        "borderColor": "#d9d9d9",
        "borderRadius": "20px"
      },
      "custom": {
        "value": "",
        "placeholder": "Ex. Los Angeles"
      },
      "callbacks": {}
    },
    "Input4": {
      "styles": {
        "boxSizing": "border-box",
        "fontVariant": "tabular-nums",
        "fontFeatureSettings": "tnum",
        "paddingTop": "11px",
        "paddingLeft": "15px",
        "paddingBottom": "11px",
        "paddingRight": "15px",
        "color": "#000000d9",
        "fontSize": "14px",
        "backgroundColor": "#fff",
        "backgroundImage": "none",
        "borderWidth": "1px",
        "borderStyle": "solid",
        "borderColor": "#d9d9d9",
        "borderRadius": "20px"
      },
      "custom": {
        "value": "",
        "placeholder": "(123) 456 - 789"
      },
      "callbacks": {}
    },
    "TextBox116": {
      "styles": {},
      "custom": {
        "text": "Phone"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex102": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "rowGap": "20px"
      },
      "callbacks": {}
    },
    "Flex103": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "rowGap": "20px"
      },
      "callbacks": {}
    },
    "Flex104": {
      "styles": {
        "display": "flex",
        "columnGap": "20px"
      },
      "callbacks": {}
    },
    "TextBox117": {
      "styles": {},
      "custom": {
        "text": "Schedule"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Input5": {
      "styles": {
        "boxSizing": "border-box",
        "fontVariant": "tabular-nums",
        "fontFeatureSettings": "tnum",
        "paddingTop": "11px",
        "paddingLeft": "15px",
        "paddingBottom": "11px",
        "paddingRight": "15px",
        "color": "#000000d9",
        "fontSize": "14px",
        "backgroundColor": "#fff",
        "backgroundImage": "none",
        "borderWidth": "1px",
        "borderStyle": "solid",
        "borderColor": "#d9d9d9",
        "borderRadius": "20px"
      },
      "custom": {
        "value": "",
        "placeholder": "Ex. 2:00PM"
      },
      "callbacks": {}
    },
    "Input6": {
      "styles": {
        "boxSizing": "border-box",
        "fontVariant": "tabular-nums",
        "fontFeatureSettings": "tnum",
        "paddingTop": "11px",
        "paddingLeft": "15px",
        "paddingBottom": "11px",
        "paddingRight": "15px",
        "color": "#000000d9",
        "fontSize": "14px",
        "backgroundColor": "#fff",
        "backgroundImage": "none",
        "borderWidth": "1px",
        "borderStyle": "solid",
        "borderColor": "#d9d9d9",
        "borderRadius": "20px"
      },
      "custom": {
        "value": "",
        "placeholder": "Day and month"
      },
      "callbacks": {}
    },
    "TextBox118": {
      "styles": {},
      "custom": {
        "text": "Date"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex105": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "rowGap": "20px"
      },
      "callbacks": {}
    },
    "Flex106": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "rowGap": "20px"
      },
      "callbacks": {}
    },
    "Flex107": {
      "styles": {
        "display": "flex",
        "columnGap": "20px"
      },
      "callbacks": {}
    },
    "Flex108": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "rowGap": "20px"
      },
      "callbacks": {}
    },
    "TextBox120": {
      "styles": {},
      "custom": {
        "text": "Add a note"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Input9": {
      "styles": {
        "boxSizing": "border-box",
        "fontVariant": "tabular-nums",
        "fontFeatureSettings": "tnum",
        "paddingTop": "11px",
        "paddingLeft": "15px",
        "paddingBottom": "11px",
        "paddingRight": "15px",
        "color": "#000000d9",
        "fontSize": "14px",
        "backgroundColor": "#fff",
        "backgroundImage": "none",
        "borderWidth": "1px",
        "borderStyle": "solid",
        "borderColor": "#d9d9d9",
        "borderRadius": "20px",
        "height": "180px",
        "alignSelf": "auto",
        "textAlign": "center"
      },
      "custom": {
        "value": "",
        "placeholder": "Do you have any note for us ?"
      },
      "callbacks": {}
    },
    "Button21": {
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
        "fontFamily": "DM Sans",
        "width": "40%"
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
    "Flex110": {
      "styles": {
        "display": "flex",
        "backgroundColor": "#FFF9F3",
        "paddingLeft": "100px",
        "paddingRight": "100px",
        "alignItems": "center",
        "paddingTop": "150px",
        "flexDirection": "column",
        "paddingBottom": "150px"
      },
      "callbacks": {}
    },
    "TextBox121": {
      "styles": {
        "fontFamily": "DM Sans",
        "fontWeight": 500,
        "fontSize": "18px",
        "color": "#ffffff"
      },
      "custom": {
        "text": "Follow us"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex111": {
      "styles": {
        "display": "flex",
        "paddingTop": "15px",
        "paddingBottom": "15px",
        "paddingLeft": "30px",
        "paddingRight": "30px",
        "borderRadius": "35px",
        "backgroundColor": "#FF7629"
      },
      "callbacks": {}
    },
    "TextBox122": {
      "styles": {
        "fontFamily": "DM Sans",
        "fontWeight": 700,
        "fontSize": "32px"
      },
      "custom": {
        "text": "Follow us on Instagram"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex112": {
      "styles": {
        "display": "flex",
        "width": "100%",
        "alignItems": "center",
        "justifyContent": "space-between",
        "paddingTop": "",
        "paddingBottom": "30px",
        "paddingLeft": ""
      },
      "callbacks": {}
    },
    "Flex113": {
      "styles": {
        "display": "flex",
        "columnGap": "30px"
      },
      "callbacks": {}
    },
    "Image58": {
      "styles": {
        "width": "300px",
        "height": "300px",
        "borderRadius": "35px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616da2c40b5fd9150a07d9ad_Instagram-01-restaurante-x-template.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image59": {
      "styles": {
        "width": "300px",
        "height": "300px",
        "borderRadius": "35px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616da2c360af92b81a49e435_Instagram-02-restaurante-x-template.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex114": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "rowGap": "20px"
      },
      "callbacks": {}
    },
    "Flex115": {
      "styles": {
        "display": "flex",
        "columnGap": "20px"
      },
      "callbacks": {}
    },
    "Image60": {
      "styles": {
        "width": "145px",
        "height": "145px",
        "borderRadius": "25px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616da2c3a17185112de60f4a_Instagram-04-restaurante-x-template-p-500.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image61": {
      "styles": {
        "width": "145px",
        "height": "145px",
        "borderRadius": "25px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616da2c3a17185be94e60f4b_Instagram-03-restaurante-x-template-p-500.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image62": {
      "styles": {
        "width": "145px",
        "height": "145px",
        "borderRadius": "25px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616da2c376225e7ff4d983c1_Instagram-05-restaurante-x-template-p-500.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image63": {
      "styles": {
        "width": "145px",
        "height": "145px",
        "borderRadius": "25px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616da2c39920b1572849ffce_Instagram-06-restaurante-x-template-p-500.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex116": {
      "styles": {
        "display": "flex",
        "columnGap": "20px"
      },
      "callbacks": {}
    },
    "Flex117": {
      "styles": {
        "display": "flex",
        "paddingTop": "100px",
        "paddingLeft": "150px",
        "paddingRight": "150px",
        "columnGap": "40px",
        "paddingBottom": "50px",
        "justifyContent": "space-between"
      },
      "callbacks": {}
    },
    "Flex118": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "alignItems": "flex-start",
        "justifyContent": "flex-start",
        "rowGap": "13px",
        "width": "40%"
      },
      "callbacks": {}
    },
    "Flex119": {
      "styles": {
        "display": "flex"
      },
      "callbacks": {}
    },
    "Flex120": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "alignItems": "flex-start",
        "rowGap": "20px"
      },
      "callbacks": {}
    },
    "Image64": {
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
    "TextBox123": {
      "styles": {
        "width": "100%",
        "fontFamily": "DM Sans",
        "fontWeight": 500,
        "color": "#6a6868"
      },
      "custom": {
        "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam diam vitae velit bibendum elementum."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex121": {
      "styles": {
        "display": "flex",
        "columnGap": "10px"
      },
      "callbacks": {}
    },
    "Image65": {
      "styles": {
        "width": "30px",
        "height": "30px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/star-svgrepo-com.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image66": {
      "styles": {
        "width": "30px",
        "height": "30px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/star-svgrepo-com.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image67": {
      "styles": {
        "width": "30px",
        "height": "30px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/star-svgrepo-com.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image68": {
      "styles": {
        "width": "30px",
        "height": "30px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/star-svgrepo-com.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image69": {
      "styles": {
        "width": "30px",
        "height": "30px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/star-svgrepo-com.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox124": {
      "styles": {
        "fontFamily": "DM Sans",
        "fontWeight": 500,
        "fontSize": "20px"
      },
      "custom": {
        "text": "Follow us on Instagram"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image70": {
      "styles": {
        "width": "145px",
        "height": "145px",
        "borderRadius": "25px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616da2c39920b1572849ffce_Instagram-06-restaurante-x-template-p-500.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image71": {
      "styles": {
        "width": "145px",
        "height": "145px",
        "borderRadius": "25px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616da2c376225e7ff4d983c1_Instagram-05-restaurante-x-template-p-500.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image72": {
      "styles": {
        "width": "145px",
        "height": "145px",
        "borderRadius": "25px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616da2c3a17185be94e60f4b_Instagram-03-restaurante-x-template-p-500.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image73": {
      "styles": {
        "width": "145px",
        "height": "145px",
        "borderRadius": "25px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/616da2c3a17185112de60f4a_Instagram-04-restaurante-x-template-p-500.jpeg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex122": {
      "styles": {
        "display": "flex",
        "columnGap": "20px"
      },
      "callbacks": {}
    },
    "Flex123": {
      "styles": {
        "display": "flex",
        "columnGap": "20px"
      },
      "callbacks": {}
    },
    "Flex124": {
      "styles": {
        "display": "flex",
        "flexDirection": "column",
        "rowGap": "20px"
      },
      "callbacks": {}
    },
    "Flex125": {
      "styles": {
        "display": "flex",
        "fontFamily": "DM Sans",
        "fontWeight": 500,
        "fontSize": "20px",
        "alignItems": "flex-start",
        "flexDirection": "column",
        "rowGap": "10px",
        "paddingLeft": "5px",
        "paddingRight": "5px"
      },
      "callbacks": {}
    },
    "TextBox125": {
      "styles": {
        "paddingBottom": "20px",
        "paddingRight": "40px",
        "fontSize": "20px"
      },
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
    "TextBox126": {
      "styles": {
        "fontSize": "16px",
        "fontFamily": "DM Sans",
        "fontWeight": 500,
        "color": "#7f7c7c"
      },
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
    "TextBox127": {
      "styles": {
        "fontSize": "16px",
        "fontFamily": "DM Sans",
        "fontWeight": 500,
        "color": "#7f7c7c"
      },
      "custom": {
        "text": "Contact"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox128": {
      "styles": {
        "fontSize": "16px",
        "fontFamily": "DM Sans",
        "fontWeight": 500,
        "color": "#7f7c7c"
      },
      "custom": {
        "text": "Blog Post"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox129": {
      "styles": {
        "fontSize": "16px",
        "fontFamily": "DM Sans",
        "fontWeight": 500,
        "color": "#7f7c7c"
      },
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox130": {
      "styles": {
        "fontSize": "16px",
        "fontFamily": "DM Sans",
        "fontWeight": 500,
        "color": "#7f7c7c"
      },
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
    "TextBox131": {
      "styles": {
        "fontSize": "16px",
        "fontFamily": "DM Sans",
        "fontWeight": 500,
        "color": "#7f7c7c"
      },
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
    "TextBox133": {
      "styles": {
        "fontSize": "16px",
        "fontFamily": "DM Sans",
        "fontWeight": 500,
        "color": "#7f7c7c"
      },
      "custom": {
        "text": "Delivery"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox134": {
      "styles": {
        "fontSize": "16px",
        "fontFamily": "DM Sans",
        "fontWeight": 500,
        "color": "#7f7c7c"
      },
      "custom": {
        "text": "Delivery"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox135": {
      "styles": {
        "fontSize": "16px",
        "fontFamily": "DM Sans",
        "fontWeight": 500,
        "color": "#7f7c7c"
      },
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
    "TextBox136": {
      "styles": {
        "fontSize": "16px",
        "fontFamily": "DM Sans",
        "fontWeight": 500,
        "color": "#7f7c7c"
      },
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
    "TextBox137": {
      "styles": {
        "fontSize": "16px",
        "fontFamily": "DM Sans",
        "fontWeight": 500,
        "color": "#7f7c7c"
      },
      "custom": {
        "text": "Blog"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox138": {
      "styles": {
        "fontSize": "16px",
        "fontFamily": "DM Sans",
        "fontWeight": 500,
        "color": "#7f7c7c"
      },
      "custom": {
        "text": "Blog Post"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox139": {
      "styles": {
        "fontSize": "16px",
        "fontFamily": "DM Sans",
        "fontWeight": 500,
        "color": "#7f7c7c"
      },
      "custom": {
        "text": "Contact"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox140": {
      "styles": {
        "fontSize": "16px",
        "fontFamily": "DM Sans",
        "fontWeight": 500,
        "color": "#7f7c7c"
      },
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
    "TextBox141": {
      "styles": {
        "paddingBottom": "20px",
        "paddingRight": "40px",
        "fontSize": "20px"
      },
      "custom": {
        "text": "Utility"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex127": {
      "styles": {
        "display": "flex",
        "fontFamily": "DM Sans",
        "fontWeight": 500,
        "fontSize": "20px",
        "alignItems": "flex-start",
        "flexDirection": "column",
        "rowGap": "10px",
        "paddingLeft": "",
        "paddingRight": "5px"
      },
      "callbacks": {}
    },
    "Flex128": {
      "styles": {
        "display": "flex"
      },
      "callbacks": {}
    },
    "Flex129": {
      "styles": {
        "display": "flex"
      },
      "callbacks": {}
    },
    "Image74": {
      "styles": {
        "width": "50px",
        "height": "50px",
        "backgroundColor": "#FF7629",
        "paddingLeft": "5px",
        "paddingTop": "5px",
        "paddingBottom": "5px",
        "marginBottom": "",
        "paddingRight": "5px",
        "borderRadius": "50px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/left-arrow-svgrepo-com%20(1).svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Image75": {
      "styles": {
        "width": "50px",
        "height": "50px",
        "backgroundColor": "#FF7629",
        "paddingTop": "5px",
        "paddingBottom": "5px",
        "paddingRight": "5px",
        "paddingLeft": "5px",
        "borderRadius": "50px",
        "color": "#ffffff"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/right-arrow-svgrepo-com%20(2).svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "TextBox142": {
      "styles": {},
      "custom": {
        "text": "1"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex130": {
      "styles": {
        "display": "flex"
      },
      "callbacks": {}
    },
    "Flex131": {
      "styles": {
        "display": "flex"
      },
      "callbacks": {}
    },
    "Image76": {
      "styles": {
        "width": "30px",
        "height": "30px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/star-svgrepo-com.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex132": {
      "styles": {
        "display": "flex"
      },
      "callbacks": {}
    },
    "Image77": {
      "styles": {
        "width": "30px",
        "height": "30px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/star-svgrepo-com.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex133": {
      "styles": {
        "display": "flex"
      },
      "callbacks": {}
    },
    "Image78": {
      "styles": {
        "width": "30px",
        "height": "30px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/star-svgrepo-com.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex134": {
      "styles": {
        "display": "flex"
      },
      "callbacks": {}
    },
    "Image79": {
      "styles": {
        "width": "30px",
        "height": "30px"
      },
      "custom": {
        "alt": "No preview available",
        "src": "/app-assets/star-svgrepo-com.svg"
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
    },
    "Flex135": {
      "styles": {
        "display": "flex"
      },
      "callbacks": {}
    },
    "Flex137": {
      "styles": {
        "display": "flex"
      },
      "callbacks": {}
    },
    "TextBox145": {
      "styles": {
        "fontFamily": "DM Sans",
        "fontWeight": 400,
        "fontSize": "15px",
        "color": "#23d12f"
      },
      "custom": {
        "text": "The email is sent succesfully ....."
      },
      "callbacks": {
        "onClick": [
          {
            "sendEventData": true
          }
        ]
      }
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
