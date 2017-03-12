# publi.sh
git checkout site
git merge master
rm -rf _site/
bundle exec jekyll build --baseurl /bbva-2016
gulp assets:build
git add --all
git commit -m "`date`"
git push origin site --force
git push origin `git subtree split --prefix  _site/ site`:gh-pages --force