'use strict';

module.exports = (rawPlugin, loaders) => {
  let plugin = {};
  for (let loader of loaders) {
    plugin = Object.assign(plugin, loader(rawPlugin, plugin));
  }
  return plugin;
};
