
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const VITE_BASE_URL: string;
	export const VITE_SUPABASE_URL: string;
	export const VITE_SUPABASE_KEY: string;
	export const NVM_INC: string;
	export const MANPATH: string;
	export const rvm_use_flag: string;
	export const rvm_bin_path: string;
	export const TERM_PROGRAM: string;
	export const GOOGLE_CALENDAR_CLIENT_ID: string;
	export const NODE: string;
	export const rvm_quiet_flag: string;
	export const NVM_CD_FLAGS: string;
	export const INIT_CWD: string;
	export const SHELL: string;
	export const TERM: string;
	export const rvm_gemstone_url: string;
	export const TMPDIR: string;
	export const STRIPE_PUBLIC_API_KEY: string;
	export const rvm_docs_type: string;
	export const HOMEBREW_REPOSITORY: string;
	export const npm_config_metrics_registry: string;
	export const SUPPORT_JWT_TOKEN: string;
	export const npm_config_global_prefix: string;
	export const TERM_PROGRAM_VERSION: string;
	export const MS_CLARITY_ID: string;
	export const HOTJAR_SNIPPET_VERSION: string;
	export const MallocNanoZone: string;
	export const ORIGINAL_XDG_CURRENT_DESKTOP: string;
	export const ZDOTDIR: string;
	export const rvm_hook: string;
	export const COLOR: string;
	export const npm_config_noproxy: string;
	export const CHATBOT_TOKEN: string;
	export const ZSH: string;
	export const npm_config_local_prefix: string;
	export const NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID: string;
	export const USER: string;
	export const NVM_DIR: string;
	export const LS_COLORS: string;
	export const rvm_gemstone_package_file: string;
	export const COMMAND_MODE: string;
	export const OPENAI_API_KEY: string;
	export const PASSWORD: string;
	export const CHAT_URL: string;
	export const npm_config_globalconfig: string;
	export const rvm_path: string;
	export const SSH_AUTH_SOCK: string;
	export const __CF_USER_TEXT_ENCODING: string;
	export const PAYPAL_CLIEND_ID: string;
	export const LOGTAIL_SECRET: string;
	export const rvm_proxy: string;
	export const npm_execpath: string;
	export const PAYPAL_MODE_SANDBOX: string;
	export const rvm_ruby_file: string;
	export const PAGER: string;
	export const LSCOLORS: string;
	export const SENTRY_DSN: string;
	export const rvm_prefix: string;
	export const rvm_silent_flag: string;
	export const GOOGLE_API_KEY: string;
	export const PATH: string;
	export const rvm_ruby_make: string;
	export const LaunchInstanceID: string;
	export const npm_config_engine_strict: string;
	export const npm_package_json: string;
	export const __CFBundleIdentifier: string;
	export const USER_ZDOTDIR: string;
	export const npm_config_init_module: string;
	export const npm_config_userconfig: string;
	export const PWD: string;
	export const npm_command: string;
	export const CRYPTO_QOTD_KEY: string;
	export const EDITOR: string;
	export const npm_lifecycle_event: string;
	export const LANG: string;
	export const rvm_sdk: string;
	export const npm_package_name: string;
	export const LAUNCHDARKLY_SDK_KEY: string;
	export const NODE_PATH: string;
	export const XPC_FLAGS: string;
	export const VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
	export const npm_config_npm_version: string;
	export const GOOGLE_ANALYTICS: string;
	export const NODE_ENV: string;
	export const CHATBOT_INBOX: string;
	export const npm_config_node_gyp: string;
	export const XPC_SERVICE_NAME: string;
	export const npm_package_version: string;
	export const HASHING_PWD: string;
	export const rvm_version: string;
	export const VSCODE_INJECTION: string;
	export const HOME: string;
	export const rvm_pretty_print_flag: string;
	export const rvm_script_name: string;
	export const SHLVL: string;
	export const QB_API_URL: string;
	export const rvm_ruby_mode: string;
	export const VSCODE_GIT_ASKPASS_MAIN: string;
	export const HOMEBREW_PREFIX: string;
	export const NEW_RELIC_APP_NAME: string;
	export const API_URL: string;
	export const OAUTH_REDIRECT_URL: string;
	export const LOGNAME: string;
	export const LESS: string;
	export const npm_config_cache: string;
	export const rvm_alias_expanded: string;
	export const npm_lifecycle_script: string;
	export const VSCODE_GIT_IPC_HANDLE: string;
	export const HOTJAR_SITE_ID: string;
	export const NVM_BIN: string;
	export const TOTP: string;
	export const rvm_nightly_flag: string;
	export const npm_config_user_agent: string;
	export const PORT: string;
	export const INFOPATH: string;
	export const rvm_ruby_make_install: string;
	export const HOMEBREW_CELLAR: string;
	export const GIT_ASKPASS: string;
	export const VSCODE_GIT_ASKPASS_NODE: string;
	export const rvm_niceness: string;
	export const AMPLITUDE_API_KEY: string;
	export const rvm_ruby_bits: string;
	export const rvm_bin_flag: string;
	export const API_KEY: string;
	export const SECURITYSESSIONID: string;
	export const rvm_only_path_flag: string;
	export const FE_BASE_URL: string;
	export const COLORTERM: string;
	export const RPC_URL: string;
	export const GOOGLE_CLIENT_ID: string;
	export const npm_config_prefix: string;
	export const npm_node_execpath: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		VITE_BASE_URL: string;
		VITE_SUPABASE_URL: string;
		VITE_SUPABASE_KEY: string;
		NVM_INC: string;
		MANPATH: string;
		rvm_use_flag: string;
		rvm_bin_path: string;
		TERM_PROGRAM: string;
		GOOGLE_CALENDAR_CLIENT_ID: string;
		NODE: string;
		rvm_quiet_flag: string;
		NVM_CD_FLAGS: string;
		INIT_CWD: string;
		SHELL: string;
		TERM: string;
		rvm_gemstone_url: string;
		TMPDIR: string;
		STRIPE_PUBLIC_API_KEY: string;
		rvm_docs_type: string;
		HOMEBREW_REPOSITORY: string;
		npm_config_metrics_registry: string;
		SUPPORT_JWT_TOKEN: string;
		npm_config_global_prefix: string;
		TERM_PROGRAM_VERSION: string;
		MS_CLARITY_ID: string;
		HOTJAR_SNIPPET_VERSION: string;
		MallocNanoZone: string;
		ORIGINAL_XDG_CURRENT_DESKTOP: string;
		ZDOTDIR: string;
		rvm_hook: string;
		COLOR: string;
		npm_config_noproxy: string;
		CHATBOT_TOKEN: string;
		ZSH: string;
		npm_config_local_prefix: string;
		NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID: string;
		USER: string;
		NVM_DIR: string;
		LS_COLORS: string;
		rvm_gemstone_package_file: string;
		COMMAND_MODE: string;
		OPENAI_API_KEY: string;
		PASSWORD: string;
		CHAT_URL: string;
		npm_config_globalconfig: string;
		rvm_path: string;
		SSH_AUTH_SOCK: string;
		__CF_USER_TEXT_ENCODING: string;
		PAYPAL_CLIEND_ID: string;
		LOGTAIL_SECRET: string;
		rvm_proxy: string;
		npm_execpath: string;
		PAYPAL_MODE_SANDBOX: string;
		rvm_ruby_file: string;
		PAGER: string;
		LSCOLORS: string;
		SENTRY_DSN: string;
		rvm_prefix: string;
		rvm_silent_flag: string;
		GOOGLE_API_KEY: string;
		PATH: string;
		rvm_ruby_make: string;
		LaunchInstanceID: string;
		npm_config_engine_strict: string;
		npm_package_json: string;
		__CFBundleIdentifier: string;
		USER_ZDOTDIR: string;
		npm_config_init_module: string;
		npm_config_userconfig: string;
		PWD: string;
		npm_command: string;
		CRYPTO_QOTD_KEY: string;
		EDITOR: string;
		npm_lifecycle_event: string;
		LANG: string;
		rvm_sdk: string;
		npm_package_name: string;
		LAUNCHDARKLY_SDK_KEY: string;
		NODE_PATH: string;
		XPC_FLAGS: string;
		VSCODE_GIT_ASKPASS_EXTRA_ARGS: string;
		npm_config_npm_version: string;
		GOOGLE_ANALYTICS: string;
		NODE_ENV: string;
		CHATBOT_INBOX: string;
		npm_config_node_gyp: string;
		XPC_SERVICE_NAME: string;
		npm_package_version: string;
		HASHING_PWD: string;
		rvm_version: string;
		VSCODE_INJECTION: string;
		HOME: string;
		rvm_pretty_print_flag: string;
		rvm_script_name: string;
		SHLVL: string;
		QB_API_URL: string;
		rvm_ruby_mode: string;
		VSCODE_GIT_ASKPASS_MAIN: string;
		HOMEBREW_PREFIX: string;
		NEW_RELIC_APP_NAME: string;
		API_URL: string;
		OAUTH_REDIRECT_URL: string;
		LOGNAME: string;
		LESS: string;
		npm_config_cache: string;
		rvm_alias_expanded: string;
		npm_lifecycle_script: string;
		VSCODE_GIT_IPC_HANDLE: string;
		HOTJAR_SITE_ID: string;
		NVM_BIN: string;
		TOTP: string;
		rvm_nightly_flag: string;
		npm_config_user_agent: string;
		PORT: string;
		INFOPATH: string;
		rvm_ruby_make_install: string;
		HOMEBREW_CELLAR: string;
		GIT_ASKPASS: string;
		VSCODE_GIT_ASKPASS_NODE: string;
		rvm_niceness: string;
		AMPLITUDE_API_KEY: string;
		rvm_ruby_bits: string;
		rvm_bin_flag: string;
		API_KEY: string;
		SECURITYSESSIONID: string;
		rvm_only_path_flag: string;
		FE_BASE_URL: string;
		COLORTERM: string;
		RPC_URL: string;
		GOOGLE_CLIENT_ID: string;
		npm_config_prefix: string;
		npm_node_execpath: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
