function namespace(namespaceString) {
    var parts = namespaceString.split('.'),
        parent = window,
        currentPart = '';    
        
    for(var i = 0, length = parts.length; i < length; i++) {
        currentPart = parts[i];
        parent[currentPart] = parent[currentPart] || {};
        parent = parent[currentPart];
    }
};

function replaceAll(find, replace, str) {
    return str.replace(new RegExp(find, 'g'), replace);
};

function moduleToNamespace(baseNamespace, recursiveDir, module){
    console.log('====== moduleToNamespace');
    console.log(baseNamespace);
    console.log(recursiveDir);
    console.log(module);
    console.log('==================');

    namespace(baseNamespace + "." + recursiveDir.replaceAll('.node', "."));
};