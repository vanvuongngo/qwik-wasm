# Qwik City App as WASM with Fermyon Spin

- [Fermyon Spin](https://www.fermyon.com/)
- [Qwik Docs](https://qwik.builder.io/)
- [Discord](https://qwik.builder.io/chat)
- [Qwik GitHub](https://github.com/BuilderIO/qwik)
- [@QwikDev](https://twitter.com/QwikDev)
- [Vite](https://vitejs.dev/)

## Prerequisites

Install `spin`

```sh
curl -fsSL https://developer.fermyon.com/downloads/install.sh | bash && \
sudo mv ./spin /usr/local/bin/spin
```

Install `pnpm` (optional)

```sh
npm install -g pnpm
```

If you do not install `pnpm` then you have to modify `component.build.command` in the `spin.toml` file.

## Installing the Spin application template

latest

```sh
spin template install --upgrade --git https://github.com/vanvuongngo/qwik-wasm.git
```

deprecated spin v1.5

```sh
spin template install --upgrade --git https://github.com/vanvuongngo/qwik-wasm.git --branch v2.0.0
```

## Use template to create a new Spin application

```sh
spin new -t qwik-frontend <projekt-name>
```

or show list and select qwik-frontend as the template

```sh
spin new <projekt-name>
```

choose e.g.

```
HTTP path: /...
```

```sh
cd <project-name>
```

```sh
pnpm install # or `npm install`
```

```sh
cd ..
```

build your Qwik app and start your Spin app

```sh
spin build --up
```

---

[Buy me a coffee](https://www.buymeacoffee.com/vuongngo)
