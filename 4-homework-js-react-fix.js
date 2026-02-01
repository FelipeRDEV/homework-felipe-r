window.CANDYRACK_VARIANT_SELECTOR_FUNCTION = function(element) {
	
	//getting the list of variants and the selected variant
    const colorSelect = document.querySelector('#SingleOptionSelector-0');
    const variantSelect = document.querySelector('#ProductSelect-product-template');

    if (colorSelect && variantSelect) {
        const selectedColor = colorSelect.value;

		//validating the selected option in the variant options list
        let selectedOption = null;
		
        for (let i = 0; i < variantSelect.options.length; i++) {
            const option = variantSelect.options[i];
            if (option.textContent.trim() === selectedColor) {
                selectedOption = option;
                break;
            }
        }

        if (selectedOption) {
			//treating the value of the variants, e.g 39297538719951-random-681748259
			const variantId = selectedOption.value.split('-')[0]; 
			
            if (variantId) {
				//return as decimal
                return parseInt(variantId, 10);
            }
        }
    }
    return undefined;
};
