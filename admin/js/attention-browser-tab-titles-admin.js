jQuery(document).ready(function($) {

	 function AbttToggleFields() {
		var isEnabled = $('#abtt-settings-page #abtt_enable_feature').is(':checked');
		if (isEnabled) {
			$('#abtt-settings-page .dependent-fields').removeClass('hide-only-field');
		} else {
			$('#abtt-settings-page .dependent-fields').addClass('hide-only-field');
		}
	}

	// Run the function on page load and whenever the checkbox changes
	AbttToggleFields();

	$('#abtt-settings-page #abtt_enable_feature').on('change', function() {
		AbttToggleFields();
	});

	$('#abtt-settings-page #add-title-text').on('click', function() {
		$('#title-texts-container').append('<div class="title-text-field"><input type="text" name="abtt_title_texts[]" value="" /><button type="button" class="button remove-title-text">Remove</button></div>');
	});

	$(document).on('click', '#abtt-settings-page .remove-title-text', function() {
		$(this).parent().remove();
	});
});