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

```sh
spin template install --git https://github.com/vanvuongngo/qwik-wasm.git --upgrade
```

## Use template to create a new Spin application

```sh
spin new qwik-frontend <project-name>
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

build your Qwik app and start your Spin app

```sh
spin build --up
```
