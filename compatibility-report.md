# Testimonial Block — Compatibility Report

**Plugin:** Testimonial Block (`testimonial-wp-block`)
**Version:** 1.2.6 → 1.5.0
**Branch:** `testimonial-wp-block-dev` (based on `latest`, per user decision)
**Date of pass:** 2026-08-10
**Scope:** compatibility only — no feature work, no redesign, no dependency upgrades.

---

## 1. Detected original baseline

| | Detected | Evidence |
|---|---|---|
| **PHP** | **5.6-era** | `includes/font-loader.php:21,23` — `get_instance( ...$args )` / `new static( ...$args )` variadics (5.6+). Short arrays `[]` throughout (5.4+). No `??`, no typed properties, no arrow functions, no `match` — nothing above 5.6 in the original code. |
| **WordPress** | **5.0-era** | `readme.txt` declared `Requires at least: 5.0`. `includes/helpers.php:93` carried an explicit `WP <= 5.6` fallback in `get_block_register_path()`, which only makes sense for a plugin that shipped against WP 5.x. `register_block_type()` with a directory path (5.8+) was added later. |

The single PHP 8.0-only call (`str_contains`, `helpers.php:48`) was **not** part of the
original baseline — it was introduced by the later "compatibility support with
wordpress 6.5 version" commit (`3205ae7`) and is a regression, not evidence of an 8.0 floor.

### Declared vs. reality (before this pass)

| Field | Main plugin file | readme.txt |
|---|---|---|
| `Requires PHP` | *absent* | *absent* |
| `Requires at least` | *absent* | `5.0` |
| `Tested up to` | *absent* | `6.5` |

The header block declared **none** of the three. The readme claimed WP 5.0 support while
the code called a PHP 8.0-only function — the declared range and the real range disagreed
in both directions.

---

## 2. Chosen floor

```
declared PHP floor = max( detected 5.6, policy 7.4 ) = 7.4   ← policy won
declared WP  floor = max( detected 5.0, policy 6.0 ) = 6.0   ← policy won
```

The policy minimum won on both axes. The user did **not** lower the floor for this plugin,
so the standard PHP 7.4 / WP 6.0 default applies.

---

## 3. Target range

| | Floor | Latest stable | Source | Checked |
|---|---|---|---|---|
| PHP | 7.4 | **8.5.9** | `php.net/releases` (`supported_versions: 8.2, 8.3, 8.4, 8.5`) | 2026-08-10 |
| WordPress | 6.0 | **7.0.3** | `api.wordpress.org/core/version-check/1.7/` | 2026-08-10 |

**Per-version checklist covered:** PHP 7.4, 8.0, 8.1, 8.2, 8.3, 8.4, 8.5 · WP 6.0, 6.1,
6.2, 6.3, 6.4, 6.5, 6.6, 6.7, 6.8, 6.9, 7.0.

> Note: WordPress reaching **7.0** makes float-cast version comparisons actively
> dangerous rather than theoretically so — see issue #7 and the flagged item in §7.

---

## 4. Issues found

