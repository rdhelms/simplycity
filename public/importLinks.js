function importLinks(elementName, element) {
	if (!element.initialized) {
		const importLinks = $('link[rel="import"]').toArray();
		importLinks.forEach((importLink) => {
			const tagName = importLink.href.split('/').slice(-1)[0].split('.')[0];
			if (tagName === elementName) {
				let template;
				try {
					template = importLink.import.getElementsByTagName('template')[0];
				} catch (e) {}
				if (template) {
					addTemplates(template, element);
				} else {
					addTemplateWithDelay(importLink, element);
				}
			}
		});
	}
}

function addTemplateWithDelay(importLink, element) {
	console.log("Running delay");
	setTimeout(() => {
		try {
			addTemplates(...args);
		} catch (e) {
			let template;
			try {
				template = importLink.import.getElementsByTagName('template')[0];
			} catch (e) {}
			if (template) {
				addTemplates(template, element);
			} else {
				addTemplateWithDelay(importLink, element);
			}
		}
	}, 1);
}

function addTemplates(template, element) {
	const templateContent = template.content;
	element.appendChild(templateContent.cloneNode(true));
	element.initialized = true;
}