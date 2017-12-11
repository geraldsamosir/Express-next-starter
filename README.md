#Just starter App

##Configuration

set Configuration in ./config.json
support database Mysql and Mongodb

##CLI

#Dev project
```bash
    yarn dev
```
#Testing
```bash
    yarn test
```
#Generator
```bash
    yarn generate -h
```

```bash
     Usage: generate [options]

  Options:

    -V, --version                      output the version number
    -c, --controller [controllerName]  Add controller , controller name dont have capital alvabet and space
    -d , --database [database engine]  choose database engine
    -m ,--model [modelName]            Add model , modelName same with table name
    -r ,--router [routerName]          Add router , router name dont have capital alvabet and space
    -h, --help                         output usage information
```