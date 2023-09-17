# 【DartSass/Gulp/mobile first】

CodeUpsのリニューアルキャンペーンの特典で入手した初期フォルダをFLOCSS/WEBP用にモディファイしたものです

## 使い方
- ターミナルを開き、 npm i とコマンドを入力
- node_modulesとpackage-lock.jsonが生成されるのを確認する
- npx gulp

## 仕様
- sassの記述はsrcフォルダの中で行う
- 画像はsrcフォルダのimagesの中に格納する（圧縮されます）
- コンパイルされたCSSと圧縮された画像は第一階層のCSSフォルダ / imagesの中に出力されます。
- jsに関する記述は第一階層のjsフォルダの中で行ってください。特に圧縮等は行っていません。
- 