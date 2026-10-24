# Qwark for Visual Studio Code

Qwark is a muted green theme family for Visual Studio Code, designed to stay
comfortable during long reading and coding sessions. This is the Visual Studio
Code port of the original [Qwark theme for Zed](https://github.com/biancofla/qwark).

## Why Qwark?

> “It was mating season! How could I have known she was your sister?”
>
> Captain Qwark, speaking to Skrunch the monkey in
> *Ratchet & Clank: Up Your Arsenal*

Yes, the name is a tribute to Captain Qwark from *Ratchet & Clank*. He is loud,
overconfident, and not exactly the hero he thinks he is, but he has always been
one of my favorite characters.

The theme itself is much quieter. I wanted a green palette that felt distinctive
without becoming tiring after a few minutes. Qwark grew from that idea: restrained
contrast, warm syntax colors, and an interface that stays out of the way.

## Themes

- **Qwark** is the original dark theme.
- **Qwark Light** carries the same character into a light appearance.

## Installation

Install the extension, open **Preferences: Color Theme** from the Command
Palette, then select **Qwark** or **Qwark Light**.

To try the extension from this repository:

```sh
npm run build
npx @vscode/vsce package
code --install-extension qwark-theme-0.2.0.vsix
```

The generated Visual Studio Code themes include workbench colors, syntax and
semantic highlighting, terminal ANSI colors, Git decorations, diagnostics,
diffs, notifications, and debug/test states.

## Design

Qwark uses muted greens for structure, warmer tones for literals and warnings,
and restrained contrast for comments and secondary elements. The light and dark
variants share the same semantic roles, so switching between them should feel
natural.

## Development

The original Qwark palette in `themes/qwark.json` is the source for both
generated themes. Regenerate them after changing it:

```sh
npm run build
npm run check
```
