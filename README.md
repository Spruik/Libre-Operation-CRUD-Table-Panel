# Libre Operation CRUD Table Panel

| Libre Grafana panel for Create, Read, Update and Delete of Product Operations

This panel gives users the ability to search for, create, read, update and delete product operations as part of [Libre](https://github.com/Spruik/libre-grafana). Operations are the ingredient steps that can applied to a product. This plugin interfaces to a no security json rest api for operations running on the same grafana server. This panel is targeted at Grafana v6.x.x only.

Operation objects have two properties.

1. name - Name of the operation _limited to 20 characters_
2. sequence - Order of display _>= 0_

![Operation Panel](./docs/operation-crud-table-panel.png)

## Installation

The easiest way to get started with this plugin is to:

Download the latest release

  ```shell
  $ wget https://github.com/Spruik/Libre-Operation-CRUD-Table-Panel/raw/master/libre-operation-crud-table-panel.zip
  $
  ```

Unzip into your Grafana plugin directory

```shell
$ unzip libre-operation-crud-table-panel.zip -d /var/lib/grafana/plugins
$
```

Restart Grafana

```shell
$ systemctl restart grafana-server
$
```

## Usage

In order to get the most out of this panel:

1. Add a *Table* metric to query operations. For example `SELECT * FROM operation`. This panel expects an id, name and sequence column.

![Panel Metrics](./docs/operation-crud-table-panel-metrics.png)

2. Apply custom column styles:

| column   | Type   | Name Override | Other                    |

----------------------------------------------------------------
| id       | hidden |       -       |   -                      |
| name     | String | ID            |   -                      |
| sequence | Number | SEQUENCE      | unit: short, decimals: 0 |

### Adding

Use the + icon to add in a new operation by providing a name and a sequence.

![Add Operation by clicking the plus icon and providing a name and sequence](./docs/operation-crud-table-panel-add.png)

### Update / Delete

Click an existing operation so show the actions popup. Delete removes the object, whilst update shows a popup to edit and save an operation properties.

![Click an existing operation to perform update and delete actions](./docs/operation-crud-table-panel-actions.png)

### Searching

Use the search box to filter the list of operations.

![Use the search box to filter the list of operations](./docs/operation-crud-table-panel-search.png)

## Developing

### Getting Started

A docker-compose and grunt script is provided in order to quickly evaluate source code changes. This requires

Prerequisites

- docker (>= 18 required)
- docker-compose (>= 1.25 required)
- node (>= 12 required)
- npm (>= 6 required)

Start by cloning this repository

```shell
~/
$ git clone https://github.com/Spruik/Libre-Operation-CRUD-Table-Panel
Cloning into 'libre-operation-crud-table-panel'...
remote: Enumerating objects: 46, done.
remote: Counting objects: 100% (46/46), done.
remote: Compressing objects: 100% (31/31), done.
remote: Total 46 (delta 13), reused 46 (delta 13), pack-reused 0
Unpacking objects: 100% (46/46), done.
```

Enter project and install dependencies

```shell
~/
$ cd ./libre-operation-crud-table-panel
~/libre-operation-crud-table-panel
$ npm install
...
added 714 packages from 399 contributors and audited 719 packages in 11.871s
found 42 vulnerabilities (11 low, 6 moderate, 25 high)
  run `npm audit fix` to fix them, or `npm audit` for details
```

Install Grunt globally

```shell
~/libre-operation-crud-table-panel
$ npm install grunt -g
```

Run grunt to build the panel

```shell
~/libre-operation-crud-table-panel
$ grunt

Running "copy:src_to_dist" (copy) task
Created 2 directories, copied 8 files

Running "copy:libs" (copy) task

Running "copy:pluginDef" (copy) task
Copied 1 file

Running "copy:image_to_dist" (copy) task

Running "babel:dist" (babel) task

Done, without errors.

```

Start docker-compose.dev.yml detached

```shell
~/libre-operation-crud-table-panel
$ docker-compose -f docker-compose.dev.yml up -d
Starting libre-opation-crud-table-panel_postgres_1
Starting libre-opation-crud-table-panel_postrest_1
Starting libre-opation-crud-table-panel_simulator_1
Starting libre-opation-crud-table-panel_grafana_1
```

Run grunt watch to recompile on change

```shell
~/libre-operation-crud-table-panel
$ grunt watch
Running "watch" task
Waiting...
```

Open your favourite editor and start editing ./src files. The grunt watch task will detect this and recompile the panel. Use your favourite web browser and point to http://localhost:3000 login and create a dashboard with this panel. Your browser will need to be refreshed to reflect your changes to this panel, ensure your browser isn't caching files.

### Building

Prerequisites

- node (>= 12 required)
- npm (>= 6 required)

Build panel and zip into archive

```shell 
~/libre-operation-crud-table-panel
$ grunt build
Running "clean:0" (clean) task
>> 1 path cleaned.

Running "copy:src_to_dist" (copy) task
Created 2 directories, copied 8 files

Running "copy:libs" (copy) task


Running "copy:pluginDef" (copy) task
Copied 1 file

Running "copy:image_to_dist" (copy) task


Running "babel:dist" (babel) task

Done, without errors.
~/libre-operation-crud-table-panel
$ zip -r ./dist libre-operation-crud-table-panel.zip
## Contributing

For any issue, there are fundamentally three ways an individual can contribute:

- By opening the issue for discussion: For instance, if you believe that you have uncovered a bug in, creating a new issue in the [GitHub issue tracker](https://github.com/Spruik/Libre-Operation-CRUD-Table-Panel/issues) is the way to report it.
- By helping to triage the issue: This can be done either by providing supporting details (a test case that demonstrates a bug), or providing suggestions on how to address the issue.
- By helping to resolve the issue: Typically, this is done either in the form of demonstrating that the issue reported is not a problem after all, or more often, by opening a Pull Request that changes some bit of something in the panel in a concrete and reviewable manner.

## Acknowledgements

- [Jamen1147](https://github.com/Jamen1147)

## Change log

- 1.0.0 Initial Public Release
