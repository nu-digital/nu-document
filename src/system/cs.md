# C#

## C# とは？

C#（シーシャープ）は、Microsoft が開発したオブジェクト指向プログラミング言語です。  
Unity では、ゲームのロジック・挙動・制御処理のほぼすべてを C# で記述します。

## オブジェクト指向プログラミングとは？

オブジェクト指向とは、  
**「モノ（オブジェクト）」を中心にプログラムを考える考え方**です。

### 基本概念

- **クラス（Class）**：オブジェクトの設計図
- **インスタンス（Instance）**：クラスから作られた実体
- **フィールド / プロパティ**：オブジェクトが持つデータ（状態）
- **メソッド**：オブジェクトが行う処理（振る舞い）

### 例

```csharp
class Player
{
    int hp;

    void Damage(int value)
    {
        hp -= value;
    }
}
```

::: tip
**「モノ（オブジェクト）」はデータとそれに関連するメソッド（関数）をカプセル化したもので、それぞれが独自の状態を持ち、他のオブジェクトと相互作用します。**
:::

## Unity におけるオブジェクト指向

Unity では、以下の構造でオブジェクト指向が使われます。

- **GameObject**：シーン上に存在する「モノ」
- **Component**：GameObject に付与される機能

**GameObject + Component = 振る舞いを持つオブジェクト**

## MonoBehaviour とは？

**MonoBehaviour** は、  
**Unity でスクリプトを書く際の基本クラス**です。

Unity のスクリプトは、基本的に  
`MonoBehaviour` を継承して作成します。

```csharp
using UnityEngine;

public class Sample : MonoBehaviour
{
}
```

## MonoBehaviour の役割

- GameObject にアタッチできる
- Unity のイベント関数を使用できる
- Inspector から値を設定できる

## ライフサイクル（イベント関数）

MonoBehaviour には、Unity が自動で呼び出す  
**ライフサイクル関数**があります。

```csharp
void Awake()        // 生成直後
void Start()        // 最初のフレーム
void Update()       // 毎フレーム
void FixedUpdate()  // 物理更新
void OnDestroy()    // 破棄時
```

## public と SerializeField

### public

- 他のスクリプトからアクセス可能
- Inspector に表示される

### SerializeField

- Inspector に表示される
- 外部からはアクセス不可

```csharp
[SerializeField]
private int speed;
```

## スクリプトとシーンの関係

- スクリプトは設計図
- GameObject にアタッチされて初めて動作する
- 同じスクリプトを複数の GameObject で使い回せる

## 学習リソース

### Unity 公式マニュアル（スクリプティング）

- Unity における C# の基本的な使い方や考え方が解説されています
- MonoBehaviour、イベント関数、コンポーネント設計の理解に役立ちます

https://docs.unity3d.com/ja/current/Manual/scripting.html

### C# コーディング規約

- 変数名・メソッド名の付け方
- 可読性の高いコードを書くためのルール

https://itjuku.com/csharp/18

### コードの簡略化テクニック

- C# で使える便利な構文や省略表現の紹介
- 可読性を保ちながらコードを短く書くためのヒント

https://qiita.com/Sakai_path/items/5cdbf0c3690d4c8a9d07

::: tip
**初心者はまず youtube で解説動画を見ながら実際に手を動かすのが大事です。そのあとは Unity 公式マニュアルをみたり実装したい機能を Qiita や Note で調べたりなど**
:::
