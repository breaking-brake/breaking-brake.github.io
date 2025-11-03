---
title: "クイックスタートガイド"
description: "Claude Code Workflow Studioのインストールから基本的な使い方、サンプルワークフローの実行まで、ステップバイステップで解説します。"
pubDate: 2024-01-20
author: "Claude Code Team"
---

## はじめに

このガイドでは、Claude Code Workflow Studioをゼロから始めて、最初のワークフローを実行するまでの手順を解説します。約10分で基本的な使い方を習得できます。

## 前提条件

以下のツールがインストールされている必要があります：

- **Node.js**: v18.0.0 以上
- **npm**: v9.0.0 以上（Node.jsに同梱）
- **Git**: バージョン管理用
- **Claude API キー**: Anthropicから取得（[Console](https://console.anthropic.com/)で登録）

## インストール手順

### 1. リポジトリのクローン

まず、GitHubからリポジトリをクローンします：

```bash
git clone https://github.com/breaking-brake/breaking-brake.github.io.git
cd breaking-brake.github.io
```

### 2. 依存関係のインストール

プロジェクトディレクトリで以下のコマンドを実行します：

```bash
npm install
```

このコマンドにより、必要なすべてのパッケージがインストールされます。

### 3. 環境変数の設定

プロジェクトのルートディレクトリに `.env` ファイルを作成し、以下の内容を追加します：

```bash
ANTHROPIC_API_KEY=your_api_key_here
```

`your_api_key_here` を、Anthropic Consoleで取得したAPIキーに置き換えてください。

### 4. 開発サーバーの起動

以下のコマンドで開発サーバーを起動します：

```bash
npm run dev
```

ブラウザで `http://localhost:4321` を開くと、サイトが表示されます。

## 基本的な使い方

### ワークフローの基本構造

Claude Code Workflow Studioのワークフローは、YAML形式で定義します。基本的な構造は以下の通りです：

```yaml
name: "サンプルワークフロー"
description: "簡単な自動化ワークフローの例"
trigger:
  type: "manual"
steps:
  - name: "コード分析"
    action: "analyze_code"
    params:
      path: "src/"
  - name: "レポート生成"
    action: "generate_report"
    params:
      format: "markdown"
```

### ワークフローの作成

プロジェクトの `.claude/workflows` ディレクトリに新しいワークフローファイルを作成します：

```bash
mkdir -p .claude/workflows
touch .claude/workflows/my-first-workflow.yml
```

### サンプルワークフローの実行

最初のワークフローとして、簡単なコードレビューワークフローを作成しましょう。

`.claude/workflows/code-review.yml` を作成し、以下の内容を記述します：

```yaml
name: "自動コードレビュー"
description: "変更されたファイルを自動的にレビューします"
trigger:
  type: "on_push"
  branch: "main"
steps:
  - name: "変更ファイルの取得"
    action: "get_changed_files"

  - name: "コードレビューの実行"
    action: "ai_code_review"
    params:
      style: "constructive"
      focus:
        - "security"
        - "performance"
        - "readability"

  - name: "レビュー結果の保存"
    action: "save_review"
    params:
      output: "reviews/review-{{ timestamp }}.md"
```

### ワークフローの実行

ワークフローを実行するには、以下のコマンドを使用します：

```bash
npm run workflow:run -- code-review
```

実行結果はコンソールに表示され、生成されたレポートは指定されたパスに保存されます。

## 主要なアクション

Claude Code Workflow Studioには、以下のような組み込みアクションが用意されています：

### コード分析系

- **analyze_code**: コードの静的解析
- **ai_code_review**: AIによるコードレビュー
- **find_bugs**: バグの自動検出
- **suggest_improvements**: 改善提案の生成

### テスト系

- **generate_tests**: テストケースの自動生成
- **run_tests**: テストの実行
- **coverage_report**: カバレッジレポートの生成

### ドキュメント系

- **generate_docs**: ドキュメントの自動生成
- **update_readme**: README の自動更新
- **create_changelog**: 変更履歴の作成

### データ処理系

- **extract_data**: データの抽出
- **transform_data**: データの変換
- **visualize_data**: データの可視化

## 実践例：毎日のコードチェック

実務でよく使われるパターンとして、毎日定時にコードチェックを実行するワークフローを作成してみましょう：

```yaml
name: "毎日のコードヘルスチェック"
description: "コードベースの健全性を毎日チェック"
trigger:
  type: "schedule"
  cron: "0 9 * * *"  # 毎日午前9時に実行
steps:
  - name: "最新コードの取得"
    action: "git_pull"

  - name: "コード品質分析"
    action: "analyze_code"
    params:
      path: "src/"
      metrics:
        - "complexity"
        - "duplication"
        - "maintainability"

  - name: "セキュリティスキャン"
    action: "security_scan"
    params:
      severity: "medium"

  - name: "テストカバレッジ確認"
    action: "coverage_report"
    params:
      threshold: 80

  - name: "レポート送信"
    action: "send_notification"
    params:
      channel: "slack"
      message: "本日のコードヘルスレポートが完成しました"
```

## トラブルシューティング

### よくある問題と解決方法

**問題1: APIキーが認識されない**

解決方法：
- `.env` ファイルが正しい場所にあるか確認
- APIキーが正しくコピーされているか確認
- 開発サーバーを再起動

**問題2: ワークフローが実行されない**

解決方法：
- YAML のシンタックスエラーをチェック
- ログファイル（`.claude/logs/`）を確認
- トリガー設定が正しいか確認

**問題3: 依存関係のインストールエラー**

解決方法：
- Node.js のバージョンを確認
- `node_modules` を削除して再インストール
- npm のキャッシュをクリア：`npm cache clean --force`

## 次のステップ

基本的な使い方を理解したら、以下の記事で実践的な活用方法を学びましょう：

1. [データ分析パイプラインの自動化](/blog/003-usecase-data-analysis)
2. [AI を活用したコードレビューワークフロー](/blog/004-usecase-code-review)
3. [よくある質問と回答](/blog/005-faq)

## まとめ

このクイックスタートガイドでは、インストールから基本的なワークフローの作成・実行まで学びました。Claude Code Workflow Studioは、シンプルながら強力な自動化ツールです。

ぜひ様々なワークフローを試して、自分のプロジェクトに最適な自動化を見つけてください！
