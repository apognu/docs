#!/bin/sh
# Downloads the public API OpenAPI specs from marble-backend into openapi/.
#
# Uses the latest stable tag (vX.Y.Z, release candidates excluded) unless OPENAPI_REF is set,
# e.g. OPENAPI_REF=v1.11.0-rc.3 or OPENAPI_REF=main.
#
# With --if-missing, does nothing when all files are already there (used by `bun run dev` and `bun run build`).

set -eu

REPO="checkmarble/marble-backend"
SPEC_DIR="pubapi/openapi"
FILES="v1.yml v1beta.yml ingestion.yml"
OUT="$(dirname "$0")/../openapi"

if [ "${1:-}" = "--if-missing" ]; then
	missing=""
	for file in $FILES; do
		[ -f "$OUT/$file" ] || missing="yes"
	done
	[ -z "$missing" ] && exit 0
fi

ref="${OPENAPI_REF:-}"

if [ -z "$ref" ]; then
	ref="$(git ls-remote --tags --refs "https://github.com/$REPO.git" 'v*' \
		| sed 's#.*refs/tags/##' \
		| grep -E '^v[0-9]+\.[0-9]+\.[0-9]+$' \
		| sort -V \
		| tail -n 1)"

	if [ -z "$ref" ]; then
		echo "fetch-openapi: no stable vX.Y.Z tag found on $REPO" >&2
		exit 1
	fi
fi

mkdir -p "$OUT"

for file in $FILES; do
	url="https://raw.githubusercontent.com/$REPO/$ref/$SPEC_DIR/$file"

	if ! curl -fsSL --retry 3 -o "$OUT/$file.tmp" "$url"; then
		rm -f "$OUT/$file.tmp"
		echo "fetch-openapi: could not download $url" >&2
		exit 1
	fi

	mv "$OUT/$file.tmp" "$OUT/$file"
done

# Records which version the docs were built from (shown in the PR preview comment).
printf '%s\n' "$ref" > "$OUT/.ref"

echo "fetch-openapi: $FILES from $REPO@$ref"
