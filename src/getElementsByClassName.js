// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {

  var nodes = [];

  var searchNodes = (node) => {
    // compare node's classname with className
    var parts = node.className.split(' ');
    if (parts.indexOf(className) >= 0){
      // if matched, save node
      nodes.push(node);
    }

    // itereate over children
    for (var i = 0; i < node.children.length; i++) {
      // for each child, invoke searchNodes
      searchNodes(node.children[i]);
    }
  };

  searchNodes(document.body);

  return nodes;
};


