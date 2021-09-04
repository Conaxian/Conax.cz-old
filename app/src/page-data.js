"use strict";

class PageData {
  constructor(data) {
    Object.assign(this, data);
  }
}

export default {
  "/index.php": new PageData({
    "hasSidebar": true
  })
};
