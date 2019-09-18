if ! command -v cowsay > /dev/null; then
  echo "You don't have cowsay installed?! Impossible..."
  echo "Please install it and try again."
else
  echo "Welcome to my secret shell script! It's not much yet but I'll try to make it do some fun stuff." | \
  cowsay -f "milk"
fi
