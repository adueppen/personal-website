if ! command -v cowsay > /dev/null; then
  echo "You don't even have cowsay installed‽ Impossible..."
else
  echo "Welcome to my secret shell script! It's not much yet but I'll try to make it do some fun stuff." | \
  cowsay -f "milk"
fi
