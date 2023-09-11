# Qwik City App as WASM with Fermyon Spin

- [Fermyon Spin](https://www.fermyon.com/)
- [Qwik Docs](https://qwik.builder.io/)
- [Discord](https://qwik.builder.io/chat)
- [Qwik GitHub](https://github.com/BuilderIO/qwik)
- [@QwikDev](https://twitter.com/QwikDev)
- [Vite](https://vitejs.dev/)

## Branch `qwik-project`

This git branch shows how you can kickoff your own Qwik Spin application w/o a spin template.

## Prerequisites

Install `spin`

```sh
curl https://developer.fermyon.com/downloads/install.sh | bash
```

Install `pnpm` (optional)

```sh
npm install -g pnpm
```



## Create a Qwik app

```sh
pnpm create qwik@latest <project-name> # or `npm create qwik@latest <project-name>`
```

Initialize spin and choose "static-fileserver"

```sh
spin new
```

choose

```
HTTP base: /
HTTP path: /...
```

```sh
cd <project-name>
```

```sh
pnpm install # or `npm install`
```


extend `spin.toml`` config (at the end)

```toml
[component.build]
command = "pnpm build" # or `npm run build`
```

add qwik static html generator

```sh
pnpm qwik add # or `npm run qwik add`
```

start your Qwik WASM

```
spin build --up
```
