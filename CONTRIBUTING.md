# コントリビューションガイド

Claude Code Workflow Studio へのコントリビューションに興味を持っていただき、ありがとうございます！このガイドでは、プロジェクトに貢献する方法について説明します。

## 目次

- [行動規範](#行動規範)
- [始める前に](#始める前に)
- [開発環境のセットアップ](#開発環境のセットアップ)
- [コントリビューションの種類](#コントリビューションの種類)
- [ブログ記事の追加方法](#ブログ記事の追加方法)
- [コーディング規約](#コーディング規約)
- [Pull Request のプロセス](#pull-request-のプロセス)
- [コミットメッセージの規約](#コミットメッセージの規約)
- [レビュープロセス](#レビュープロセス)

## 行動規範

このプロジェクトは、すべての参加者に対して尊重と礼儀を求めます。以下の行動を期待します：

- 建設的で敬意あるコミュニケーション
- 異なる視点や経験への配慮
- 建設的な批判の受け入れと提供
- コミュニティの利益を最優先に考える行動

## 始める前に

コントリビューションを始める前に：

1. **既存の Issue を確認**: 同じ問題や提案がすでに報告されていないか確認してください
2. **ディスカッションを開始**: 大きな変更を加える前に、GitHub Discussions で議論することをお勧めします
3. **Issue を作成**: 新しい機能やバグ修正の場合は、まず Issue を作成してください

## 開発環境のセットアップ

### 必要要件

- Node.js v18.0.0 以上
- npm v9.0.0 以上
- Git
- テキストエディタ（VS Code 推奨）

### セットアップ手順

1. **リポジトリのフォーク**

GitHubでリポジトリをフォークします。

2. **ローカルにクローン**

```bash
git clone https://github.com/YOUR_USERNAME/breaking-brake.github.io.git
cd breaking-brake.github.io
```

3. **upstream リモートの追加**

```bash
git remote add upstream https://github.com/breaking-brake/breaking-brake.github.io.git
```

4. **依存関係のインストール**

```bash
npm install
```

5. **開発サーバーの起動**

```bash
npm run dev
```

ブラウザで `http://localhost:4321` を開いて、サイトが正しく動作することを確認してください。

### 推奨される VS Code 拡張機能

- [Astro](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

## コントリビューションの種類

### 1. バグ報告

バグを発見した場合：

1. 既存の Issue を検索して、同じ問題が報告されていないか確認
2. 新しい Issue を作成し、以下を含める：
   - 問題の明確な説明
   - 再現手順
   - 期待される動作
   - 実際の動作
   - 環境情報（OS、Node.jsバージョンなど）
   - スクリーンショット（該当する場合）

### 2. 機能リクエスト

新機能の提案：

1. GitHub Discussions で提案を共有
2. コミュニティのフィードバックを得る
3. 合意が得られたら Issue を作成

### 3. ドキュメントの改善

- タイポの修正
- 説明の明確化
- 新しいチュートリアルの追加
- 翻訳

### 4. コードの改善

- バグ修正
- パフォーマンス向上
- リファクタリング
- 新機能の実装

## ブログ記事の追加方法

新しいブログ記事を追加する手順：

### 1. ファイルの作成

`src/content/blog/` ディレクトリに新しいマークダウンファイルを作成します：

```bash
touch src/content/blog/XXX-article-title.md
```

ファイル名の規則：
- `XXX`: 3桁の連番（例：006, 007）
- `article-title`: 記事のタイトル（kebab-case）

### 2. Frontmatter の記述

ファイルの先頭に YAML frontmatter を追加：

```yaml
---
title: "記事のタイトル"
description: "記事の概要（150文字程度）"
pubDate: 2024-01-01
author: "著者名"
image: "/images/article-image.jpg"  # オプション
---
```

### 3. 本文の執筆

Markdown 形式で記事を執筆します。以下の要素を適切に使用してください：

- 見出し（`##`, `###`, `####`）
- リスト（順序付き、順序なし）
- コードブロック（言語指定付き）
- リンク
- 画像
- 引用

### 4. 確認

開発サーバーで記事を確認：

```bash
npm run dev
```

`http://localhost:4321/blog/XXX-article-title` にアクセスして表示を確認します。

### 5. Pull Request の作成

記事が完成したら、Pull Request を作成してください。

## コーディング規約

### TypeScript / JavaScript

- **フォーマット**: Prettier を使用（自動フォーマット）
- **命名規則**:
  - 変数・関数: camelCase
  - 型・インターフェース: PascalCase
  - 定数: UPPER_SNAKE_CASE
- **型定義**: 可能な限り型を明示
- **コメント**: 複雑なロジックには説明を追加

### Astro コンポーネント

- **ファイル名**: PascalCase（例：`BlogCard.astro`）
- **Props の型定義**: 必ず interface で定義
- **スタイル**: scoped スタイルを優先

例：

```astro
---
interface Props {
  title: string;
  description: string;
  date: Date;
}

const { title, description, date } = Astro.props;
---

<article>
  <h2>{title}</h2>
  <p>{description}</p>
  <time>{date.toLocaleDateString()}</time>
</article>

<style>
  article {
    padding: 1rem;
    border: 1px solid #ddd;
  }
</style>
```

### CSS / スタイル

- **命名**: BEM または semantic な命名
- **単位**: rem を優先（アクセシビリティのため）
- **レスポンシブ**: モバイルファーストで設計

## Pull Request のプロセス

### 1. ブランチの作成

機能ごとに新しいブランチを作成：

```bash
git checkout -b feature/amazing-feature
# または
git checkout -b fix/bug-description
```

ブランチ名の規則：
- `feature/`: 新機能
- `fix/`: バグ修正
- `docs/`: ドキュメント更新
- `refactor/`: リファクタリング
- `test/`: テスト追加

### 2. 変更の実装

- 小さく、論理的な単位でコミット
- 各コミットは独立して動作すること
- コミットメッセージは規約に従う（後述）

### 3. テストとビルド

変更をプッシュする前に：

```bash
# ビルドが成功することを確認
npm run build

# 型チェック（該当する場合）
npx tsc --noEmit

# リンティング（該当する場合）
npm run lint
```

### 4. 最新の main ブランチとの同期

```bash
git fetch upstream
git rebase upstream/main
```

### 5. プッシュ

```bash
git push origin feature/amazing-feature
```

### 6. Pull Request の作成

GitHub で Pull Request を作成します。PR には以下を含めてください：

- **明確なタイトル**: 変更内容を簡潔に説明
- **説明**:
  - 変更の目的
  - 実装内容
  - 関連する Issue（`Closes #123` など）
  - スクリーンショット（UIの変更がある場合）
  - テスト方法
- **チェックリスト**:
  - [ ] コードが正しく動作する
  - [ ] ビルドが成功する
  - [ ] コーディング規約に従っている
  - [ ] 適切なコミットメッセージ
  - [ ] ドキュメントを更新（必要な場合）

## コミットメッセージの規約

[Conventional Commits](https://www.conventionalcommits.org/) 形式を推奨します：

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Type

- `feat`: 新機能
- `fix`: バグ修正
- `docs`: ドキュメント更新
- `style`: コードの意味に影響しない変更（フォーマットなど）
- `refactor`: リファクタリング
- `test`: テスト追加・修正
- `chore`: ビルドプロセスやツールの変更

### 例

```
feat(blog): add new article about data analysis

データ分析パイプラインの自動化に関する新しいブログ記事を追加

Closes #42
```

```
fix(layout): correct responsive design for mobile

モバイルデバイスでのレイアウト崩れを修正
- ヘッダーの幅を調整
- フッターのパディングを変更
```

## レビュープロセス

### レビュアーへのお願い

- 建設的なフィードバックを提供
- 質問や懸念事項を明確に伝える
- 良い点も指摘する
- タイムリーにレビューする（可能であれば48時間以内）

### コントリビューターへのお願い

- フィードバックを前向きに受け止める
- 必要に応じて質問や説明を求める
- 変更が求められた場合は迅速に対応
- レビュアーに感謝の意を示す

### レビュー後

承認されたら：
1. メンテナーがマージします
2. ブランチは自動的に削除されます
3. あなたのコントリビューションが main ブランチに反映されます

## テストガイドライン

（将来的にテストフレームワークを導入する予定）

現時点では：
1. 手動でのテストを推奨
2. 複数のブラウザで動作確認
3. モバイル・デスクトップ両方で確認

## 質問がある場合

- [GitHub Discussions](https://github.com/breaking-brake/breaking-brake.github.io/discussions) で質問
- [FAQ](https://breaking-brake.github.io/blog/005-faq) を確認
- [Issue](https://github.com/breaking-brake/breaking-brake.github.io/issues) を作成

## 謝辞

コントリビューターの皆様に心から感謝いたします。皆様の貢献がこのプロジェクトをより良いものにしています！

---

Happy Contributing! 🎉