| # | File:line | Issue | Breaks on | Severity |
|---|---|---|---|---|
| 1 | `testimonial-wp-block.php:27` | `require_once __DIR__ . '/lib/style-handler/style-handler.php'` unconditional. Both git submodules (`lib/style-handler`, `controls`) are **uninitialised** in this checkout — `git submodule status` reports `-bc26a76…` / `-807ed39…`. Missing file → `require_once(): Failed opening required` → **site-wide fatal on plugin load**. | All PHP / all WP | **Critical** |
| 2 | `includes/helpers.php:48` | `str_contains()` is **PHP 8.0+**. On PHP 7.4 this is `Call to undefined function str_contains()` — a fatal in `wp-admin` whenever `$pagenow === 'themes.php'`. Directly contradicts the 7.4 floor. | PHP 7.4 | **Critical** |
| 3 | `testimonial-wp-block.php:37` | `throw new Error(...)` when `dist/index.asset.php` is missing. Thrown inside an `init` callback, uncaught → **whole-site fatal**, not a degraded block. Triggers on any checkout or release zip built without `dist/`. | All PHP / all WP | **High** |
| 4 | `includes/helpers.php:50` | `include_once` returns `true`, not the array, if the path was already included in the request. `$controls_dependencies['dependencies']` then reads an offset on `bool` → `null` → `array_merge(null, …)` → **`TypeError` fatal on PHP 8.0+** (a silent warning on 7.4). | PHP 8.0+ | **High** |
| 5 | `testimonial-wp-block.php:1` | No `if ( ! defined( 'ABSPATH' ) ) exit;` guard — the only PHP file in the plugin missing it. Direct-access exposure. | All | **Medium** |
| 6 | `includes/helpers.php:48` | `$_SERVER['QUERY_STRING']` read with no `wp_unslash()` / `sanitize_text_field()`. Only string-searched, so not exploitable here, but it is a WPCS violation and an unsanitised-superglobal pattern. | All | **Medium** |
| 7 | `includes/helpers.php:93` | `(float) get_bloginfo('version') <= 5.6`. Float-casting a WP version is wrong by construction: `(float) "5.10" === 5.1`, `(float) "7.10" === 7.1`. Now also a dead branch under the 6.0 floor. | WP x.10 releases | **Medium** |
| 8 | `testimonial-wp-block.php:31-33` | `define()` called with no `defined()` guard. A second copy of the plugin present → `Constant already defined` notices. | All | **Low** |
| 9 | `includes/font-loader.php:52` | `$block['blockName']` read without `isset()`. `render_block` passes `blockName => null` for classic/freeform content; undefined-index access is a warning on PHP 8. | PHP 8.0+ | **Low** |
| 10 | `includes/font-loader.php:70` | `$googleFontFamily[$attributes[$key]]` uses an attribute **value** as an array key. A non-scalar or `null` value → `Illegal offset type` / deprecation on PHP 8.x. | PHP 8.0+ | **Low** |
| 11 | `includes/font-loader.php:97` | `trim( $font )` — passing `null` to a non-nullable internal parameter is deprecated in **PHP 8.1**. | PHP 8.1+ | **Low** |
| 12 | `includes/post-meta.php:12` | `add_filter('init', …)` where `add_action` is meant. Functionally identical in core, but semantically wrong and the return value is discarded. | — | **Low** |
| 13 | header + `readme.txt` | Header declared no `Requires PHP` / `Requires at least` / `Tested up to`; readme claimed `Requires at least: 5.0` and `Tested up to: 6.5` (two majors stale against WP 7.0.3). | — | **Medium** |

### Checked and clean

- No `mysql_*`, `create_function()`, `each()`, `ereg*`, `split()`, `money_format()`,
  `strftime()`, `utf8_encode/decode`, `FILTER_SANITIZE_STRING`, `${var}` interpolation.
- No curly-brace string/array offsets, no dynamic property creation on non-attributed
  classes (PHP 8.2), no `ArrayAccess`/`Iterator`/`JsonSerializable` implementations
  needing `#[\ReturnTypeWillChange]`, no optional-before-required parameters.
- No implicit nullable parameters (`func(int $x = null)`) — clean for PHP 8.4.
- No `$wpdb` usage at all → no `prepare()` or `%i` concerns.
- No REST route registration → no `permission_callback` exposure (WP 5.5+).
- No state-changing request handlers → no missing nonce/capability checks.
  `post-meta.php` correctly gates `_eb_attr` behind an `auth_callback` on `edit_posts`.
- No translated strings loaded at file scope → clean against the WP 6.7+ early-textdomain
  notice.
- jQuery: no `.live()`, `.size()`, `.andSelf()`, `$.browser`, `$.parseJSON`, `$.trim`, or
  `.load()/.unload()/.error()` shorthands. The `.error(` hits in `assets/js/isotope.pkgd.min.js`
  and `images-loaded.min.js` are `console.error` and internal emitter calls — false positives.
- Global names are consistently prefixed (`Testimonial_*`, `TESTIMONIAL_BLOCKS_*`).

---

## 5. Dead version-check branches (floor raise)

Every version check in the plugin, and its fate:

| File | Line | Condition | What the branch does | Single remaining reachable path | Decision |
|---|---|---|---|---|---|
| `includes/helpers.php` | 93 | `(float) get_bloginfo('version') <= 5.6` | Returns the block **name** string instead of the block **directory path**, so `register_block_type()` takes the pre-5.8 registration form. | With a WP 6.0 floor the condition is permanently false. `get_block_register_path()` collapses to `return $blockPath;` — a pass-through that always hands `register_block_type()` the plugin directory. | **Removed** (user decision) |
| `includes/helpers.php` | 60 | *(not a branch)* `(float) get_bloginfo('version')` passed to JS as `eb_wp_version` | Ships a float WP version into the `controls` bundle. | n/a — data, not control flow. | **Flag only, unchanged** (user decision) — see §7 |

No other `version_compare`, `PHP_VERSION_ID`, `PHP_VERSION`, `$wp_version`,
`phpversion()`, `is_php_version_compatible()`, `is_wp_version_compatible()`, min-version
constant, or admin-notice-then-`return` bail-out guard exists anywhere in the plugin.

---

## 6. Fixes applied

