#!/bin/bash

NAME="$1"
FULLPATH=""

if [ -z "$2" ]
then
  FULLPATH="$PWD/components/$NAME"
else
  FULLPATH="$PWD/components/$2/$NAME"
fi

echo "path: $FULLPATH"

KEBAB_CASE=`echo "$1" | perl -ne 'print lc(join("-", split(/(?=[A-Z])/)))'`

echo "$KEBAB_CASE"

mkdir -p "$FULLPATH"

echo ".$KEBAB_CASE {
  position: relative;
}" > "$FULLPATH/$NAME.module.scss"

echo "import styles from './$NAME.module.scss';

const $NAME = () => {
    console.log('This is $NAME component');
    return (
        <div className=\"$KEBAB_CASE\">
            <div>$NAME</div>
        </div>
    );
};

export default $NAME;" > "$FULLPATH/$NAME.tsx"
