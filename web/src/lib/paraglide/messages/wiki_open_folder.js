/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wiki_Open_FolderInputs */

const en_wiki_open_folder = /** @type {(inputs: Wiki_Open_FolderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Open Folder`)
};

const zh_cn2_wiki_open_folder = /** @type {(inputs: Wiki_Open_FolderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`打开文件夹`)
};

const es_wiki_open_folder = /** @type {(inputs: Wiki_Open_FolderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abrir carpeta`)
};

const ja_wiki_open_folder = /** @type {(inputs: Wiki_Open_FolderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`フォルダを開く`)
};

const hi_wiki_open_folder = /** @type {(inputs: Wiki_Open_FolderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`फ़ोल्डर खोलें`)
};

const pt_br2_wiki_open_folder = /** @type {(inputs: Wiki_Open_FolderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abrir pasta`)
};

const ko_wiki_open_folder = /** @type {(inputs: Wiki_Open_FolderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`폴더 열기`)
};

const fr_wiki_open_folder = /** @type {(inputs: Wiki_Open_FolderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ouvrir le dossier`)
};

/**
* | output |
* | --- |
* | "Open Folder" |
*
* @param {Wiki_Open_FolderInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wiki_open_folder = /** @type {((inputs?: Wiki_Open_FolderInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wiki_Open_FolderInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wiki_open_folder(inputs)
	if (locale === "zh-CN") return zh_cn2_wiki_open_folder(inputs)
	if (locale === "es") return es_wiki_open_folder(inputs)
	if (locale === "ja") return ja_wiki_open_folder(inputs)
	if (locale === "hi") return hi_wiki_open_folder(inputs)
	if (locale === "pt-BR") return pt_br2_wiki_open_folder(inputs)
	if (locale === "ko") return ko_wiki_open_folder(inputs)
	return fr_wiki_open_folder(inputs)
});