| Issue | Fix |
|---|---|
| #1 | `style-handler.php` include wrapped in `file_exists()`. Uninitialised submodule now degrades silently instead of fataling the site. Temp var `unset()` after use to avoid leaking into global scope. |
| #2 | `str_contains($q, 'gutenberg-edit-site')` → `strpos($q, 'gutenberg-edit-site') !== false`. Identical truth value on every input; works on PHP 7.4 through 8.5. Comment records why. |
| #3 | `throw new Error(...)` → `return;`. Missing build output now skips block registration instead of taking the site down. |
| #4 | `include_once` → `include` for `dist/modules.asset.php` (the file is a pure `return array(…)`, so re-inclusion is idempotent — this is WP core's own pattern). Added `file_exists()` pre-check, `is_array()` + `isset(['dependencies'])` validation, and an early `return` on malformed data. |
| #5 | Added `if ( ! defined( 'ABSPATH' ) ) { exit; }` to `testimonial-wp-block.php`. |
| #6 | `$_SERVER['QUERY_STRING']` now read once through `sanitize_text_field( wp_unslash( … ) )` into `$query_string`, with an `isset()` guard. |
| #7 | Branch removed per §5. The float cast disappears with it. |
| #8 | All three `define()` calls wrapped in `! defined()` guards. |
| #9 | `$block['blockName']` read via `isset()` into a local, plus `is_array()` guards on `$block` and `$block['attrs']`. |
| #10 | `get_fonts_family()` returns `[]` early for non-array input or no matching keys, and `continue`s past non-scalar / empty-string attribute values before using them as array keys. |
| #11 | `trim( $font )` → `trim( (string) $font )`. |
| #12 | `add_filter('init', …)` → `add_action('init', …)`. |
| #13 | See §9. |
| *(hardening)* | `$script_asset['version']` and `$controls_dependencies['version']` now fall back to `TESTIMONIAL_BLOCKS_VERSION` when absent, instead of emitting an undefined-index warning and passing `null` as the asset version. |

**No feature, option name, hook name, block markup, saved data, or public API changed.**
`get_block_register_path()` kept its two-parameter signature even though `$blockname` is
now unused, so any sibling EB plugin or external call site continues to work untouched.

---

## 7. Flagged, not auto-fixed — awaiting your decision

### 7.1 `eb_wp_version` float cast — `includes/helpers.php:82`

```php
'eb_wp_version' => (float) get_bloginfo('version'),
```

This is a genuine wrong-value bug: on WP 7.0.3 it ships `7`, and on any `x.10` release
(6.10, 7.10) it silently rounds *down* to `x.1` — so a WP 6.10 site reports as older than
a WP 6.2 one. Left unchanged at your instruction.

The consumers live in the `controls` submodule, which is not initialised in this checkout,
so I could not confirm how the value is compared. The risk cuts both ways: sending the raw
string `"7.0.3"` is correct data but breaks any numeric `>=` comparison in JS, and
`controls` is shared across every sibling Essential Blocks plugin — so this is a
cross-plugin decision, not a local one.

**Recommendation:** the additive option — keep `eb_wp_version` as the float for
back-compat and add `eb_wp_version_string` with the raw value — then migrate consumers in
`controls` and retire the float. Nothing breaks at any step.

### 7.2 `block.json` `apiVersion: 2`

Current is **v3** (WP 6.3+), which renders the block inside the editor iframe. v2 still
works and is not deprecated, but v2 blocks are the reason some editors fall back out of
iframed mode. Bumping to v3 changes the editor rendering context and can break block
styles that assume the non-iframed document — a visible change, so not touched.

**Recommendation:** leave at v2 for this compatibility pass. Bump to v3 as its own change,
with visual QA in both the post editor and the site editor.

### 7.3 Uninitialised submodules — RESOLVED (follow-up pass, 2026-08-10)

This was the root cause of a separate bug reported after the compatibility pass: the block
rendered correctly in the editor but unstyled on the frontend. Details below; the original
note is superseded.

