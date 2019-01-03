let articles = [];
for (let i = 1; i < 51; i++) {
  articles.push({
    key: String(i),
    id: i,
    title: 'タイトル' + i,
    content: '記事' + i + 'の本文',
    url: 'http://example.com/?t=' + i,
  });
}

export const Articles = articles;
