cd markdown-it-docs
git init
git add -A
git commit -m 'deploy'
git push -f https://github.com/LinFeng1997/markdown-it-docs.git master:cn-gh-pages
rm -rf markdown-it