`lib/style-handler` was uninitialised, and it is the **only** emitter of the block's
per-instance CSS on the frontend. `src/save.js` persists markup and class names only, so
the frontend had class names with no matching rules while the editor looked fine (the
editor's `StyleComponent` comes from `dist/modules.js`, which is committed).

Fix #1 above — the `file_exists()` guard — was correct in stopping the site-wide fatal, but
it converted a loud crash into a silent missing-stylesheet, which is why the breakage was
hard to spot. That is now addressed:

- `git submodule update --init lib/style-handler` — checked out at the pinned
  `bc26a76ddb00844cee4d0e40d22a7c16d26f0095`, leaving the working tree clean.
- `testimonial-wp-block.php:36-77` — the guard now has an `else` branch that registers an
  `admin_notices` callback and, under `WP_DEBUG`, writes to `error_log`. The notice is
  suppressed when `class_exists( 'EbStyleHandler' )` (a sibling plugin supplied it) and
  gated on `current_user_can( 'activate_plugins' )`. Strings translate inside the callback,
  so no text domain is touched before `init`.

**Verified on the running site:** loading page ID 7 regenerated
`uploads/eb-style/eb-style-7.min.css` (1829 → 3054 bytes) with 34 rules scoped to the
block's `blockId` `.eb-testimonial-1fieh` and both `@media(max-width: 1024px)` and
`@media(max-width: 767px)` segments. Page source carries
`id='eb-block-style-7-css'`. No re-save was needed — style-handler hooks `wp` and
regenerates on every frontend view.

**`controls` remains uninitialised, deliberately.** It is not needed: every file under
`src/` reads controls off the `window.EBTestimonialControls` global, and
`webpack.config.js` has exactly one entry (`./src/index.js`). Only `config/entries.js`
imports `../controls/src`, and `webpack.config.js` never references it. Initialise it only
to regenerate `dist/modules.js` with the external EB toolchain.

**Releases were never affected.** `.github/workflows/deploy.yml:20-23` checks out with
`submodules: recursive`, so shipped wp.org zips contain style-handler. This was a local
development environment problem only.

### 7.3b `responsiveBreakpoints` not localized — FIXED (follow-up pass)

`includes/helpers.php` localized `EssentialBlocksLocalize` without `responsiveBreakpoints`,
which the compiled `StyleComponent` reads to build the editor's tablet/mobile media
queries. They rendered as `max-width: undefinedpx`, so responsive preview silently did
nothing. Now localized as tablet 1024 / mobile 767, read from the `eb_settings` option with
those defaults — matching the values style-handler hardcodes for the frontend
(`lib/style-handler/includes/class-parse-css.php:141,146`), so editor preview and frontend
output agree. The option is read only, never written; the full Essential Blocks plugin owns
that key.

**Known limitation:** `wp_localize_script` emits one `EssentialBlocksLocalize` per handle
and the last enqueued wins outright — there is no merge. If a sibling EB plugin enqueues
its own copy after this one, `undefinedpx` returns in the editor preview. Fixing that would
mean editing sibling plugins, which was explicitly out of scope. The frontend is unaffected
either way.

### 7.4 Orphaned build output

`dist/frontend.js` and `dist/frontend.asset.php` are built but never enqueued by any PHP in
the plugin, and `webpack.config.js` declares only one entry (`./src/index.js`). Dead weight
in the shipped zip, not a compatibility problem. Left alone.

---

## 8. Old-vs-new conflicts

**None.** Every fix in §6 is simultaneously valid across PHP 7.4 → 8.5 and WP 6.0 → 7.0.
No compatibility shim was required, and no fix forced a trade-off between the floor and the
current top of the range.

Per the floor policy, no new sub-7.4 shims were written — `??`, short arrays, typed
properties and arrow functions would all be safe here, though none happened to be needed.

---

## 9. Declared compatibility after this pass

**`testimonial-wp-block.php` header** — all three fields added (none were present before):

```
Version:           1.5.0
Requires at least: 6.0
Requires PHP:      7.4
Tested up to:      7.0
```

**`readme.txt`:**

```
Requires at least: 6.0
Tested up to: 7.0
Requires PHP: 7.4
Stable tag: 1.5.0
```

**Version bumped 1.2.6 → 1.5.0 (minor, at the user's explicit instruction)** and kept in sync in all four places:
plugin header, `TESTIMONIAL_BLOCKS_VERSION`, `readme.txt` `Stable tag`, `package.json`.
A `= 1.5.0 =` changelog entry was added to `readme.txt`.
There is no `composer.json` in this plugin.

---

## 10. Verification

**`php -l` on every PHP file** (PHP 8.5.8 CLI) — all pass:

```
No syntax errors detected in ./testimonial-wp-block.php
No syntax errors detected in ./dist/index.asset.php
No syntax errors detected in ./dist/frontend.asset.php
No syntax errors detected in ./dist/modules.asset.php
No syntax errors detected in ./includes/post-meta.php
No syntax errors detected in ./includes/font-loader.php
No syntax errors detected in ./includes/helpers.php
```

**Residual-pattern greps:**
- PHP 8.0-only functions (`str_contains`, `str_starts_with`, `str_ends_with`,
  `array_is_list`): only remaining hit is inside an explanatory comment.
- `(float) get_bloginfo` — one remaining hit, `helpers.php:82`, deliberately retained per §7.1.

**phpcs:** not installed on this machine. Skipped rather than installed — no global tooling
was added.

**Not performed:** no runtime testing against live PHP or WordPress installs, and the block
could not be exercised because both submodules are uninitialised (§7.3). Verification here
is static analysis plus lint only.

**Git state:** all work is on `testimonial-wp-block-dev`, left uncommitted in the working
tree for review. Nothing was committed or pushed.
