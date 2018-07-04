class MainHeader extends HTMLElement {
	constructor() {
		super();
		this.initialized = false;
	}

	connectedCallback() {
		importLinks('main-header', this);
	}
}

customElements.define('main-header', MainHeader);