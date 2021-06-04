# How we develop systems ?

![](https://uploads.toptal.io/blog/image/129133/toptal-blog-image-1550062710292-1db9f4f6ffc00e30acb3a43b3504c4a9.png)

## Monolith

Whole system in single repository. No logical units created. For example if we have admin and home pages. This is still same big application.

### Monolith pros

- Clean git history.
- Easy to add whole system change.
- All application builded via single command.
- No issues with CI & CD.

### Monolith cons

- Big build time.
- No option to develop independently.
- Hard to scale.
- Easy to provide bugs.

## Modular monolith

Whole system in one place. We create logical units which can be called **modules** or whatever. But still this is only one application.

### Modular monolith pros

- Clean git history.
- Easy to add whole system change.
- All application builded via single command.
- No issues with CI & CD.

### Modular monolith cons

- Big build time.
- No option to develop independently.
- Hard to scale but a little bit easier in **Monolith**.
- Easy to provide bugs but not that easy like in **Monolith**.

## Multirepo

For every app we creating new repository. We get something like a distributed system. Shared code can be published as npm package
and installed.

### Multirepo pros

- Pretty fast environment.
- Easier to traverse, smaller files / folders structures.
- Clean git history.
- Smaller risk to destroy whole system.
- Code is splitted across different repos so smaller risk to names collision.

### Multirepo const

- Hard to maintain shared code. We need to create several pull requests for every repository to add whole system change.
- Adding access to new developers is problematic. We need to add access for every repository.
- Hard to track whole system changes.

## Monorepo

For every app we creating new directory. By convention it's **packages** directory. We have only one
repository for whole system but splitted in different packages.

### Monorepo pros

- Sharing environment code between packages.
- Easier to mantain dependencies.
- Easier to scale and maintain project because of option to share code between packages.
- Easier to make changes across whole system.
- Faster development, there is no need to run whole project. Only package which we need to use.

### Monorepo cons

- File traversing can be problematic in huge projects, f.e in 100 packages solution.
- If one package is based on another we need to rebuild while development.
- Dirty github history.
- Much easier to create conflicts.
- Hard to setup CI & CD

# Steps to reproduce

0. Create 2 dirs. First will be **platforms** dir which indicates platform f.e .NET, node. Second will be our **node**`.
1. Put `cd platforms/node` command to change directory
2. Init **package.json** file via `npm init` command. I used **@stackoff/node** as name attribute to make it easier to distinguish.
3. Next we need to install [Lerna](https://github.com/lerna/lerna) library. Tool which make monorepo easy to manage. Tracks dependecies between packages and runs dedicated commands in good order to avoid problems in build. So in CLI type `yarn add lerna -D`.
4. Use `npx lerna init` to init lerna config file and creates **packages** directory.

```json
{
  "packages": ["packages/*"],
  "version": "0.0.0"
}
```

We can add more **packages** dirs like f.e **libs** which can contain only pure js/ts libraries but i prefer single directory. **nx** tool from **nrwl** team uses this approach. In catalog **apps** we have applications but in **libs** libraries code.

5. I added new directory manually **environment** where we will add configuration / build things like **tsconfig.json** file or base **webpack** configurations and etc...
6. There is a option to make single configuration for linter, formattedr and etc... to whole project. But this is problematic. In real world example some **packages** will have other configuration rules so single config will be problematic.
7. We are ready to go. Right now we can create folders and put our projects inside. Just important thing - every project should share same commands patterns. For example to run packages in development mode all package should have `npm start` script. Ofcourse libraries packagaes will have only `build` commands.

# Lerna tips

- Working with **lerna** is pretty simple. But remember to add every dependency via dedicated **lerna** command - `lerna add`.

# Lerna commands

`npx lerna init` - creates configuration file **lerna.json** and adds **packages** dir where our repos will be added.
Package means **app** or **library** which is written in **JavaScript**.

`cd packages` - All **lerna** commands should be used inside this directory.

`npx lerna ls` - Displays packages from project.
`npx lerna ls --toposort` - Displays packages in topological way. It means in correct order to run / execute.
`npx lerna ls --graph` - Displays all packages and their dependencies.
`npx lerna run lint` - Allows to run command. In this example we run lint command in every package.
`npx lerna run init --parallel` - Allows to run command parallel.
`npx lerna ls --long` - Displays packages with their versions.
`npx lerna run test --parallel --scope={core,backend}` - Allows to run commands in dedicated packages.

`npx lerna add core` - Add **core** dependency to all packages expect herself.
`npx lerna add core --dev` - Same as above but adds as dev dependency.
`npx lerna add lodash` - Adds to every package **lodash** dependency.
`npx lerna run build` - Runs `build` command in every package in topological order.

`npx lerna clean` - Cleans all \*_node_modules_ directories in every package.
`npx lerna bootstrap` - Runs `npm install` for every package in topological order.

`npx lerna exec "npm i"` - Allows to run **custom commands**. In this example `npm i`.
