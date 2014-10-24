![metronode](http://www.metronode.org/img/logo/metronode-96x96.png) Metronode
==========
A Javascript Productivity Tool for WinStore/WinPhone apps

See [www.metronode.org](http://www.metronode.org/) for usage details

![](http://img.shields.io/nuget/dt/metronode.svg)


#Introduction
MetroNode is a NuGet Plugin designed to integrate NodeJS/CommonJS into your WinStore/WinPhone apps without excessive developer effort. The tool supports hundreds of NodeJS modules, is compatible with popular javascript architectures and supports a variety of test tools.


#Setup
1. Include the MetroNode package through NuGet

![](http://www.metronode.org/img/packages/nuget-fetch1.png)
![](http://www.metronode.org/img/packages/nuget-fetch2.png)

2.Reference the MetroNode script in default.html: 

```html
<script src=".metro.node.js"></script>
```

#Source Control
To be safe, you should add the following to your .gitignore:

- .*
- .metro.node.js
- *.cache.js
- node_modules

#Support for Universal Apps
The [Node.js NuGet Package](http://www.nuget.org/packages/Node.js/) has not been updated to correctly support Unviversal apps. 

Until this can be addressed, do the following:

1. Add the MetroNode NuGet Package to both the WinStore and WinPhone platform projects
2. Add the Solution's `package.json` (typically in solution root, or ProjectDir/../) as a linked file to the root of both the WinStore and WinPhone projects
3. Build from the platform projects themselves; if you build from solution, NPM/Node packages will not be able to correclty find `node_modules` folder.

Notice that the `node_modules`, `packages` and `bin` folders will be one directory above the shared projects. 
