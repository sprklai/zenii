/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Config_No_SelectionInputs */

const en_wb_config_no_selection = /** @type {(inputs: Wb_Config_No_SelectionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Select a node to configure`)
};

const zh_cn2_wb_config_no_selection = /** @type {(inputs: Wb_Config_No_SelectionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`选择一个节点以进行配置`)
};

const es_wb_config_no_selection = /** @type {(inputs: Wb_Config_No_SelectionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Selecciona un nodo para configurar`)
};

const ja_wb_config_no_selection = /** @type {(inputs: Wb_Config_No_SelectionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ノードを選択して設定してください`)
};

const hi_wb_config_no_selection = /** @type {(inputs: Wb_Config_No_SelectionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`कॉन्फ़िगर करने के लिए एक नोड चुनें`)
};

const pt_br2_wb_config_no_selection = /** @type {(inputs: Wb_Config_No_SelectionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Selecione um nó para configurar`)
};

const ko_wb_config_no_selection = /** @type {(inputs: Wb_Config_No_SelectionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`구성할 노드를 선택하세요`)
};

const fr_wb_config_no_selection = /** @type {(inputs: Wb_Config_No_SelectionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sélectionner un nœud à configurer`)
};

/**
* | output |
* | --- |
* | "Select a node to configure" |
*
* @param {Wb_Config_No_SelectionInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_config_no_selection = /** @type {((inputs?: Wb_Config_No_SelectionInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Config_No_SelectionInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_config_no_selection(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_config_no_selection(inputs)
	if (locale === "es") return es_wb_config_no_selection(inputs)
	if (locale === "ja") return ja_wb_config_no_selection(inputs)
	if (locale === "hi") return hi_wb_config_no_selection(inputs)
	if (locale === "pt-BR") return pt_br2_wb_config_no_selection(inputs)
	if (locale === "ko") return ko_wb_config_no_selection(inputs)
	return fr_wb_config_no_selection(inputs)
});