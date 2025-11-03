# Claude Code Workflow Studio 開発ブログ

[![Claude Code Workflow Studio](https://breaking-brake.github.io)](https://breaking-brake.github.io/)

このリポジトリは、[Claude Code Workflow Studio](https://github.com/breaking-brake/cc-wf-studio) プロジェクトの開発に関する情報を発信するブログサイトです。

## 📖 About

**Claude Code Workflow Studio** は、AI エージェントのワークフローをビジュアルに設計できる VSCode 拡張機能です。ドラッグ&ドロップでノードを配置し、Claude Code の `.claude` 形式にエクスポートすることで、プログラミング知識なしで高度な自動化フローを構築できます。

このブログでは、以下の情報を発信しています：

- 🎯 **プロジェクト紹介**: 機能概要とビジョン
- 🚀 **クイックスタート**: 導入方法と基本的な使い方
- 💡 **ユースケース**: データ分析、コードレビューなど実践的な活用例
- ❓ **FAQ**: よくある質問と回答

## 🔗 関連リンク

- **本体リポジトリ**: [breaking-brake/cc-wf-studio](https://github.com/breaking-brake/cc-wf-studio)
- **ブログサイト**: [https://breaking-brake.github.io/](https://breaking-brake.github.io/)
- **Claude Code 公式**: [Anthropic Claude Code](https://docs.anthropic.com/claude/docs/claude-code)

## 🛠️ 技術スタック

このブログサイトは以下の技術を使用して構築されています：

- **[Astro](https://astro.build)**: 高速な静的サイトジェネレーター
- **[TypeScript](https://www.typescriptlang.org/)**: 型安全性の向上
- **[Biome](https://biomejs.dev/)**: コードフォーマッター＆リンター
- **[GitHub Actions](https://github.com/features/actions)**: 自動デプロイ

## 🚀 開発

### セットアップ

```bash
# リポジトリのクローン
git clone https://github.com/breaking-brake/breaking-brake.github.io.git
cd breaking-brake.github.io

# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

ブラウザで `http://localhost:4321` を開いてサイトを確認できます。

### 利用可能なコマンド

| コマンド | 説明 |
|---------|------|
| `npm run dev` | 開発サーバーを起動（`localhost:4321`） |
| `npm run build` | 本番用サイトを `./dist/` にビルド |
| `npm run preview` | ビルドしたサイトをローカルでプレビュー |
| `npm run check` | Biome によるコード品質チェック |
| `npm run format` | コードの自動フォーマット |
| `npm run lint` | Lint チェック |
| `npm run lint:fix` | Lint 問題の自動修正 |

## 📝 ブログ記事の追加

新しい記事を追加する手順：

1. `src/content/blog/` に新しいマークダウンファイルを作成（例: `006-new-article.md`）

2. Frontmatter（YAML）形式でメタデータを記述：

```markdown
---
title: "記事のタイトル"
description: "記事の説明文（150文字程度）"
pubDate: 2024-02-10
author: "著者名"
---

ここに記事の本文を記述します...
```

3. 開発サーバーで確認：

```bash
npm run dev
```

4. 確認後、コミットしてプッシュ：

```bash
git add src/content/blog/006-new-article.md
git commit -m "feat: Add new blog article"
git push
```

## 🗂️ プロジェクト構造

```
breaking-brake.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Pages 自動デプロイ
├── src/
│   ├── components/
│   │   ├── Header.astro        # ヘッダーコンポーネント
│   │   └── Footer.astro        # フッターコンポーネント
│   ├── layouts/
│   │   ├── Layout.astro        # 基本レイアウト
│   │   └── BlogLayout.astro    # ブログ記事用レイアウト
│   ├── pages/
│   │   ├── index.astro         # トップページ
│   │   ├── about.astro         # 概要ページ
│   │   └── blog/
│   │       └── [...slug].astro # 動的ブログページ
│   └── content/
│       ├── config.ts           # コンテンツコレクション設定
│       └── blog/               # ブログ記事（Markdown）
│           ├── 001-cc-wf-studio-intro.md
│           ├── 002-quick-start-tutorial.md
│           ├── 003-usecase-data-analysis.md
│           ├── 004-usecase-code-review.md
│           └── 005-faq.md
├── public/                     # 静的ファイル
├── astro.config.mjs            # Astro 設定
├── biome.json                  # Biome 設定
├── tsconfig.json               # TypeScript 設定
└── package.json                # 依存関係
```

## 🚢 デプロイ

このサイトは GitHub Actions を使用して自動的にデプロイされます。

### 自動デプロイ

`main` ブランチへのプッシュ時に自動的にビルドとデプロイが実行されます。

### 手動デプロイ

GitHub Actions タブから「Deploy to GitHub Pages」ワークフローを手動実行することもできます。

## 🤝 コントリビューション

コントリビューションを歓迎します！以下の手順でご協力ください：

1. このリポジトリをフォーク
2. 新しいブランチを作成 (`git checkout -b feature/amazing-article`)
3. 変更をコミット (`git commit -m 'feat: Add amazing article'`)
4. ブランチにプッシュ (`git push origin feature/amazing-article`)
5. Pull Request を作成

詳細は [CONTRIBUTING.md](CONTRIBUTING.md) をご覧ください。

## 📄 ライセンス

このプロジェクトは MIT License の下で公開されています。詳細は [LICENSE](LICENSE) をご覧ください。

## 📞 サポート

- **問題報告**: [GitHub Issues](https://github.com/breaking-brake/breaking-brake.github.io/issues)
- **ディスカッション**: [GitHub Discussions](https://github.com/breaking-brake/breaking-brake.github.io/discussions)

---

⭐ Claude Code Workflow Studio に興味を持たれた方は、[本体リポジトリ](https://github.com/breaking-brake/cc-wf-studio) もぜひご覧ください！
