<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'tomclfb4_wp574');

/** MySQL database username */
define('DB_USER', 'tomclfb4_wp574');

/** MySQL database password */
define('DB_PASSWORD', 'p7x9t54).S');

/** MySQL hostname */
define('DB_HOST', '10.3.0.64');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'od3afpgnfshkdh2evyot1glyk8thyzovv02qzf7cahmxt9deymictbnlwghoggxl');
define('SECURE_AUTH_KEY',  'xmsg5ahdnmxn1ywbrsuhetoneduptsv3jdaairutg72gi0ymnuddumlkoqh2la77');
define('LOGGED_IN_KEY',    'qhpkexp8n8b6d18wi8nuqia3acs8vu8pq1stydseblbn98cnvbwr8qtfjkiwn4em');
define('NONCE_KEY',        '8dad5qdtjmijzaxsnjkfsz9b1cggfyr9cz4c01iabwdzdtkuzcskgaltwzberk65');
define('AUTH_SALT',        'vvjf54vswcqn3j8coaymmuz7uv4wwe9i1opoxglek8uiumghhxqdxzirrqyqfudv');
define('SECURE_AUTH_SALT', '3di66enug2z2ks57etiwa8vseeoea9hpvzdv90rnguf2hvpudyd6rtsrckwagjkb');
define('LOGGED_IN_SALT',   'odxlwwkvfymw8rbevkrpsylpumwknhm7bttsj2cs24ivhzorw2ekyhr6fixsnfxz');
define('NONCE_SALT',       'thjjyb5jtt5umtps7uqwubezd86ew8jktkg1t8w9oy6ikk3tyle3ufsl4v6gshay');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp0b_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
