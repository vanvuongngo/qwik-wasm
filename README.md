# Qwik City App as wasm with Fermyon Spin

- [Fermyon Spin](https://www.fermyon.com/)
- [Qwik Docs](https://qwik.builder.io/)
- [Discord](https://qwik.builder.io/chat)
- [Qwik GitHub](https://github.com/BuilderIO/qwik)
- [@QwikDev](https://twitter.com/QwikDev)
- [Vite](https://vitejs.dev/)

---

Getting started with fermyon spin

install spin

```sh
curl https://developer.fermyon.com/downloads/install.sh | bash
```

```sh
pnpm create qwik@latest MY_APP
```

init spin and choose "static-fileserver"

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
command = "pnpm build"
```

add static html generator

```sh
pnpm qwik add
```

start your Qwik WASM

```
spin up --build
```
