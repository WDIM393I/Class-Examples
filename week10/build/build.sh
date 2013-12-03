
# This script is meant to be run from a unix mac command line
# runs the require js optimizer script on app.build.js using NodeJS
# and then cleans up, and GZIPs resulting files

# stop on errors
set -e;

# allow script to be run from anywhere
SCRIPT_PATH="$( cd "$( dirname "$0" )" && pwd )"

# make sure release directory exists
mkdir -p $SCRIPT_PATH/../release/site

# remove old stuff
rm -rf cd $SCRIPT_PATH/../release/site

#cp -r ../src ../release/site
rsync -a --exclude='sass' --exclude='config.rb' ../src/ ../release/site
echo "Copied initial files"

echo "App is being built"
# run r.js
node app.build.js
echo "App built using require build script"



#
# Go cleanup the release folder
#
cd ../release

# remove sass source and cache directories, config file
find site -name *sass -type d | xargs rm -r
find site -name *sass-cache -type d | xargs rm -r
find site/config.rb | xargs rm -r


# remove all files except require JS libs
find site/js/libs -type f | grep -Ev "(require)[^/]*\.js" | xargs rm

# remove template files from JS, since RequireJS doesn't combine them
find site/js -type f | grep -E ".*\.html" | xargs rm

# remove empty JS directories
find site/js -empty -type d -delete
echo "Removed js source files"


#
# Add gzip compressed versions
#

# gzip json
find site -name *.json -print0 | while read -d $'\0' fn;
do
   gzip -c --best "$fn" > "$fn.gz";
   touch -r "$fn" "$fn.gz";
done;
echo "json: gzipped"

# gzip css
find site -name *.css -print0 | while read -d $'\0' fn;
do
   gzip -c --best "$fn" > "$fn.gz";
   touch -r "$fn" "$fn.gz";
done;
echo "css: gzipped"

# gzip js
find site -name *.js -print0 | while read -d $'\0' fn;
do
   gzip -c --best "$fn" > "$fn.gz";
   touch -r "$fn" "$fn.gz";
done;
echo "javascript: gzipped"

#
# Create dated zip
#
BUILD=site_`date +%m%d%y`
zip -q -r $BUILD site
echo "Site zip created"
echo "Build finished"