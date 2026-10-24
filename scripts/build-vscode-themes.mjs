import { readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const sourcePath = resolve(root, "themes/qwark.json");
const checkOnly = process.argv.includes("--check");

const source = JSON.parse(await readFile(sourcePath, "utf8"));

const withAlpha = (color, alpha) => `${color.slice(0, 7)}${alpha}`;

function uiColors(style) {
  const selection = style.players[0].selection;
  const selectionMuted = withAlpha(selection, "55");

  return {
    foreground: style.text,
    disabledForeground: style["text.disabled"],
    focusBorder: style["border.focused"],
    "selection.background": selection,
    descriptionForeground: style["text.muted"],
    errorForeground: style.error,
    "icon.foreground": style.icon,

    "textBlockQuote.background": style["surface.background"],
    "textBlockQuote.border": style.border,
    "textCodeBlock.background": style["element.background"],
    "textLink.foreground": style["text.accent"],
    "textLink.activeForeground": style["link_text.hover"],
    "textPreformat.foreground": style.syntax["text.literal"].color,
    "textSeparator.foreground": style.border,

    "button.background": style.accent,
    "button.foreground": style.background,
    "button.hoverBackground": style["link_text.hover"],
    "button.secondaryBackground": style["element.active"],
    "button.secondaryForeground": style.text,
    "button.secondaryHoverBackground": style["element.selected"],
    "checkbox.background": style["element.background"],
    "checkbox.border": style.border,
    "checkbox.foreground": style.text,
    "dropdown.background": style["elevated_surface.background"],
    "dropdown.border": style.border,
    "dropdown.foreground": style.text,
    "input.background": style["element.background"],
    "input.border": style.border,
    "input.foreground": style.text,
    "input.placeholderForeground": style["text.placeholder"],
    "inputOption.activeBackground": withAlpha(style.accent, "33"),
    "inputOption.activeBorder": style.accent,
    "inputOption.activeForeground": style.text,
    "inputValidation.errorBackground": style["error.background"],
    "inputValidation.errorBorder": style["error.border"],
    "inputValidation.infoBackground": style["info.background"],
    "inputValidation.infoBorder": style["info.border"],
    "inputValidation.warningBackground": style["warning.background"],
    "inputValidation.warningBorder": style["warning.border"],
    "badge.background": style.accent,
    "badge.foreground": style.background,
    "progressBar.background": style.accent,

    "scrollbar.shadow": withAlpha(style.background, "66"),
    "scrollbarSlider.background": style["scrollbar.thumb.background"],
    "scrollbarSlider.hoverBackground": style["scrollbar.thumb.hover_background"],
    "scrollbarSlider.activeBackground": style["border.selected"],

    "list.activeSelectionBackground": style["element.selected"],
    "list.activeSelectionForeground": style.text,
    "list.activeSelectionIconForeground": style["icon.accent"],
    "list.inactiveSelectionBackground": style["ghost_element.selected"],
    "list.inactiveSelectionForeground": style.text,
    "list.hoverBackground": style["element.hover"],
    "list.hoverForeground": style.text,
    "list.focusBackground": style["element.active"],
    "list.focusForeground": style.text,
    "list.highlightForeground": style["text.accent"],
    "list.errorForeground": style.error,
    "list.warningForeground": style.warning,
    "list.dropBackground": style["drop_target.background"],
    "listFilterWidget.background": style["elevated_surface.background"],
    "listFilterWidget.outline": style["border.focused"],
    "listFilterWidget.noMatchesOutline": style.error,
    "tree.indentGuidesStroke": style["panel.indent_guide"],
    "tree.inactiveIndentGuidesStroke": style["panel.indent_guide"],
    "tree.tableColumnsBorder": style.border,

    "activityBar.background": style["title_bar.background"],
    "activityBar.foreground": style["icon.accent"],
    "activityBar.inactiveForeground": style["icon.muted"],
    "activityBar.border": style["border.variant"],
    "activityBar.activeBorder": style.accent,
    "activityBarBadge.background": style.accent,
    "activityBarBadge.foreground": style.background,
    "sideBar.background": style["panel.background"],
    "sideBar.foreground": style.text,
    "sideBar.border": style["pane_group.border"],
    "sideBarTitle.foreground": style.text,
    "sideBarSectionHeader.background": style["editor.subheader.background"],
    "sideBarSectionHeader.foreground": style.text,
    "sideBarSectionHeader.border": style["border.variant"],

    "editorGroup.border": style["pane_group.border"],
    "editorGroup.dropBackground": style["drop_target.background"],
    "editorGroupHeader.tabsBackground": style["tab_bar.background"],
    "editorGroupHeader.tabsBorder": style["border.variant"],
    "editorGroupHeader.noTabsBackground": style["tab_bar.background"],
    "tab.activeBackground": style["tab.active_background"],
    "tab.activeForeground": style.text,
    "tab.activeBorderTop": style.accent,
    "tab.activeModifiedBorder": style["version_control.modified"],
    "tab.inactiveBackground": style["tab.inactive_background"],
    "tab.inactiveForeground": style["text.muted"],
    "tab.inactiveModifiedBorder": style["version_control.modified"],
    "tab.border": style["border.variant"],
    "tab.hoverBackground": style["element.hover"],
    "tab.hoverForeground": style.text,
    "tab.unfocusedActiveForeground": style["text.muted"],
    "tab.unfocusedInactiveForeground": style["text.disabled"],

    "editor.background": style["editor.background"],
    "editor.foreground": style["editor.foreground"],
    "editorLineNumber.foreground": style["editor.line_number"],
    "editorLineNumber.activeForeground": style["editor.active_line_number"],
    "editorCursor.foreground": style.players[0].cursor,
    "editor.selectionBackground": selection,
    "editor.inactiveSelectionBackground": selectionMuted,
    "editor.selectionHighlightBackground": selectionMuted,
    "editor.wordHighlightBackground": style["editor.document_highlight.read_background"],
    "editor.wordHighlightStrongBackground": style["editor.document_highlight.write_background"],
    "editor.findMatchBackground": style["search.active_match_background"],
    "editor.findMatchHighlightBackground": style["search.match_background"],
    "editor.findRangeHighlightBackground": selectionMuted,
    "editor.hoverHighlightBackground": style["ghost_element.hover"],
    "editor.lineHighlightBackground": style["editor.active_line.background"],
    "editor.lineHighlightBorder": style["border.transparent"],
    "editorLink.activeForeground": style["link_text.hover"],
    "editorWhitespace.foreground": style["editor.invisible"],
    "editorIndentGuide.background1": style["editor.indent_guide"],
    "editorIndentGuide.activeBackground1": style["editor.indent_guide_active"],
    "editorRuler.foreground": style["editor.wrap_guide"],
    "editorCodeLens.foreground": style["text.muted"],
    "editorGhostText.foreground": style.predictive,
    "editorGhostText.background": style["predictive.background"],
    "editorGhostText.border": style["predictive.border"],
    "editorInlayHint.foreground": style.hint,
    "editorInlayHint.background": style["hint.background"],
    "editorInlayHint.typeForeground": style.info,
    "editorInlayHint.typeBackground": style["info.background"],
    "editorInlayHint.parameterForeground": style.hint,
    "editorInlayHint.parameterBackground": style["hint.background"],
    "editorBracketMatch.background": style["editor.document_highlight.bracket_background"],
    "editorBracketMatch.border": style["border.focused"],
    "editorBracketHighlight.foreground1": style.accents[0],
    "editorBracketHighlight.foreground2": style.accents[1],
    "editorBracketHighlight.foreground3": style.accents[2],
    "editorBracketHighlight.foreground4": style.accents[3],
    "editorBracketHighlight.foreground5": style.syntax.function.color,
    "editorBracketHighlight.foreground6": style.syntax.string.color,
    "editorBracketHighlight.unexpectedBracket.foreground": style.error,
    "editorBracketPairGuide.background1": withAlpha(style.accents[0], "55"),
    "editorBracketPairGuide.background2": withAlpha(style.accents[1], "55"),
    "editorBracketPairGuide.background3": withAlpha(style.accents[2], "55"),
    "editorBracketPairGuide.background4": withAlpha(style.accents[3], "55"),
    "editorBracketPairGuide.background5": withAlpha(style.syntax.function.color, "55"),
    "editorBracketPairGuide.background6": withAlpha(style.syntax.string.color, "55"),
    "editorBracketPairGuide.activeBackground1": style.accents[0],
    "editorBracketPairGuide.activeBackground2": style.accents[1],
    "editorBracketPairGuide.activeBackground3": style.accents[2],
    "editorBracketPairGuide.activeBackground4": style.accents[3],
    "editorBracketPairGuide.activeBackground5": style.syntax.function.color,
    "editorBracketPairGuide.activeBackground6": style.syntax.string.color,
    "editor.foldBackground": selectionMuted,
    "editorOverviewRuler.border": style["border.transparent"],
    "editorOverviewRuler.findMatchForeground": style["modified.border"],
    "editorOverviewRuler.errorForeground": style.error,
    "editorOverviewRuler.warningForeground": style.warning,
    "editorOverviewRuler.infoForeground": style.info,
    "editorGutter.background": style["editor.gutter.background"],
    "editorGutter.addedBackground": style["version_control.added"],
    "editorGutter.modifiedBackground": style["version_control.modified"],
    "editorGutter.deletedBackground": style["version_control.deleted"],
    "editorError.foreground": style.error,
    "editorError.border": style["border.transparent"],
    "editorWarning.foreground": style.warning,
    "editorWarning.border": style["border.transparent"],
    "editorInfo.foreground": style.info,
    "editorInfo.border": style["border.transparent"],
    "editorHint.foreground": style.hint,
    "editorHint.border": style["border.transparent"],

    "editorWidget.background": style["elevated_surface.background"],
    "editorWidget.foreground": style.text,
    "editorWidget.border": style.border,
    "editorWidget.resizeBorder": style["border.focused"],
    "editorSuggestWidget.background": style["elevated_surface.background"],
    "editorSuggestWidget.border": style.border,
    "editorSuggestWidget.foreground": style.text,
    "editorSuggestWidget.highlightForeground": style["text.accent"],
    "editorSuggestWidget.selectedBackground": style["element.selected"],
    "editorHoverWidget.background": style["elevated_surface.background"],
    "editorHoverWidget.border": style.border,
    "editorHoverWidget.foreground": style.text,

    "peekView.border": style["border.focused"],
    "peekViewEditor.background": style["surface.background"],
    "peekViewEditor.matchHighlightBackground": style["search.match_background"],
    "peekViewResult.background": style["panel.background"],
    "peekViewResult.fileForeground": style.text,
    "peekViewResult.lineForeground": style["text.muted"],
    "peekViewResult.matchHighlightBackground": style["search.match_background"],
    "peekViewResult.selectionBackground": style["element.selected"],
    "peekViewResult.selectionForeground": style.text,
    "peekViewTitle.background": style["editor.subheader.background"],
    "peekViewTitleDescription.foreground": style["text.muted"],
    "peekViewTitleLabel.foreground": style.text,

    "diffEditor.insertedTextBackground": style["created.background"],
    "diffEditor.removedTextBackground": style["deleted.background"],
    "diffEditor.insertedLineBackground": withAlpha(style["created.background"], "99"),
    "diffEditor.removedLineBackground": withAlpha(style["deleted.background"], "99"),
    "diffEditor.diagonalFill": style["border.variant"],
    "merge.currentHeaderBackground": style["info.background"],
    "merge.currentContentBackground": withAlpha(style["info.background"], "99"),
    "merge.incomingHeaderBackground": style["created.background"],
    "merge.incomingContentBackground": withAlpha(style["created.background"], "99"),
    "merge.commonHeaderBackground": style["surface.background"],
    "merge.commonContentBackground": withAlpha(style["surface.background"], "99"),

    "panel.background": style["panel.background"],
    "panel.border": style["pane_group.border"],
    "panelTitle.activeBorder": style.accent,
    "panelTitle.activeForeground": style.text,
    "panelTitle.inactiveForeground": style["text.muted"],
    "panelSection.border": style.border,
    "panelSectionHeader.background": style["editor.subheader.background"],
    "panelSectionHeader.foreground": style.text,
    "statusBar.background": style["status_bar.background"],
    "statusBar.foreground": style.text,
    "statusBar.border": style["border.variant"],
    "statusBar.debuggingBackground": style["conflict.background"],
    "statusBar.debuggingForeground": style.conflict,
    "statusBar.noFolderBackground": style["title_bar.background"],
    "statusBarItem.activeBackground": style["element.active"],
    "statusBarItem.hoverBackground": style["element.hover"],
    "statusBarItem.prominentBackground": style["element.active"],
    "statusBarItem.remoteBackground": style.accent,
    "statusBarItem.remoteForeground": style.background,
    "titleBar.activeBackground": style["title_bar.background"],
    "titleBar.activeForeground": style.text,
    "titleBar.inactiveBackground": style["title_bar.inactive_background"],
    "titleBar.inactiveForeground": style["text.muted"],
    "titleBar.border": style["border.variant"],

    "menu.background": style["elevated_surface.background"],
    "menu.foreground": style.text,
    "menu.selectionBackground": style["element.selected"],
    "menu.selectionForeground": style.text,
    "menu.separatorBackground": style.border,
    "menu.border": style.border,
    "menubar.selectionBackground": style["element.hover"],
    "menubar.selectionForeground": style.text,
    "breadcrumb.background": style["editor.background"],
    "breadcrumb.foreground": style["text.muted"],
    "breadcrumb.focusForeground": style.text,
    "breadcrumb.activeSelectionForeground": style["text.accent"],
    "breadcrumbPicker.background": style["elevated_surface.background"],

    "notificationCenter.border": style.border,
    "notificationCenterHeader.background": style["editor.subheader.background"],
    "notificationCenterHeader.foreground": style.text,
    "notificationToast.border": style.border,
    "notifications.background": style["elevated_surface.background"],
    "notifications.foreground": style.text,
    "notifications.border": style.border,
    "notificationLink.foreground": style["text.accent"],
    "notificationsErrorIcon.foreground": style.error,
    "notificationsWarningIcon.foreground": style.warning,
    "notificationsInfoIcon.foreground": style.info,
    "quickInput.background": style["panel.overlay_background"],
    "quickInput.foreground": style.text,
    "quickInputTitle.background": style["editor.subheader.background"],
    "pickerGroup.border": style.border,
    "pickerGroup.foreground": style["text.accent"],

    "terminal.background": style["terminal.background"],
    "terminal.foreground": style["terminal.foreground"],
    "terminal.selectionBackground": selection,
    "terminalCursor.foreground": style.players[0].cursor,
    "terminalCursor.background": style["terminal.background"],
    "terminal.ansiBlack": style["terminal.ansi.black"],
    "terminal.ansiRed": style["terminal.ansi.red"],
    "terminal.ansiGreen": style["terminal.ansi.green"],
    "terminal.ansiYellow": style["terminal.ansi.yellow"],
    "terminal.ansiBlue": style["terminal.ansi.blue"],
    "terminal.ansiMagenta": style["terminal.ansi.magenta"],
    "terminal.ansiCyan": style["terminal.ansi.cyan"],
    "terminal.ansiWhite": style["terminal.ansi.white"],
    "terminal.ansiBrightBlack": style["terminal.ansi.bright_black"],
    "terminal.ansiBrightRed": style["terminal.ansi.bright_red"],
    "terminal.ansiBrightGreen": style["terminal.ansi.bright_green"],
    "terminal.ansiBrightYellow": style["terminal.ansi.bright_yellow"],
    "terminal.ansiBrightBlue": style["terminal.ansi.bright_blue"],
    "terminal.ansiBrightMagenta": style["terminal.ansi.bright_magenta"],
    "terminal.ansiBrightCyan": style["terminal.ansi.bright_cyan"],
    "terminal.ansiBrightWhite": style["terminal.ansi.bright_white"],

    "gitDecoration.addedResourceForeground": style["version_control.added"],
    "gitDecoration.modifiedResourceForeground": style["version_control.modified"],
    "gitDecoration.deletedResourceForeground": style["version_control.deleted"],
    "gitDecoration.renamedResourceForeground": style["version_control.renamed"],
    "gitDecoration.untrackedResourceForeground": style["version_control.untracked"],
    "gitDecoration.ignoredResourceForeground": style["version_control.ignored"],
    "gitDecoration.conflictingResourceForeground": style["version_control.conflict"],
    "gitDecoration.submoduleResourceForeground": style["text.muted"],

    "minimap.background": style["editor.background"],
    "minimap.findMatchHighlight": style["modified.border"],
    "minimap.selectionHighlight": style["border.selected"],
    "minimap.errorHighlight": style.error,
    "minimap.warningHighlight": style.warning,
    "minimapGutter.addedBackground": style["version_control.added"],
    "minimapGutter.modifiedBackground": style["version_control.modified"],
    "minimapGutter.deletedBackground": style["version_control.deleted"],

    "debugToolBar.background": style["elevated_surface.background"],
    "debugIcon.startForeground": style.success,
    "debugIcon.pauseForeground": style.warning,
    "debugIcon.stopForeground": style.error,
    "debugIcon.disconnectForeground": style.error,
    "debugIcon.restartForeground": style.success,
    "debugIcon.stepOverForeground": style.info,
    "debugIcon.stepIntoForeground": style.info,
    "debugIcon.stepOutForeground": style.info,
    "debugIcon.continueForeground": style.success,
    "debugIcon.stepBackForeground": style.info,
    "testing.iconPassed": style.success,
    "testing.iconFailed": style.error,
    "testing.iconErrored": style.error,
    "testing.iconQueued": style.warning,
    "testing.iconUnset": style["text.muted"],
    "testing.iconSkipped": style.ignored
  };
}

// Token rules are taken from VS Code's Dark Modern and Light Modern themes.
// Each of their colors is replaced with the Qwark color that plays the same role.
const baseThemeDir = resolve(root, "scripts/vscode-themes");
const baseThemes = {
  dark: "dark_plus.json",
  light: "light_plus.json"
};

const roles = {
  dark: {
    "#d4d4d4": "text",
    "#000080": "title",
    "#6a9955": "comment",
    "#569cd6": "keyword",
    "#c586c0": "keyword",
    "#b5cea8": "number",
    "#646695": "string.regex",
    "#d16969": "string.regex",
    "#d7ba7d": "string.escape",
    "#9cdcfe": "variable",
    "#f44747": "error",
    "#6796e6": "punctuation",
    "#808080": "punctuation",
    "#ce9178": "string",
    "#dcdcaa": "function",
    "#4ec9b0": "type",
    "#4fc1ff": "constant",
    "#c8c8c8": "label"
  },
  light: {
    "#000000": "text",
    "#000080": "title",
    "#008000": "comment",
    "#0000ff": "keyword",
    "#af00db": "keyword",
    "#800080": "keyword",
    "#098658": "number",
    "#811f3f": "string.regex",
    "#d16969": "string.regex",
    "#ee0000": "string.escape",
    "#800000": "tag",
    "#e50000": "attribute",
    "#0451a5": "property",
    "#001080": "variable",
    "#cd3131": "error",
    "#a31515": "string",
    "#795e26": "function",
    "#267f99": "type",
    "#0070c1": "constant"
  }
};

async function loadBaseTheme(fileName) {
  const theme = JSON.parse(await readFile(resolve(baseThemeDir, fileName), "utf8"));
  if (!theme.include) return theme;

  const parent = await loadBaseTheme(theme.include);
  return {
    tokenColors: [...parent.tokenColors, ...theme.tokenColors],
    semanticTokenColors: { ...parent.semanticTokenColors, ...theme.semanticTokenColors }
  };
}

function recolor(theme, color) {
  const key = color.toLowerCase().replace(/^(#[0-9a-f]{6})ff$/, "$1");
  const role = roles[theme.appearance][key];
  if (!role) throw new Error(`${theme.name}: no Qwark role for ${color}.`);

  const style = theme.style;
  if (role === "text") return style.text;
  if (role === "error") return style.error;
  return style.syntax[role].color;
}

async function tokenRules(theme) {
  const base = await loadBaseTheme(baseThemes[theme.appearance]);
  const tokenColors = base.tokenColors.map((rule) => ({
    ...rule,
    settings: {
      ...rule.settings,
      ...(rule.settings.foreground ? { foreground: recolor(theme, rule.settings.foreground) } : {})
    }
  }));
  const semanticTokenColors = Object.fromEntries(
    Object.entries(base.semanticTokenColors).map(([token, color]) => [token, recolor(theme, color)])
  );

  return { tokenColors, semanticTokenColors };
}

async function buildTheme(theme) {
  return {
    $schema: "vscode://schemas/color-theme",
    name: theme.name,
    type: theme.appearance,
    semanticHighlighting: true,
    colors: uiColors(theme.style),
    ...(await tokenRules(theme))
  };
}

const outputs = new Map([
  ["Qwark", "themes/qwark-color-theme.json"],
  ["Qwark Light", "themes/qwark-light-color-theme.json"]
]);

let stale = false;

for (const theme of source.themes) {
  const relativePath = outputs.get(theme.name);
  if (!relativePath) continue;

  const outputPath = resolve(root, relativePath);
  const content = `${JSON.stringify(await buildTheme(theme), null, 2)}\n`;

  if (checkOnly) {
    const current = await readFile(outputPath, "utf8").catch(() => "");
    if (current !== content) {
      console.error(`${relativePath} is out of date. Run npm run build.`);
      stale = true;
    }
  } else {
    await writeFile(outputPath, content);
    console.log(`Generated ${relativePath}`);
  }
}

if (stale) process.exitCode = 1;
