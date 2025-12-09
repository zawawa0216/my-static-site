# My Static Site

GitHub Pages で静的サイトを公開するための最小セットです。`site/` 配下に置いた HTML/CSS/JS が自動で配信されます。

## プロジェクト構成
- `site/` — 公開されるファイル。フレームワーク利用時はビルド成果物 (例: `dist/`) をここに配置します。
- `.github/workflows/deploy.yml` — `main` ブランチへの push で GitHub Pages にデプロイするワークフロー。

## 使い方
1. `site/index.html` や `site/assets/` の内容を変更してコンテンツを追加します。
2. ブラウザで `site/index.html` を開いて動作を確認します。
3. `main` ブランチに push すると、ワークフローが `site/` を公開します。

必要に応じてデプロイ対象フォルダーやブランチ設定を `deploy.yml` で調整してください。
