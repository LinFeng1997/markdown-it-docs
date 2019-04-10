npm run build
cd dist
git init
git add -A
git commit -m 'deploy'
git push -f https://github.com/docschina/markdown-it-docs.git master:cn-gh-pages
rm -rf ../dist
