import js from "@eslint/js";
import vue from "eslint-plugin-vue";
import typescript from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";
import vueParser from "vue-eslint-parser";
import globals from "globals";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
    js.configs.recommended,
    ...vue.configs["flat/recommended"],
    eslintConfigPrettier,
    {
        files: ["src/**/*.{js,ts,vue}"],
        languageOptions: {
            parser: vueParser,
            parserOptions: {
                parser: typescriptParser,
                ecmaVersion: "latest",
                sourceType: "module",
            },
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
        plugins: {
            "@typescript-eslint": typescript,
        },
        rules: {
            "vue/multi-word-component-names": "off",
            "vue/html-indent": ["error", 4],
            "vue/max-attributes-per-line": "off",
        },
    },
];
