folderConf="/usr/local/nginx/conf/vhost"
# folderConf="nginx"
cp shell/www.hjbnice.com.conf $folderConf
echo "copy www.hjbnice.com.conf -> $folderConf"
folderSll="$folderConf/ssl"
# -x 参数判断 $folder 是否存在并且是否具有可执行权限
if [ ! -x "$folderSll" ]; then
  mkdir "$folderSll"
  echo "$folderSll"
fi
# # -d 参数判断 $folder 是否存在
# if [ ! -d "$folder"]; then
#   mkdir "$folder"
# fi

cp shell/www.hjbnice.com.key $folderSll
echo "copy www.hjbnice.com.key -> $folderSll"
cp shell/www.hjbnice.com_bundle.crt $folderSll
echo "copy www.hjbnice.com_bundle.crt -> $folderSll"
