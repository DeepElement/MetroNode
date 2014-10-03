exports.async=require("async");
exports.uniq=require("uniq");
exports.uuid=require("uuid");
function b(namespaceString, module) {
              var parts = namespaceString.split('.'),
                  parent = exports,
                  currentPart = '';  
                  
              for(var i = 0, length = parts.length; i < length; i++) {
                  currentPart = parts[i];
                  parent[currentPart] = parent[currentPart] || {};
                  parent = parent[currentPart];
                  if(i == parts.length-1)
                  {
                    parent = require(module);
                  }
              }
          };
b("MetroNode.js.api.db","./js/api/db.node.js");
b("MetroNode.js.api.index","./js/api/index.node.js");
b("MetroNode.js.helpers","./js/helpers.node.js");
