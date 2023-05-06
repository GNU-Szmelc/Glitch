{
  "id": "dark_mode_enforcer",
  "priority": 7,
  "action": {
    "type": "modifyHeaders",
    "responseHeaders": [
      {
        "name": "Content-Security-Policy",
        "value": "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src * data:;"
      }
    ]
  },
  "condition": {
    "urlFilter": "<all_urls>",
    "resourceTypes": [
      "stylesheet"
    ]
  }
}
