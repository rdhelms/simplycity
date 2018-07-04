class MainBody extends HTMLElement {
	constructor() {
		super();
		this.initialized = false;
	}

	connectedCallback() {
		importLinks('main-body', this);
	}
}

customElements.define('main-body', MainBody);