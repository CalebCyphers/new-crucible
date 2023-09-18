import type { CustomThemeConfig } from "@skeletonlabs/tw-plugin";

export const myCustomTheme: CustomThemeConfig = {
  name: "my-custom-theme",
  properties: {
    // =~= Theme Properties =~=
    "--theme-font-family-base": "FiraCode",
    "--theme-font-family-heading": "Eirian",
    "--theme-font-color-base": "0 0 0",
    "--theme-font-color-dark": "255 255 255",
    "--theme-rounded-base": "2px",
    "--theme-rounded-container": "2px",
    "--theme-border-base": "1px",
    // =~= Theme On-X Colors =~=
    "--on-primary": "255 255 255",
    "--on-secondary": "255 255 255",
    "--on-tertiary": "0 0 0",
    "--on-success": "0 0 0",
    "--on-warning": "0 0 0",
    "--on-error": "0 0 0",
    "--on-surface": "255 255 255",
    // =~= Theme Colors  =~=
    // primary | #c6103e
    "--color-primary-50": "246 219 226", // #f6dbe2
    "--color-primary-100": "244 207 216", // #f4cfd8
    "--color-primary-200": "241 195 207", // #f1c3cf
    "--color-primary-300": "232 159 178", // #e89fb2
    "--color-primary-400": "215 88 120", // #d75878
    "--color-primary-500": "198 16 62", // #c6103e
    "--color-primary-600": "178 14 56", // #b20e38
    "--color-primary-700": "149 12 47", // #950c2f
    "--color-primary-800": "119 10 37", // #770a25
    "--color-primary-900": "97 8 30", // #61081e
    // secondary | #417aaf
    "--color-secondary-50": "227 235 243", // #e3ebf3
    "--color-secondary-100": "217 228 239", // #d9e4ef
    "--color-secondary-200": "208 222 235", // #d0deeb
    "--color-secondary-300": "179 202 223", // #b3cadf
    "--color-secondary-400": "122 162 199", // #7aa2c7
    "--color-secondary-500": "65 122 175", // #417aaf
    "--color-secondary-600": "59 110 158", // #3b6e9e
    "--color-secondary-700": "49 92 131", // #315c83
    "--color-secondary-800": "39 73 105", // #274969
    "--color-secondary-900": "32 60 86", // #203c56
    // tertiary | #b8b8b8
    "--color-tertiary-50": "244 244 244", // #f4f4f4
    "--color-tertiary-100": "241 241 241", // #f1f1f1
    "--color-tertiary-200": "237 237 237", // #ededed
    "--color-tertiary-300": "227 227 227", // #e3e3e3
    "--color-tertiary-400": "205 205 205", // #cdcdcd
    "--color-tertiary-500": "184 184 184", // #b8b8b8
    "--color-tertiary-600": "166 166 166", // #a6a6a6
    "--color-tertiary-700": "138 138 138", // #8a8a8a
    "--color-tertiary-800": "110 110 110", // #6e6e6e
    "--color-tertiary-900": "90 90 90", // #5a5a5a
    // success | #bada8b
    "--color-success-50": "245 249 238", // #f5f9ee
    "--color-success-100": "241 248 232", // #f1f8e8
    "--color-success-200": "238 246 226", // #eef6e2
    "--color-success-300": "227 240 209", // #e3f0d1
    "--color-success-400": "207 229 174", // #cfe5ae
    "--color-success-500": "186 218 139", // #bada8b
    "--color-success-600": "167 196 125", // #a7c47d
    "--color-success-700": "140 164 104", // #8ca468
    "--color-success-800": "112 131 83", // #708353
    "--color-success-900": "91 107 68", // #5b6b44
    // warning | #f0d37a
    "--color-warning-50": "253 248 235", // #fdf8eb
    "--color-warning-100": "252 246 228", // #fcf6e4
    "--color-warning-200": "251 244 222", // #fbf4de
    "--color-warning-300": "249 237 202", // #f9edca
    "--color-warning-400": "245 224 162", // #f5e0a2
    "--color-warning-500": "240 211 122", // #f0d37a
    "--color-warning-600": "216 190 110", // #d8be6e
    "--color-warning-700": "180 158 92", // #b49e5c
    "--color-warning-800": "144 127 73", // #907f49
    "--color-warning-900": "118 103 60", // #76673c
    // error | #da77a8
    "--color-error-50": "249 235 242", // #f9ebf2
    "--color-error-100": "248 228 238", // #f8e4ee
    "--color-error-200": "246 221 233", // #f6dde9
    "--color-error-300": "240 201 220", // #f0c9dc
    "--color-error-400": "229 160 194", // #e5a0c2
    "--color-error-500": "218 119 168", // #da77a8
    "--color-error-600": "196 107 151", // #c46b97
    "--color-error-700": "164 89 126", // #a4597e
    "--color-error-800": "131 71 101", // #834765
    "--color-error-900": "107 58 82", // #6b3a52
    // surface | #1e263e
    "--color-surface-50": "221 222 226", // #dddee2
    "--color-surface-100": "210 212 216", // #d2d4d8
    "--color-surface-200": "199 201 207", // #c7c9cf
    "--color-surface-300": "165 168 178", // #a5a8b2
    "--color-surface-400": "98 103 120", // #626778
    "--color-surface-500": "30 38 62", // #1e263e
    "--color-surface-600": "27 34 56", // #1b2238
    "--color-surface-700": "23 29 47", // #171d2f
    "--color-surface-800": "18 23 37", // #121725
    "--color-surface-900": "15 19 30", // #0f131e
  },
};
