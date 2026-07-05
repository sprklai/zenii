/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Loader_Icon_TitleInputs */

const en_loader_icon_title = /** @type {(inputs: Loader_Icon_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Loader`)
};

const zh_cn2_loader_icon_title = /** @type {(inputs: Loader_Icon_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`加载中`)
};

const es_loader_icon_title = /** @type {(inputs: Loader_Icon_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cargando`)
};

const ja_loader_icon_title = /** @type {(inputs: Loader_Icon_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`読み込み中`)
};

const hi_loader_icon_title = /** @type {(inputs: Loader_Icon_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`लोड हो रहा है`)
};

const pt_br2_loader_icon_title = /** @type {(inputs: Loader_Icon_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Carregando`)
};

const ko_loader_icon_title = /** @type {(inputs: Loader_Icon_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`로딩`)
};

const fr_loader_icon_title = /** @type {(inputs: Loader_Icon_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chargement`)
};

/**
* | output |
* | --- |
* | "Loader" |
*
* @param {Loader_Icon_TitleInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const loader_icon_title = /** @type {((inputs?: Loader_Icon_TitleInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Loader_Icon_TitleInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_loader_icon_title(inputs)
	if (locale === "zh-CN") return zh_cn2_loader_icon_title(inputs)
	if (locale === "es") return es_loader_icon_title(inputs)
	if (locale === "ja") return ja_loader_icon_title(inputs)
	if (locale === "hi") return hi_loader_icon_title(inputs)
	if (locale === "pt-BR") return pt_br2_loader_icon_title(inputs)
	if (locale === "ko") return ko_loader_icon_title(inputs)
	return fr_loader_icon_title(inputs)
});