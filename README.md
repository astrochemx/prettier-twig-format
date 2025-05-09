# Prettier + Twig + Tailwind CSS Formatting

💅 This repository demonstrates how to format `*.html.twig` (`*.twig`) files that include [Tailwind CSS](https://tailwindcss.com/) classes using [Prettier](https://prettier.io/) and relevant plugins.

## ✨ Purpose

- Show how to use Prettier with:
  - [`@ttskch/prettier-plugin-tailwindcss-anywhere`](https://github.com/ttskch/prettier-plugin-tailwindcss-anywhere)
  - [`@zackad/prettier-plugin-twig`](https://github.com/zackad/prettier-plugin-twig)
  - [`prettier-plugin-tailwindcss`](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)
- Compare formatting results using different plugin setups.

## 📁 Files

The [`templates`](./templates/) folder contains 5 example files:

- [`raw.html.twig`](./templates/raw.html.twig) – Raw template without any Prettier formatting, but formatted using VS Code’s built-in `vscode.html-language-features` extension
- [`anywhere.html.twig`](./templates/anywhere.html.twig) – Formatted using [`@ttskch/prettier-plugin-tailwindcss-anywhere`](https://github.com/ttskch/prettier-plugin-tailwindcss-anywhere)
- [`anywhere.raw.html.twig`](./templates/anywhere.raw.html.twig) – Raw template, ready to be formatted using [`@ttskch/prettier-plugin-tailwindcss-anywhere`](https://github.com/ttskch/prettier-plugin-tailwindcss-anywhere)
- [`zackad.html.twig`](./templates/zackad.html.twig) – Formatted using [`@zackad/prettier-plugin-twig`](https://github.com/zackad/prettier-plugin-twig)
- [`zackad.raw.html.twig`](./templates/zackad.raw.html.twig) – Raw template, ready to be formatted using [`@zackad/prettier-plugin-twig`](https://github.com/zackad/prettier-plugin-twig)

> [!TIP]
> You can format [`anywhere.raw.html.twig`](./templates/anywhere.raw.html.twig) and [`zackad.raw.html.twig`](./templates/zackad.raw.html.twig) using `pnpm format:fix` command or just by opening the file and saving it.

## ⚙️ Setup

This project uses the [`pnpm`](https://pnpm.io/) package manager.

A [pnpm patch](https://pnpm.io/cli/patch) is applied to `@ttskch/prettier-plugin-tailwindcss-anywhere@0.1.0` to ensure compatibility with the [Prettier VS Code Extension](https://github.com/prettier/prettier-vscode).
For details, see the related [Pull Request](https://github.com/ttskch/prettier-plugin-tailwindcss-anywhere/pull/9).

### 🧰 Install dependencies

```bash
pnpm install
```

> [!NOTE]
> If you haven’t used `pnpm` before, check out the [pnpm installation guide](https://pnpm.io/installation).

### 🪛 Format files

- Check formatting:

  ```bash
  pnpm format
  ```

- Fix formatting:

  ```bash
  pnpm format:fix
  ```

## 🛠 Prettier Configuration

The configuration applies specific plugins based on filenames:

- [`anywhere.html.twig`](./templates/anywhere.html.twig) and [`anywhere.raw.html.twig`](./templates/anywhere.raw.html.twig) → Use `parser: "anywhere"` with the [`@ttskch/prettier-plugin-tailwindcss-anywhere`](https://github.com/ttskch/prettier-plugin-tailwindcss-anywhere) plugin
- [`zackad.html.twig`](./templates/zackad.html.twig) and [`zackad.raw.html.twig`](./templates/zackad.raw.html.twig) → Use `parser: "twig"` with the [`@zackad/prettier-plugin-twig`](https://github.com/zackad/prettier-plugin-twig) plugin

> [!NOTE]
> These overrides are defined in [`prettier.config.mjs`](./prettier.config.mjs).

## 🧩 VS Code Integration

This project includes workspace-specific settings in [`.vscode/settings.json`](./.vscode/settings.json) that override your global VS Code settings:

```json
{
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[twig]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "files.associations": {
    "*.html.twig": "html",
    "*.twig": "html"
  },
  // Optional:
  // "prettier.documentSelectors": ["*.html.twig", "*.twig"],
  "prettier.enable": true
}
```

## 📄 License

[MIT License](https://choosealicense.com/licenses/mit/)
