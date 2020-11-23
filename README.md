# workspace-bootstrap-scripts
The scripts here can be used to create "initializer repositories" which are in essence just a collection of `npm scripts`. The utilities here allow to prompt users for required information such as their client ID and will then create configuration files which subsequent tasks can leverage.

Usage examples can be found at
- [Instance Initializer](https://github.com/SalesforceCommerceCloud/instance-initializer)
- [Page Designer Initializer](https://github.com/SalesforceCommerceCloud/page-designer-demo-cnx)

## How to use

The helpers are meant to be used as an `npm` dependency, you can conveniently invoke them via `package.json` scripts using `npm explore`.

```
...
    "scripts": {
        "postinstall": "npm explore workspace-bootstrap-scripts -- node scripts/postinstall.js",
    }
...
```

# License #

Licensed under the current NDA and licensing agreement in place with your organization. (This is explicitly not open source licensing.)
