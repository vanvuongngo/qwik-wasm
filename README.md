# Qwik City App as wasm with Fermyon Spin

- [Fermyon Spin](https://www.fermyon.com/)
- [Qwik Docs](https://qwik.builder.io/)
- [Discord](https://qwik.builder.io/chat)
- [Qwik GitHub](https://github.com/BuilderIO/qwik)
- [@QwikDev](https://twitter.com/QwikDev)
- [Vite](https://vitejs.dev/)

---

Getting started with fermyon spin

Install spin

```sh
curl https://developer.fermyon.com/downloads/install.sh | bash
```

Create a Qwik app

```sh
pnpm create qwik@latest MY_APP # or `npm create qwik@latest`
```

Initialize spin and choose "static-fileserver"

```sh
spin new

HTTP base: /
HTTP path: /...
```

```sh
cd MY_APP
```

extend spin.toml config (at the end)

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
spin up --build
```
