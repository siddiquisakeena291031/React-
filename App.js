/**
 * 
 * Header
 *   - Logo 
 *   - Nav Items
 * 
 * Body
 *  - Search
 *  - RestaurantContainer
 *      - RestaurantCard
 *      - Img
 *      - Name of Res, Rating, Cuisine, delivery time
 * 
 * Footer
 *  - Copright
 *  - Links
 *  - Address
 *  - Contact
 * 
 */
import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://i.fbcd.co/products/original/d32491363c1d52ac365372cd2df281d6a7cf44f8873fa0900cd4a78a1528628c.jpg" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>

            </div>

        </div>
    )
}

const RestaurantCard = (props) => {
    const {resData } = props;
    const {cloudinaryImageId, name, cuisines, avgRating} = resData?.info; 
     return (
        <div className="res-card" style={{backgroundColor : "#f0f0f0" }}>
            <img className="res-logo"
            alt="res-loog" 
            src={"https://media-assets.swiggy.com/swiggy/image/upload/"+resData.info.cloudinaryImageId}
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} start </h4>
        </div>
    )
}

const resList = [
  {
    "info": {
      "id": "745305",
      "name": "Jai Hind Dhaba",
      "cloudinaryImageId": "f7fc64e883afac119ec051a909dbf9dc",
      "locality": "Chauraha Sitapur Road",
      "areaName": "Aliganj",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "North Indian"
      ],
      "avgRating": 3.5,
      "parentId": "1928",
      "avgRatingString": "3.5",
      "totalRatingsString": "20+",
      "sla": {
        "deliveryTime": 59,
        "lastMileTravel": 7,
        "serviceability": "SERVICEABLE",
        "slaString": "55-60 mins",
        "lastMileTravelString": "7.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-03-06 23:59:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹250",
        "discountTag": "SAVE BIG"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-6321b59b-e60f-4190-8697-374a9b1f980f"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/jai-hind-dhaba-chauraha-sitapur-road-aliganj-lucknow-745305",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "745090",
      "name": "The Bahubelly",
      "cloudinaryImageId": "c99a8184b9522bffdf43b4978a7a1878",
      "locality": "Uojha",
      "areaName": "Aliganj",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Indian"
      ],
      "avgRating": 3.3,
      "parentId": "204871",
      "avgRatingString": "3.3",
      "totalRatingsString": "20+",
      "sla": {
        "deliveryTime": 59,
        "lastMileTravel": 7,
        "serviceability": "SERVICEABLE",
        "slaString": "55-60 mins",
        "lastMileTravelString": "7.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-03-06 23:59:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹250",
        "discountTag": "SAVE BIG"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-6321b59b-e60f-4190-8697-374a9b1f980f"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/the-bahubelly-uojha-aliganj-lucknow-745090",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "401529",
      "name": "Pandit Ji Ki Chai",
      "cloudinaryImageId": "bjpohi0yz8fvuq0xyqd9",
      "locality": "Shahmeena Shah Road",
      "areaName": "Chowk",
      "costForTwo": "₹100 for two",
      "cuisines": [
        "Beverages",
        "Snacks"
      ],
      "avgRating": 4.3,
      "veg": true,
      "parentId": "154475",
      "avgRatingString": "4.3",
      "totalRatingsString": "500+",
      "sla": {
        "deliveryTime": 32,
        "lastMileTravel": 2.1,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "2.1 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-03-06 09:59:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "20% OFF",
        "subHeader": "UPTO ₹50"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-6321b59b-e60f-4190-8697-374a9b1f980f"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/pandit-ji-ki-chai-shahmeena-shah-road-chowk-lucknow-401529",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "549461",
      "name": "Royal Kitchen",
      "cloudinaryImageId": "zdg92i0vszidsyuain6v",
      "locality": "SECTOR A ALIGANJ ENGINEERING COLLEGE ROAD",
      "areaName": "Aliganj",
      "costForTwo": "₹500 for two",
      "cuisines": [
        "Chinese",
        "North Indian",
        "Italian",
        "Tandoor"
      ],
      "avgRating": 3.1,
      "parentId": "19079",
      "avgRatingString": "3.1",
      "totalRatingsString": "50+",
      "sla": {
        "deliveryTime": 57,
        "lastMileTravel": 7,
        "serviceability": "SERVICEABLE",
        "slaString": "55-60 mins",
        "lastMileTravelString": "7.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-03-06 23:59:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {
        
      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-6321b59b-e60f-4190-8697-374a9b1f980f"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/royal-kitchen-sector-a-engineering-college-road-aliganj-lucknow-549461",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "458886",
      "name": "Bro And Brothers",
      "cloudinaryImageId": "cvk4y2cap3m23nfdgxss",
      "locality": "Gomti Nagar",
      "areaName": "Gomti Nagar",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "North Indian",
        "Snacks"
      ],
      "avgRating": 4.3,
      "parentId": "275289",
      "avgRatingString": "4.3",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 53,
        "lastMileTravel": 12.1,
        "serviceability": "SERVICEABLE",
        "slaString": "50-55 mins",
        "lastMileTravelString": "12.1 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-03-06 23:59:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "20% OFF",
        "subHeader": "UPTO ₹45"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-6321b59b-e60f-4190-8697-374a9b1f980f"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/bro-and-brothers-gomti-nagar-lucknow-458886",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "392786",
      "name": "AIP - India Burger",
      "cloudinaryImageId": "a22d25efb957c14bcf9cfb24d254a392",
      "locality": "Sector K",
      "areaName": "Aliganj",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Snacks",
        "Beverages",
        "Navratri Special"
      ],
      "avgRating": 4,
      "parentId": "240402",
      "avgRatingString": "4.0",
      "totalRatingsString": "500+",
      "sla": {
        "deliveryTime": 45,
        "lastMileTravel": 5.9,
        "serviceability": "SERVICEABLE",
        "slaString": "45-50 mins",
        "lastMileTravelString": "5.9 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-03-13 00:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-6321b59b-e60f-4190-8697-374a9b1f980f"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/aip-india-burger-sector-k-aliganj-lucknow-392786",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "456072",
      "name": "Italian Pizza Bar and Cafe",
      "cloudinaryImageId": "veeg5blbxlhyciqh1agh",
      "locality": "Sector A",
      "areaName": "Aliganj",
      "costForTwo": "₹100 for two",
      "cuisines": [
        "Pizzas"
      ],
      "avgRating": 3.9,
      "parentId": "274540",
      "avgRatingString": "3.9",
      "totalRatingsString": "500+",
      "sla": {
        "deliveryTime": 49,
        "lastMileTravel": 5.9,
        "serviceability": "SERVICEABLE",
        "slaString": "45-50 mins",
        "lastMileTravelString": "5.9 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-03-13 00:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-6321b59b-e60f-4190-8697-374a9b1f980f"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/italian-pizza-bar-and-cafe-sector-a-aliganj-lucknow-456072",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "394103",
      "name": "Dad OF Burger",
      "cloudinaryImageId": "6a4de39734b26bd42b93131e0892aaa3",
      "locality": "Sector K",
      "areaName": "Aliganj",
      "costForTwo": "₹100 for two",
      "cuisines": [
        "Snacks",
        "Beverages"
      ],
      "avgRating": 3.9,
      "parentId": "244332",
      "avgRatingString": "3.9",
      "totalRatingsString": "500+",
      "sla": {
        "deliveryTime": 43,
        "lastMileTravel": 5.9,
        "serviceability": "SERVICEABLE",
        "slaString": "40-45 mins",
        "lastMileTravelString": "5.9 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-03-13 00:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-6321b59b-e60f-4190-8697-374a9b1f980f"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/dad-of-burger-sector-k-aliganj-lucknow-394103",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  },
  {
    "info": {
      "id": "375890",
      "name": "The Healthy Khichdi Express",
      "cloudinaryImageId": "d47817234d36c56d32e3a8714ed5cf7f",
      "locality": "Sitapur Road",
      "areaName": "Nirala Nagar",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "Chinese",
        "South Indian",
        "Indian",
        "Healthy Food",
        "Thalis"
      ],
      "avgRating": 4.2,
      "veg": true,
      "parentId": "473126",
      "avgRatingString": "4.2",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 46,
        "lastMileTravel": 2.8,
        "serviceability": "SERVICEABLE",
        "slaString": "45-50 mins",
        "lastMileTravelString": "2.8 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-03-13 00:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "pureveg",
                  "imageId": "v1695133679/badges/Pure_Veg111.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹199",
        "discountTag": "FLAT DEAL"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      "context": "seo-data-6321b59b-e60f-4190-8697-374a9b1f980f"
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/the-healthy-khichdi-express-sitapur-road-nirala-nagar-lucknow-375890",
      "text": "RESTAURANT_MENU",
      "type": "WEBLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
  }
]


const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
                <div className="res-container">
                    {/* <RestaurantCard resData = {resList[1]} /> */} 
                    {resList.map((restaurant) =>                              // here hmlogo ne reslist ko map kiya h and return kra rhe h piece of JSX
                    ( <RestaurantCard resData={restaurant}/> ))}
                </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);