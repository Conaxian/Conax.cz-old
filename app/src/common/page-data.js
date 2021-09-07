"use strict";

import React from "react";
import HomePage from "../pages/home.jsx";

class PageData {
  constructor(data) {
    Object.assign(this, data);
  }
}

export default {
  "/index.php": new PageData({
    "page": <HomePage />,
    "hasSidebar": true
  })
};
