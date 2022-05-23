export const widget = {
  id: "1408154340799966528",
  name: "Bookmarked Assets",
  description: "",
  learnerName: "Bookmarked Assets",
  learnerDescription: "",
  localeUrl:
    "https://assets.staging.mindtickle.com/mt-translations/staging/projects/1408154340799966528/build-1652764166971/translations/",
  mapper: [
    {
      mapTo: "entities[].id",
      mapPath: "data.repAssetLibrary.bookmark.assets.edges[].node.id",
      isOptional: false
    },
    {
      mapTo: "entities[].assetName",
      mapPath: "data.repAssetLibrary.bookmark.assets.edges[].node.name",
      isOptional: false
    },
    {
      mapTo: "entities[].hubNames[]",
      mapPath:
        "data.repAssetLibrary.bookmark.assets.edges[].node.hubs.edges[].node.name",
      isOptional: false
    },
    {
      mapTo: "entities[].assetType",
      mapPath:
        "data.repAssetLibrary.bookmark.assets.edges[].node.file.media.mediaType",
      isOptional: false
    },
    {
      mapTo: "total",
      mapPath: "data.repAssetLibrary.bookmark.assets.pageInfo.total",
      isOptional: false
    }
  ],
  stateMapper: [],
  data: {
    id: "1407819845869593280",
    name: "AssetLib- BookMarkedAssets",
    description: "",
    request: {
      __typename: "PostRequest",
      __isRequest: "PostRequest",
      method: "POST",
      protocol: "https",
      host: "content-gql.{{TRACK}}.mindtickle.com",
      pathname: "/graphql",
      headers: [
        {
          key: "x-token",
          type: "TEXT",
          value: {
            __typename: "StringValue",
            __isConfigValue: "StringValue",
            stringValue: "{{x-token}}"
          }
        }
      ],
      query: [],
      environment: [
        {
          key: "TRACK",
          type: "TEXT",
          value: {
            __typename: "StringValue",
            __isConfigValue: "StringValue",
            stringValue: "staging"
          }
        },
        {
          key: "x-token",
          type: "TEXT",
          value: {
            __typename: "StringValue",
            __isConfigValue: "StringValue",
            stringValue: "yngIsVCHR_rPiv19ATUUXH6zPUSTR4Yp"
          }
        }
      ],
      body: '{"operationName":"BookmarkedAssets","variables":{"first":25},"query":"query BookmarkedAssets($first: Int!) {\\n  repAssetLibrary {\\n    bookmark {\\n      assets(first: $first) {\\n        pageInfo {\\n          total\\n        }\\n        edges {\\n          node {\\n            id\\n            name\\n            description\\n            sharingType\\n            updatedOn\\n            publishedOn\\n            lastViewedOn\\n            expiry\\n            stats {\\n              rating\\n              downloads\\n              views\\n              bookmarked\\n              ratingCount\\n            }\\n            interaction {\\n              isBookmarked\\n            }\\n            hubs(first: 10) {\\n              pageInfo {\\n                total\\n              }\\n              edges {\\n                node {\\n                  name\\n                }\\n              }\\n            }\\n            file {\\n              ... on File {\\n                id\\n                media {\\n                  ... on AudioMedia {\\n                    mediaType\\n                    thumb\\n                    contentParts: audioLength\\n                  }\\n                  ... on VideoMedia {\\n                    mediaType\\n                    thumb\\n                    contentParts: videoLength\\n                  }\\n                  ... on DocMedia {\\n                    mediaType\\n                    thumb\\n                    contentParts: totalPages\\n                  }\\n                  ... on ImageMedia {\\n                    mediaType\\n                    thumb\\n                    contentParts: size\\n                  }\\n                  ... on LinkMedia {\\n                    mediaType\\n                    thumb\\n                  }\\n                  ... on DocMediaPage {\\n                    mediaType\\n                    thumb\\n                  }\\n                }\\n              }\\n            }\\n          }\\n        }\\n      }\\n    }\\n  }\\n}\\n"}'
    }
  },
  layout: {
    id: "1408151167154679104",
    name: "Asset Listing",
    description: "",
    localeUrl:
      "https://assets.staging.mindtickle.com/mt-translations/staging/projects/mt-widget-components/build-1652764352457/translations/",
    component: {
      id: "//assets.staging.mindtickle.com/mt-widget-components/staging/components/AssetLibAssetList/1/index.js",
      url: "//assets.staging.mindtickle.com/mt-widget-components/staging/components/AssetLibAssetList/1652874066516/index.js",
      name: "AssetLibAssetList",
      library: "mt-widget-components",
      type: "react",
      dependencies: ["styled", "PropTypes", "IntersectionObserver"],
      isPublished: true
    },
    config: [
      {
        key: "assetNavigateUrlBase",
        type: "TEXT",
        value: {
          __typename: "StringValue",
          __isConfigValue: "StringValue",
          stringValue: "#/assets/asset/"
        }
      }
    ],
    environment: []
  },
  config: [
    {
      key: "topLink",
      type: "TEXT",
      value: {
        __typename: "StringValue",
        __isConfigValue: "StringValue",
        stringValue: "#/assets/bookmarked?search=1"
      }
    },
    {
      key: "topLinkType",
      type: "TEXT",
      value: {
        __typename: "StringValue",
        __isConfigValue: "StringValue",
        stringValue: "icon"
      }
    },
    {
      key: "showTotalCount",
      type: "TEXT",
      value: {
        __typename: "StringValue",
        __isConfigValue: "StringValue",
        stringValue: "true"
      }
    },
    {
      key: "hideIfEmpty",
      type: "BOOL",
      value: {
        __typename: "BoolValue",
        __isConfigValue: "BoolValue",
        boolValue: false
      }
    },
    {
      key: "noDataTitle",
      type: "TEXT",
      value: {
        __typename: "StringValue",
        __isConfigValue: "StringValue",
        stringValue: "No Bookmarked Assets Yet"
      }
    },
    {
      key: "noDataSubtitle",
      type: "TEXT",
      value: {
        __typename: "StringValue",
        __isConfigValue: "StringValue",
        stringValue:
          "Use this section to keep your favourite or most important Assets handy."
      }
    },
    {
      key: "hideHeaderOnEmpty",
      type: "BOOL",
      value: {
        __typename: "BoolValue",
        __isConfigValue: "BoolValue",
        boolValue: false
      }
    },
    {
      key: "noDataIllustration",
      type: "TEXT",
      value: {
        __typename: "StringValue",
        __isConfigValue: "StringValue",
        stringValue:
          "https://s3.ap-southeast-1.amazonaws.com/mtapps-cdn.mindtickle.com/asset-library-ui/widget-empty-bookmark-icon/emptyBookmarkAssets.svg"
      }
    }
  ],
  environment: {
    widget: [],
    request: [],
    layout: []
  },
  limitReachedIn: ["WEB", "MOBILE", "TABLET"],
  settings: {
    isMirroringEnabled: true,
    maxOccurrences: 0,
    allowedColspans: [],
    editableFields: [],
    hideFromAdmin: false,
    canDelete: true
  },
  allowedDevices: ["WEB", "MOBILE", "TABLET"]
};
