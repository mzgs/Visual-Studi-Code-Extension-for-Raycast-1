/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** Build - Select which build of Visual Studio Code to use when searching for recent projects */
  "build": "Antigravity" | "Cursor" | "IBM Bob" | "Kiro" | "Positron" | "Qoder" | "Trae" | "Trae CN" | "VSCodium" | "VSCodium - Insiders" | "Code" | "Code - Insiders" | "Devin" | "Windsurf" | "Lingma",
  /** View Layout - Select the layout of the view */
  "layout": "list" | "grid",
  /** Advanced - Keep the order of the sections while searching folders, files, etc. */
  "keepSectionOrder": boolean,
  /** Usability - Close other VS Code windows when opening a project */
  "closeOtherWindows": boolean,
  /** Terminal App - Select which Terminal App to use when opening with a terminal */
  "terminalApp"?: import("@raycast/api").Application,
  /** Git Integration - Display the current Git branch for files and folders in Git repositories */
  "showGitBranch": boolean,
  /** Git Integration Color - Hexadecimal color code for Git branch tag (e.g., #00FF00). Leave empty to use default green */
  "gitBranchColor": string
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `index` command */
  export type Index = ExtensionPreferences & {}
  /** Preferences accessible in the `open-with-vscode` command */
  export type OpenWithVscode = ExtensionPreferences & {}
  /** Preferences accessible in the `open-new-window` command */
  export type OpenNewWindow = ExtensionPreferences & {}
  /** Preferences accessible in the `extensions` command */
  export type Extensions = ExtensionPreferences & {}
  /** Preferences accessible in the `install-extension` command */
  export type InstallExtension = ExtensionPreferences & {}
  /** Preferences accessible in the `commandpalette` command */
  export type Commandpalette = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `index` command */
  export type Index = {}
  /** Arguments passed to the `open-with-vscode` command */
  export type OpenWithVscode = {}
  /** Arguments passed to the `open-new-window` command */
  export type OpenNewWindow = {}
  /** Arguments passed to the `extensions` command */
  export type Extensions = {}
  /** Arguments passed to the `install-extension` command */
  export type InstallExtension = {}
  /** Arguments passed to the `commandpalette` command */
  export type Commandpalette = {}
}

