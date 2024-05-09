# State of React 2024

This repository (https://github.com/nilshartmann/state-of-react-2024) contains the source code for the example application and the workspace for my "State of React 2024" talk.

Below you will find instructions on how to install and start the examples.

![Screenshot of example application](screenshot.png)

## Requirements

The repository consists of three **applications**:
1. We have a backend that contains our data and our business logic. The data is provided via a simple HTTP API. I will refer to this backend simply as the **Backend** going forward. The backend is "ready" and is treated as a "black box" (imagine this would be an external service).

2. The second application is a **React Single-Page Application** (SPA). This is a classic, client-side executed React application that communicates with the backend via HTTP calls.

3. The third application is a **Next.js application**. It acts as a sort of "backend for the frontend." This application communicates with the backend and provides the frontend for the browser. I will refer to this application as the **Next.js application** going forward.

> The two applications **React Single-Page Application** and **Next.js application** have roughly the same features. To allow you to compare them effectively, their folder and component structures are also similar.
>
> The folder and component structures are **not best practices** but are optimized for our exercises and for comparing the two applications. In a real project, you would choose a simpler folder and component structure, following the **Co-Location Principle** commonly used in React, keeping related items together. In both example applications, this would particularly include components that are route-specific. These components would certainly be in the respective route folders in a real application.

### Requirements for the Backend

The backend is written in Java (21) and Spring Boot 3.2. It also requires a Postgres 16 database. There are several ways you can start and use the backend. Each variant is described below. Further down, you will find instructions on how to use them.

**Variant 1**: Starting the Java process from your IDE or via the command line.

This is the most complex way and makes sense only if you are already developing in Java. You will need a JDK21 and Docker on your laptop. Your laptop must be capable of installing packages or images via Gradle and Docker.

In this variant, the ports `8080` and `8432` must be available.

**Variant 2**: Starting via docker-compose

The backend is available as a pre-built Docker image. If you have Docker installed on your laptop, the easiest way to use the backend is via the docker-compose file included here to start the backend process along with the database. The [backend application image is in the GitHub Container Registry](https://github.com/nilshartmann/state-of-react-2024/pkgs/container/state-of-react-2024). This means your laptop or Docker must be capable of installing images from Docker and the GitHub Registry.

In this variant, the port `8080` must be available.

> If you normally don't develop in Java and have Docker installed, this is the easiest variant.

**Variant 3**: GitPod

[GitPod](https://gitpod.io) is a complete online development environment. This requires a GitHub and a GitPod account, both of which are free. You can start the complete repository via GitHub in GitPod. Then you can either work completely in GitPod (Web, VS Code, or IntelliJ) or you just use the backend running in GitPod when you have started the workspace in GitPod.

- This variant is best if you want to install nothing on your laptop (including no npm packages).
- You only need internet access (Web) and a GitHub and GitPod account, both of which are free.

### Requirements for the React SPA and Next.js Application

Both applications require Node.js (at least version 18). The packages are installed with [pnpm](https://pnpm.io/installation), an alternative package manager to npm, which you can enable through Node.js itself. If that doesn't work for you, npm or yarn should also work. However, I have only tested the installation with pnpm.

Your laptop must be able to download and install npm packages using the package manager.

- The **React SPA** runs on port `8090`.
- The **Next.js application** runs on port `8100`.
- So these two ports must be free on your device.

## Installation and Starting of the Backend

- Regarding the **requirements** for each variant, see above.
- If you normally don't develop in Java, the **easiest** way is to use **Variant 2 (Docker)**.

### Variant 1: Starting the Java Process in Your IDE

The Java project is built with Gradle. When you open the project in your IDE, it should be able to import Gradle

projects, which is automatic in IntelliJ, for example. After importing and compiling, you start the Spring Boot `main` class `nh.recipify.BackendApplication`.

> **Set working directory**
>
> In IntelliJ, ensure that the `Working directory` is set to `$MODULE_DIR$` in the Run Configuration.
> It's best to use the pre-configured Run Configuration `01 - Run BackendApplication (with DB)`

This class also automatically ensures that a Docker container with a Postgres database is started. This requires that you have docker-compose installed on a computer.

When the backend is started, you can open `http://localhost:8080/api/recipes` in your browser. There should be a JSON list of recipes returned.

### Variant 2: Starting the Backend via docker-compose

You can start the ready-made backend along with the database by starting the `docker-compose-backend.yaml` file in the root directory of the workspace:

```
docker-compose -f docker-compose-backend.yaml up -d
```

The compose file describes the backend process and the database, so you don't need to start anything else.

When the backend is started, you can open `http://localhost:8080/api/recipes` in your browser. There should be a JSON list of recipes returned.

### Variant 3: GitPod

To start the complete workspace in GitPod, there are two options.

- You can simply [start GitPod with the workspace using this link](https://gitpod.io/#https://github.com/nilshartmann/state-of-react-2024)
- You open the page https://github.com/nilshartmann/state-of-react-2024 in your browser and click on `Open`.
- Note: You can also open the workspace in a local IDE via GitPod. You will be asked about this when you start GitPod. However, certain conditions must be met. You can find more information [here in the GitPod documentation](https://www.gitpod.io/docs/references/ides-and-editors).

## Installation of the two Frontend Applications (React SPA and Next.js)

The two applications each exist twice:

1. Each in a "workspace version" (directories: `1_spa/spa_workspace` and `2_nextjs/nextjs_workspace`). **I do live coding during the talk in these directories**. You can use the directories if you want to follow my examples after the talk.
2. Each in a "completed" version (directories `1_spa/spa_frontend` `2_nextjs/nextjs_frontend`), which you can look at if interested. These versions are largely identical to the respective "workspace version" but contain a few features that go beyond the talk. If you want to start these versions to play with, you will need to follow the same steps as for the "workspace version". You can only start either the "ready" _or_ the "workspace version" at a time, otherwise, there will be port collisions.

### (Optional) Step 1: Installation of pnpm

In general, installing npm packages with npm and yarn should work.

However, I have tested with [pnpm](https://pnpm.io/). If you have not yet installed pnpm, you should do so now. There are [several ways](https://pnpm.io/installation) to install it. The easiest way is via [Node.js corepacks](https://nodejs.org/docs/latest-v20.x/api/corepack.html).

Simply execute the following command on the command line (`corepacks` is part of Node.js):

```
corepacks enable
```


### Step 2: Installation of npm Packages for the SPA Application

We work in the directory `2_spa/spa_workspace`. Please execute the following command in this directory on the command line:

```
pnpm install
```

(Alternative use npm or yarn)


### Step 3: Starting the SPA Application

You also start the SPA application in the `1_spa/spa_workspace` directory. There you must run the `dev` script:

```
pnpm dev
```

The application (Vite Devserver) now starts and should be running at http://localhost:8090 after a short time.


### Step 4: Installation of npm Packages for the Next.js Application

We work in the directory `2_nextjs/nextjs_workspace`. Please execute the following command in this directory on the command line:

```
pnpm install
```

(Alternative use npm or yarn)

### Step 4: Starting the Next.js Application

The Next.js application is started in the `2_nextjs/nextjs_workspace` directory. There please run the `dev` script:

```bash
pnpm dev
```

(In **IntelliJ** you can also start Next.js in the workspace using the Run Configuration `[NEXTJS WORKSPACE] - dev:clean`)

The application starts now and should be running at http://localhost:8100 after a

short time.

#### Notes on Next.js Cache

Next.js has very aggressive caching built-in. Therefore, sometimes you might not see changes immediately. In such cases, it helps to:

- Perform a "hard refresh" in the browser (Cmd+Shift+R or Ctrl+Shift+R in Firefox, for example). This discards files in the cache.
- Delete the `2_nextjs/nextjs_workspace/.next` directory and restart Next.js.

## Questions, Comments, Feedback

If you have any questions or issues, feel free to contact me.

If you would like to stay in touch, you can find my [contact details here](https://nilshartmann.net/kontakt).