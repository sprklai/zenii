/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wiki_Tab_EntitiesInputs */

const en_wiki_tab_entities = /** @type {(inputs: Wiki_Tab_EntitiesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Entities`)
};

const zh_cn2_wiki_tab_entities = /** @type {(inputs: Wiki_Tab_EntitiesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`实体`)
};

const es_wiki_tab_entities = /** @type {(inputs: Wiki_Tab_EntitiesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Entidades`)
};

const ja_wiki_tab_entities = /** @type {(inputs: Wiki_Tab_EntitiesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`エンティティ`)
};

const hi_wiki_tab_entities = /** @type {(inputs: Wiki_Tab_EntitiesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`इकाइयाँ`)
};

const pt_br2_wiki_tab_entities = /** @type {(inputs: Wiki_Tab_EntitiesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Entidades`)
};

const ko_wiki_tab_entities = /** @type {(inputs: Wiki_Tab_EntitiesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`엔티티`)
};

const fr_wiki_tab_entities = /** @type {(inputs: Wiki_Tab_EntitiesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Entités`)
};

/**
* | output |
* | --- |
* | "Entities" |
*
* @param {Wiki_Tab_EntitiesInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wiki_tab_entities = /** @type {((inputs?: Wiki_Tab_EntitiesInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wiki_Tab_EntitiesInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wiki_tab_entities(inputs)
	if (locale === "zh-CN") return zh_cn2_wiki_tab_entities(inputs)
	if (locale === "es") return es_wiki_tab_entities(inputs)
	if (locale === "ja") return ja_wiki_tab_entities(inputs)
	if (locale === "hi") return hi_wiki_tab_entities(inputs)
	if (locale === "pt-BR") return pt_br2_wiki_tab_entities(inputs)
	if (locale === "ko") return ko_wiki_tab_entities(inputs)
	return fr_wiki_tab_entities(inputs)
});