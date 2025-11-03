---
title: "ユースケース：データ分析ワークフローの設計"
description: "Claude Code Workflow Studioでデータ分析ワークフローを視覚的に設計する方法を実例とともに解説します。設計のポイントとベストプラクティスを学びましょう。"
pubDate: 2024-01-25
author: "Data Engineering Team"
---

## はじめに

データ分析作業は、収集、変換、分析、レポート生成と複数のステップを踏む複雑なプロセスです。Claude Code Workflow Studioを使えば、このような複雑なワークフローを視覚的に設計し、Claude Codeで繰り返し実行できます。

## 課題

データアナリストが直面する典型的な課題：

- **毎回同じ手順を繰り返す**: プロジェクトデータの週次分析など
- **複数の選択肢**: 統計分析、可視化、機械学習など、目的に応じて処理を変更
- **エラーが起きやすい**: 手動操作でステップを飛ばしたり、間違ったファイルを読んだり
- **ドキュメント化されていない**: 分析手順がチームで共有されていない

## ソリューション：ビジュアルワークフロー設計

Claude Code Workflow Studioで分析ワークフローを設計すれば：

- **視覚的に設計**: フロー全体を一目で把握
- **再利用可能**: 一度設計すれば何度でも実行
- **チーム共有**: JSONファイルで簡単に共有
- **柔軟な分岐**: 目的に応じて処理を切り替え

## ワークフロー設計例

### 全体構成

データ分析ワークフローは以下のステップで構成します：

```
[Start]
   ↓
[Data Collector] ← データファイル収集
   ↓
[Data Validator] ← データ検証
   ↓
[Choose Analysis Type] ← ユーザーが選択
   ↓
[Statistical Analysis] または [Data Visualization]
   ↓
[Report Generator] ← 結果をレポート化
   ↓
[End]
```

### ステップ1: Data Collector（データ収集）

#### ノード設定

**ノードタイプ**: Sub-Agent

**設定**：
- **Name**: `Data Collector`
- **Prompt**:
```
プロジェクトのdataディレクトリから以下のファイルを探して読み込んでください：
- metrics.csv: 開発メトリクス
- logs.json: アプリケーションログ
- performance.csv: パフォーマンスデータ

各ファイルの内容を確認し、データの形式と件数を報告してください。
```
- **Tools**: Read, Glob
- **Model**: Sonnet

#### 設計のポイント

- **Tools**: ファイル検索（Glob）と読み込み（Read）のみ許可
- **明確な指示**: 対象ファイルを具体的に指定
- **検証**: データの形式と件数を確認させることで、次のステップでのエラーを防止

### ステップ2: Data Validator（データ検証）

#### ノード設定

**ノードタイプ**: Sub-Agent

**設定**：
- **Name**: `Data Validator`
- **Prompt**:
```
収集されたデータを検証してください：
1. 必須カラムが存在するか確認
2. 欠損値の割合を計算
3. データ型が期待通りか確認
4. 異常値や外れ値を検出

問題がある場合は詳細を報告し、軽微な問題は自動修正してください。
```
- **Tools**: Read
- **Model**: Sonnet

#### 設計のポイント

- **エラー検出**: 後続の分析で問題にならないよう事前チェック
- **自動修正**: 軽微な問題（型変換など）は自動で対応
- **明確なレポート**: 問題箇所を具体的に報告

### ステップ3: Choose Analysis Type（分析タイプ選択）

#### ノード設定

**ノードタイプ**: AskUserQuestion

**設定**：
- **Question**: `どの分析を実行しますか？`
- **Header**: `Analysis Type`
- **Options**:
  - **Option 1**:
    - Label: `統計分析`
    - Description: `平均、中央値、相関係数などの統計指標を計算`
  - **Option 2**:
    - Label: `データ可視化`
    - Description: `時系列グラフやヒストグラムを生成`
  - **Option 3**:
    - Label: `両方実行`
    - Description: `統計分析と可視化の両方を実行`

#### 設計のポイント

- **明確な選択肢**: 各選択肢の内容を詳しく説明
- **柔軟性**: ユーザーの目的に応じて処理を切り替え
- **複数選択対応**: `multiSelect: false`（排他的選択）

### ステップ4: Statistical Analyzer（統計分析）

#### ノード設定

**ノードタイプ**: Sub-Agent

**設定**：
- **Name**: `Statistical Analyzer`
- **Prompt**:
```
検証済みデータに対して統計分析を実行してください：

1. 基本統計量
   - 平均、中央値、標準偏差
   - 最小値、最大値、四分位数

2. 相関分析
   - 変数間の相関係数
   - 強い相関関係の特定

3. トレンド分析
   - 時系列データの傾向
   - 周期性や季節性の検出

4. 異常検出
   - 外れ値の特定
   - 異常パターンの検出

結果をMarkdown形式でまとめてください。
```
- **Tools**: Read
- **Model**: Opus（複雑な分析のため）

#### 設計のポイント

