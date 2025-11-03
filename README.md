# Claude Code Workflow Studio

Claude AIを活用した開発ワークフロー自動化プラットフォーム。開発者の生産性を最大化し、より創造的なタスクに集中できる環境を提供します。

[![Built with Astro](https://img.shields.io/badge/Built%20with-Astro-FF5D01?logo=astro&logoColor=white)](https://astro.build)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## 🌟 特徴

- **AI駆動のコードレビュー**: Claude AIによる包括的なコード分析とレビュー
- **データ分析パイプライン**: データ収集から可視化までの完全自動化
- **テスト自動生成**: コードベースから適切なテストケースを自動生成
- **ドキュメント生成**: コードから技術ドキュメントを自動作成
- **カスタマイズ可能**: プロジェクトのニーズに合わせた柔軟なワークフロー設定

## 📚 ドキュメント

詳しい情報は公式サイトをご覧ください：
- 🏠 [ホームページ](https://breaking-brake.github.io/)
- 📖 [クイックスタートガイド](https://breaking-brake.github.io/blog/002-quick-start-tutorial)
- 💡 [ユースケース集](https://breaking-brake.github.io/blog/)
- ❓ [FAQ](https://breaking-brake.github.io/blog/005-faq)

## 🚀 セットアップ

### 必要要件

- **Node.js**: v18.0.0 以上
- **npm**: v9.0.0 以上
- **Claude API キー**: [Anthropic Console](https://console.anthropic.com/) で取得

### インストール手順

1. **リポジトリのクローン**

```bash
git clone https://github.com/breaking-brake/breaking-brake.github.io.git
cd breaking-brake.github.io
```

2. **依存関係のインストール**

```bash
npm install
```

3. **環境変数の設定**

`.env` ファイルを作成し、APIキーを設定します：

```bash
ANTHROPIC_API_KEY=your_api_key_here
```

4. **開発サーバーの起動**

```bash
npm run dev
```

ブラウザで `http://localhost:4321` を開いてサイトを確認できます。

## 🛠️ 利用可能なコマンド

プロジェクトのルートディレクトリで以下のコマンドを実行できます：

| コマンド | 説明 |
|---------|------|
| `npm run dev` | 開発サーバーを起動（`localhost:4321`） |
| `npm run build` | 本番用サイトを `./dist/` にビルド |
| `npm run preview` | ビルドしたサイトをローカルでプレビュー |
| `npm run astro ...` | Astro CLIコマンドを実行（例: `astro add`, `astro check`） |

## 📦 ビルド方法

本番環境用にサイトをビルドするには：

```bash
npm run build
```

ビルドされたファイルは `dist/` ディレクトリに出力されます。

### ビルド結果のプレビュー

```bash
npm run preview
```

## 🌐 GitHub Pages へのデプロイ

このプロジェクトは GitHub Actions を使用して自動的にデプロイされます。

### 自動デプロイ

`main` ブランチへのプッシュ時に自動的にビルドとデプロイが実行されます。
ワークフローファイル: `.github/workflows/deploy.yml`

### 手動デプロイ

GitHub Actions タブから「Deploy to GitHub Pages」ワークフローを手動実行することもできます。

### 初回セットアップ

1. リポジトリの Settings > Pages を開く
2. Source を「GitHub Actions」に設定
3. `main` ブランチにプッシュすると自動デプロイが開始されます

## 🤝 コントリビューション

コントリビューションを歓迎します！詳細は [CONTRIBUTING.md](CONTRIBUTING.md) をご覧ください。

### コントリビューション方法

1. このリポジトリをフォーク
2. 新しいブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m 'Add some amazing feature'`)
4. ブランチにプッシュ (`git push origin feature/amazing-feature`)
5. Pull Request を作成

## 📝 ブログ記事の追加方法

新しいブログ記事を追加するには：

1. `src/content/blog/` に新しいマークダウンファイルを作成
2. frontmatter（YAML）形式でメタデータを記述：

```markdown
---
title: "記事のタイトル"
description: "記事の説明文"
pubDate: 2024-01-01
author: "著者名"
image: "/images/article.jpg"  # オプション
---

記事の本文をここに記述...
```

3. 開発サーバーで確認後、コミットしてプッシュ

## 🗂️ プロジェクト構造

```
breaking-brake.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions デプロイワークフロー
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
├── public/                     # 静的ファイル
├── astro.config.mjs           # Astro設定
├── tsconfig.json              # TypeScript設定
├── package.json               # 依存関係
└── README.md                  # このファイル
```

## 🛠️ 使用技術

- **[Astro](https://astro.build)**: 静的サイトジェネレーター
- **[TypeScript](https://www.typescriptlang.org/)**: 型安全性の向上
- **[Claude AI](https://www.anthropic.com/claude)**: AI駆動の機能
- **[GitHub Actions](https://github.com/features/actions)**: CI/CD自動化

## 📄 ライセンス

このプロジェクトは MIT License の下で公開されています。詳細は [LICENSE](LICENSE) をご覧ください。

## 🔗 リンク

- **公式サイト**: [https://breaking-brake.github.io/](https://breaking-brake.github.io/)
- **GitHub リポジトリ**: [https://github.com/breaking-brake/breaking-brake.github.io](https://github.com/breaking-brake/breaking-brake.github.io)
- **Anthropic**: [https://www.anthropic.com/](https://www.anthropic.com/)
- **Astro ドキュメント**: [https://docs.astro.build/](https://docs.astro.build/)

## 📞 サポート

- **問題報告**: [GitHub Issues](https://github.com/breaking-brake/breaking-brake.github.io/issues)
- **ディスカッション**: [GitHub Discussions](https://github.com/breaking-brake/breaking-brake.github.io/discussions)
- **質問**: [FAQ](https://breaking-brake.github.io/blog/005-faq)

---

⭐ このプロジェクトが役に立ったら、ぜひスターをお願いします！
