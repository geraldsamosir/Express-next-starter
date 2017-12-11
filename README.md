<h1>Just starter App</h1>

<h2>Configuration</h2>

set Configuration in ./config.json
support database Mysql and Mongodb

<h2>CLI</h2>

<h3>Dev project</h3>
```bash
    yarn dev
```
<h3>Testing</h3>
```bash
    yarn test
```
<h3>Generator</h3>
```bash
    yarn generate -h
```

```bash
     Usage: generate [options]

  Options:

    -V, --version                      output the version number
    -c, --controller [controllerName]  Add controller , controller name dont have capital alfabet and space
    -d , --database [database engine]  choose database engine
    -m ,--model [modelName]            Add model , modelName same with table name
    -r ,--router [routerName]          Add router , router name dont have capital alfabet and space
    -h, --help                         output usage information
```