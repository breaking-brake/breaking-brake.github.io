---
title: "クイックスタートガイド"
description: "Claude Code Workflow Studioのインストールから基本的な使い方、最初のワークフロー作成とエクスポートまで、ステップバイステップで解説します。"
pubDate: 2024-01-20
author: "Claude Code Team"
---

## はじめに

このガイドでは、Claude Code Workflow Studioをインストールして、最初のワークフローを作成・エクスポートするまでの手順を解説します。約10分で基本的な使い方を習得できます。

## 前提条件

以下が必要です：

- **VSCode**: Visual Studio Code（最新版推奨）
- **Claude Code**: Anthropicの公式CLIツール

Claude Codeのインストール方法は、[公式ドキュメント](https://docs.anthropic.com/claude/docs/claude-code)をご覧ください。

## インストール手順

### 方法1: VSCode Marketplace から（推奨・Coming Soon）

1. VSCode を開く
2. 拡張機能ビュー（`Ctrl+Shift+X` / `Cmd+Shift+X`）を開く
3. "Claude Code Workflow Studio" を検索
4. **Install** をクリック

### 方法2: ソースから

現在はプライベートリポジトリのため、ソースからのインストールは利用できません。Marketplace公開をお待ちください。

## 基本的な使い方

### ステップ1: エディタを開く

1. VSCode でコマンドパレットを開く（`Ctrl+Shift+P` / `Cmd+Shift+P`）
2. "Claude Code Workflow Studio: Open Editor" と入力
3. Enterキーを押す

ビジュアルエディタが新しいタブで開きます。

### ステップ2: 最初のワークフローを作成

簡単なコードレビューワークフローを作成してみましょう。

#### 2-1. Sub-Agentノードを追加

1. 左側のノードパレットから **Sub-Agent** をクリック
2. キャンバスにノードが配置されます
3. ノードをクリックして右側のプロパティパネルで設定：
   - **Name**: "Code Reviewer"
   - **Prompt**: "コードを読み、品質、セキュリティ、パフォーマンスの観点からレビューしてください"
   - **Tools**: Read, Grep をチェック
   - **Model**: Sonnet（デフォルト）

#### 2-2. AskUserQuestionノードを追加

1. ノードパレットから **AskUserQuestion** をクリック
2. プロパティパネルで設定：
   - **Question**: "レビュー結果をどうしますか？"
   - **Header**: "Next Action"
   - **Options**:
     - Option 1: Label "修正する", Description "指摘された問題を修正"
     - Option 2: Label "保存のみ", Description "レビュー結果を保存して終了"

#### 2-3. ノードを接続

1. "Code Reviewer" ノードの右側（出力ポート）をクリック
2. "Next Action" ノードの左側（入力ポート）までドラッグ
3. 接続が作成されます

### ステップ3: ワークフローを保存

1. 上部ツールバーのテキストボックスにワークフロー名を入力
   - 例: "code-review-workflow"
2. **Save** ボタンをクリック
3. `.vscode/workflows/code-review-workflow.json` に保存されます

### ステップ4: エクスポート

1. **Export** ボタンをクリック
2. 確認ダイアログが表示されます
3. **OK** をクリック

以下のファイルが生成されます：

- `.claude/agents/Code_Reviewer.md` - Sub-Agent定義
- `.claude/commands/code-review-workflow.md` - SlashCommand

### ステップ5: Claude Code で実行

エクスポートしたワークフローを実行してみましょう：

1. VSCode のターミナルを開く
2. Claude Code を起動
3. スラッシュコマンドを入力：

```
/code-review-workflow
```

4. ワークフローが実行されます！

## 各ノードタイプの使い方

### Sub-Agent ノード

Claude Code のサブエージェントを定義します。

**設定項目**：
- **Name**: エージェントの名前（ファイル名になります）
- **Prompt**: エージェントの振る舞いを記述
- **Tools**: 使用可能なツール（Read, Write, Bash など）
- **Model**: 使用するモデル（Sonnet/Opus/Haiku）

**使用例**：
- コードレビュー専用エージェント
- データ分析エージェント
- ドキュメント生成エージェント

### AskUserQuestion ノード

ユーザーに選択肢を提示し、条件分岐を作成します。

**設定項目**：
- **Question**: ユーザーへの質問
- **Header**: 短いラベル（12文字以内）
- **Options**: 2〜4個の選択肢
- **Multi Select**: 複数選択を許可するか

**使用例**：
- 処理方法の選択
- 優先度の設定
- フォーマットの選択

### Prompt ノード

再利用可能なプロンプトテンプレートを定義します。

**設定項目**：
- **Name**: プロンプトの名前
- **Template**: テンプレート本文（`{{variable}}` で変数使用可能）

**使用例**：
- コードレビューテンプレート
- レポート生成テンプレート
- 質問応答テンプレート

### Branch ノード

条件に基づいて処理を分岐します。

**モード**：
- **Conditional**: True/False の2方向分岐
- **Switch**: 2〜N個の多方向分岐

**使用例**：
- ファイルの存在チェック
- エラーハンドリング
- 処理結果による分岐

## 実践例：データ分析ワークフロー

より実践的な例として、データ分析ワークフローを作成してみましょう：

### フロー構成

1. **Data Collector** (Sub-Agent)
   - データファイルを収集
   - Tools: Read, Glob

2. **Choose Analysis** (AskUserQuestion)
   - 統計分析 or 可視化を選択

3. **Statistical Analyzer** (Sub-Agent)
   - 統計分析を実行（統計分析選択時）

4. **Data Visualizer** (Sub-Agent)
   - グラフを生成（可視化選択時）

5. **Report Generator** (Sub-Agent)
   - 最終レポートを作成
   - Tools: Write

### 作成手順

1. 各Sub-Agentノードを配置
2. AskUserQuestionノードを配置
3. ノードを接続：
   - Data Collector → Choose Analysis
   - Choose Analysis → Statistical Analyzer（統計分析選択時）
   - Choose Analysis → Data Visualizer（可視化選択時）
   - Statistical Analyzer → Report Generator
   - Data Visualizer → Report Generator

4. ワークフロー名を入力：`data-analysis`
5. Save → Export

これで `/data-analysis` コマンドで実行できます！

## ワークフローの管理

### 保存したワークフローを読み込む

1. ツールバーの **Load** ドロップダウンをクリック
2. `.vscode/workflows/` 内のファイル一覧が表示されます
3. 読み込みたいワークフローを選択

### ワークフローを更新する

1. ワークフローを読み込む
2. ノードを編集
3. 同じ名前で **Save** をクリック
4. 上書き保存されます

### ワークフローをバージョン管理

`.vscode/workflows/*.json` ファイルは Git で管理できます：

```bash
git add .vscode/workflows/
git commit -m "Add code review workflow"
```

チームメンバーと共有する場合も、このファイルをリポジトリに含めるだけです。

## トラブルシューティング

### ワークフローが保存できない

**原因**：ワークフロー名に使用できない文字が含まれている

**解決方法**：
- 英数字、ハイフン、アンダースコアのみ使用
- スペースや特殊文字は避ける

### エクスポートに失敗する

**原因**：ノードの設定が不完全

**解決方法**：
- すべてのノードに名前が設定されているか確認
- 必須フィールドが入力されているか確認
- エラーメッセージをVSCode通知で確認

### ワークフローリストが更新されない

**解決方法**：
- Load ドロップダウンの更新ボタン（↻）をクリック
- エディタを閉じて再度開く

### Claude Code でコマンドが認識されない

**原因**：エクスポート後、Claude Code を再起動していない

**解決方法**：
- Claude Code を一度終了
- 再度起動すると新しいコマンドが認識されます

## 次のステップ

基本的な使い方を理解したら、実践的なユースケースを学びましょう：

1. [データ分析ワークフローの設計](/blog/003-usecase-data-analysis)
2. [コードレビューワークフローの設計](/blog/004-usecase-code-review)
3. [よくある質問と回答](/blog/005-faq)

## まとめ

Claude Code Workflow Studioを使えば、プログラミング不要でClaude Codeのワークフローを視覚的に設計できます。

**覚えておくべきポイント**：
- ✅ ドラッグ&ドロップで直感的に設計
- ✅ JSON形式で保存し、Gitで管理
- ✅ エクスポートしてすぐにClaude Codeで実行
- ✅ チームでワークフローを共有可能

ぜひ様々なワークフローを試して、自分のプロジェクトに最適な自動化を見つけてください！
