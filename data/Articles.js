let articles = [];
for (let i = 1; i < 51; i++) {
  articles.push({
    key: String(i),
    id: i,
    title: 'セロ弾きのゴーシュ ' + i + '話',
    content: (function(param) {return param[0].replace(/\n|\r/g, "");})`
<html>
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1">
</head>
<body>
    <p>ぐったがってしばらくくしゃみをするようなは猫の拍手ゴーシュ弾が室を待っゴーシュたまし。またなかなか上手たたという巻たらた。気の毒たたのたはたいやけちのくたくた人のなかをはかっきり気の毒ましたと、おまえまで穴を聞えせんですた。黙れすぎ何は楽長から青くたとはじめの水のゴーシュ顔をする第三かっこう会のびっくりへ云っていですでし。</p>
    <p>マッチはたくさんしゃくにさわりてきで。窓も五なり血のようがながめがいるた。</p>
    <p>粉はざとじぶんのケースだりみんなを見といたした。箱は猫にどんどんとなってしずかへおっかさんのようが云いて譜にきてちょろちょろからだを飛びつきてくださいでし。じつにじっとゴーシュで外を弾いませです。みんなさっぱりに硝子へ叩くて猫が...</p>
</body>
</html>`,
    author: '宮沢賢治',
    url: 'http://example.com/?t=' + i,
  });
}

export const Articles = articles;
