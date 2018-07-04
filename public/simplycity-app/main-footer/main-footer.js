class MainFooter extends HTMLElement {
	constructor() {
		super();
		this.initialized = false;
	}

	connectedCallback() {
		importLinks('main-footer', this);
	}
}

customElements.define('main-footer', MainFooter);