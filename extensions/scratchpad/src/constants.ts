import { ApplicationInfo } from "./types/applicationInfo";

const editors: ApplicationInfo[] = [
  { name: "Visual Studio Code", bundleId: "com.microsoft.VSCode" },
  { name: "Sublime Text", bundleId: "com.sublimetext.3" },
  { name: "Atom", bundleId: "com.github.atom" },
  { name: "JetBrains IntelliJ IDEA", bundleId: "com.jetbrains.intellij" },
  { name: "JetBrains PyCharm", bundleId: "com.jetbrains.pycharm" },
  { name: "JetBrains WebStorm", bundleId: "com.jetbrains.webstorm" },
  { name: "JetBrains PhpStorm", bundleId: "com.jetbrains.PhpStorm" },
  { name: "JetBrains CLion", bundleId: "com.jetbrains.CLion" },
  { name: "JetBrains Rider", bundleId: "com.jetbrains.rider" },
  { name: "JetBrains AppCode", bundleId: "com.jetbrains.AppCode" },
  { name: "BBEdit", bundleId: "com.barebones.bbedit" },
  { name: "TextMate", bundleId: "com.macromates.TextMate" },
  { name: "Brackets", bundleId: "io.brackets.appshell" },
  { name: "Emacs (via Homebrew)", bundleId: "org.gnu.Emacs" },
  { name: "Vim (MacVim)", bundleId: "org.vim.MacVim" },
  { name: "CodeRunner", bundleId: "com.krill.CodeRunner" },
  { name: "TextWrangler", bundleId: "com.barebones.textwrangler" },
  { name: "TextEdit", bundleId: "com.apple.TextEdit" },
  { name: "Zed", bundleId: "dev.zed.Zed" },
  { name: "Cursor", bundleId: "com.todesktop.230313mzl4w4u92" },
];

export const editorBundleIds = editors.map((editor) => editor.bundleId);

export const fileTypes = [
  { name: "SQL Script", extension: ".sql" },
  { name: "Markdown", extension: ".md" },
  { name: "JSON", extension: ".json" },
  { name: "XML", extension: ".xml" },
  { name: "HTML", extension: ".html" },
  { name: "CSS", extension: ".css" },
  { name: "JavaScript", extension: ".js" },
  { name: "Python", extension: ".py" },
  { name: "Java", extension: ".java" },
  { name: "C++", extension: ".cpp" },
  { name: "Plain Text", extension: ".txt" },
  { name: "YAML", extension: ".yaml" },
  { name: "YML", extension: ".yml" },
  { name: "INI", extension: ".ini" },
  { name: "Environment Variables", extension: ".env" },
  { name: "Shell Script", extension: ".sh" },
  { name: "Batch", extension: ".bat" },
  { name: "Perl", extension: ".pl" },
  { name: "Ruby", extension: ".rb" },
  { name: "TypeScript", extension: ".ts" },
  { name: "JSX", extension: ".jsx" },
  { name: "TSX", extension: ".tsx" },
  { name: "TOML", extension: ".toml" },
];

export function numberToHex(value: number): string {
  return value.toString(16);
}