class SimplyCityApp extends HTMLElement {
	constructor() {
		super();
		this.initialized = false;
	}

	connectedCallback() {
		importLinks('simplycity-app', this);
	}
}

customElements.define('simplycity-app', SimplyCityApp);