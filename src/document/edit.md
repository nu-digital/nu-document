# 編集の流れ

## 1. 開発サーバーの起動

リポジトリをクローンして開発サーバーを起動
環境構築の手順に従い、

```bash
npm run docs:dev
```

でローカルサーバーを起動しておきます。

## 2. 作業ブランチの作成

まず、main ブランチから作業用の新しいブランチを作成し、切り替えます。
このブランチ上で編集・コミットを行います。

```bash
git checkout -b <branch-name> main
```

## 3. Markdown ファイルの編集

src フォルダ内の Markdown（.md）ファイルを編集します。

編集内容の確認とコミット
ファイルを保存すると、ローカルサーバーに自動で反映されます。
作業が一区切りついたら、変更をコミットします。

```bash
git commit -a -m "commit-message"
```

## 4. GitHub への反映

作業内容は原則プルリクエストで反映します。
作業ブランチをリモートにプッシュして、GitHub 上で main へのプルリクエストを作成します。

```bash
git push -u origin <branch-name>
```

## 5. GitHub CLI でプルリクエスト作成

GitHub CLI（gh）をインストールしている場合は以下で作成できます。

```bash
gh pr create --base main --head <branch-name> --title "pr-title" --body "description"
```
