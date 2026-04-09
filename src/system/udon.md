# Udon

## Udon とは？

**Udon** は、**VRChat ワールド用のプログラミング言語**です。  
ワールド内のオブジェクト、プレイヤー、ネットワーク同期変数などを制御でき、  
VRChat ワールドにさまざまな仕組みやインタラクションを実装できます。

## Udon の特徴

- VRChat 上・Unity Editor 上の両方で動作
- ビルドやアップロードを行わずにテスト・デバッグが可能
- VRChat SDK に標準で組み込まれている

## Udon スクリプトの作成方法

VRChat ワールドで Udon を使う方法は、主に **2 種類**あります。

### 1. Udon Node Graph

**ビジュアルプログラミング方式**で、ノードとワイヤーをつないで処理を構築します。

#### 特徴

- コードを書かずに制作できる
- Unity の Animator や Unreal Engine の Blueprint に近い操作感
- VRChat SDK 独自の機能で、追加ツールは不要

#### 向いている人

- プログラミング未経験者
- コードを書くのが苦手な人

### 2. UdonSharp

**C# を使ってスクリプトを書く方法**です。

#### 特徴

- Unity の通常の C# スクリプトに近い書き方
- 可読性が高く、複雑な処理を実装しやすい
- 内部的には Udon 用のコードに変換されて実行される

#### 向いている人

- プログラミング経験がある人
- 本格的・拡張性の高い処理を実装したい場合

::: tip
Udon Node Graph で作成したものを UdonSharp で書き直すことも可能です。どちらで始めるか迷ったときは参考にしている動画や記事に合わせて選ぶのが良いと思います。
:::

## 学習リソース

### VRChat 公式ドキュメント

- VRChat Creators  
  https://creators.vrchat.com/economy/

### 無料の解説書

- Udon / UdonSharp 解説書（Booth）  
  https://booth.pm/ja/items/4409611
