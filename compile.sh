bundle exec middleman build --clean
cd build
cp -r . ..
cd ..
rm -rf build
git add .
git commit
git push