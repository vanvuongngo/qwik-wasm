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
spin template install --upgrade --git vanvuongngo/qwik-wasm
```

template with a qwik example app (old qwik version)
```sh
spin template install --upgrade --git vanvuongngo/qwik-wasm --branch example-app
```

deprecated spin v1.5

```sh
spin template install --upgrade --git vanvuongngo/qwik-wasm --branch v2.0.0
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

## Testing new template version from local directory

```
spin templates install --dir ./qwik-wasm --upgrade
```

The directory you pass must be one that contains a templates directory. Don’t pass the templates directory itself!

---

[Buy me a coffee](https://www.buymeacoffee.com/vuongngo)
