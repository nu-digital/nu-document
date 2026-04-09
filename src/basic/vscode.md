# Visual Studio Code（VSCode）

## VSCode とは？

- Microsoft が開発した無料のコードエディタ
- 軽量かつ高機能（拡張機能・デバッグ・Git 統合など）
- Web 開発、Python、C++ など様々な言語に対応

## インストール手順

1. 公式サイト https://code.visualstudio.com/ からダウンロード
2. インストーラを実行してインストール

## 基本的な使い方

### プロジェクトを開く

- editor で VScode を選択
- code .と打つとターミナルから VScode を起動可能

```bash
code .

```

### ファイルの作成・編集

- 右側のエクスプローラーで新しいファイルやフォルダー作成。
- 保存は `Ctrl + S`

### ターミナルの使用

- 上側のパネルの切り替えを押す(いちいちターミナル画面に切り替える手間がなくなる!!)
- `bash`, `zsh`, `PowerShell`, `cmd` などが利用可能

### Git 操作

- 左のソース管理からコミットやプッシュが可能(gui なのでコマンドでうつよりやりやすい)

## 自動保存(任意)

- VScode を開いてファイル → ユーザー設定 → 設定を開く。
- 設定画面が表示されたら検索ボックスに「Auto Save」と入力し、Files:Auto Save を off から delay に。

## おすすめ拡張機能

| 拡張機能名                             | 説明              |
| -------------------------------------- | ----------------- |
| **Japanese Language Pack for VS Code** | VSCode を日本語化 |
| **Prettier - Code formatter**          | 自動コード整形    |
