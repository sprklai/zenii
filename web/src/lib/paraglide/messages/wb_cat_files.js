/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Cat_FilesInputs */

const en_wb_cat_files = /** @type {(inputs: Wb_Cat_FilesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Files`)
};

const zh_cn2_wb_cat_files = /** @type {(inputs: Wb_Cat_FilesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`文件`)
};

const es_wb_cat_files = /** @type {(inputs: Wb_Cat_FilesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Archivos`)
};

const ja_wb_cat_files = /** @type {(inputs: Wb_Cat_FilesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ファイル`)
};

const hi_wb_cat_files = /** @type {(inputs: Wb_Cat_FilesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`फ़ाइलें`)
};

const pt_br2_wb_cat_files = /** @type {(inputs: Wb_Cat_FilesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Arquivos`)
};

const ko_wb_cat_files = /** @type {(inputs: Wb_Cat_FilesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`파일`)
};

const fr_wb_cat_files = /** @type {(inputs: Wb_Cat_FilesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fichiers`)
};

/**
* | output |
* | --- |
* | "Files" |
*
* @param {Wb_Cat_FilesInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_cat_files = /** @type {((inputs?: Wb_Cat_FilesInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Cat_FilesInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_cat_files(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_cat_files(inputs)
	if (locale === "es") return es_wb_cat_files(inputs)
	if (locale === "ja") return ja_wb_cat_files(inputs)
	if (locale === "hi") return hi_wb_cat_files(inputs)
	if (locale === "pt-BR") return pt_br2_wb_cat_files(inputs)
	if (locale === "ko") return ko_wb_cat_files(inputs)
	return fr_wb_cat_files(inputs)
});