# HTML-CSS

## 初回のテスト  
```
echo "# HTML-CSS" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:MasashiMurakami/HTML-CSS.git
git push -u origin main
```
## プッシュする時  
```
git add <任意のファイル>
git commit -m "<コメント>"
git branch -M main
git push -u origin main
```

## ファイル追加・削除
```
git add <任意のファイル>
git commit -m "<コメント>"
git push -u origin main

git rm <任意のファイル>
git commit -m "<コメント>"
git push -u origin main
```

## 複数ファイル追加・削除
```
git add <任意のファイル> <任意のファイル> ... <任意のファイル>
    or
fit add -A
git rm `git ls-files --deleted`
```