- **Opus モデル**: 高度な分析にはOpusを使用
- **体系的な分析**: 段階的に分析項目を指定
- **構造化された出力**: Markdown形式で読みやすく

### ステップ5: Data Visualizer（データ可視化）

#### ノード設定

**ノードタイプ**: Sub-Agent

**設定**：
- **Name**: `Data Visualizer`
- **Prompt**:
```
検証済みデータを可視化してください：

1. 時系列グラフ
   - 各メトリクスの推移
   - 期間：過去30日間

2. ヒストグラム
   - 各変数の分布

3. 散布図
   - 変数間の関係性

4. ヒートマップ
   - 相関行列の可視化

Mermaidまたはテキストベースのグラフで表現してください。
```
- **Tools**: Read
- **Model**: Sonnet

#### 設計のポイント

- **テキストベース**: Mermaidなどテキストで表現可能な図を使用
- **複数の視点**: 異なる種類のグラフで多角的に分析
- **明確な期間指定**: 時系列グラフの範囲を明示

### ステップ6: Report Generator（レポート生成）

#### ノード設定

**ノードタイプ**: Sub-Agent

**設定**：
- **Name**: `Report Generator`
- **Prompt**:
```
分析結果を統合して最終レポートを作成してください：

## データ分析レポート
### 実行日時: {{timestamp}}

### 1. データ概要
- 収集したデータの概要
- データ品質の評価

### 2. 分析結果
- 統計分析の結果（実行された場合）
- 可視化の結果（実行された場合）

### 3. 主要な発見事項
- 重要なインサイト（3-5項目）
- 注意すべき異常値やトレンド

### 4. 推奨アクション
- 分析結果に基づく具体的な推奨事項

レポートはreports/ディレクトリに保存してください。
```
- **Tools**: Read, Write
- **Model**: Sonnet

#### 設計のポイント

- **Write権限**: レポートファイルを保存するため
- **構造化**: 見やすいレポート構成
- **アクショナブル**: 推奨事項を含める

## ノードの接続

### 基本フロー

```
Data Collector → Data Validator → Choose Analysis Type
```

### 分岐処理

**「統計分析」選択時**:
```
Choose Analysis Type → Statistical Analyzer → Report Generator
```

**「データ可視化」選択時**:
```
Choose Analysis Type → Data Visualizer → Report Generator
```

**「両方実行」選択時**:
両方のノードを実行後、Report Generatorへ（Branchノードで制御）

## 保存とエクスポート

### 保存

1. ワークフロー名を入力: `data-analysis-pipeline`
2. **Save** ボタンをクリック
3. `.vscode/workflows/data-analysis-pipeline.json` に保存

### エクスポート

1. **Export** ボタンをクリック
2. 生成されるファイル：
   - `.claude/agents/Data_Collector.md`
   - `.claude/agents/Data_Validator.md`
   - `.claude/agents/Statistical_Analyzer.md`
   - `.claude/agents/Data_Visualizer.md`
   - `.claude/agents/Report_Generator.md`
   - `.claude/commands/data-analysis-pipeline.md`

## 実行方法

Claude Codeで以下のコマンドを実行：

```
/data-analysis-pipeline
```

ワークフローが起動し、各ステップが順番に実行されます。

## ベストプラクティス

### 1. エラーハンドリングの設計

データが見つからない場合の処理を考慮：

- Data Collectorで「ファイルが見つからない場合はユーザーに報告」と明記
- Branchノードでファイル存在チェックを挟む

### 2. モデルの使い分け

- **Haiku**: 簡単なデータ収集や検証
- **Sonnet**: 標準的な分析やレポート生成
- **Opus**: 複雑な統計分析や予測

### 3. プロンプトの明確化

良い例：
```
dataディレクトリ内の全CSVファイルを読み込み、
各ファイルの行数とカラム名を報告してください。
```

悪い例：
```
データを読んで分析してください。
```

### 4. ツール権限の最小化

各ノードには必要最小限のツールのみ付与：
- Data Collector: Read, Glob のみ
- Report Generator: Read, Write のみ

## 応用例

### 週次レポート自動生成

設計したワークフローに「スケジュール実行」を追加すれば、毎週自動でレポート生成が可能になります（Claude Code の機能と組み合わせ）。

### A/Bテスト分析

「Choose Analysis Type」の代わりに「Choose Test Group」ノードを追加し、グループ別の分析フローを設計できます。

### 異常検知アラート

Report Generatorの後に「Alert Checker」ノードを追加し、特定の閾値を超えた場合に通知を送信することも可能です。

## まとめ

Claude Code Workflow Studioを使えば、複雑なデータ分析ワークフローを視覚的に設計できます。

**覚えておくべきポイント**：
- ✅ 段階的にステップを分割
- ✅ ユーザー選択で柔軟な分岐
- ✅ 各ノードに明確なプロンプトを設定
- ✅ ツール権限は必要最小限に

次は、[コードレビューワークフローの設計](/blog/004-usecase-code-review)で別のユースケースを見てみましょう。
