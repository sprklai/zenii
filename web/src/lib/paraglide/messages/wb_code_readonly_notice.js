/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Wb_Code_Readonly_NoticeInputs */

const en_wb_code_readonly_notice = /** @type {(inputs: Wb_Code_Readonly_NoticeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Read-only. Edit nodes in the visual builder.`)
};

const zh_cn2_wb_code_readonly_notice = /** @type {(inputs: Wb_Code_Readonly_NoticeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`只读。请在可视化构建器中编辑节点。`)
};

const es_wb_code_readonly_notice = /** @type {(inputs: Wb_Code_Readonly_NoticeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Solo lectura. Edita los nodos en el constructor visual.`)
};

const ja_wb_code_readonly_notice = /** @type {(inputs: Wb_Code_Readonly_NoticeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`読み取り専用。ビジュアルビルダーでノードを編集してください。`)
};

const hi_wb_code_readonly_notice = /** @type {(inputs: Wb_Code_Readonly_NoticeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`केवल पढ़ने योग्य। विज़ुअल बिल्डर में नोड्स संपादित करें।`)
};

const pt_br2_wb_code_readonly_notice = /** @type {(inputs: Wb_Code_Readonly_NoticeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Somente leitura. Edite os nós no construtor visual.`)
};

const ko_wb_code_readonly_notice = /** @type {(inputs: Wb_Code_Readonly_NoticeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`읽기 전용. 비주얼 빌더에서 노드를 편집하세요.`)
};

const fr_wb_code_readonly_notice = /** @type {(inputs: Wb_Code_Readonly_NoticeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lecture seule. Modifiez les nœuds dans le générateur visuel.`)
};

/**
* | output |
* | --- |
* | "Read-only. Edit nodes in the visual builder." |
*
* @param {Wb_Code_Readonly_NoticeInputs} inputs
* @param {{ locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }} options
* @returns {LocalizedString}
*/
export const wb_code_readonly_notice = /** @type {((inputs?: Wb_Code_Readonly_NoticeInputs, options?: { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Wb_Code_Readonly_NoticeInputs, { locale?: "en" | "zh-CN" | "es" | "ja" | "hi" | "pt-BR" | "ko" | "fr" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "en") return en_wb_code_readonly_notice(inputs)
	if (locale === "zh-CN") return zh_cn2_wb_code_readonly_notice(inputs)
	if (locale === "es") return es_wb_code_readonly_notice(inputs)
	if (locale === "ja") return ja_wb_code_readonly_notice(inputs)
	if (locale === "hi") return hi_wb_code_readonly_notice(inputs)
	if (locale === "pt-BR") return pt_br2_wb_code_readonly_notice(inputs)
	if (locale === "ko") return ko_wb_code_readonly_notice(inputs)
	return fr_wb_code_readonly_notice(inputs)
});